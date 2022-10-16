import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { Text } from "../Text";
import { CheckboxProps } from "./types";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Checkbox) => {
      return (
        <>
          <Text size="sm" asChild>
            <label className="flex items-center gap-2">
              {Checkbox({ args: { "aria-label": "Label for Checkbox" } })}Label for Checkbox
            </label>
          </Text>
        </>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj = {};
