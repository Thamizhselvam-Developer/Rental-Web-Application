import React, { useState } from "react";
import logo from "../assets/Navbar/logo.png";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between md:justify-around md:items-center text-black py-4 px-6 bg-white shadow-lg    font-main">
        
        {/* Logo and Brand Name */}
        <div className="flex items-center cursor-pointer hover:scale-105 transition-all">
          <div className="mr-3">
            <img src={logo} width="25px" alt="Logo" />
          </div>
          <div className="text-black text-2xl">Rentals</div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:gap-10 text-black text-xl">
          <li><a href="#" className="hover:border-b-2 hover:border-primary">Home</a></li>
         
          <li><a href="#" className="hover:border-b-2 hover:border-primary">Services</a></li>
          <li><a href="#" className="hover:border-b-2 hover:border-primary">About Us</a></li>
          <li><a href="#" className="hover:border-b-2 hover:border-primary">Contact Us</a></li>
        </ul>

        {/* Desktop Search and Login */}
        <div className="hidden md:flex md:justify-center md:items-center">
          

        {/* <Link to="/Signup"> */}
         <button className="bg-primary text-white py-1 px-4 rounded-full hover:bg-[#f13939] shadow-lg">
            SignUp
          </button>
          {/* </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-col items-end md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bg-black h-[3px] w-4 m-[2px]"></div>
          <div className="bg-black h-[3px] w-6 m-[2px]"></div>
          <div className="bg-black h-[3px] w-4 m-[2px]"></div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`absolute md:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-2 rounded-bl-lg rounded-br-lg transform transition-transform z-50 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer "><a href="#" className="hover:border-b-2 hover:border-primary">Home</a> </li>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer "><a href="#" className="hover:border-b-2 hover:border-primary">About Us</a> </li>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer "><a href="#" className="hover:border-b-2 hover:border-primary">Services</a> </li>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer "><a href="#" className="hover:border-b-2 hover:border-primary">Contact Us</a> </li>

          <div className="relative flex justify-center items-center p-1 hover:scale-110 transition-all">
            <i className="fa-solid fa-magnifying-glass absolute left-5"></i>
            <input type="text" className="bg-gray-200 w-[40px] p-2 rounded-full m-1" />
          </div>

         {/* <Link to="/signup"> */}
         <button className="bg-primary text-white py-1 px-4 rounded-full hover:bg-[#f13939] shadow-lg">
            SignUp
          </button>
         {/* </Link>  */}
        </div>

      </nav>
    </>
  );
};

export default UserNavbar;
