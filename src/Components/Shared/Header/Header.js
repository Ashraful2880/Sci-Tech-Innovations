import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const myFunction = () => {
    const toggleButton = document.getElementById("toogleDiv");
    if (toggleButton.style.display === "none") {
      toggleButton.style.display = "block";
    } else {
      toggleButton.style.display = "none";
    }
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={myFunction}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <i className="fas fa-bars text-2xl px-2"></i>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/home">
                <h4 className="text-white font-bold text-2xl">
                  <span className="text-orange-500">S</span>ci
                  <span className="text-orange-500"> T</span>ech
                </h4>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/invite"
                >
                  Invite Users
                </Link>
                <Link
                  className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/users"
                >
                  All Users
                </Link>
                <Link
                  className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/invited"
                >
                  Invited
                </Link>
                <Link
                  className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/signin"
              className="text-gray-200 border border-orange-500 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-md font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden" id="toogleDiv">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/invite"
            className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Invite Users
          </Link>
          <Link
            to="/users"
            className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            All Users
          </Link>
          <Link
            to="/invited"
            className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Invited
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:bg-orange-500 focus:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
