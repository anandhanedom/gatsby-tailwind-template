import React from "react";
import Section from "../utilities/Section";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../utilities/Container";

const MiniGallery = () => {
  return (
    <Section>
      <Container className="flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block"
                src="../assets/img/gallery/gallery5.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block"
                src="../assets/img/gallery/gallery1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full h-full object-cover object-center block"
                src="../assets/img/gallery/10.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full h-full object-cover object-center block"
                src="../assets/img/gallery/gallery6.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block"
                src="../assets/img/gallery/gallery3.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block"
                src="../assets/img/gallery/gallery2.jpg"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MiniGallery;
