import React from "react";
import "./InviteUsers.css";

const InviteUsers = () => {
  return (
    <div className="invite-container h-screen">
      <form className="lg:pt-52 md:pt-40 sm:pt-16">
        <h1 className="text-white mb-6 text-2xl font-bold">
          Invite a User For join With Email
        </h1>
        <input
          className="text-gray-600 focus:ring-2 focus:ring-indigo-700 dark:text-gray-400 focus:outline-none dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal py-2 px-12 text-sm mr-3 border-gray-300 rounded border shadow "
          placeholder="Enter User Email"
          required
        />
        <input
          className="bg-orange-500 hover:bg-transparent hover:text-orange-500 border border-orange-500 duration-300 text-white py-2 px-6 rounded-lg ml-3"
          type="submit"
          value="Confirm"
        />
      </form>
    </div>
  );
};

export default InviteUsers;
