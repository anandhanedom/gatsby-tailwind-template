import React from "react";
import Section from "../utilities/Section";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../utilities/Container";

const MiniGallery = () => {
  return (
    <Section>
      <Container className="flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl md:text-5xl font-extrabold tracking-wide title-font text-primary-100 lg:w-1/3 lg:mb-0 mb-4">
            Trivandrum
          </h1>
          <p className="text-lg lg:pl-6 lg:w-2/3 mx-auto leading-relaxed">
            Thiruvananthapuram is bound by the Arabian Sea in the west and Tamil
            Nadu in the east. Named after Anantha Padmanabha or Lord Vishnu, the
            city is home to many ancient temples. But the landmark is the Sree
            Padmanabha Swamy Temple around which the city has been built on
            seven low hills. The wooded highlands of the Western Ghats in the
            eastern and northeastern borders give Thiruvananthapuram some of the
            most enchanting picnic spots. A long shoreline with internationally
            renowned beaches, historic monuments, backwater stretches and a rich
            cultural heritage make this district a much sought-after tourist
            destination. Clean and green, Thiruvananthapuram, the capital of
            Kerala is one of the most beautiful cities in the country.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block filter grayscale hover:grayscale-0 transition-all delay-700 ease-in-out"
                src="../assets/img/gallery/gallery5.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block filter grayscale hover:grayscale-0 transition-all delay-700 ease-in-out"
                src="../assets/img/gallery/gallery1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full h-full object-cover object-center block filter grayscale hover:grayscale-0 transition-all delay-700 ease-in-out"
                src="../assets/img/gallery/10.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full h-full object-cover object-center block filter grayscale hover:grayscale-0 transition-all delay-700 ease-in-out"
                src="../assets/img/gallery/gallery6.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block filter grayscale hover:grayscale-0 transition-all delay-700 ease-in-out"
                src="../assets/img/gallery/gallery3.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <StaticImage
                alt="gallery"
                className="rounded-sm w-full object-cover h-full object-center block filter grayscale hover:grayscale-0 transition-all delay-700 ease-in-out"
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
