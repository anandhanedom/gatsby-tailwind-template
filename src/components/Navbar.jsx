import React from "react";
import { Link } from "gatsby";
import Container from "./utils/Container";

const navLinks = [
  {
    title: "Services",
    endPoint: "/services",
  },
  {
    title: "About",
    endPoint: "/about",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <Container className="sm:py-8 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-2xl font-bold text-black lg:text-3xl"
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
          <div className="flex flex-col md:flex-row md:mx-6 items-center">
            {navLinks.map(navLink => (
              <Link
                className="transition duration-300 ease-linear my-1 text-sm font-medium text-black sm:text-xl sm:font-medium md:mx-4 md:my-0"
                to={navLink.endPoint}
              >
                {navLink.title}
              </Link>
            ))}
            <Link
              className="bg-primary py-4 px-8 rounded-sm transition duration-300 ease-linear my-1 text-sm font-medium text-white sm:text-xl sm:font-medium md:mx-4 md:my-0"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
