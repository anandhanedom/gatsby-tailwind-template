import React from "react";

const Section = ({ className, children }) => {
  return (
    <section className={`py-20 sm:py-20 lg:py-40 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
