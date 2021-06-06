import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`container px-6 md:px-12 xl:px-0 max-w-7xl xl:mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
