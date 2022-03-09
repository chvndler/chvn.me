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

        <div className={styles.footlink}>
          <p className={styles.copyright}>
            Copyright © 2022 |{' '}
            <a href="https://github.com/chvndler/chvn.me">GitHub</a>
          </p>
        </div>
      </div>
    </nav>
  )
}

Footer.displayName = 'Footer'
export default memo(Footer)
