import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";
import { TextProps } from "./types";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Loren ipsum",
    size: "md",
    asChild: false,
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <strong>Text with strong</strong>,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
