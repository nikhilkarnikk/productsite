import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Products.css';

const extractRestaurantName = (filename) => {
  if (!filename) return 'our restaurant';
  // Remove extension and 'menu' if present
  let name = filename.replace(/\.[^/.]+$/, '');
  name = name.replace(/menu/i, '').replace(/_/g, ' ').replace(/-/g, ' ').trim();
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Products = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [menuFile, setMenuFile] = useState(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [conversationLog, setConversationLog] = useState([]);
  const fileInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const logEndRef = useRef(null);

  const restaurantName = extractRestaurantName(menuFile?.name);

  // Auto-scroll conversation log
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversationLog]);

  const addToLog = (speaker, text) => {
    setConversationLog(prev => [...prev, { speaker, text, timestamp: new Date() }]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setMenuFile(file);
      setError(null);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setMenuFile(file);
      setError(null);
    }
  };

  const startCall = async () => {
    if (!menuFile) return;
    setError(null);
    setConversationLog([]); // Clear previous conversation
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          sampleSize: 16,
          echoCancellation: true,
          noiseSuppression: true
        } 
      });
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
        audioBitsPerSecond: 128000
      });
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        if (audioChunksRef.current.length === 0) {
          console.error('No audio data recorded');
          setError('No audio was recorded. Please try speaking again.');
          return;
        }

        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        if (audioBlob.size === 0) {
          console.error('Empty audio blob created');
          setError('Failed to create audio recording. Please try again.');
          return;
        }

        try {
          await sendAudioToAI(audioBlob);
        } catch (error) {
          console.error('Error in sendAudioToAI:', error);
          setError('Failed to process audio. Please try speaking again.');
        }
      };

      setIsCallActive(true);
      setIsRecording(true);
      mediaRecorder.start(1000);
      
      // Play initial greeting
      const greeting = `Hi, this is ${restaurantName}. What would you like to order?`;
      addToLog('AI', greeting);
      await playTextToSpeech(greeting);
    } catch (error) {
      console.error('Error starting recording:', error);
      setError('Failed to access microphone. Please ensure microphone permissions are granted.');
      stopCall();
    }
  };

  const playGreeting = async () => {
    const greeting = `Hi, this is ${restaurantName}. What would you like to order?`;
    await playTextToSpeech(greeting);
  };

  const playTextToSpeech = async (text) => {
    try {
      const speechResponse = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: 'alloy'
        })
      });

      if (!speechResponse.ok) {
        throw new Error(`Speech synthesis failed: ${speechResponse.status}`);
      }

      const audioBlob = await speechResponse.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      await audio.play();
    } catch (error) {
      console.error('Error playing TTS:', error);
      setError('Failed to play audio response. Please check your internet connection.');
    }
  };

  const sendAudioToAI = async (blob) => {
    try {
      // First, check if we have a valid blob
      if (!(blob instanceof Blob) || blob.size === 0) {
        throw new Error('Invalid audio data');
      }

      const formData = new FormData();
      formData.append('file', blob, 'audio.webm');
      formData.append('model', 'whisper-1');
      formData.append('language', 'en');
      
      const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Transcription API error:', errorData);
        throw new Error(`Transcription failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.text) {
        throw new Error('No transcription text received');
      }

      const userText = data.text.trim();
      if (userText) {
        addToLog('You', userText);

        // Send transcribed text to GPT-4 for response
        const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-4',
            messages: [
              {
                role: 'system',
                content: `You are an AI phone agent for ${restaurantName}. Take orders and provide a clear receipt format with prices. Format orders as: "Item - $XX.XX" for easy parsing.`
              },
              {
                role: 'user',
                content: userText
              }
            ]
          })
        });

        if (!chatResponse.ok) {
          throw new Error(`Chat completion failed: ${chatResponse.status}`);
        }

        const chatData = await chatResponse.json();
        const aiResponse = chatData.choices[0].message.content;
        addToLog('AI', aiResponse);

        // Extract order items and update receipt
        extractOrderFromResponse(aiResponse);
        
        // Play AI response
        await playTextToSpeech(aiResponse);
      }

      // Start recording again for continuous conversation
      if (isCallActive && mediaRecorderRef.current) {
        audioChunksRef.current = []; // Clear previous chunks
        mediaRecorderRef.current.start(1000);
        setIsRecording(true);
      }
    } catch (error) {
      console.error('Error processing audio:', error);
      setError(`Failed to process audio: ${error.message}`);
      if (isCallActive && mediaRecorderRef.current) {
        audioChunksRef.current = []; // Clear previous chunks
        mediaRecorderRef.current.start(1000);
        setIsRecording(true);
      }
    }
  };

  const extractOrderFromResponse = (response) => {
    const lines = response.split('\n');
    const items = [];
    let newTotal = 0;

    lines.forEach(line => {
      const match = line.match(/(.+?)\s*-\s*\$(\d+\.?\d*)/);
      if (match) {
        const [, name, price] = match;
        const priceFloat = parseFloat(price);
        items.push({ name: name.trim(), price: priceFloat });
        newTotal += priceFloat;
      }
    });

    if (items.length > 0) {
      setOrder(prev => [...prev, ...items]);
      setTotal(prev => prev + newTotal);
    }
  };

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  }, [isRecording]);

  const stopCall = useCallback(() => {
    stopRecording();
    setIsCallActive(false);
    setError(null);
  }, [stopRecording]);

  useEffect(() => {
    return () => {
      stopCall();
    };
  }, [stopCall]);

  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-normal mb-6">AI Phone Agent</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Upload your menu and let our AI handle customer orders in real-time. 
            Powered by GPT-4, our AI agent provides natural, human-like interactions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-8">
            <div 
              className={`border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-colors ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".pdf"
                onChange={handleFileInput}
              />
              <div className="space-y-4">
                <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-xl text-gray-600">
                  {menuFile ? menuFile.name : "Drag and drop your menu PDF here"}
                </p>
                <p className="text-sm text-gray-500">or click to browse files</p>
              </div>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            {/* Conversation Log */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Conversation Log</h3>
              <div className="h-64 overflow-y-auto mb-4 space-y-4">
                {conversationLog.map((entry, index) => (
                  <div key={index} className={`flex ${entry.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl p-4 ${
                      entry.speaker === 'You'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="font-semibold mb-1">{entry.speaker}</div>
                      <div>{entry.text}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {entry.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
            {menuFile && (
              <div className="space-y-4">
                {!isCallActive ? (
                  <button
                    onClick={startCall}
                    className="w-full py-4 px-6 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition-colors"
                  >
                    Start AI Call
                  </button>
                ) : (
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={stopCall}
                      className="py-4 px-6 bg-red-500 text-white rounded-full text-lg hover:bg-red-600 transition-colors"
                    >
                      End Call
                    </button>
                    {isRecording && (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-600">Recording...</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {order.length > 0 ? (
                <>
                  {order.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold">Total</span>
                      <span className="text-xl font-semibold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500">
                  No items ordered yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 