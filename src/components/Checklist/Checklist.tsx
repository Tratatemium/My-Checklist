import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { InfoIcon } from "../icons/InfoIcon";
import { useTasks } from "../../context/TasksContext/useTasks";
import { Title } from "../Title/Title";

import styles from "./Checklist.module.css";

function Checklist() {
  const { tasks, addTask } = useTasks();

  function getInfo() {
    if (tasks.length === 0) return "No tasks yet";
    const completedCount = tasks.filter((task) => task.completed).length;
    if (completedCount === tasks.length) return "All tasks completed";
    return `${tasks.length - completedCount} tasks remaining`;
  }

  return (
    <div className={styles.checklist}>
      <header className={styles.header}>
        <InfoIcon className={styles.icon} />
        <div className={styles.headerText}>
          <Title />
          <p className={styles.info} aria-live="polite" aria-atomic="true">{getInfo()}</p>
        </div>
      </header>
      {tasks.length > 0 && <Card />}
      <Button variant="default" onClick={addTask} className={styles.addButton}>
        Add task
      </Button>
    </div>
  );
}

export { Checklist };
