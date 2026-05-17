import { useState } from "react";

import { useTasks } from "../../../context/TasksContext/useTasks";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { InputField } from "../../ui/InputField/InputField";
import { Button } from "../../ui/Button/Button";

import styles from "./ListItem.module.css";

function ListItem({ id }: { id: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState("");

  const { findTask, deleteTask, editTask, setCompleted } = useTasks();

  const task = findTask(id);
  if (!task) return null;

  const { text, completed } = task;

  function handleEdit() {
    setDraft(text);
    setIsEditing(true);
  }

  function handleSave() {
    editTask(id, draft);
    setIsEditing(false);
  }

  function handleCancel() {
    setDraft(text);
    setIsEditing(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCompleted(id, e.target.checked);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSave();
  }

  return (
    <li>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.taskWrapper}>
          <Checkbox
            checked={completed}
            onChange={handleChange}
            aria-label={text || "Untitled task"}
          />
          {!isEditing ? (
            <p className={styles.text}>{text || "Untitled task"}</p>
          ) : (
            <InputField
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              aria-label="Edit task"
            />
          )}
        </div>
        <div className={styles.buttonsWrapper}>
          {!isEditing ? (
            <>
              <Button variant="neutral" type="button" onClick={handleEdit} aria-label={`Edit: ${text || "Untitled task"}`}>
                Edit
              </Button>
              <Button variant="subtle" type="button" onClick={() => deleteTask(id)} aria-label={`Delete: ${text || "Untitled task"}`}>
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
