import { useState, useMemo, useCallback } from "react";

import type { Task } from "./tasksContext";
import { TasksContext } from "./tasksContext";

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback(() => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: "",
        completed: false,
      },
    ]);
  }, []);

  const findTask = useCallback(
    (id: string) => {
      return tasks.find((task) => task.id === id);
    },
    [tasks],
  );

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const editTask = useCallback((id: string, text: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task)),
    );
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      findTask,
      deleteTask,
      editTask,
      toggleTask,
    }),
    [tasks, addTask, findTask, deleteTask, editTask, toggleTask],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export { TasksProvider };
