import React from "react";
import Container from "../components/utils/Container";

const Footer = () => {
  return (
    <footer className="bg-gamma py-6 sm:py-16 md:py-12 lg:py-36 text-white">
      <Container>
        <div className="max-w-6xl">
          <h1 className="sm:text-6xl w-2/3">
            We want to hear about what you're building
          </h1>
        </div>
        <button className="text-lg bg-secondary text-beta mt-10 py-4 px-8 rounded-2xl">
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
        </div>

        <div className="text-lg">
          &copy; Vonnue Innovations Pvt. Ltd. {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
