import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta = {
  title: "components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "title"],
      description: "Visual style of the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when the field is empty",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Add a task",
  },
};

export const TitleVariant: Story = {
  args: {
    variant: "title",
    placeholder: "My Checklist",
  },
};

export const WithValue: Story = {
  args: {
    value: "Buy groceries",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Add a task",
    disabled: true,
  },
};
