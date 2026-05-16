import { useState } from "react";

import { Checkbox } from "../Checkbox/Checkbox";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

import styles from "./ListItem.module.css";

function ListItem() {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");
  const [draft, setDraft] = useState("");

  function startEdititing() {
    setDraft(value);
    setIsEditing(true);
  }

  function handleSave() {
    setValue(draft);
    setIsEditing(false);
  }

  function cancelEditing() {
    setDraft(value);
    setIsEditing(false);
  }

  return (
    <li>
      <form className={styles.form}>
        <div className={styles.taskWrapper}>
          <Checkbox />
          {!isEditing ? (
            <p>{value || "Untitled task"}</p>
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
              <Button variant="neutral" type="button" onClick={startEdititing}>
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
              <Button variant="subtle" type="button" onClick={cancelEditing}>
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
