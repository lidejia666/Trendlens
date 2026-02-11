import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <span className={styles.brand}>加载中...</span>
    </div>
  )
}
