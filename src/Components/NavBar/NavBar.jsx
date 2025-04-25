import React, { useState } from "react";
import LogoImage from "../../assets/sandwich_11188179.gif";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-white/40 bg-white/30 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={LogoImage} className="h-8 me-3 rounded-full" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
              YumAuth
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded="false"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://github.com/shadcn.png"
                alt="user photo"
              />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-200/50"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Main Menu for Desktop */}
          <div
            className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-blue-700 md:p-0 rounded-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100/50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100/50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100/50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100/50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden items-center justify-between w-full`}
          >
            <ul className="flex flex-col font-medium p-4 mt-4 rounded-lg space-y-4">
              <li>
                <a href="#" className="block py-2 px-3 text-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
