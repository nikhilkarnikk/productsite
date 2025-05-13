import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      {/* Navigation */}
      <nav className="px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/rileyLogo.png" alt="Riley" className="h-10 w-auto" />
            <span className="ml-2 text-2xl font-bold">Riley</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-800 hover:text-gray-600">Products</Link>
            <Link to="/features" className="text-gray-800 hover:text-gray-600">Features</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link to="/docs" className="text-gray-800 hover:text-gray-600">Docs</Link>
            <Link to="/pricing" className="text-gray-800 hover:text-gray-600">Pricing</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-800 hover:text-gray-600">
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 text-white rounded-full bg-black hover:bg-gray-800">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Orbs */}
      <div className="relative overflow-hidden">
        {/* Background Orbs - bottom layer (z-0) */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Orange Orb */}
          <div className="orb-1 absolute left-[0%] top-[15%] w-[600px] h-[600px] rounded-full bg-[#FF9900] opacity-95 blur-3xl"></div>
          {/* Light Red Orb */}
          <div className="orb-3 absolute right-[0%] top-[15%] w-[600px] h-[600px] rounded-full bg-[#FF6666] opacity-95 blur-3xl"></div>
          {/* Yellow-Orange Orb - now on top of other orbs */}
          <div className="orb-2 absolute left-[30%] top-[25%] w-[700px] h-[700px] rounded-full bg-[#FFCC00] opacity-95 blur-3xl"></div>
        </div>
        
        {/* Distortion Overlay - middle layer (z-10) */}
        <div className="absolute inset-0 bg-[#F5F2EA] opacity-20 mix-blend-overlay backdrop-blur-[200px] z-10"></div>

        {/* Content - top layer (z-20) */}
        <div className="relative z-20">
          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="text-center max-w-6xl mx-auto">
              <h1 className="hero-heading text-8xl font-normal mb-8 leading-[1.1]">
                Your Personal AI Assistant
                <br />
                For Every Call
              </h1>
              <p className="text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
                Riley handles all your calls when you can't answer, filters spam, makes appointments for you, and acts on your behalf when you're busy.
              </p>
              <div className="flex justify-center space-x-4 mb-12">
                <button className="px-8 py-4 text-white rounded-full bg-black hover:bg-gray-800 text-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 text-gray-800 rounded-full bg-white hover:bg-gray-100 text-lg">
                  See Demo
                </button>
              </div>

              {/* Partner Logos Section - COMMENTED OUT
              <div className="mb-20">
                <div className="logo-scroll-container">
                  <div className="logo-scroll">
                    <div className="flex items-center">
                      <img src="/images/24hourfitness.png" alt="24 Hour Fitness" className="h-12" />
                      <img src="/images/hellbentlogo.png" alt="Hellbent" className="h-12 ml-20" />
                      <img src="/images/tacobell.png" alt="Taco Bell" className="h-12 ml-20" />
                      <img src="/images/theroomapp.png" alt="The Room" className="h-12 ml-20" />
                      <img src="/images/eosfitness.png" alt="EOS Fitness" className="h-12 ml-20" />
                      <img src="/images/supabase.png" alt="Supabase" className="h-12 ml-20" />
                      <img src="/images/stationcraftlogo.png" alt="StationCraft" className="h-12 ml-20" />
                      <img src="/images/omghospitality.png" alt="OMG Hospitality" className="h-12 ml-20" />
                      <img src="/images/rumarilogo.png" alt="Rumari" className="h-12 ml-20" />
                    </div>
                    <div className="flex items-center">
                      <img src="/images/24hourfitness.png" alt="24 Hour Fitness" className="h-12" />
                      <img src="/images/hellbentlogo.png" alt="Hellbent" className="h-12 ml-20" />
                      <img src="/images/tacobell.png" alt="Taco Bell" className="h-12 ml-20" />
                      <img src="/images/theroomapp.png" alt="The Room" className="h-12 ml-20" />
                      <img src="/images/eosfitness.png" alt="EOS Fitness" className="h-12 ml-20" />
                      <img src="/images/supabase.png" alt="Supabase" className="h-12 ml-20" />
                      <img src="/images/stationcraftlogo.png" alt="StationCraft" className="h-12 ml-20" />
                      <img src="/images/omghospitality.png" alt="OMG Hospitality" className="h-12 ml-20" />
                      <img src="/images/rumarilogo.png" alt="Rumari" className="h-12 ml-20" />
                    </div>
                  </div>
                </div>
              </div>
              */}
            </div>

            {/* Three Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Call Screening Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2">Call Screening</h3>
                <p className="text-gray-600 mb-8">
                  Automatically filters spam, scams, and telemarketers while routing important and personal calls directly to you
                </p>
                <div className="space-y-4 flex-grow flex flex-col">
                  <div className="flex-grow flex justify-center items-center">
                    <img src="/images/tab1.png" alt="Call Screening" className="w-full object-cover rounded-lg shadow-sm" />
                  </div>
                  <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div className="ml-3 flex-1">
                      <p className="font-medium">Unknown Caller</p>
                      <p className="text-gray-500 text-sm">Filtered Out</p>
                    </div>
                    <span className="font-medium">Telemarketer</span>
                  </div>
                </div>
              </div>

              {/* Task Handling Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2">Task Handling</h3>
                <p className="text-gray-600 mb-8">
                  Handles tedious call systems, endures long hold times, and completes appointment scheduling and reservations so you never have to pick up the phone
                </p>
                <div className="space-y-4 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                        <div className="ml-3">
                          <p className="font-medium">DMV Registration</p>
                          <p className="text-gray-500">In Progress</p>
                        </div>
                        <span className="ml-auto font-medium">9:30 AM</span>
                      </div>
                      <div className="space-y-4">
                        <p className="font-medium">Reservation Confirmed</p>
                        <div className="w-full p-3 rounded-lg bg-white/80">
                          Italian Restaurant - Friday, 7:30 PM
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-lg bg-white/80">Added to Calendar</div>
                          <div className="p-3 rounded-lg bg-white/80">Reminder Set</div>
                        </div>
                        <button className="w-full p-3 bg-black/80 rounded-lg text-white">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Voice Commands Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2">Voice Commands</h3>
                <p className="text-gray-600 mb-8">
                  Simply speak to Riley to schedule calls, set reminders, or handle tedious phone tasks
                </p>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex-grow relative rounded-xl overflow-hidden flex flex-col items-center justify-center">
                    {/* Bowling pin style orb arrangement - bigger with more overlap */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-72 h-72">
                        {/* Top Orb (Orange) */}
                        <div className="absolute left-[50%] top-[35%] transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-[#FF9900] opacity-70 blur-xl"></div>
                        
                        {/* Bottom Left Orb (Red) */}
                        <div className="absolute left-[38%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full bg-[#FF6666] opacity-70 blur-xl"></div>
                        
                        {/* Bottom Right Orb (Yellow) */}
                        <div className="absolute left-[62%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full bg-[#FFCC00] opacity-70 blur-xl"></div>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-8">
                      {/* Simple microphone icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-gray-900">
                        <path fillRule="evenodd" d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5zm1.5 0a2.25 2.25 0 114.5 0v8.25a2.25 2.25 0 11-4.5 0V4.5z" clipRule="evenodd" />
                        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                      </svg>
                      
                      {/* Sample command text */}
                      <div className="text-center text-sm text-gray-700 max-w-xs italic">
                        "Hey Riley, schedule a follow up visit with my dentist in 6 months and find and book a dinner reservation for my wife and I this Friday - preferably Italian"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Powerful taglines - similar to example site */}
            <div className="text-center mb-32">
              <h2 className="text-xl font-normal text-gray-800">Reclaiming your time from tedious phone calls.</h2>
              <h2 className="text-xl font-bold text-gray-800">From busy professionals to anyone who values their peace of mind.</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Thin grey horizontal separator line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-300 w-full"></div>
      </div>

      {/* Additional Sections with Light Background */}
      <div className="bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Purpose Built Section */}
          <div className="text-center max-w-4xl mx-auto py-32">
            <h2 className="text-6xl font-normal mb-6">
              The AI Secretary
              <br />
              For Everyone
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              From busy professionals to everyday people who hate dealing with phone calls.
            </p>
            <p className="text-xl text-gray-700">
              Riley helps you reclaim your time, avoid frustrating wait times,
              <br />
              and never miss important communications.
            </p>
          </div>

          {/* Complete Solution Section */}
          <div className="mb-32">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold mb-4">Your Personal Call Agent</h2>
              <p className="text-xl text-gray-700">
                Riley's AI-powered platform handles those annoying phone calls you hate making – whether it's calling credit card companies, scheduling appointments, or dealing with the DMV.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-white rounded-3xl p-8 shadow-sm">
                <img src="/images/dashboard.png" alt="Dashboard" className="w-full" />
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">Multi-Task Commands</h3>
                  <p className="text-gray-600 mb-8">
                    Give Riley multiple instructions in one go, and let your secretary handle everything for you.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <img src="/images/airbnb.svg" alt="DMV" className="h-8 w-8 mr-3" />
                        <div>
                          <p className="font-medium">License Renewal</p>
                          <p className="text-gray-500 text-sm">Completed</p>
                        </div>
                      </div>
                      <span className="font-medium">9:30 AM</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2">
                        <span>Call Tasks</span>
                        <span className="font-medium">4/5 Complete</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Reservations Made</span>
                        <span className="font-medium">3 This Week</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Unwanted Calls Blocked</span>
                        <span className="font-medium">12 Today</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Priority Tasks</span>
                        <span className="font-medium">2 Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">Morning Briefing</h3>
                  <p className="text-gray-600">
                    One command to start your day: "Call my client, set up dinner at 7, check my credit card statement, and call Mom at noon."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-4 gap-8 mb-32">
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 21H5C3.89543 21 3 20.1046 3 19V15M21 9V5C21 3.89543 20.1046 3 19 3H15M21 15V19C21 20.1046 20.1046 21 19 21H15" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile & Desktop Apps</h3>
              <p className="text-gray-600">
                Access Riley from any device with our seamless cross-platform experience.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Forwarding</h3>
              <p className="text-gray-600">
                Seamlessly route calls to Riley when you're busy or to you when it's important.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Widget</h3>
              <p className="text-gray-600">
                Quick access to Riley with a simple swipe on your phone screen.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Learning</h3>
              <p className="text-gray-600">
                Riley learns your preferences and adapts to your specific needs over time.
              </p>
            </div>
          </div>

          {/* Modern Stack Section */}
          <div className="bg-black text-white rounded-3xl p-16 mb-32">
            <h2 className="text-5xl font-normal mb-6">
              Reclaim Your Time
              <br />
              With Riley
            </h2>
            <p className="text-xl text-gray-400 mb-16">
              Let Riley handle those time-consuming phone calls
              <br />
              while you focus on what really matters.
            </p>

            <div className="flex justify-between gap-8">
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100">
                Join Waitlist
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                See How It Works
              </button>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-4 gap-12 mt-20">
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Conversations</h3>
                <p className="text-gray-400">
                  Riley sounds human and handles complex conversations with ease.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Notifications</h3>
                <p className="text-gray-400">
                  Set alerts for important updates and completed tasks on your terms.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Simple Setup</h3>
                <p className="text-gray-400">
                  Get started in minutes with our easy onboarding process.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-gray-400">
                  Your calls and data are protected with enterprise-grade security.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="grid grid-cols-3 gap-8 mb-32">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                "Riley has been a game-changer for me. It handles all those annoying calls I used to dread making. Now I just tell Riley what I need and it gets done while I focus on more important things."
              </p>
              <div className="flex items-center">
                <img src="/images/maurice.jpg" alt="Alex Johnson" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Alex Johnson</p>
                  <p className="text-gray-600">Marketing Director</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                "I used to waste hours on hold with various companies. Riley has given me those hours back. My favorite feature is setting up multiple tasks at once and having them all handled automatically."
              </p>
              <div className="flex items-center">
                <img src="/images/trista.jpg" alt="Sarah Chen" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-gray-600">Small Business Owner</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                "As someone who hates making phone calls, Riley is the perfect solution. It makes restaurant reservations, handles my DMV renewals, and even calls to check on my elderly parents when I'm busy."
              </p>
              <div className="flex items-center">
                <img src="/images/lurein.jpg" alt="Michael Torres" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Michael Torres</p>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Launch and Migrate Section */}
          <div className="grid grid-cols-2 gap-8 mb-32">
            <div className="bg-gradient-to-br from-yellow-300 to-green-300 rounded-3xl p-16">
              <h3 className="text-5xl mb-6">Get Early Access</h3>
              <p className="text-xl mb-8">
                Be among the first to try Riley and save hours every week.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Join Waitlist
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-300 to-cyan-300 rounded-3xl p-16">
              <h3 className="text-5xl mb-6">For Businesses</h3>
              <p className="text-xl mb-8">
                Team solution coming soon. Multiply productivity across your organization.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-5 gap-8 mb-16">
            <div>
              <img src="/images/logo-white.svg" alt="Riley" className="h-8 mb-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mobile App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Desktop App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400">
            © 2024 Riley AI
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero; 