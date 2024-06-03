"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Dropdown = ({ route, isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen === false) {
      setIsDropdownOpen(false);
    }
  }, [isOpen]);
  return (
    <div>
      {/* click event div  */}
      <div
        onClick={isOpen ? () => setIsDropdownOpen(!isDropdownOpen) : null}
        className="group flex cursor-pointer items-center justify-between py-3"
      >
        <div className=" flex items-center gap-4">
          <span className="text-[20px] text-gray-600 group-hover:text-primary">
            {route?.icon}
          </span>
          <h4
            className={`${isOpen ? "" : "invisible opacity-0"} font-medium capitalize text-[14x] text-gray-600 duration-300 group-hover:text-primary`}
          >
            {route?.route}
          </h4>
        </div>
        {/* dropdown arrow  */}
        <IoIosArrowDown
          className={`${isDropdownOpen ? "-rotate-180 duration-300" : " duration-300 "} ${isOpen ? "" : "invisible opacity-0"} text-gray-600 duration-300 group-hover:text-primary`}
        />
      </div>
      {/* the dropdown  */}
      <div
        className={`grid text-slate-600 duration-300 ease-in-out ${isDropdownOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="flex flex-col overflow-hidden px-2">
          {route?.subRoute?.map((sRoute) => (
            <Link
              href={`/${route?.route.toLowerCase().replace(/\s+/g, "")}/${sRoute.toLowerCase().replace(/\s+/g, "")}`}
              className=" border-l-2 border-gray-400 py-1 pl-10 font-medium hover:border-primary hover:text-primary"
              key={sRoute}
            >
              {sRoute}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
