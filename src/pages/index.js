import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MiniGallery from "../components/MiniGallery";
import AboutBanner from "../components/AboutBanner";
import Head from "../components/Head";

const Home = () => {
  return (
    <Layout>
      <Head title="Home | Dr. Shashi Tharoor" />
      <Hero />
      <AboutBanner />
      <MiniGallery />
    </Layout>
  );
};

export default Home;
