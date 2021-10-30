import styles from './button-noFill.module.css';

export default function ButtonNoFill({ children }) {
  return <button className={styles.navButton}>{children}</button>;
}
