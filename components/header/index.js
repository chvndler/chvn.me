import { memo } from 'react';
import Link from 'next/link';

import styles from './header.module.css';
// import { ChvnScript as LogoIcon } from '@components/icons';
import Command from '@components/command';

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/">
          <a aria-label="Navigate Home" className={styles.logo}>
            {/* --> <LogoIcon /> --> */}
            <h4>CHVN®</h4>
          </a>
        </Link>

        <div>
          {/* -->
          {title && <div className={styles.content}>{title}</div>}
          --> */}

          <Command />
        </div>
      </div>
    </nav>
  );
};

Header.displayName = 'Header';
export default memo(Header);
