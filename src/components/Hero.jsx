/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto text-white text-sm p-2 flex justify-end space-x-3">
        <div className="">
          {/* TODO:tambah icon */}
          <p>+6285231198475</p>
        </div>
        <div className="">
          <p>paddingtonvillage@gmail.com</p>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <a href="#Header">
          <img src={assets.logo} alt="" />
        </a>
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Product
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <a href="#Contact">
          <button className="hidden md:block bg-white px-8 py-2 rounded-full">
            Sign Up
          </button>
        </a>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/*--mobile-menu--*/}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium ">
          <a
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block "
            onClick={() => setShowMobileMenu(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
