import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`container px-6 md:px-12 lg:px-12 xl:px-0 xl:mx-auto max-w-6xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
