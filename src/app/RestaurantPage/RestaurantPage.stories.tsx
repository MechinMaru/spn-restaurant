import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import RestaurantPage from "./RestaurantPage";

const meta = {
  title: "Page/RestaurantPage",
  tags: ["autodocs"],
  component: RestaurantPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RestaurantPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
