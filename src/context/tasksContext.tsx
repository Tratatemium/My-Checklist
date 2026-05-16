import { createContext, useContext, useState, useMemo } from "react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

type TasksContextType = {
  tasks: Task[];
  addTask: () => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  toggleTask: (id: string) => void;
};

const TasksContext = createContext<TasksContextType | null>(null);

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: "",
        completed: false,
      },
    ]);
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  function editTask(id: string, text: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task)),
    );
  }
  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      deleteTask,
      editTask,
      toggleTask,
    }),
    [tasks],
  );

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
