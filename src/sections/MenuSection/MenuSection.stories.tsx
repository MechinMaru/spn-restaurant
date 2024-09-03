import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import MenuSection from "./MenuSection";

const meta = {
  title: "Sections/MenuSection",
  tags: ["autodocs"],
  component: MenuSection,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerTitle: "ต้ม",
    description: "aaaa",
    foodItemList: [
      {
        name: "ต้มยำกุ้ง",
        description: "",
        price: "200",
        isSpicy: true,
        isReccommend: true,
      },
      {
        name: "ต้มยำกุ้ง",
        description: "",
        price: "200",
        isSpicy: true,
        isReccommend: true,
      },
      {
        name: "ต้มยำกุ้ง",
        description: "",
        price: "200",
        isSpicy: true,
        isReccommend: true,
      },
      {
        name: "ต้มยำกุ้ง",
        description: "",
        price: "200",
        isSpicy: true,
        isReccommend: true,
      },
      {
        name: "ต้มยำกุ้ง",
        description: "",
        price: "200",
        isSpicy: true,
        isReccommend: true,
      },
    ],
  },
};
