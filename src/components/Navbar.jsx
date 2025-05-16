import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import PaddingtonLogo from "../assets/assetbawaan/paddington_logo_enam.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Properti", path: "/properties" },
    { name: "Tentang", path: "/about" },
    { name: "Kontak", path: "/contact" },
    { name: "Form", path: "/propertiesForm" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isTop
          ? "bg-transprarent shadow-none"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" >
          <img className="w-32 md:w-48" src={PaddingtonLogo} alt="paddington-logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary "
                  : "hover:text-primary transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden  bg-white shadow-md px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 border-b ${
                  isActive ? "text-primary  font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
