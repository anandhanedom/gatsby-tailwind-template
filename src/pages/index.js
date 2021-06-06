import React from "react";
import Hero from "../components/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="font-body">
      <Hero />
      <WhoWeAre />
      <Footer />
    </div>
  );
};

export default Home;
