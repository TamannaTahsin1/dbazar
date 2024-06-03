"use client";
import { useState } from "react";

export default function ToggleButton({ title }) {
  const [haveVariant, setHaveVariant] = useState(false);
  return (
    <div>
      <div className="mb-4 flex w-full items-center justify-between rounded-md">
        <div className="flex">
          <h1>{title}</h1>
        </div>
        {/* toggle button */}
        <label
          onClick={() => setHaveVariant((prev) => !prev)}
          htmlFor="toggle"
          className={`relative flex  h-fit w-6 items-center rounded-3xl ${haveVariant ? "bg-primary-400" : "bg-gray-400"}  md:h-6 md:w-14`}
        >
          <input type="checkbox" className="peer/toggle hidden" id="toggle" />
          <span
            className={` ${haveVariant ? "left-8" : "left-0"} absolute size-6 rounded-full bg-white  duration-100`}
          ></span>
        </label>
      </div>
    </div>
  );
}
