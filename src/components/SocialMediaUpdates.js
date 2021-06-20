import React from "react";
import Section from "../utilities/Section";
import Container from "../utilities/Container";

const SocialMediaUpdates = () => {
  return (
    <Section>
      <Container className="flex justify-between social-media-updates">
        {/* <div
          dangerouslySetInnerHTML={{
            __html: `<iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShashiTharoor%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
          width="340"
          height="500"
          style="border:none;overflow:hidden;margin:auto"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />`,
          }}
        /> */}
        <a
          className="twitter-timeline"
          data-width="340"
          data-height="500"
          href="https://twitter.com/ShashiTharoor?ref_src=twsrc%5Etfw"
        >
          Tweets by Shashi Tharoor
        </a>
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
        <div className="flex flex-col justify-between">
          <iframe
            width="340"
            height="240"
            src="https://www.youtube-nocookie.com/embed/F3HVmHdGmY0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="340"
            height="240"
            src="https://www.youtube-nocookie.com/embed/Xgo-pdB98HA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </Container>
    </Section>
  );
};

export default SocialMediaUpdates;
