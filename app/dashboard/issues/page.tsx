"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import SelectDropdown from "@/components/common/SelectDropDown/SelectDropDown";
import Toggle from "@/components/common/ToggleButton/ToggleButton";
import Table from "@/components/Table/Table";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    dcSwitchStatus: "",
    status: "",
    description: "",
    timeEstimate: "",
    role: "",
    user: "",
  });

  const handleLogout = () => {
    router.push("/login");
  };

  const priorityOptions = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const switchOptions = [
    { value: "on", label: "On" },
    { value: "off", label: "Off" },
  ];

  const activeOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const estimateOptions = [
    { value: "1 hour", label: "1 hour" },
    { value: "2 hour", label: "2 hour" },
    { value: "3 hour", label: "3 hour" },
  ];

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "standard user", label: "Standard User" },
  ];

  const userOptions = [
    { value: "john", label: "John" },
    { value: "jacob", label: "Jacob" },
    { value: "jennifer", label: "Jennifer" },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAssign = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-end items-end gap-5">
        <Button onClick={handleLogout} transparent type="button">
          Log Out
        </Button>
        <Button type="submit">Save Changes</Button>
      </div>
      <div className="bg-white ml-5 h-[732px] p-5 pl-[45px] mt-8 rounded-[16px]">
        <p className="text-[18px] font-medium leading-[21.09px] text-[#E9513E]">
          Create an Issue
        </p>
        <p className="leading-[16.41px] text-[14px] font-normal text-[#898787] mt-1">
          Last updated on 09.08.2022 04:03 am
        </p>
        <div className="flex items-center gap-5 mt-[60px]">
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="p-3 border mt-[-20px] border-gray-300 rounded-lg w-[226.12px] focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              Priority
            </label>
            <div className="mt-[-20px]">
              <SelectDropdown
                options={priorityOptions}
                width="226.12px"
                name="priority"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              DC Switch Status
            </label>
            <div className="mt-[-20px]">
              <SelectDropdown
                options={switchOptions}
                width="226.12px"
                name="dcSwitchStatus"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              Status
            </label>
            <div className="mt-[-20px]">
              <SelectDropdown
                options={activeOptions}
                width="226.12px"
                name="status"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="ml-5">
            <Toggle label="Electrical" />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-7">
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              Description
            </label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border mt-[-20px] border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-3 pr-10 rounded w-[475px] h-24"
            />
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
              <Image
                src={"/icons/_calendar.svg"}
                alt="calendar"
                width={10}
                height={16}
              />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              Title
            </label>
            <input
              type="text"
              name="extraTitle"
              className="p-3 border mt-[-20px] border-gray-300 rounded-lg w-[226.12px] focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium z-30 bg-white w-fit ml-3">
              Time Estimate Hours
            </label>
            <div className="mt-[-20px]">
              <SelectDropdown
                options={estimateOptions}
                width="226.12px"
                name="timeEstimate"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="ml-5">
            <Toggle label="Hub" />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[18px] font-medium leading-[21.09px] text-[#E9513E]">
            Issue Contact
          </p>
          <div className="flex gap-5 mt-7">
            <div className="flex flex-col gap-2">
              <label className="text-black font-medium z-30 bg-white w-fit ml-3">
                Select Role
              </label>
              <div className="mt-[-20px]">
                <SelectDropdown
                  options={roleOptions}
                  width="483.88px"
                  name="role"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black font-medium z-30 bg-white w-fit ml-3">
                Select User
              </label>
              <div className="mt-[-20px]">
                <SelectDropdown
                  options={userOptions}
                  width="483.88px"
                  name="user"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-3">
              <Button width="121px" type="button" onClick={handleAssign}>
                Assign
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Page;
