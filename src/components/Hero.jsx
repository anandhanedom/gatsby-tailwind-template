import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen bg-primary flex flex-col">
      <Navbar />
      <div className="container px-6 md:px-12 xl:px-0 max-w-7xl xl:mx-auto flex items-center flex-grow">
        <h1 className="text-6xl text-white leading-tight">
          Create <span className="text-secondary">lightning</span> <br />
          fast software
        </h1>
      </div>
    </div>
  );
};

export default Hero;
