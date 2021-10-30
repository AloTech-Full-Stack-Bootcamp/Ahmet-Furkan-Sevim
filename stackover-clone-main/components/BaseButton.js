import styles from './base-button.module.css'

export default function BaseButton({children}) {
  return(
    <button className={styles.navButton}>{children}</button>
  )
}