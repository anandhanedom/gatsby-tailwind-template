import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutBanner from "../components/AboutBanner";
import MiniGallery from "../components/MiniGallery";

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
