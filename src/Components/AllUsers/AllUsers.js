import axios from "axios";
import React, { useState } from "react";
import Loading from "../Loading/Loading";

const AllUsers = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnRhY3QuYXNocmFmdWwxQGdtYWlsLmNvbSIsInBob25lIjoiODgwMTk3NDIzODQ4NyIsImlkIjoxMDEsImZpcnN0TmFtZSI6IkFzaHJhZnVsIiwic3ViIjoxMDEsInByb2ZpbGVQaWN0dXJlIjpudWxsLCJpYXQiOjE2NDU5ODIyOTAsImV4cCI6MTY0NjAxMTA5MH0.ugnPEYj-P_w4iuX_euN7InGkLHlKeSvcTQh1DmRvPE0";
  const accountId = 3;
  const [users, setUsers] = useState([]);
  console.log(users);

  const usersOnAccount = `https://dev.biniyog.com.bd/security/accounts/${accountId}/users`;
  axios
    .get(usersOnAccount, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log("usersOnAccount response", response.data);
      setUsers(response.data);
    })
    .catch(function (error) {
      console.log("usersOnAccount error", error);
    });

  return (
    <div className="container mx-auto flex flex-col mt-5">
      {users.length > 0 ? (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
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
                            {user.firstName + " " + user.lastName}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {user.email}
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

export default AllUsers;
