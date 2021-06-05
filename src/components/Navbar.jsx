import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-transparent">
      <div class="container px-6 sm:pt-16 md:px-12 xl:px-0 max-w-7xl xl:mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <div>
            <a
              class="text-2xl font-bold text-white lg:text-3xl hover:text-gray-700"
              href="#"
            >
              vonnue
            </a>
          </div>

          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="items-center md:flex">
          <div class="flex flex-col md:flex-row md:mx-6">
            <a
              class="my-1 text-sm font-medium text-gray-700  hover:text-indigo-500  md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              class="my-1 text-sm font-medium text-gray-700  hover:text-indigo-500  md:mx-4 md:my-0"
              href="#"
            >
              Shop
            </a>
            <a
              class="my-1 text-sm font-medium text-gray-700  hover:text-indigo-500  md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
            <a
              class="my-1 text-sm font-medium text-gray-700  hover:text-indigo-500  md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
