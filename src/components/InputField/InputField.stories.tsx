import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta = {
  title: "components/InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Add a task",
  },
};
