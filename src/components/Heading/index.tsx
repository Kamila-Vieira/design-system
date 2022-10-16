import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { HeadingProps } from "./types";

export function Heading({ size = "md", children, asChild, className }: HeadingProps) {
  const ComponentTag = asChild ? Slot : "h2";

  const textClassNames = clsx(
    "text-gray-100 font-sans font-bold",
    {
      "text-lg": size === "sm",
      "text-xl": size === "md",
      "text-2xl": size === "lg",
    },
    className
  );

  return <ComponentTag className={textClassNames}>{children}</ComponentTag>;
}
