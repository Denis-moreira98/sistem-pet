/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export function Container({ children }) {
   return <main className={styles.container}>{children}</main>;
}
