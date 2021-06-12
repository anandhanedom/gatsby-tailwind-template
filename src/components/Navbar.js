import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
        <span className="text-xs">MP For Thiruvananthapuram and Author</span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white shadow text-lg">
      <div className="container px-6 py-3 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
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
              <Link className="leading-5 md:mx-4 md:my-0" to="/">
                Home
              </Link>
              <Link className="leading-5 md:mx-4 md:my-0" to="/">
                About
              </Link>
            </div>

            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <Link
                className="block w-1/2 px-3 py-2 mx-1 font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 hover:bg-blue-600 md:mx-0 md:w-auto"
                to="/"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="py-3 mt-3 -mx-3 md:flex md:justify-center">
          <div className="mx-4 leading-5 md:my-0" to="/">
            In Parliament
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            Constituency
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            Books
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            Interviews
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            Press
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            Writings
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            Videos
          </div>
          <div className="mx-4 leading-5 md:my-0" to="/">
            CTF
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
