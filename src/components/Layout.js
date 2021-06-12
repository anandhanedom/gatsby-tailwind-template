import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-body">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
