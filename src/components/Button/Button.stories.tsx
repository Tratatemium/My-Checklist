import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Button",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Button",
  },
};
