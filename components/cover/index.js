import styles from './cover.module.css'
import { memo } from 'react'

const CoverBox = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.cover_container}>
        <div className={styles.main_content}>{children}</div>
      </div>
    </div>
  )
}

// export default BgOne

CoverBox.displayName = 'CoverBox'
export default memo(CoverBox)
