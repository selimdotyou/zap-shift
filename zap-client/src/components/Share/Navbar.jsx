import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      {[
        "Services",
        "Coverage",
        "About",
        "Pricing",
        "Blog",
        "Be A Rider",
        "Contact",
      ].map((item, index) => (
        <NavLink
          key={index}
          to={
            item === "Services"
              ? "/"
              : `/${item.toLowerCase().replace(/\s+/g, "-")}`
          }
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition duration-200 ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          {item}
        </NavLink>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={LogoImg} alt="logo" className="h-10 w-10" />

            <span className="text-xl font-bold text-gray-800">
              ZapShift
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* User */}
            {user ? (
              <div className="relative">
                {/* Avatar */}
                <button
                  onClick={() => setOpen(!open)}
                  className="h-10 w-10 overflow-hidden rounded-full border"
                >
                  <img
                    src={
                      user?.photoURL ||
                      "https://via.placeholder.com/150"
                    }
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </button>

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 mt-3 w-48 rounded-xl border bg-white p-2 ">
                    <ul className="space-y-1">
                      <li>
                        <Link
                          to="/dashboard"
                          className="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setOpen(false)}
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <button
                          onClick={() => {
                            logOut();
                            setOpen(false);
                          }}
                          className="w-full rounded-lg px-4 py-2 text-left text-sm text-red-500 hover:bg-red-50"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLinks}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}