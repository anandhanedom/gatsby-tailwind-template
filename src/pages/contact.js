import React from "react";
import Layout from "../components/Layout";
import Container from "../utilities/Container";
import Section from "../utilities/Section";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 tracking-widest">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-stretch sm:justify-start justify-center text-center sm:text-left">
                <StaticImage
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-64 object-cover object-center sm:mb-0 mb-4 filter grayscale hover:grayscale-0 transition-all delay-900 ease-in"
                  src="../assets/img/contact/indiagate.jpg"
                />
                <div className="flex-grow sm:pl-6 flex flex-col justify-start md:text-left tracking-wide text-left">
                  <h2 className="title-font font-bold text-2xl mb-4">
                    New Delhi
                  </h2>
                  <p className="mb-4 text-base">
                    97, Lodhi Estate, New Delhi - 110003 <br />
                    Tel : +91 11 2464 4035 / 2464 4383
                    <br />
                    Fax : +91 11 2465 4158
                  </p>
                  <div>
                    <ul>
                      <li className="font-bold">Contact</li>
                      <li className="flex justify-between">
                        <span>John Koshy</span>
                        <span className="text-primary-100">
                          john@tharoor.in
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-stretch sm:justify-start justify-center text-center sm:text-left">
                <StaticImage
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-64 object-cover object-center sm:mb-0 mb-4 filter grayscale hover:grayscale-0 transition-all delay-900 ease-in"
                  src="../assets/img/contact/templetrivandrum.jpg"
                />
                <div className="flex-grow sm:pl-6 flex flex-col justify-start md:text-left tracking-wide text-left">
                  <h2 className="title-font font-bold text-2xl mb-4">
                    Thiruvananthapuram
                  </h2>
                  <p className="mb-4 text-base">
                    Office of Dr. Shashi Tharoor,
                    <br />
                    MP TC 26 / 1592, Pulimoodu - Govt. Press Road,
                    <br />
                    Thiruvananthapuram - 695 001, Kerala <br />
                    Tel : +91 471 2324555
                    <br /> Fax : +91 471 2324666
                  </p>
                  <div>
                    <ul>
                      <li className="font-bold">Contact</li>
                      <li className="flex justify-between">
                        <span>Praveen Ram</span>
                        <span className="text-primary-100">
                          praveen@tharoor.in
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </Layout>
  );
};

export default Contact;
