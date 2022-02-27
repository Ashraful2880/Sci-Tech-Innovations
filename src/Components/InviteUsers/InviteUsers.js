import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "../Alert/Alert";
import "./InviteUsers.css";

const InviteUsers = () => {
  const [alert, setAlert] = useState("hidden");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhY3QuYXNocmFmdWwxQGdtYWlsLmNvbSIsInBob25lIjoiODgwMTk3NDIzODQ4NyIsImlkIjoxMDEsImZpcnN0TmFtZSI6IkFzaHJhZnVsIiwic3ViIjoxMDEsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJpYXQiOjE2NDU5ODIyOTAsImV4cCI6MTY0NjAxMTA5MH0.ugnPEYj-P_w4iuX_euN7InGkLHlKeSvcTQh1DmRvPE0";
  const accountId = 3;

  const inviteApi = `https://dev.biniyog.com.bd/security/accounts/${accountId}/invite-user`;
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ emailInvitedTo, rolesInvitedTo }) => {
    const data = { emailInvitedTo, rolesInvitedTo: [rolesInvitedTo] };
    console.log("input : ", data);
    axios
      .post(inviteApi, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("inviteApi response", response.status);
        setAlertText("Invitation Successfull");
        setAlertTitle("Success");
        setAlert("block");
        setAlertColor("#7CE0C3");
      })
      .catch(function (error) {
        console.log("inviteApi error", error);
        setAlertText("Allready Invited");
        setAlertTitle("Error");
        setAlert("block");
        setAlertColor(`#E64F47`);
      });
  };

  return (
    <div className="invite-container">
      <form
        className="lg:pt-52 md:pt-40 sm:pt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-white mb-6 text-2xl font-bold">
          Invite a User For join With Email
        </h1>
        <input
          className="text-gray-600 focus:ring-2 focus:ring-orange-500 dark:text-gray-400 focus:outline-none dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal py-2 px-4 text-sm mr-2 border-gray-300 rounded border shadow"
          placeholder="Enter User Email"
          {...register("emailInvitedTo")}
          required
        />
        <input
          className="text-gray-600 focus:ring-2 focus:ring-orange-500 dark:text-gray-400 focus:outline-none dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal py-2 px-4 text-sm mr-2 border-gray-300 rounded border shadow w-1/12"
          placeholder="Enter User Role"
          {...register("rolesInvitedTo")}
          required
        />
        <input
          className="bg-orange-500 hover:bg-transparent hover:text-orange-500 border border-orange-500 duration-300 text-white py-2 px-6 rounded-lg"
          type="submit"
          value="Confirm"
        />
      </form>
      <Alert
        alertText={alertText}
        alert={alert}
        setAlert={setAlert}
        alertColor={alertColor}
        alertTitle={alertTitle}
      />
    </div>
  );
};

export default InviteUsers;
