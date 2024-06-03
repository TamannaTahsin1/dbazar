import cn from "@/lib/Utils";

export default function Input({
  type,
  label,
  id,
  className,
  placeholder,
  children,
  register,
  name,
  required,
  defaultValue,
  props,
}) {
  return (
    <div className="flex w-full flex-col">
      {label ? (
        <label htmlFor={id} className="my-3 select-none opacity-75">
          {label}
        </label>
      ) : null}
      <div className="relative flex items-center">
        {register && required ? (
          <input
            className={`${cn(
              "w-full rounded-md border border-[#a1a1aa7e] p-2 outline-none placeholder:text-xs focus:border-primary",
              className,
            )}`}
            type={type}
            id={id}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            {...register(label.toLowerCase(), required)}
          />
        ) : (
          <input
            className={`${cn(
              "w-full rounded-md border border-[#a1a1aa7e] p-2 outline-none placeholder:text-xs focus:border-primary",
              className,
            )}`}
            type={type}
            name={name}
            defaultValue={defaultValue}
            id={id}
            placeholder={placeholder}
          />
        )}

        <div className="absolute">{children}</div>
      </div>
    </div>
  );
}
