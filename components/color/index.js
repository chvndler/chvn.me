import { BackgroundOne as Background } from '@components/backgrounds'
import styles from './color.module.css'

const Color = ({ background = true, children }) => {
  return (
    <div className={styles.background_wrapper}>
      {background && <Background />}
      {children}
    </div>
  )
}

export default Color
