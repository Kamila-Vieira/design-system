import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonProps } from "./types";

export function Button({ children, asChild, className, ...buttonProps }: ButtonProps) {
  const ComponentTag = asChild ? Slot : "button";
  const buttonClassNames = clsx(
    "py-3 px-4 bg-cyan-500 rounded text-black font-semibold font-sans text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 outline-none ring-white",
    className
  );

  return (
    <ComponentTag className={buttonClassNames} {...buttonProps}>
      {children}
    </ComponentTag>
  );
}
