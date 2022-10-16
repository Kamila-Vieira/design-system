import { Slot } from "@radix-ui/react-slot";
import { TextInputRootProps, TextInputInputProps, TextInputIconProps } from "./types";

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 h-12 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-500">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export function TextInputInput(inputProps: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 font-sans text-xs placeholder:text-gray-400 outline-none"
      {...inputProps}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
