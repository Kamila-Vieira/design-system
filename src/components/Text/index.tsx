import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { TextProps } from "./types";

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const ComponentTag = asChild ? Slot : "span";

  const textClassNames = clsx(
    "text-gray-100 font-sans",
    {
      "text-xs": size === "sm",
      "text-sm": size === "md",
      "text-md": size === "lg",
    },
    className
  );

  return <ComponentTag className={textClassNames}>{children}</ComponentTag>;
}
