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
        <button className="text-lg bg-secondary text-beta mt-10 py-4 px-8 rounded-full">
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
          <div className="flex">
            <ul className="sm:mr-32">
              {footerLinks.map(link => (
                <li className="mb-4">
                  <Link
                    to={link.endPoint}
                    className="hover:text-secondary font-bold"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M29 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V29C1 29.5304 1.21071 30.0391 1.58579 30.4142C1.96086 30.7893 2.46957 31 3 31H29C29.5304 31 30.0391 30.7893 30.4142 30.4142C30.7893 30.0391 31 29.5304 31 29V3C31 2.46957 30.7893 1.96086 30.4142 1.58579C30.0391 1.21071 29.5304 1 29 1ZM9.887 26.594H5.374V12.25H9.887V26.594ZM7.63 10.281C7.11117 10.2794 6.60444 10.1241 6.17381 9.83472C5.74319 9.54533 5.40798 9.13481 5.21053 8.65501C5.01307 8.17522 4.96223 7.64767 5.06442 7.139C5.16661 6.63033 5.41724 6.16335 5.78467 5.79703C6.1521 5.43072 6.61984 5.18151 7.12882 5.08087C7.6378 4.98023 8.16519 5.03268 8.64438 5.23159C9.12357 5.4305 9.53307 5.76696 9.82116 6.19846C10.1092 6.62997 10.263 7.13717 10.263 7.656C10.2631 8.00143 10.1951 8.34349 10.0627 8.66255C9.93032 8.98161 9.73625 9.2714 9.49162 9.51528C9.24699 9.75917 8.95662 9.95235 8.63716 10.0838C8.31769 10.2152 7.97543 10.2822 7.63 10.281ZM26.621 26.594H22.2V19.656C22.2 17.969 22.2 15.906 19.85 15.906C17.5 15.906 17.217 17.688 17.217 19.562V26.688H12.8V12.25H16.936V14.219H17.03C17.4566 13.4815 18.0756 12.8738 18.8208 12.4609C19.5661 12.0481 20.4095 11.8455 21.261 11.875C25.774 11.875 26.62 14.875 26.62 18.719L26.621 26.594Z"
                fill="white"
              ></path>
            </svg>
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
