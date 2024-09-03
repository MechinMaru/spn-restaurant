import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import MenuButton from "./MenuButton";

const meta = {
  title: "Components/MenuButton",
  tags: ["autodocs"],
  component: MenuButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ต้ม",
  },
};

export const soup: Story = {
  args: {
    title: "ต้ม",
  },
};

export const fried: Story = {
  args: {
    title: "ทอด",
  },
};
