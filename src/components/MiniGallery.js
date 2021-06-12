import React from "react";
import Section from "../utilities/Section";
import { StaticImage } from "gatsby-plugin-image";

const MiniGallery = () => {
  return (
    <Section>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Thiruvananthapuram
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
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
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <StaticImage
                src="../assets/img/gallery/gallery5.jpg"
                imgClassName="rounded-sm w-full object-cover h-full object-center block"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <StaticImage
                src="../assets/img/gallery/10.jpg"
                imgClassName="rounded-sm w-full object-cover h-full object-center block"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <StaticImage
                src="../assets/img/gallery/10.jpg"
                imgClassName="rounded-sm w-full object-cover h-full object-center block"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="rounded-sm w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="rounded-sm w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <StaticImage
                src="../assets/img/gallery/gallery3.jpg"
                imgClassName="rounded-sm w-full object-cover h-full object-center block"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MiniGallery;
