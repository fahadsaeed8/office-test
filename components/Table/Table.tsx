"use client";
import Image from "next/image";
import React, { useState } from "react";

const tableData = [
  {
    id: 1,
    name: "Joe Abraham",
    email: "Joe.Abraham@joeabraham.com",
    phone: "123-456-7890",
    role: "Admin User",
  },
  {
    id: 2,
    name: "Joe Abraham",
    email: "Joe.Abraham@joeabraham.com",
    phone: "123-456-7890",
    role: "Admin User",
  },
];

const UserTable = () => {
  const [page] = useState(0);
  const rowsPerPage = 2;

  const paginatedUsers = tableData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[1131px] bg-white border-t border-gray-300">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">
              <input
                type="checkbox"
                className="form-checkbox  border-orange-500 accent-orange-400"
              />
            </th>
            <th className="text-start leading-[16.41px] text-[14px] font-medium flex items-center mt-4">
              Name
              <Image
                src={"/icons/_arrow.svg"}
                alt=""
                width={10}
                height={10}
                className="ml-1"
              />
            </th>
            <th className="text-start leading-[16.41px] text-[14px] font-medium">
              Email
            </th>
            <th className="text-start leading-[16.41px] text-[14px] font-medium">
              Phone
            </th>
            <th className="text-start leading-[16.41px] text-[14px] font-medium">
              Role
            </th>
            <th className="text-start leading-[16.41px] text-[14px] font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">
                <input
                  type="checkbox"
                  className="form-checkbox accent-orange-400"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>
                <Image
                  onClick={() => console.log(`Delete user with id ${user.id}`)}
                  src={"/icons/_trash.svg"}
                  alt="trash"
                  width={14}
                  height={14}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-9 gap-5 ml-[500px]">
        <div className="flex items-center gap-2 ml-[160px]">
          <p className="text-[#000000] text-[14px] font-normal">
            Rows per page: 2
          </p>
          <Image src={"/icons/_caret-down.svg"} alt="" width={10} height={10} />
        </div>
        <p className="text-[#000000] text-[14px] font-normal ml-[30px]">
          {Math.ceil(tableData.length / rowsPerPage)}-1 of 2
        </p>
        <div className="flex items-center gap-3">
          <p className="text-orange-500 font-semibold text-[25px]">{"<"}</p>
          <p className="text-orange-500 font-semibold text-[25px]">{">"}</p>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
