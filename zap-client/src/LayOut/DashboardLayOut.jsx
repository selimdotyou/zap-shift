import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import DashBoardNavbar from "../components/DashBoardNavbar/DashBoardNavbar";
import logo from "../assets/logo.png";
import {
  LuLayoutDashboard,
  LuPackageCheck,
  LuReceiptText,
  LuStore,
  LuBadgeDollarSign,
  LuSettings,
  LuLockKeyhole,
  LuCircleHelp,
  LuLogOut,
  LuMapPin,
} from "react-icons/lu";
const DashboardLayOut = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Overlay For Mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-[250px] transform bg-white border-r p-4 transition-transform duration-300
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="mb-8">

          <Link to={'/'} className="flex items-center ">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold -ms-4 mt-2">ZapShift</h1>
          </Link>
        </div>

        {/* Menu */}
        <nav className="min-h-screen flex flex-col justify-between">
          {/* Top Menu */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-gray-400">
              Menu
            </p>

            <div className="space-y-2">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition duration-200 ${isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LuLayoutDashboard />
                Dashboard
              </NavLink>

              <NavLink
                to="deliveries"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition duration-200 ${isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LuPackageCheck />
                Deliveries
              </NavLink>

              <NavLink
                to="invoices"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition duration-200 ${isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LuReceiptText />
                Invoices
              </NavLink>

              <NavLink
                to="stores"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition duration-200 ${isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LuStore />
                Stores
              </NavLink>

              <NavLink
                to="pricing-plans"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition duration-200 ${isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LuBadgeDollarSign />
                Pricing Plans
              </NavLink>

              <NavLink
                to="coverage-area"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition duration-200 ${isActive
                    ? "bg-lime-300 text-black font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <LuMapPin />
                Coverage Area
              </NavLink>
            </div>
          </div>

          {/* Bottom General Menu */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-gray-400">
              General
            </p>

            <div className="space-y-2">
              <NavLink
                to="settings"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                <LuSettings />
                Settings
              </NavLink>

              <NavLink
                to="change-password"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                <LuLockKeyhole />
                Change Password
              </NavLink>

              <NavLink
                to="help"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                <LuCircleHelp />
                Help
              </NavLink>

              <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50">
                <LuLogOut />
                Logout
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navbar */}
        <div className="sticky top-0 z-30 border-b bg-white">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
            >
              ☰
            </button>

            {/* Navbar */}
            <div className="flex-1">
              <DashBoardNavbar />
            </div>
          </div>
        </div>

        {/* Outlet Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="rounded-xl p-4 md:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayOut;