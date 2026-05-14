import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "neutral" | "subtle";
  text: string;
}

function Button({
  variant,
  text,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
}

export { Button };
