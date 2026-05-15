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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValue(draft);
    setIsEditing(false);
  }

  function cancelEditing() {
    setDraft(value);
    setIsEditing(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.taskWrapper}>
        <Checkbox />
        {!isEditing ? (
          <p>{value}</p>
        ) : (
          <InputField
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
            <Button variant="default" type="submit">
              Save
            </Button>
            <Button variant="subtle" type="button" onClick={cancelEditing}>
              Cancel
            </Button>
          </>
        )}
      </div>
    </form>
  );
}

export { ListItem };
