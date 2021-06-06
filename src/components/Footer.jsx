import React from "react";
import { Link } from "gatsby";
import Container from "../components/utils/Container";

const footerLinks = [
  { title: "Home", endPoint: "/" },
  { title: "About", endPoint: "/about" },
  { title: "Work", endPoint: "/work" },
  { title: "Contact", endPoint: "/contact" },
  { title: "Services", endPoint: "/services" },
  { title: "Culture", endPoint: "/culture" },
];

const Footer = () => {
  return (
    <footer className="bg-gamma text-white py-16 lg:py-36">
      <Container>
        <div className="max-w-6xl">
          <h1 className="text-4xl lg:text-6xl text-white leading-tight sm:w-2/3">
            We want to hear about what you're building
          </h1>
        </div>
        <button className="text-lg bg-secondary text-beta mt-10 py-4 px-8 rounded-lg">
          Contact Us
        </button>
        <div className="my-28 grid grid-flow-col auto-cols-auto text-white text-left text-2xl">
          <div className="grid grid-flow-row space-y-10">
            <div>
              <h3 className="font-bold mb-2">Singapore</h3>
              <p className="font-thin text-lg">
                160 Robinson Road
                <br />
                #14-04 Singapore Business Federation Centre
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kerala 1</h3>
              <p className="font-thin text-lg">
                #Vismaya
                <br />
                Infopark Campus, Kakkanad - 682030
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Kerala 2</h3>
              <p className="font-thin text-lg">
                #Vonnue
                <br />
                Keeranchira Tech Space - 673592
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            {footerLinks.map(link => (
              <Link to={link.endPoint} className="hover:text-secondary">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-lg">
          &copy; Vonnue Innovations Pvt. Ltd. {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
