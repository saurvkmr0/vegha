import React from 'react'

const SideNav = ({isSideNavOpen}) => {
  return (
    <div>
      <div
        className={`fixed flex items-center h-screen inset-y-0 left-0 z-50 w-[250px] bg-gray-800 text-white transform ${
          isSideNavOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          {/* Side Nav Links */}
          <ul className="mt-8 space-y-4">
            <li>
              <a href="#home" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#testimonial" className="hover:text-gray-400">Testimonial</a>
            </li>
            <li>
              <a href="#FAQ" className="hover:text-gray-400">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideNav