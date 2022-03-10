import styles from './bg.module.css'
import { memo } from 'react'

const BackgroundTwo = ({ children }) => {
  return (
    <div className={styles.background_two}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

// export default BgOne

BackgroundTwo.displayName = 'BackgroundTwo'
export default memo(BackgroundTwo)
