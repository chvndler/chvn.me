import { memo } from 'react'
import Link from 'next/link'

import styles from './footer.module.css'
import { ChLogo as LogoIcon } from '@components/icons'

const Footer = () => {
  return (
    <nav className={styles.footernav}>
      <div className={styles.footer}>
        <Link href="/">
          <a aria-label="Navigate Home" className={styles.logo}>
            <LogoIcon />
          </a>
        </Link>

        <h5>Connect</h5>
        <Link href="/">
          <a aria-label="Twitter" className={styles.footlink}>
            Connect
          </a>
        </Link>

        <h5>Information</h5>
        <Link href="/">
          <a aria-label="Twitter" className={styles.footlink}>
            Connect
          </a>
        </Link>
      </div>
    </nav>
  )
}

Footer.displayName = 'Footer'
export default memo(Footer)
