import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import FooterSection from "./FooterSection";

const meta = {
  title: "Sections/FooterSection",
  tags: ["autodocs"],
  component: FooterSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FooterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
