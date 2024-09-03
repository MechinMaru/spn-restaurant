import { Meta, StoryObj } from "@storybook/react";
import MenuInfo from "./MenuInfo";

const meta = {
  title: "Components/MenuInfo",
  tags: ["autodocs"],
  component: MenuInfo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "ต้มยำกุ้ง",
    description: "",
    price: "200",
    isSpicy: true,
    isReccommend: true,
  },
};
