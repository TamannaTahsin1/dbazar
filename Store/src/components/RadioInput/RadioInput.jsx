import { twMerge } from "tailwind-merge";

export default function RadioInput({ id, name, className, children }) {
  return (
    <div className="w-full">
      <label
        className={`${twMerge(
          "border flex justify-between rounded-md p-[6px] w-full border-[#a1a1aa7e] mt-2",
          className
        )}`}
        htmlFor={id}
      >
        <div className="flex items-center gap-2">{children}</div>
        <input
          className="checked:ring-primary w-4"
          type="radio"
          name={name}
          id={id}
        />
      </label>
    </div>
  );
}
