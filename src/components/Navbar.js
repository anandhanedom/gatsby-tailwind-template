import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../utilities/Container";

const NavbarBrand = () => {
  return (
    <Link
      className="flex items-center text-2xl text-gray-800 lg:text-3xl hover:text-gray-700"
      to="/"
    >
      <StaticImage
        src="../assets/img/c_logo.jpg"
        alt="india"
        style={{ width: "62px" }}
      />
      <div className="flex flex-col ml-2">
        <span className="text-lg font-semibold">DR. SHASHI THAROOR</span>
        <span className="text-xs font-thin">
          MP For Thiruvananthapuram and Author
        </span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white shadow text-lg font-medium tracking-widest">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavbarBrand />
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="focus:outline-none"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="items-center md:flex">
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <Link
                className="leading-5 md:mx-4 md:my-0 hover:text-primary-100 transition"
                to="/"
              >
                Home
              </Link>
              <Link
                className="leading-5 md:mx-4 md:my-0 hover:text-primary-100 transition"
                to="/"
              >
                About
              </Link>
            </div>

            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <Link
                className="rounded-sm block px-8 py-4 mx-1 font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-primary-100 md:mx-0 md:w-auto"
                to="/"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="text-base py-2 md:flex md:justify-center border-t-2">
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          In Parliament
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          Constituency
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          Books
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          Interviews
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          Press
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          Writings
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          Videos
        </div>
        <div
          className="rounded-sm mx-4 leading-5 md:my-0 hover:bg-gray-100 p-2 cursor-pointer transition-colors duration-300 hover:text-primary-100"
          to="/"
        >
          CTF
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
