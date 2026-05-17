import { CheckIcon } from "../../icons/CheckIcon";
import styles from "./Checkbox.module.css";

function Checkbox({
  type = "checkbox",
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <span className={styles.wrapper}>
      <input
        className={`${styles.input} ${className ?? ""}`}
        type={type}
        {...props}
      />
      <CheckIcon className={styles.check} />
    </span>
  );
}

export { Checkbox };
