import React, { useState,useEffect } from 'react';
import logo from '../assets/Vegah With R-02.png';
import '../styles/button.css'
import '../styles/navLink.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    {/* Original Navbar */}
    <nav
      className="z-[50] [opacity-100] absolute top-0 left-0 w-full bg-transparent shadow-[0_1px_0_0_rgba(211,211,211,0.5)]"
    >
      <div className="max-w-auto mx-auto px-40">
        <div className="flex items-center justify-between h-[120px]">
          <div className="flex-shrink-0">
            <img src={logo} className="h-[60px] logo" alt="Logo" />
          </div>

          {/* Center NavLinks */}
          <div className="hidden md:flex items-center justify-center flex-1 z-20">
            <div className="flex space-x-6">
              <a
                href="#home"
                className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}
              >
                Home
              </a>
              <a
                href="#course"
                className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}
              >
                Course
              </a>
              <a
                href="#testimonial"
                className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}
              >
                Testimonial
              </a>
              <a
                href="#FAQ"
                className={`nav-button text-white rounded-[10px] px-3 py-2 text-xl font-bold`}
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center z-20">
            <button className="button font-bold text-xl">Contact Us</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#024B6A] hover:bg-[#88D2F2] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
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

    {/* New Navbar with Slide-in Animation */}
    <nav
      className={`z-[60] ${
        scrolled
          ? 'translate-y-0' // Slide new navbar in when scrolled
          : '-translate-y-full' // Slide new navbar up when not scrolled
      } fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out`}
    >
      <div className="max-w-auto mx-auto px-40">
        <div className="flex items-center justify-between h-[100px]">
          <div className="flex-shrink-0">
            <img src={logo} className="h-[40px]" alt="New Logo" />
          </div>

          {/* Center NavLinks */}
          <div className="hidden md:flex items-center justify-center flex-1 z-20">
            <div className="flex space-x-6">
              <a
                href="#home"
                className=" hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold"
              >
                Home
              </a>
              <a
                href="#course"
                className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold"
              >
                Course
              </a>
              <a
                href="#testimonial"
                className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold"
              >
                Testimonial
              </a>
              <a
                href="#FAQ"
                className="hover:text-[#1377bb] text-black rounded-[10px] px-3 py-2 text-lg font-semibold"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center z-20">
            <button className="button font-bold text-lg">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  </>
);
};

export default Navbar;
