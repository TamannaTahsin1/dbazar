"use client"
import { useEffect, useRef, useState } from "react";
const TableSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Choose One");
  // array of options
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => document.removeEventListener("mousedown", closeDropDown);
  });
  return (
    <div
    ref={dropDownMenuRef}
     className="">
      {/* dropdown - btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="mx-auto flex w-[150px] items-center justify-between rounded-xl border bg-white px-6 py-2"
      >
        <h1 className="font-medium text-gray-600">{selectedValue}</h1>
        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10L12 15L17 10"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      {/* dropdown - options  */}
      {/*  */}
      <div
        
        className={`${isOpen ? "visible absolute top-14 opacity-100" : "invisible absolute top-10 opacity-0"} z-20 my-4    w-[150px] rounded-xl border bg-white py-4 duration-300`}
      >
        {options?.map((option, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setSelectedValue(e.target.textContent);
              setIsOpen(false);
            }}
            className="px-6 py-2 text-gray-500 hover:bg-gray-100"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TableSelect;
