import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "./types";

export function Button({ children, asChild }: ButtonProps) {
  const ComponentTag = asChild ? Slot : "button";

  return (
    <ComponentTag className="py-4 px-3 bg-cyan-500 rounded text-black font-semibold font-sans text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 outline-none ring-white">
      {children}
    </ComponentTag>
  );
}
