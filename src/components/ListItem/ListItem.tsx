import { useState } from "react";

import { useTasks } from "../../context/TasksContext/useTasks";
import { Checkbox } from "../Checkbox/Checkbox";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

import styles from "./ListItem.module.css";

function ListItem({ id }: { id: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState("");

  const { findTask, deleteTask, editTask, toggleTask } = useTasks();

  if (!findTask(id)) return null;

  const getText = () => findTask(id)?.text || "";

  function handleEdit() {
    setDraft(getText());
    setIsEditing(true);
  }

  function handleSave() {
    editTask(id, draft);
    setIsEditing(false);
  }

  function handleCancel() {
    setDraft(getText());
    setIsEditing(false);
  }

  return (
    <li>
      <form className={styles.form}>
        <div className={styles.taskWrapper}>
          <Checkbox />
          {!isEditing ? (
            <p>{getText() || "Untitled task"}</p>
          ) : (
            <InputField
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          )}
        </div>
        <div className={styles.buttonsWrapper}>
          {!isEditing ? (
            <>
              <Button variant="neutral" type="button" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="subtle" type="button">
                Delete
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="default"
                type="button"
                onClick={handleSave}
                disabled={!draft.trim()}
              >
                Save
              </Button>
              <Button variant="subtle" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          )}
        </div>
      </form>
    </li>
  );
}

export { ListItem };
