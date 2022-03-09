import { memo } from 'react'
import styles from './gradient.module.css'

const Gradient = () => {
  return (
    <div className={styles.imagediv}>
      {/* <!--
      <img
        className={styles.footimage}
        src="https://cdn.ady.systems/chvn/assets/gr.png"
        width="100vw"
        height="auto"
      />
      --> */}
    </div>
  )
}

Gradient.displayName = 'Gradient'
export default memo(Gradient)
