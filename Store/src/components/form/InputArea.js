import React from "react";
// import Label from "@component/form/Label";
import Label from "./Label";

const InputArea = ({
  name,
  label,
  type,
  Icon,
  register,
  defaultValue,
  autocomplete,
  placeholder,
}) => {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}
        <input
          {...register(`${name}`, {
            required: `${label} is required!`,
          })}
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete={autocomplete}
          className={
            Icon
              ? "text-input placeholder-body h-11 min-h-12 w-full appearance-none rounded-md border border-gray-200 bg-white py-2 pl-10 text-sm opacity-75 transition duration-200 ease-in-out focus:border-primary focus:outline-none focus:ring-0 md:h-12"
              : "text-input placeholder-body h-11 min-h-12 w-full appearance-none rounded-md border border-gray-200 bg-white px-4 py-2 text-sm opacity-75 transition duration-200 ease-in-out focus:border-primary focus:outline-none focus:ring-0 md:h-12 md:px-5"
          }
        />
      </div>
    </>
  );
};

export default InputArea;
