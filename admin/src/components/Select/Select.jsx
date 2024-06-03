"use client";
import cn from "@/lib/Utils";
import { useEffect, useRef, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../Button/Button";

const Select = ({ defaultValue, options, id, label, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  // array of options

  const ref = useRef(null);

  useEffect((e) => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  });

  return (
    <div ref={ref}>
      {/* dropdown - btn */}
      <div className="flex justify-between bg-white">
        <span className="w-full">{label}</span>
        <div className="relative w-full ">
          <button
            id={id}
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className={`${className} flex items-center justify-between rounded-md border p-2`}
          >
            <span>{selectedValue}</span>
            <IoIosArrowDown
              className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-200`}
            />
          </button>
          <div
            className={`${isOpen ? "visible top-10 opacity-100" : "invisible top-6 opacity-0"} absolute mx-auto mt-2 w-full overflow-hidden rounded-md border bg-white drop-shadow-md duration-200`}
          >
            {options?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue(e.target.textContent);
                }}
                className={`flex cursor-pointer items-center justify-between px-6 py-2 text-gray-500 ${selectedValue === option ? "bg-primary text-white" : "hover:bg-gray-100"}`}
              >
                <span>{option}</span>
                {selectedValue === option ? <BsCheck size={20} /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* dropdown - options  */}
    </div>
  );
};
export default Select;
