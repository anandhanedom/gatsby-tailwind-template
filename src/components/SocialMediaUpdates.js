import React from "react";
import Section from "../utilities/Section";
import Container from "../utilities/Container";

const SocialMediaUpdates = () => {
  return (
    <Section className="bg-gray-300">
      <Container>
        <div className="font-extrabold tracking-wide mb-20 text-center mx-auto">
          <h2 className="text-sm md:text-lg mb-1 uppercase">Connect</h2>
          <h3 className="text-primary-100 text-opacity-60 text-3xl md:text-5xl">
            Social Media Updates
          </h3>
        </div>
        <div className="flex justify-between social-media-updates flex-wrap">
          <iframe
            title="Facebook updates"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShashiTharoor&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="340"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
          <a
            className="twitter-timeline"
            data-width="340"
            data-height="500"
            href="https://twitter.com/ShashiTharoor?ref_src=twsrc%5Etfw"
          ></a>
          <div className="flex flex-col lg:justify-between">
            <iframe
              width="314"
              height="240"
              src="https://www.youtube-nocookie.com/embed/F3HVmHdGmY0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <iframe
              width="314"
              height="240"
              src="https://www.youtube-nocookie.com/embed/Xgo-pdB98HA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SocialMediaUpdates;
