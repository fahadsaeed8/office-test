"use client";
import Image from "next/image";
import React, { useState } from "react";
import "../../app/globals.css";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const data = [
    {
      image: "/icons/_dashboard.svg",
      text: "Dashboard",
      link: "/dashboard",
      activeImage: "/icons/_dashboardWhite.svg",
    },
    {
      image: "/icons/_projects.svg",
      text: "Projects",
      link: "/dashboard/projects",
      activeImage: "/icons/_projectsWhite.svg",
    },
    {
      image: "/icons/_circle.svg",
      text: "Issues",
      link: "/dashboard/issues",
      activeImage: "/images/_about.png",
    },
    {
      image: "/icons/_map.svg",
      text: "Map",
      link: "/dashboard/map",
      activeImage: "/icons/_mapWhite.svg",
    },
    {
      image: "/icons/_calendar-check.svg",
      text: "Planning",
      subTabs: [
        { text: "Gantt Chart", link: "/dashboard/ganttChart" },
        { text: "Calender", link: "/dashboard/calender" },
      ],
      link: "/dashboard/planning",
      activeImage: "/icons/_calendar-checkWhite.svg",
    },
    {
      image: "/icons/_list-alt.svg",
      text: "Checklists",
      subTabs: [
        { text: "CheckLists", link: "/dashboard/checklist" },
        { text: "Create CheckLists", link: "/dashboard/createChecklist" },
      ],
      link: "/dashboard/checklist",
      activeImage: "/icons/_list-altWhite.svg",
    },
    {
      image: "/icons/_resource.svg",
      text: "Resources",
      subTabs: [
        { text: "Teams", link: "/dashboard/teams" },
        { text: "Employees", link: "/dashboard/employees" },
      ],
      link: "/dashboard/resource",
      activeImage: "/icons/_resourceWhite.svg",
    },
    {
      image: "/icons/_settings.svg",
      text: "Setting",
      subTabs: [
        { text: "Partner Settings", link: "/dashboard/partnerSetting" },
        { text: "Email Settings", link: "/dashboard/emailSetting" },
        { text: "Users", link: "" },
        { text: "Product Settings", link: "" },
      ],
      link: "/dashboard/setting",
      activeImage: "/icons/__settingsWhite.svg",
    },
    {
      image: "/icons/_moon.svg",
      text: "Appearance",
      link: "/dashboard/appearance",
      subTabsImage: [{ image: "/icons/_toggle.svg", link: "" }],
      activeImage: "/icons/_moonWhite.svg",
    },
    {
      image: "/icons/_calendar-check.svg",
      text: "Offer",
      link: "/dashboard/offer",
      activeImage: "/icons/_calendar-checkWhite.svg",
    },
  ];

  const borderTop = [4, 5, 6, 7, 8, 9];

  return (
    <div
      className={`duration-300 ${
        sidebarOpen ? "w-[252px]" : "w-[64px]"
      } border-t-[0.5px] h-screen`}
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
    >
      <div className="flex pt-2"></div>
      <div className="mt-7">
        {data.map((item, index) => (
          <div key={index}>
            <Link href={item.link}>
              <div
                className={` flex pb-5 p-5 pt-6 items-center cursor-pointer border-r ${
                  sidebarOpen && index === 9 && "border-b"
                } bg-[#FFFFFF]  ${
                  sidebarOpen && borderTop.includes(index)
                    ? "border-t-[0.5px]"
                    : ""
                } border-[#E2E2E2] ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : ""
                } hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-200 hover:text-white`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <Image
                  src={
                    activeIndex === index
                      ? item.activeImage || item.image
                      : item.image
                  }
                  alt={item.text}
                  width={25}
                  height={25}
                />
                {sidebarOpen && (
                  <p
                    className={`mx-3 font-normal  ${
                      activeIndex === index
                        ? "font-semibold text-white"
                        : "text-black"
                    }`}
                  >
                    {item.text}
                  </p>
                )}
              </div>
            </Link>

            {item.subTabs &&
              item.subTabs.map((subTab, subIndex) => (
                <div
                  key={subIndex}
                  className="ml-8 py-1 text-black pb-2 border-r"
                >
                  {sidebarOpen ? (
                    <Link href={subTab.link} passHref>
                      <p className="text-[14px] leading-[16.41px] font-normal cursor-pointer ml-[25px]">
                        {subTab.text}
                      </p>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ))}

            {item.subTabsImage &&
              item.subTabsImage.map((subTabsImage, subIndex) => (
                <div
                  key={subIndex}
                  className="ml-8 py-1 text-black pb-2 border-r"
                >
                  {sidebarOpen ? (
                    <Image
                      src={subTabsImage.image}
                      alt={item.text}
                      width={50}
                      height={50}
                      className="w-[70px] h-[43px] ml-3 cursor-pointer"
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
