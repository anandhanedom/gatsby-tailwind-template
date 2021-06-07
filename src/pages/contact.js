import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Container from "../components/utils/Container";

const Contact = () => {
  return (
    <div className="font-body">
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <Container>
          <div>
            <div className="flex flex-col text-left w-full mb-12 ">
              <h1 className="text-4xl lg:text-5xl font-medium title-font mb-4 text-gray-900">
                Reach Out
              </h1>
              <p className="lg:w-2/3 leading-relaxed text-lg">
                We appreciate your interest in Vonnue. Find out which products
                fit your business needs and get questions answered.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex text-white bg-primary border-0 py-2 px-8 focus:outline-none text-lg rounded-sm">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
