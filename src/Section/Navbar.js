import React, { useState, useEffect } from 'react';
import logo from '../assets/Vegah With R-02.png';
import '../styles/button.css';
import '../styles/navLink.css';
import SideNav from '../components/SideNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false); // State for side nav

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Original Navbar (Appears on scroll) */}
      <nav
        className={`z-[60] ${
          scrolled ? 'translate-y-0' : '-translate-y-full'
        } fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="px-4 md:px-8 max-w-auto mx-auto 2xl:px-40">
          <div className="flex flex-row items-center lg:justify-between w-full justify-between py-4">
            <div className="flex-shrink-0">
              <img src={logo} className="h-[40px]" alt="New Logo" />
            </div>

            {/* Center NavLinks for Scroll Navbar */}
            <div className="hidden lg:flex items-center justify-center flex-1 z-20">
              <div className="flex space-x-6">
                <a href="#home" className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold">Home</a>

                <div className="group relative flex items-center">
                  <a href="#course" className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold">Services</a>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-6 w-[400px] top-[120px]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-black mb-2">Course Category 1</h3>
                        <ul>
                          <li><a href="#sub1" className="text-gray-700 hover:text-[#1377bb]">Sub-course 1</a></li>
                          <li><a href="#sub2" className="text-gray-700 hover:text-[#1377bb]">Sub-course 2</a></li>
                          <li><a href="#sub3" className="text-gray-700 hover:text-[#1377bb]">Sub-course 3</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">Course Category 2</h3>
                        <ul>
                          <li><a href="#sub4" className="text-gray-700 hover:text-[#1377bb]">Sub-course 4</a></li>
                          <li><a href="#sub5" className="text-gray-700 hover:text-[#1377bb]">Sub-course 5</a></li>
                          <li><a href="#sub6" className="text-gray-700 hover:text-[#1377bb]">Sub-course 6</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#testimonial" className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold">Testimonial</a>
                <a href="#FAQ" className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold">FAQ</a>
              </div>
            </div>

            {/* Sign In Button */}
            <div className="hidden lg:flex items-center z-20">
              <button className="button font-bold text-base py-4 px-8">Contact Us</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsSideNavOpen(!isSideNavOpen)} // Toggle Side Nav
                className="text-[#024B6A] hover:bg-[#88D2F2] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isSideNavOpen ? 'true' : 'false'}
              >
                <span className="sr-only">Open side menu</span>
                {/* Hamburger Icon / Close Icon based on Side Nav state */}
                {isSideNavOpen ? (
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Nav */}
      <SideNav isSideNavOpen={isSideNavOpen}/>

      {/* Static Navbar (Primary) */}
      <nav className="z-[50] [opacity-100] absolute top-0 left-0 w-full bg-transparent shadow-[0_1px_0_0_rgba(211,211,211,0.5)]">
        <div className="max-w-auto mx-auto px-0 lg:px-40">
          <div className="px-4 flex items-center justify-between h-[60px] lg:h-[120px]">
            <div className="flex-shrink-0">
              <img src={logo} className="h-[50px]  lg:h-[60px] logo" alt="Logo" />
            </div>

            {/* Center NavLinks */}
            <div className="hidden 2xl:flex items-center justify-center flex-1 z-20">
              <div className="flex space-x-6">
                <a href="#home" className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}>
                  Home
                </a>

                {/* Mega Menu Link */}
                <div className="relative group">
                  <a href="#services" className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}>
                    services
                  </a>

                  {/* Mega Menu for services */}
                  <div className="absolute hidden group-hover:block bg-white shadow-lg p-6 w-[400px] top-[120px]">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-black mb-2">Course Category 1</h3>
                        <ul>
                          <li><a href="#sub1" className="text-gray-700 hover:text-[#1377bb]">Sub-course 1</a></li>
                          <li><a href="#sub2" className="text-gray-700 hover:text-[#1377bb]">Sub-course 2</a></li>
                          <li><a href="#sub3" className="text-gray-700 hover:text-[#1377bb]">Sub-course 3</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-black mb-2">Course Category 2</h3>
                        <ul>
                          <li><a href="#sub4" className="text-gray-700 hover:text-[#1377bb]">Sub-course 4</a></li>
                          <li><a href="#sub5" className="text-gray-700 hover:text-[#1377bb]">Sub-course 5</a></li>
                          <li><a href="#sub6" className="text-gray-700 hover:text-[#1377bb]">Sub-course 6</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#testimonial" className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}>
                  Testimonial
                </a>
                <a href="#FAQ" className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}>
                  FAQ
                </a>
              </div>


            </div>

              <div className="hidden lg:flex items-center z-20">
              <button className="button font-bold text-base py-4 px-8">Contact Us</button>
            </div>

            {/* Mobile Side Nav Trigger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open side menu</span>
                {isSideNavOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
