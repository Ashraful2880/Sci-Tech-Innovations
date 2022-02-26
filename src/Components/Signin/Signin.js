import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
      <div className=" md:hidden sm:mb-8 mb-6">
        <img src="https://i.ibb.co/9WZkhV8/Main-logo-1.png" alt="logo" />
      </div>
      <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
        <p className="focus:outline-none text-3xl font-extrabold leading-6 text-gray-800 mb-4">
          Welcome Back !!!
        </p>
        <p className="focus:outline-none text-lg font-extrabold leading-6 text-gray-700 mb-6">
          Login To Your Account
        </p>
        <img
          className="w-16 mx-auto mb-6"
          src="https://i.ibb.co/9WZkhV8/Main-logo-1.png"
          alt="logo"
        />
        <form>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
              placeholder="example@gmail.com "
            />
          </div>
          <div className="mt-6 w-full">
            <label
              htmlFor="myInput"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                type="password"
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                placeholder="Your Password"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-sm font-semibold leading-none text-white focus:outline-none bg-orange-500 border border-orange-500 duration-300 rounded-xl hover:bg-transparent hover:text-orange-500 py-4 w-full"
            >
              Login
            </button>
          </div>
        </form>
        <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
          Don't have account?
          <Link
            to="/register"
            className="ml-2 text-red-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none cursor-pointer"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
