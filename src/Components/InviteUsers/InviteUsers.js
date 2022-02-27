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
    axios
      .post(inviteApi, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setAlertText("Invitation Successfull");
        setAlertTitle("Success");
        setAlert("block");
        setAlertColor("#7CE0C3");
      })
      .catch(function (error) {
        setAlertText("Allready Invited");
        setAlertTitle("Error");
        setAlert("block");
        setAlertColor(`#E64F47`);
      });
  };

  return (
    <div className="invite-container h-screen">
      <div className="lg:pt-32 md:pt-20 sm:pt-10">
        <h1 className="text-white mb-10 lg:text-3xl font-bold">
          Invite People By Email
        </h1>
        <form
          className="flex flex-col lg:w-1/5 mx-auto px-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="text-black focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white font-normal py-2 px-4 text-sm border-gray-300 rounded border mb-2"
            placeholder="Enter User Email"
            {...register("emailInvitedTo")}
            required
          />
          <input
            className="text-black focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white font-normal py-2 px-4 text-sm border-gray-300 rounded border mb-2"
            placeholder="Type User Role"
            {...register("rolesInvitedTo")}
            required
          />
          <input
            className="bg-orange-500 hover:bg-transparent hover:text-orange-500 border border-orange-500 duration-300 text-white py-2 px-6 rounded-lg"
            type="submit"
            value="Confirm"
          />
        </form>
      </div>
      <Alert
        className="absolute top-0 left-0"
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
