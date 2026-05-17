import styles from "./App.module.css";

import { TasksProvider } from "./context/TasksContext/tasksProvider";
import { Checklist } from "./components/Checklist/Checklist";
function App() {
  return (
    <TasksProvider>
      <div className={styles.app}>
        <Checklist />
      </div>
    </TasksProvider>
  );
}

export default App;
