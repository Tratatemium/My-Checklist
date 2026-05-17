import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItem } from "./ListItem";
import { TasksContext } from "../../../context/TasksContext/tasksContext";

const STORY_ID = "story-task-1";

const mockContext = {
  tasks: [{ id: STORY_ID, text: "Buy groceries", completed: false }],
  addTask: () => {},
  findTask: (id: string) =>
    id === STORY_ID
      ? { id: STORY_ID, text: "Buy groceries", completed: false }
      : undefined,
  deleteTask: () => {},
  editTask: () => {},
  setCompleted: () => {},
};

const completedContext = {
  tasks: [{ id: STORY_ID, text: "Buy groceries", completed: true }],
  addTask: () => {},
  findTask: (id: string) =>
    id === STORY_ID
      ? { id: STORY_ID, text: "Buy groceries", completed: true }
      : undefined,
  deleteTask: () => {},
  editTask: () => {},
  setCompleted: () => {},
};

const meta = {
  title: "components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: STORY_ID,
  },
  decorators: [
    (Story) => (
      <TasksContext.Provider value={mockContext}>
        <Story />
      </TasksContext.Provider>
    ),
  ],
};

export const Completed: Story = {
  args: {
    id: STORY_ID,
  },
  decorators: [
    (Story) => (
      <TasksContext.Provider value={completedContext}>
        <Story />
      </TasksContext.Provider>
    ),
  ],
};
