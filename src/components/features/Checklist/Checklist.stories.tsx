import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checklist } from "./Checklist";
import { TasksContext } from "../../../context/TasksContext/tasksContext";

const emptyContext = {
  tasks: [],
  addTask: () => {},
  findTask: () => undefined,
  deleteTask: () => {},
  editTask: () => {},
  setCompleted: () => {},
};

const withTasksContext = {
  tasks: [
    { id: "1", text: "Buy groceries", completed: false },
    { id: "2", text: "Walk the dog", completed: true },
    { id: "3", text: "Read a book", completed: false },
  ],
  addTask: () => {},
  findTask: (id: string) => withTasksContext.tasks.find((t) => t.id === id),
  deleteTask: () => {},
  editTask: () => {},
  setCompleted: () => {},
};

const allCompletedContext = {
  tasks: [
    { id: "1", text: "Buy groceries", completed: true },
    { id: "2", text: "Walk the dog", completed: true },
    { id: "3", text: "Read a book", completed: true },
  ],
  addTask: () => {},
  findTask: (id: string) => allCompletedContext.tasks.find((t) => t.id === id),
  deleteTask: () => {},
  editTask: () => {},
  setCompleted: () => {},
};

const meta = {
  title: "components/Checklist",
  component: Checklist,
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
} satisfies Meta<typeof Checklist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  decorators: [
    (Story) => (
      <TasksContext.Provider value={emptyContext}>
        <Story />
      </TasksContext.Provider>
    ),
  ],
};

export const WithTasks: Story = {
  decorators: [
    (Story) => (
      <TasksContext.Provider value={withTasksContext}>
        <Story />
      </TasksContext.Provider>
    ),
  ],
};

export const AllCompleted: Story = {
  decorators: [
    (Story) => (
      <TasksContext.Provider value={allCompletedContext}>
        <Story />
      </TasksContext.Provider>
    ),
  ],
};
