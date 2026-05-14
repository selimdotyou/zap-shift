import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useAuth from "../../hooks/useAuth";

const DashBoardNavbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Coverage", path: "/coverage" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between px-8">
      {/* Left Side Menu */}
      <div className="relative">
        {/* Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <HiOutlineMenuAlt3 className="text-3xl text-gray-700" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute left-0 mt-3 w-56 rounded-xl border bg-white p-2 shadow-xl">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-2 text-sm transition ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <hr className="my-2" />

              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard Home
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

      {/* Right Side User */}
      <div className="flex items-center gap-3">
        <img
          src={
            user?.photoURL ||
            "https://via.placeholder.com/150"
          }
          alt="profile"
          className="h-10 w-10 rounded-full border object-cover"
        />

        <div className="hidden md:block">
          <h4 className="text-sm font-semibold text-gray-800">
            {user?.displayName || "User"}
          </h4>

          <p className="text-xs text-gray-500">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;