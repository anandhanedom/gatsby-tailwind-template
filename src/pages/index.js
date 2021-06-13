import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MiniGallery from "../components/MiniGallery";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <MiniGallery />
    </Layout>
  );
};

export default Home;
