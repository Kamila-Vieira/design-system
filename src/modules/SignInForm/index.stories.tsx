import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { SignInForm } from ".";

export default {
  title: "Modules/SignInForm",
  component: SignInForm,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (_req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login Realizado",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText("jhondoe@exemple.com"), "kamila@teste.com");
    userEvent.type(canvas.getByPlaceholderText("************"), "12345678");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login Realizado!")).toBeInTheDocument();
    });
  },
};
