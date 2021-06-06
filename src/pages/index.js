import React from "react";
import Hero from "../components/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import Footer from "../components/Footer.jsx";
import HiringBanner from "../components/HiringBanner.jsx";
import Layout from "../components/Layout.jsx";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <HiringBanner />
    </Layout>
  );
};

export default Home;
