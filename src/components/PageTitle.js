import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="flex flex-col text-center w-ful bg-gray-100 py-8">
      <div className="font-extrabold tracking-wide mb-4">
        <h2 className="text-sm md:text-lg mb-1 uppercase">{title}</h2>
        <h3 className="text-primary-100 text-3xl md:text-5xl">
          Dr. Shashi Tharoor
        </h3>
      </div>
    </div>
  );
};

export default PageTitle;
