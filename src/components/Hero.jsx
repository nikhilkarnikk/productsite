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
            <img src="/images/logo.svg" alt="DeltaMetrics" className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">DeltaMetrics</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-800 hover:text-gray-600">Products</Link>
            <Link to="/solutions" className="text-gray-800 hover:text-gray-600">Solutions</Link>
            <Link to="/company" className="text-gray-800 hover:text-gray-600">Company</Link>
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
        {/* Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Yellow Orb */}
          <div className="orb-1 absolute left-[-10%] top-[15%] w-[800px] h-[800px] rounded-full bg-[#FFF200] opacity-95 blur-3xl"></div>
          {/* Turquoise-Green Orb */}
          <div className="orb-2 absolute left-[20%] top-[35%] w-[900px] h-[900px] rounded-full bg-[#00FF66] opacity-95 blur-3xl"></div>
          {/* Light Blue Orb */}
          <div className="orb-3 absolute right-[-10%] top-[15%] w-[800px] h-[800px] rounded-full bg-[#00FFFF] opacity-95 blur-3xl"></div>
          {/* Distortion Overlay */}
          <div className="absolute inset-0 bg-[#F5F2EA] opacity-20 mix-blend-overlay backdrop-blur-[120px]"></div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-6 pt-20">
            <div className="text-center max-w-6xl mx-auto">
              <h1 className="hero-heading text-8xl font-normal mb-8 leading-[1.1]">
                Revolutionizing Hospitality
                <br />
                with AI Automation
              </h1>
              <p className="text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
                We automate what slows you down — from AI-driven systems to custom software that elevates your operations and amplifies your brand identity.
              </p>
              <div className="flex justify-center space-x-4 mb-12">
                <button className="px-8 py-4 text-white rounded-full bg-black hover:bg-gray-800 text-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 text-gray-800 rounded-full bg-white hover:bg-gray-100 text-lg">
                  Contact Sales
                </button>
              </div>

              {/* Partner Logos Section */}
              <div className="mb-20">
                <div className="logo-scroll-container">
                  <div className="logo-scroll">
                    {/* First set of logos */}
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
                    {/* Duplicate set of logos for seamless scrolling */}
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
            </div>

            {/* Three Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-32">
              {/* Issuing Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-2">Restaurants & Hotels</h3>
                <p className="text-gray-600 mb-8">
                  Voice ordering, reservations, inventory & guest experience tools
                </p>
                <div className="space-y-4">
                  <img src="/images/card.png" alt="Credit Card" className="w-full" />
                  <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div className="ml-3 flex-1">
                      <p className="font-medium">Shell Gas Station</p>
                      <p className="text-gray-500 text-sm">Authorizing...</p>
                    </div>
                    <span className="font-medium">$100.00</span>
                  </div>
                </div>
              </div>

              {/* Acquiring Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-2">Music & Entertainment</h3>
                <p className="text-gray-600 mb-8">
                  Artist apps, booking AI, label dashboards
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                      <div className="ml-3">
                        <p className="font-medium">Wood Chair</p>
                        <p className="text-gray-500">Birch</p>
                      </div>
                      <span className="ml-auto font-medium">$400.00</span>
                    </div>
                    <div className="space-y-4">
                      <p className="font-medium">Card Information</p>
                      <input type="text" placeholder="Number" className="w-full p-3 rounded-lg bg-white/80" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM / YY" className="p-3 rounded-lg bg-white/80" />
                        <input type="text" placeholder="CVV" className="p-3 rounded-lg bg-white/80" />
                      </div>
                      <button className="w-full p-3 bg-gray-100/80 rounded-lg text-gray-400">
                        Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unified Payments Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-2">Wellness & Clubs</h3>
                <p className="text-gray-600">
                  Scheduling agents, member apps, performance tracking
                </p>
                <div className="mt-8">
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-xl opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections with Light Background */}
      <div className="bg-[#F5F2EA]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Purpose Built Section */}
          <div className="text-center max-w-4xl mx-auto py-32">
            <h2 className="text-6xl font-normal mb-6">
              A Purpose Built
              <br />
              Payments Platform
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Built for innovators seeking a better payments solution.
            </p>
            <p className="text-xl text-gray-700">
              Highnote helps reduce costs, drive revenue, and optimize
              <br />
              your business for success.
            </p>
          </div>

          {/* Complete Payment Solution Section */}
          <div className="mb-32">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold mb-4">Complete Payment Solution</h2>
              <p className="text-xl text-gray-700">
                Highnote's fully integrated platform is built to handle your payment needs seamlessly, whether you need to issue cards, accept payments, or move money more efficiently.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 bg-white rounded-3xl p-8 shadow-sm">
                <img src="/images/dashboard.png" alt="Dashboard" className="w-full" />
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">Unified Ledgers</h3>
                  <p className="text-gray-600 mb-8">
                    Our API driven ledger provides full visibility into all funds movements across your product with detailed tracking of all activity.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center">
                        <img src="/images/airbnb.svg" alt="Airbnb" className="h-8 w-8 mr-3" />
                        <div>
                          <p className="font-medium">Airbnb</p>
                          <p className="text-gray-500 text-sm">Completed</p>
                        </div>
                      </div>
                      <span className="font-medium">$820.34</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-2">
                        <span>Cash</span>
                        <span className="font-medium">$1,022,412.47</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Available Cash</span>
                        <span className="font-medium">$778,262.74</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Fund in Hold</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Authorization</span>
                        <span className="font-medium">$243,029.39</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">Rich Transaction Detail</h3>
                  <p className="text-gray-600">
                    Receive detailed transaction payloads directly from the card networks that empower you to write advanced logic around authorization approvals.
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
              <h3 className="text-xl font-semibold mb-2">Flexible Account Structures</h3>
              <p className="text-gray-600">
                Our platform was designed to work with any business type and model, supporting your unique needs.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Program Management</h3>
              <p className="text-gray-600">
                We are with you every step of the way, from implementation to ongoing program optimization.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">World-Class Dashboard</h3>
              <p className="text-gray-600">
                Streamline your operations and support your customers from Highnote's user-friendly Dashboard.
              </p>
            </div>
            <div>
              <div className="bg-gray-100 p-4 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Designed for Scale</h3>
              <p className="text-gray-600">
                Our secure platform scales with you and is trusted by developers, startups, and large corporations.
              </p>
            </div>
          </div>

          {/* Modern Stack Section */}
          <div className="bg-black text-white rounded-3xl p-16 mb-32">
            <h2 className="text-5xl font-normal mb-6">
              A Modern Stack for
              <br />
              Modern Companies
            </h2>
            <p className="text-xl text-gray-400 mb-16">
              Highnote's API enables your team to bring your payment product to
              <br />
              market faster with modern tools and comprehensive documentation.
            </p>

            <div className="flex justify-between gap-8">
              <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100">
                Start Building
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                Read Docs
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
                <h3 className="text-xl font-semibold mb-3">GraphQL API</h3>
                <p className="text-gray-400">
                  Rapidly build flexible, production-ready integrations with Highnote's GraphQL API.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Notifications & Webhooks</h3>
                <p className="text-gray-400">
                  Supercharge your customer interactions and experiences with our dynamic notification and webhook system.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy-to-Use SDKs</h3>
                <p className="text-gray-400">
                  Integrate complex flows easily by using our SDKs to stay compliant and simplify workflows.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise-Ready Security</h3>
                <p className="text-gray-400">
                  Highnote's platform offers best-in-class security and compliance practices for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="grid grid-cols-3 gap-8 mb-32">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                "Every single person we worked with was just a total rock star. In fact, without being asked, the head of our engineering team told me that the Highnote API was the best he had seen from every single vendor we dealt with."
              </p>
              <div className="flex items-center">
                <img src="/images/maurice.jpg" alt="Maurice Herary" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Maurice Herary</p>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
              <img src="/images/fluz.svg" alt="Fluz" className="h-8" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                "Highnote's infrastructure for money movement across financial accounts made it a perfect fit for this stage of our growth. We've been amazed by the flexibility with which Highnote operates."
              </p>
              <div className="flex items-center">
                <img src="/images/trista.jpg" alt="Trista Kempa" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Trista Kempa</p>
                  <p className="text-gray-600">COO</p>
                </div>
              </div>
              <img src="/images/ferry.svg" alt="Ferry" className="h-8" />
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                "Highnote's developer-friendly APIs represent a departure from legacy providers which often have bulky, complex processes and lack the ability to customize and scale at the velocity GiveCard's customers need. With Highnote as a partner, we are well-positioned to execute on our vision."
              </p>
              <div className="flex items-center">
                <img src="/images/lurein.jpg" alt="Lurein Perera" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">Lurein Perera</p>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
              <img src="/images/givecard.svg" alt="GiveCard" className="h-8" />
            </div>
          </div>

          {/* Launch and Migrate Section */}
          <div className="grid grid-cols-2 gap-8 mb-32">
            <div className="bg-gradient-to-br from-yellow-300 to-green-300 rounded-3xl p-16">
              <h3 className="text-5xl mb-6">Launch Your Program</h3>
              <p className="text-xl mb-8">
                Start from scratch? We'll help you plan, design, and build.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Launch Your Program
              </button>
            </div>
            <div className="bg-gradient-to-br from-green-300 to-cyan-300 rounded-3xl p-16">
              <h3 className="text-5xl mb-6">Upgrade Your Stack</h3>
              <p className="text-xl mb-8">
                Already have something? We'll optimize, automate, and modernize.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Upgrade Your Stack
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
              <img src="/images/logo-white.svg" alt="Highnote" className="h-8 mb-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Issuing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Acquiring</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Unified Payments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Credit</a></li>
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
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Changelog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400">
            © 2024 Highnote Platform
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero; 