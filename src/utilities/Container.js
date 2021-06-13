import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`container max-w-6xl px-6 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
