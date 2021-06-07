import React from "react";
import Container from "./utils/Container";

const HiringBanner = () => {
  return (
    <div className="bg-tertiary">
      <section className="py-10 sm:py-10 lg:py-20">
        <Container>
          <h2 className="lg:text-4xl text-white font-extrabold">
            We are hiring
          </h2>
          <p className="mt-5 text-white text-lg">
            Our team is growing and we're on the look out for talented people to
            join us on our journey.
          </p>
          <button className="text-lg transition delay-100 ease-in font-bold border-2 border-secondary-500 rounded-sm text-white hover:text-secondary-300 px-8 py-4 mt-5 hover:bg-white hover:border-white">
            Careers at Vonnue
          </button>
        </Container>
      </section>
    </div>
  );
};

export default HiringBanner;
