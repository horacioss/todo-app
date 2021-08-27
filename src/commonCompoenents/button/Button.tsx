import styles from "./Button.module.scss";

export const Button = (title: string) => {
  return <button className={styles.mybutton}>{title}</button>;
};
