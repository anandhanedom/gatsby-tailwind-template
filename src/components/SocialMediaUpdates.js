import React from "react";
import Section from "../utilities/Section";

const SocialMediaUpdates = () => {
  return (
    <Section>
      <div className="flex lg:px-6 justify-around">
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
          Tweets by ShashiTharoor
        </a>
      </div>
    </Section>
  );
};

export default SocialMediaUpdates;
