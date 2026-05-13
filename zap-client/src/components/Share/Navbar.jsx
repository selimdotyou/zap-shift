import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-gray-200">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <div className="flex items-center">
              <img src={LogoImg} alt="Logo" className="w-12 h-8 mr-2" />
              <span className="text-xl -ms-5 font-bold text-gray-800">ZapShift</span>
            </div>
          </NavLink>

          {/* Mobile button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            <NavLink to="/services" className={({ isActive }) =>
              `px-2.5 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`
            }>
              Services
            </NavLink>
            <NavLink to="/coverage" className={({ isActive }) =>
              `px-2.5 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`
            }>
              Coverage
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              `px-2.5 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`
            }>
              About Us
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) =>
              `px-2.5 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`
            }>
              Pricing
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) =>
              `px-2.5 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`
            }>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              `px-2.5 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`
            }>
              Contact
            </NavLink>
          </div>

          {/* Search */}
          <div className="relative mt-4 md:mt-0">
            <Link to="/login" className="px-4 py-2 text-sm text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white">
              Login
            </Link>
            <Link to="/register" className="ml-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}