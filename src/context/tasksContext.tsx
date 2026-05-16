import { createContext, useContext, useState } from "react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

type TasksContextValue = Task[];

const TasksContext = createContext<TasksContextValue | null>(null);

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState([]);

  const value = { tasks };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used inside TasksProvider");
  }

  return context;
}

export { useTasks, TasksProvider };
