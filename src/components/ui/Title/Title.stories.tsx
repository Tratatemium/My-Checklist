import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "./Title";

const meta = {
  title: "components/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      localStorage.setItem("checklist-title", "My Checklist");
      return <Story />;
    },
  ],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Editing: Story = {
  play: async ({ canvas }) => {
    const { userEvent } = await import("storybook/test");
    const editButton = canvas.getByRole("button", { name: /edit title/i });
    await userEvent.click(editButton);
  },
};
