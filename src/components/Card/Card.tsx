import { ListItem } from "../ListItem/ListItem";

import styles from "./Card.module.css";

function Card() {
  return (
    <input
      className={`${styles.input} ${className ?? ""}`}
      type={type}
      {...props}
    />
  );
}

export { Card };
