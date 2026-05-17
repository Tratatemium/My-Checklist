import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "neutral", "subtle"],
      description: "Visual style of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "Button label content",
    },
  },
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

export const Disabled: Story = {
  args: {
    variant: "default",
    children: "Button",
    disabled: true,
  },
};
