import cn from "@/lib/Utils";

export default function Input({ type, label, id, className, placeholder }) {
  return (
    <div className="flex items-start justify-between">
      <label htmlFor={id} className="w-full select-none">
        {label}
      </label>
      <input
        className={`${cn(
          "w-full rounded-md border bg-white p-2 outline-none placeholder:text-xs focus:border-primary",
          className,
        )}`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
