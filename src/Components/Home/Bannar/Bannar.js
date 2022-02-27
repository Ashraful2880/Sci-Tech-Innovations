import React from "react";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div className="relative invite-container overflow-hidden h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 invite-container sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-44">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-white">
                Grow Your Business
              </h1>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-2xl md:text-5xl text-orange-500">
                With Sci Tech
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <span className="text-orange-500">Sci Tech</span> is proud to
                offer affordable Software in major Dhaka cities. Founded 2000,
                the budget brand now has a portfolio of 35 establishments in 500
                cities and 100 countries.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 ml-2">
                  <Link
                    to="/home"
                    className="w-full flex items-center justify-center px-2 py-2 border border-orange-500  rounded-md hover:bg-orange-500 duration-300 text-white md:py-3 md:text-lg md:px-10"
                  >
                    Book Deal
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className=" w-full object-cover h-full"
          src="https://i.ibb.co/mbB9ZKp/Bannar-Bg.png"
          alt="werg"
        />
      </div>
    </div>
  );
};

export default Bannar;
