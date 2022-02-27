import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center lg:text-left text-gray-300 bg-gray-800 pt-10">
      <div className="container mx-auto">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/home">
                <h4 className="text-white font-bold text-2xl">
                  <span className="text-orange-500">S</span>ci
                  <span className="text-orange-500"> T</span>ech
                  <span className="text-orange-500"> I</span>nnovations
                </h4>
              </Link>
              <p className=" mx-auto cursor-pointer mt-2">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Here you can use rows and columns to organize your footer
                With Our Company.
              </p>
            </div>
            <div className="lg:ml-12">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                About Us
              </h6>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Career </Link>
              </p>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Developer List </Link>
              </p>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Privacy Policy </Link>
              </p>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Sitemap </Link>
              </p>
            </div>
            <div>
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                Useful links
              </h6>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Join Our team </Link>
              </p>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Guidelines and how to </Link>
              </p>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Company Rules </Link>
              </p>
              <p className="mb-3 hover:text-orange-500 duration-300">
                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                <Link to="/home"> Help </Link>
              </p>
            </div>
            <div className="contact-area">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 duration-300 cursor-pointer">
                <i className="fas fa-home mr-2 text-orange-500"></i>
                Jhenaidah, Dhaka, Bangladesh
              </p>
              <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 duration-300 cursor-pointer">
                <i className="fas fa-envelope mr-2 text-orange-500"></i>
                contact.ashraful1@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 duration-300 cursor-pointer">
                <i className="fas fa-phone mr-2 text-orange-500"></i>+
                88-01764238487
              </p>
              <p className="flex items-center justify-center md:justify-start hover:text-orange-500 duration-300 cursor-pointer">
                <i className="fas fa-fax mr-2 text-orange-500"></i>+
                88-01974238487
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <span>Copyright &copy; 2022 - </span>
          <a
            className="text-orange-500 font-semibold"
            href="https://ashrafulislambd.com"
          >
            Sci Tech innovations Ltd
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
