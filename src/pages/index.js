import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MiniGallery from "../components/MiniGallery";
import AboutBanner from "../components/AboutBanner";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutBanner />
      <MiniGallery />
    </Layout>
  );
};

export default Home;
