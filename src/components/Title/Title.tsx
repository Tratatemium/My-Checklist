import { useState } from "react";

import { Button } from "../Button/Button";
import { EditIcon } from "../icons/EditIcon";
import { InputField } from "../InputField/InputField";

import styles from "./Title.module.css";

function Title() {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  return (
    <form className={styles.titleWrapper}>
      {!isEditing ? (
        <h2 className={styles.title}>{value || "My Checklist"}</h2>
      ) : (
        <InputField
          autoFocus
          variant="title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <Button
        variant="subtle"
        type="button"
        onClick={() => setIsEditing((prev) => !prev)}
      >
        <EditIcon />
      </Button>
    </form>
  );
}

export { Title };
