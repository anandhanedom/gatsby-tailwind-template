import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title, description }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
