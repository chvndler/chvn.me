import styles from './bg.module.css'
import { memo } from 'react'

const BackgroundOne = ({ children }) => {
  return (
    <div className={styles.background_one}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

// export default BgOne

BackgroundOne.displayName = 'BackgroundOne'
export default memo(BackgroundOne)
