import axios from "axios";
import React, { useState } from "react";
import Loading from "../Loading/Loading";

const Invited = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhY3QuYXNocmFmdWwxQGdtYWlsLmNvbSIsInBob25lIjoiODgwMTk3NDIzODQ4NyIsImlkIjoxMDEsImZpcnN0TmFtZSI6IkFzaHJhZnVsIiwic3ViIjoxMDEsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJpYXQiOjE2NDU5ODIyOTAsImV4cCI6MTY0NjAxMTA5MH0.ugnPEYj-P_w4iuX_euN7InGkLHlKeSvcTQh1DmRvPE0";
  const accountId = 3;
  const pendingInvites = `https://dev.biniyog.com.bd/security/accounts/${accountId}/pending-invites`;
  axios
    .get(pendingInvites, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log("pendingInvites response", response.data);
      setPendingUsers(response.data);
    })
    .catch(function (error) {
      console.log("pendingInvites error", error);
    });

  return (
    <div className="container mx-auto flex flex-col mt-5 h-screen">
      {pendingUsers.length > 0 ? (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <h1 className="mb-5 font-bold text-3xl">Invited People List</h1>
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border border-orange-500 sm:rounded-lg">
              <table className="min-w-full divide-y divide-orange-500">
                <thead className="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider"
                    >
                      Invited To
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider"
                    >
                      Invited On
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider"
                    >
                      Invited By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider"
                    >
                      Roles For Invited
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-orange-500">
                  {pendingUsers.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.id}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.emailInvitedTo}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.invitedOn}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.invitedBy.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.rolesInvitedTo}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Invited;
