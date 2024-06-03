import cn from "@/lib/Utils";
import { cva } from "class-variance-authority";
const buttonVariants = cva(
  "cursor-pointer rounded-md px-6 py-2 outline-none duration-300 flex gap-1 items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-green-600 text-white hover:opacity-80",
        outline: "border hover:bg-gray-200 bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
function Button({ children, variant, className, ...props }) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
}
export { Button, buttonVariants };
