import { Meta, StoryObj } from "@storybook/react";
import { Heading } from ".";
import { HeadingProps } from "./types";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Loren ipsum",
    size: "lg",
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
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

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>,
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
