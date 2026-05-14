import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "neutral" | "subtle";
  text: string;
}

function Button({ variant, text }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>{text}</button>
  );
}

export { Button };
