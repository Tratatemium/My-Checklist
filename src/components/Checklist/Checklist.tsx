import styles from "./Checklist.module.css";

function Checklist({
  type = "text",
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${styles.input} ${className ?? ""}`}
      type={type}
      {...props}
    />
  );
}

export { Checklist };
