import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { Text } from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Checkbox) => {
      return (
        <>
          <Text size="sm" asChild>
            <label className="flex items-center gap-2">{Checkbox()}Label for Checkbox</label>
          </Text>
        </>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
