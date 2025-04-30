import React, { useState, useRef, useEffect } from 'react';
import '../styles/Products.css';

console.log('Environment Variables:', {
  WS_URL: import.meta.env.VITE_WS_URL,
  API_URL: import.meta.env.VITE_API_URL
});

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const POLLING_INTERVAL = 1000; // Poll every second
const WS_URL = 'ws://localhost:8000/ws';
const RECONNECT_INTERVAL = 5000;

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
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [conversationLog, setConversationLog] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const fileInputRef = useRef(null);
  const logEndRef = useRef(null);
  const pollingInterval = useRef(null);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const restaurantName = extractRestaurantName(menuFile?.name);

  // Auto-scroll conversation log
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversationLog]);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
      }
      if (sessionId) {
        endSession(sessionId);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [sessionId]);

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

  const connectWebSocket = () => {
    try {
      wsRef.current = new WebSocket(WS_URL);

      wsRef.current.onopen = () => {
        console.log('WebSocket connected');
        setError(null);
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleWebSocketMessage(data);
        } catch (err) {
          console.error('Error parsing WebSocket message:', err);
        }
      };

      wsRef.current.onclose = () => {
        console.log('WebSocket disconnected');
        reconnectTimeoutRef.current = setTimeout(() => {
          if (isCallActive) {
            connectWebSocket();
          }
        }, RECONNECT_INTERVAL);
      };

      wsRef.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        setError('Connection error. Please try again.');
      };
    } catch (err) {
      console.error('Error creating WebSocket:', err);
      setError('Failed to establish connection. Please try again.');
    }
  };

  const handleWebSocketMessage = (data) => {
    switch (data.type) {
      case 'message':
        addToLog(data.speaker, data.text);
        break;
      case 'order_update':
        setOrder(data.order);
        setTotal(data.total);
        break;
      case 'session':
        setSessionId(data.session_id);
        break;
      case 'error':
        setError(data.message);
        break;
      default:
        console.warn('Unknown message type:', data.type);
    }
  };

  const sendWebSocketMessage = (message) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    } else {
      setError('Connection lost. Reconnecting...');
      connectWebSocket();
    }
  };

  const startCall = async () => {
    try {
      connectWebSocket();
      setIsCallActive(true);
      addToLog('System', 'Call started');
      
      if (menuFile) {
        const reader = new FileReader();
        reader.onload = async () => {
          sendWebSocketMessage({
            type: 'start_session',
            menu_content: reader.result,
            filename: menuFile.name
          });
        };
        reader.readAsDataURL(menuFile);
      }
    } catch (err) {
      console.error('Error starting call:', err);
      setError('Failed to start call. Please try again.');
    }
  };

  const stopCall = async () => {
    try {
      if (wsRef.current) {
        sendWebSocketMessage({
          type: 'end_session',
          session_id: sessionId
        });
        wsRef.current.close();
      }
      setIsCallActive(false);
      setSessionId(null);
      addToLog('System', 'Call ended');
    } catch (err) {
      console.error('Error stopping call:', err);
      setError('Failed to end call properly.');
    }
  };

  const endSession = async (sid) => {
    try {
      await fetch(`${API_URL}/session/${sid}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error ending session:', error);
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    
    try {
      sendWebSocketMessage({
        type: 'message',
        text: text,
        session_id: sessionId
      });
      addToLog('User', text);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="products-container">
      <div className="menu-upload-section">
        <div 
          className={`drop-zone ${isDragging ? 'dragging' : ''} ${menuFile ? 'has-file' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept=".pdf"
            style={{ display: 'none' }}
          />
          {menuFile ? (
            <div className="file-info">
              <p>Selected menu: {menuFile.name}</p>
              <button 
                className={`call-button ${isCallActive ? 'stop' : 'start'}`}
                onClick={isCallActive ? stopCall : startCall}
              >
                {isCallActive ? 'End Call' : 'Start Call'}
              </button>
            </div>
          ) : (
            <p>Drop your menu PDF here or click to select</p>
          )}
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}

      {isCallActive && (
        <div className="conversation-section">
          <div className="conversation-log">
            {conversationLog.map((entry, index) => (
              <div key={index} className={`message ${entry.speaker.toLowerCase()}`}>
                <strong>{entry.speaker}:</strong> {entry.text}
              </div>
            ))}
            <div ref={logEndRef} />
          </div>

          <div className="message-input">
            <input
              type="text"
              placeholder="Type your message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  sendMessage(e.target.value.trim());
                  e.target.value = '';
                }
              }}
            />
          </div>

          {order.length > 0 && (
            <div className="order-summary">
              <h3>Order Summary</h3>
              <ul>
                {order.map((item, index) => (
                  <li key={index}>
                    {item.quantity}x {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="total">Total: ${total.toFixed(2)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products; 