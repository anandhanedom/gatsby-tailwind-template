import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-body text-gray-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
