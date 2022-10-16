import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ButtonProps } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
    asChild: false,
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <a href="#" className="flex items-center justify-center">
        Button with a tag
      </a>
    ),
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
