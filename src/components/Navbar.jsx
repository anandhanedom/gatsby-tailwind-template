import React from "react";
import { Link } from "gatsby";

const navLinks = [
  {
    title: "Services",
    endPoint: "/services",
  },
  {
    title: "About",
    endPoint: "/about",
  },
  {
    title: "Contact",
    endPoint: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="container px-6 sm:pt-16 md:px-12 xl:px-0 max-w-7xl xl:mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-2xl font-bold text-white lg:text-3xl"
              href="/"
            >
              vonnue
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            {navLinks.map(navLink => (
              <Link
                className="transition duration-300 ease-linear my-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-secondary sm:text-xl sm:font-medium md:mx-4 md:my-0"
                to={navLink.endPoint}
              >
                {navLink.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
