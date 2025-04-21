import React from 'react';

const ProductChangelog = () => {
  return (
    <div className="bg-bone antialiased">
      {/* Announcement Banner */}
      <a 
        href="/highnote-appointed-by-bny-to-modernize-b2b-payments-with-next-generation-virtual-card-integration" 
        className="bg-ash hover:bg-clay group relative z-20 block w-full p-3 text-center text-xs font-medium duration-200"
      >
        <div className="relative mx-auto flex max-w-screen-xl items-center justify-center px-5">
          <p>Announcing our Partnership with BNY to Modernize B2B Payments.</p>
          <img 
            alt="" 
            className="ml-1 h-4 duration-200 group-hover:ml-2" 
            src="/images/img-black-arrow-icon.svg"
          />
        </div>
      </a>

      {/* Navigation */}
      <nav className="z-20 relative w-full transparent">
        <div className="px-5">
          <div className="relative mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between py-4">
              <div className="text-reset mr-6 flex items-center">
                <div className="mr-5">
                  <a href="/">
                    <span className="sr-only">Highnote</span>
                    <img 
                      alt="Highnote" 
                      loading="lazy" 
                      width="153" 
                      height="40" 
                      className="" 
                      src="/images/img-highnote.svg"
                    />
                  </a>
                </div>
                {/* Navigation items */}
                <nav className="nav hidden items-center lg:flex">
                  {/* Products dropdown */}
                  <div className="hover:bg-ash whitespace-nowrap rounded-highnote group relative mx-0.5 block cursor-pointer px-3 py-2.5 text-xs">
                    <div>Products</div>
                    <div className="transparent absolute h-5 w-full"></div>
                    <div className="invisible absolute -ml-1 mt-4 w-64 -translate-x-2 -translate-y-2 rounded-xl bg-white px-1 py-1 opacity-0 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] duration-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <a className="hover:bg-bone flex items-center space-x-2 rounded-lg px-2 py-1.5" href="/issuing">
                        <div>
                          <div className="pb-0.5 font-medium">Issuing</div>
                          <div className="text-xxs opacity-70">Issue Cards</div>
                        </div>
                      </a>
                      {/* Other product links */}
                    </div>
                  </div>
                  {/* Other navigation items */}
                </nav>
              </div>
              {/* Login/Signup buttons */}
              <div className="hidden items-center justify-end text-xs lg:flex">
                <a 
                  className="whitespace-nowrap bg-ash hover:bg-clay/60 rounded-highnote group relative ml-0.5 mr-1.5 block cursor-pointer px-4 py-2.5 text-xs duration-200" 
                  href="https://dashboard.highnote.com/auth/signin"
                >
                  Log In
                </a>
                <a 
                  className="whitespace-nowrap rounded-highnote group relative ml-0.5 mr-1.5 block cursor-pointer bg-black px-4 py-2.5 text-xs text-white duration-100 hover:bg-black hover:bg-opacity-90" 
                  href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-auto antialiased">
        <div className="list bg-bone relative overflow-hidden pb-28">
          <div className="mx-auto max-w-screen-xl">
            {/* Header */}
            <div className="mx-auto grid w-full grid-cols-1 px-4 py-8 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
              <div className="order-first col-span-1">
                <h1 className="font-display order:first mb-5 text-6xl md:mb-0 lg:text-7xl">Changelog</h1>
              </div>
              <div className="order-last md:col-span-1 md:text-right">
                <h1 className="font-display">
                  <span className="font-display group text-6xl lg:text-7xl">
                    Product
                    <span className="inline-block translate-x-0 pl-2 duration-200 ease-in-out">→</span>
                  </span>
                  <a href="/api">
                    <span className="font-display group block cursor-pointer text-6xl opacity-30 hover:opacity-50 lg:text-7xl">
                      API
                      <span className="inline-block translate-x-0 pl-2 duration-200 ease-in-out group-hover:translate-x-4">→</span>
                    </span>
                  </a>
                </h1>
              </div>
            </div>

            {/* Changelog Entries */}
            <div className="grid px-4 antialiased sm:px-6 lg:px-8">
              {/* Example changelog entry */}
              <div className="border-ash grid-cols-3 gap-10 border-t pb-6 pt-14 lg:grid">
                <div className="mb-4 text-sm lg:col-span-1 lg:mb-0">Feb 24, 2025</div>
                <div className="max-w-prose gap-10 lg:col-span-2 lg:grid">
                  <div className="col-span-2">
                    <div className="group relative flex items-center pb-3">
                      <h2 className="font-display block text-lg font-medium md:text-xl">
                        Acquiring Product Launch
                      </h2>
                    </div>
                    <div className="text-xs">
                      <p className="pb-5 text-base opacity-80">
                        You can now accept transactions with Highnote! We added the ability to create an acquiring product, accept transactions, view metrics, and more.
                      </p>
                      {/* Additional content */}
                    </div>
                  </div>
                </div>
              </div>
              {/* More changelog entries */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductChangelog; 