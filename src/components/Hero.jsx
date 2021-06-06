import React from "react";
import Navbar from "./Navbar";
import Container from "../components/utils/Container";

const Hero = () => {
  return (
    <div className="flex flex-col" style={{ height: "80vh" }}>
      <Container className="flex items-center flex-grow">
        <div>
          <h1 className="text-4xl lg:text-7xl text-black leading-tight font-extrabold">
            Create <span className="text-primary animate-pulse">lightning</span>
            <br />
            fast software
          </h1>
          <p className="text-2xl my-8">
            Product Development for startups, scaleups and enterprises
          </p>
          <button
            className="transition delay-100 ease-in text-2xl border-primary text-primary hover:text-white px-10 py-5 hover:bg-primary rounded-sm"
            style={{ border: "3px solid" }}
          >
            Watch Experience
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
