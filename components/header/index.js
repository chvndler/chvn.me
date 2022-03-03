import { memo } from 'react'
import Link from 'next/link'
import { Container } from '@system/container'

import styles from './header.module.css'
// import { Butterfly as LogoIcon } from '@components/icons'
import { ChLogo as LogoIcon } from '@components/icons'
import Command from '@components/command'

const Header = ({ title, content }) => {
  return (
    <Container size="3">
      <nav className={styles.nav}>
        <div className={styles.header}>
          <Link href="/">
            <a aria-label="Navigate Home" className={styles.logo}>
              <LogoIcon />
            </a>
          </Link>

          <Command />

          {title && <div className={styles.content}>{title}</div>}
        </div>
      </nav>
    </Container>
  )
}

Header.displayName = 'Header'
export default memo(Header)
