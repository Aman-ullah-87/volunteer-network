import { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../../assets/logos/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopMenu =<div>
    <Link to="/" className="mr-8 hover:text-indigo-500">Home</Link>
    <Link to="/donation" className="mr-8 hover:text-indigo-500">Donation</Link>
    <Link to="/event" className="mr-8 hover:text-indigo-500">Event</Link>
    <Link to="/blog" className="mr-8 hover:text-indigo-500">Blog</Link>
  </div>
    
  return (
    <header className="w-full bg-white text-gray-500 body-font mb-4 shadow-sm">

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Site logo and Name */}
        <Link to="/" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
         <img className="w-[203] h-[60px]" src={logo} alt="" />
          
        </Link>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
         {desktopMenu}
          
        </nav>
        {/* ::Avatar */}
       <div className="space-x-3">
     <Link to='/login'>  <button type="button" className="  px-4 py-2 border border-transparent bg-blue-600 text-sm text-white font-medium rounded-lg">
       Register
      </button></Link>
        <Link to='/admin/list'><button type="button" className="  px-4 py-2 border border-transparent bg-gray-600 text-sm text-white font-medium rounded-lg">
        Admin
      </button></Link>
       </div>
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
          <a to="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">Solutions</a>
          <a to="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">Prices</a>
          <a to="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">About</a>
          <a to="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">Contact</a>
        </div>
      }
    </header>
  );
};

export default Navbar;
