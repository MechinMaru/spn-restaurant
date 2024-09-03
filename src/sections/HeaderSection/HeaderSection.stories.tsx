import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import HeaderSection from "./HeaderSection";

const meta = {
  title: "Sections/HeaderSection",
  tags: ["autodocs"],
  component: HeaderSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeaderSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
