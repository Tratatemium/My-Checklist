import styles from "./InputField.module.css";

function InputField({
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

export { InputField };
