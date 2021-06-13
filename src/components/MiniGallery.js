import React from "react";
import Section from "../utilities/Section";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../utilities/Container";

const MiniGallery = () => {
  return (
    <Section>
      <Container className="flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <div className="font-extrabold tracking-wide lg:w-1/3 lg:mb-0 mb-4">
            <h2 className="text-gray-900 text-sm md:text-lg mb-1">
              My Constituency
            </h2>
            <h3 className="text-primary-100 text-3xl md:text-5xl">
              Trivandrum
            </h3>
          </div>
          <p className="text-lg lg:pl-6 lg:w-2/3 mx-auto leading-relaxed tracking-wide">
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
