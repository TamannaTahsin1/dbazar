import cn from "@/lib/Utils";

export default function TextArea({ type, label, id, className, placeholder }) {
  return (
    <div className="flex items-start justify-between">
      <label htmlFor={id} className="w-full select-none">
        {label}
      </label>
      <textarea
        className={`${cn(
          "w-full resize-none rounded-md border bg-transparent p-2 outline-none placeholder:text-xs focus:border-primary",
          className,
        )}`}
        rows={4}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
