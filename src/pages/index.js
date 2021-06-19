import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MiniGallery from "../components/MiniGallery";
import AboutBanner from "../components/AboutBanner";
import Head from "../components/Head";
import SocialMediaUpdates from "../components/SocialMediaUpdates";

const Home = () => {
  return (
    <Layout>
      <Head title="Home | Dr. Shashi Tharoor" />
      <Hero />
      <AboutBanner />
      <MiniGallery />
      <SocialMediaUpdates />
    </Layout>
  );
};

export default Home;
