import styles from "./Button.module.scss";

const somefunc = () => console.log("Hello");

export const Button = (title: string) => {
  return <button className={styles.mybutton}>{title}</button>;
};
