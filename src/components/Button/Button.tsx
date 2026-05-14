import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: "default" | "neutral" | "subtle";
}

function Button({
  children,
  variant,
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
      {children}
    </button>
  );
}

export { Button };
