import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist } from "./Checklist";

const meta = {
  title: "components/Checklist",
  component: Checklist,
} satisfies Meta<typeof Checklist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
