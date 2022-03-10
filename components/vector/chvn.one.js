import styles from './vector.module.css'

const SignatureOne = () => {
  return (
    <div className={styles.box}>
      <nav className={styles.footernav}>
        <div className={styles.footer}>
          <div className={styles.footlink}>
            <p className={styles.copyright}>
              Copyright © 2022 |{' '}
              <a href="https://github.com/chvndler/chvn.me">GitHub</a>
            </p>
          </div>
        </div>
      </nav>

      <div className={styles.signature_logo}>
        <svg viewBox="0 0 100 30" fill="var(--volt)">
          <g>
            <path
              d="M47.5,19.3c-0.2,0.3-0.3,0.5-0.2,1.1c0.1,0.5,0.3,0.8,0.7,1.5c0.4,0.6,0.7,1.1,1.3,1.8
    		c0.5,0.7,0.9,1.1,1.4,1.8c0.6,0.7,0.8,1,1.4,1.6c0.5,0.6,0.8,0.8,1.4,1.2c0.6,0.3,0.9,0.4,1.4,0.5c0.6,0.1,0.9,0.1,1.4-0.1
    		c0.5-0.2,0.9-0.3,1.3-0.7c0.5-0.4,0.7-0.7,1-1.3c0.3-0.6,0.2-1.1,0.3-1.9c0.1-0.8,0.2-1.2,0.3-2c0.1-0.8,0.2-1.2,0.3-1.9
    		c0.1-0.6,0.1-0.9,0.1-1.4c0-0.5,0-0.6,0-0.9c0-0.2-0.1-0.3-0.1-0.4c-0.1-0.1-0.2,0.1-0.2,0.1c0,0,0,0.1,0,0c0-0.2,0.2-0.7,0.2-0.9
    		c-0.1-0.2-0.2-0.2-0.5-0.1c-0.2,0-0.4,0.2-0.6,0.4c-0.2,0.2-0.3,0.2-0.5,0.5c-0.2,0.3-0.3,0.5-0.4,1c-0.1,0.5-0.2,0.8-0.3,1.5
    		c-0.1,0.7-0.1,1.1-0.2,1.8c-0.1,0.7-0.2,1.2-0.4,1.9c-0.2,0.7-0.4,1-0.5,1.5c-0.1,0.5-0.1,0.7-0.1,0.9c0,0.3,0,0.3-0.1,0.3
    		c-0.1,0-0.1,0-0.4-0.1c-0.2-0.1-0.4-0.2-0.7-0.5c-0.4-0.3-0.6-0.4-1.1-0.8c-0.5-0.4-0.8-0.7-1.3-1.4c-0.5-0.6-0.8-1.1-1.2-1.8
    		c-0.4-0.7-0.6-1.2-0.9-1.9c-0.4-0.6-0.5-0.9-0.9-1.3c-0.4-0.3-0.6-0.4-0.9-0.4C48,18.9,47.7,19,47.5,19.3"
            />
            <path
              d="M62.1,18.2c-0.3,0.2-0.4,0.5-0.5,1c-0.1,0.5-0.1,0.8,0,1.5c0.1,0.7,0.3,1.1,0.6,1.8c0.3,0.7,0.4,1.1,0.7,1.6
    		c0.4,0.6,0.6,0.8,1,1.2c0.5,0.4,0.7,0.5,1.2,0.6c0.5,0.1,0.9,0.1,1.4,0c0.6-0.2,0.9-0.3,1.3-0.8c0.5-0.5,0.5-0.9,0.9-1.5
    		c0.4-0.7,0.5-1.1,0.9-1.8c0.4-0.7,0.6-1.1,1.1-1.6c0.4-0.5,0.7-0.7,1.1-1c0.4-0.3,0.5-0.4,0.8-0.5c0.3-0.1,0.4,0,0.7,0.2
    		s0.4,0.4,0.8,0.7c0.4,0.4,0.7,0.6,1.2,1.1c0.5,0.5,0.8,0.8,1.3,1.4c0.5,0.6,0.8,0.9,1.3,1.5c0.5,0.6,0.8,0.9,1.3,1.4
    		c0.5,0.5,0.7,0.9,1.2,1.3c0.5,0.4,0.8,0.6,1.2,0.8c0.5,0.2,0.8,0.2,1.1,0.1c0.3-0.1,0.5-0.3,0.5-0.7c0-0.3-0.1-0.6-0.3-1
    		c-0.2-0.4-0.4-0.7-0.9-1.1c-0.4-0.4-0.8-0.5-1.3-1c-0.5-0.5-0.8-0.7-1.3-1.3c-0.5-0.6-0.7-0.9-1.2-1.5c-0.5-0.6-0.7-0.9-1.2-1.5
    		c-0.5-0.6-0.7-1-1.3-1.4c-0.6-0.5-0.9-0.7-1.6-0.9c-0.7-0.2-1.1-0.3-1.8-0.2c-0.7,0.1-1.1,0.2-1.8,0.6c-0.6,0.4-0.9,0.8-1.4,1.4
    		c-0.5,0.6-0.8,1.1-1.3,1.7c-0.5,0.7-0.8,1.1-1.2,1.6c-0.4,0.6-0.7,0.8-0.9,1.2c-0.2,0.4-0.2,0.6-0.2,0.8c0,0.2,0,0.2,0,0.1
    		c0-0.1,0-0.2-0.1-0.4c-0.1-0.3-0.1-0.5-0.3-1c-0.2-0.5-0.3-0.8-0.5-1.4c-0.2-0.6-0.2-1.1-0.4-1.6c-0.2-0.6-0.3-0.8-0.6-1.2
    		c-0.3-0.4-0.4-0.6-0.7-0.7C62.8,17.9,62.4,17.9,62.1,18.2"
            />
            <g>
              <path
                d="M79.4,18.2c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.1,0.3-0.3,0.5-0.3c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0,0.4,0,0.6,0.1
    			c0.2,0.1,0.4,0.2,0.5,0.3c0.1,0.1,0.3,0.3,0.3,0.5c0.1,0.2,0.1,0.4,0.1,0.6c0,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.2,0.4-0.3,0.5
    			c-0.1,0.1-0.3,0.3-0.5,0.3c-0.2,0.1-0.4,0.1-0.6,0.1c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.3-0.3-0.5
    			c-0.1-0.2-0.1-0.4-0.1-0.6C79.2,18.6,79.3,18.4,79.4,18.2z M79.6,19.4c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.4,0.3
    			c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4,0,0.5-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.1-0.3,0.1-0.5
    			c0-0.2,0-0.4-0.1-0.5c-0.1-0.2-0.2-0.3-0.3-0.4c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.4,0-0.5,0.1
    			c-0.2,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.2-0.1,0.3-0.1,0.5C79.5,19,79.6,19.2,79.6,19.4z M81,17.9
    			c0.2,0,0.4,0,0.5,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1l0.5,0.8h-0.3L80.8,19h-0.3v0.8h-0.3
    			v-1.9H81z M80.8,18.7c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2
    			c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0h-0.4v0.6H80.8z"
              />
            </g>
            <g>
              <path
                d="M23.8,15.1c0.4,1,0.6,1.7,1.1,2.9c0.5,1.2,0.7,2,1.2,3.2c0.1,0.1,0.1,0.3,0.2,0.4c0,0,0,0,0,0
    			c0.1,0.9,0.2,1.3,0.2,2.1c0,0.8,0,1.2-0.2,1.9c-0.2,0.7-0.2,1.1-0.6,1.8c-0.4,0.7-0.6,1-1.3,1.6c-0.4,0.4-0.7,0.7-1.2,0.9h2.2
    			c0.7-0.6,1.1-1,1.6-1.8c0.5-0.8,0.7-1.3,1-2.2c0-0.1,0.1-0.2,0.1-0.4c0.1,0.3,0.3,0.6,0.5,1c0.4,0.9,0.5,1.4,0.9,2
    			c0.4,0.6,0.6,0.8,1.1,1.1c0.5,0.2,0.8,0.2,1.3,0.1c0.5-0.1,0.8-0.3,1.2-0.7c0.4-0.4,0.5-0.8,0.7-1.4c0.2-0.6,0.1-1.1,0.3-1.8
    			c0.2-0.7,0.3-1.2,0.6-1.8c0.3-0.6,0.5-0.9,0.8-1.3c0.3-0.4,0.5-0.5,0.8-0.7c0.3-0.2,0.4-0.2,0.7-0.1c0.3,0.1,0.4,0.2,0.8,0.4
    			c0.3,0.2,0.5,0.4,1,0.8c0.4,0.4,0.7,0.7,1.1,1.2c0.5,0.5,0.7,0.9,1.1,1.4c0.4,0.6,0.6,0.9,1.1,1.5c0.4,0.6,0.6,0.9,1.1,1.3
    			c0.5,0.4,0.7,0.6,1.3,0.9c0.4,0.2,0.7,0.3,1.1,0.4h2c0.4-0.1,0.7-0.3,1-0.5c0.4-0.3,0.5-0.5,0.6-0.9c0.1-0.3,0.1-0.6,0-0.9
    			c-0.1-0.3-0.4-0.5-0.7-0.6c-0.3-0.1-0.5,0-0.7,0c-0.3,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.3-0.5,0.4C46.2,27.9,46.2,28,46,28
    			c-0.2,0-0.3-0.1-0.6-0.3c-0.3-0.2-0.4-0.4-0.8-0.7c-0.4-0.4-0.6-0.6-1-1c-0.4-0.5-0.6-0.8-1.1-1.4c-0.4-0.6-0.7-0.9-1.1-1.6
    			c-0.5-0.6-0.7-1-1.2-1.5c-0.5-0.5-0.8-0.8-1.5-1.1c-0.6-0.3-1-0.4-1.8-0.4c-0.7,0-1.1,0-1.8,0.3c-0.7,0.3-1,0.6-1.5,1.1
    			c-0.5,0.6-0.7,1-1.1,1.8c-0.4,0.7-0.6,1.2-0.9,2c-0.3,0.8-0.6,1.2-0.7,1.9c0,0.1,0,0.2-0.1,0.3c-0.3-0.4-0.6-0.7-1-1.4
    			c-0.5-0.8-0.8-1.3-1.2-2.3c-0.1-0.3-0.3-0.6-0.4-0.9c0-0.4-0.1-0.8-0.2-1.4c-0.1-0.9-0.2-1.4-0.5-2.4c-0.2-0.9-0.4-1.4-0.6-2.3
    			c-0.2-0.9-0.4-1.3-0.6-2.1c-0.2-0.8-0.2-1.2-0.4-1.8c-0.2-0.6-0.3-0.9-0.6-1.3c-0.3-0.4-0.5-0.5-1-0.5c-0.4,0-0.9,0.1-1.2,0.4
    			c-0.3,0.4-0.4,0.7-0.3,1.4C23,13.7,23.4,14.1,23.8,15.1z"
              />
              <path
                d="M1.5,30H3c-0.6-0.6-0.9-1-1.2-1.9c-0.3-1-0.4-1.6-0.3-2.9c0.1-1.3,0.3-2.1,0.9-3.5c0.6-1.4,1-2.3,1.9-3.7
    			c0.9-1.4,1.5-2.2,2.6-3.4c1.1-1.2,1.7-1.8,2.8-2.6c1.1-0.8,1.6-1.1,2.6-1.5c0.9-0.4,1.4-0.3,2.2-0.4c0.7-0.1,1,0.1,1.5,0
    			c0.5-0.1,0.7-0.1,1-0.4c0.2-0.3,0.4-0.6,0.2-1C16.9,8.4,16.6,8.1,16,8c-0.6-0.1-1.1-0.1-1.9,0.2c-0.9,0.2-1.4,0.4-2.5,1
    			c-1,0.6-1.6,1-2.7,2c-1.1,1-1.7,1.5-2.8,2.8c-1.1,1.3-1.7,2.1-2.7,3.6c-0.9,1.5-1.4,2.4-2,3.9c-0.6,1.5-0.8,2.3-1,3.8
    			c-0.1,1.4-0.1,2.1,0.3,3.3C1,29.1,1.2,29.6,1.5,30z"
              />
            </g>
            <path
              d="M99,21.2c-0.6-0.2-1.3,0-2.8,0.3c-1.5,0.3-2.5,0.6-4.9,1.1c-2.4,0.5-4,0.8-7.1,1.4c-3.1,0.6-5,0.9-8.4,1.5
    		c-3.4,0.6-5.2,1-8.5,1.5c-3.3,0.5-5,0.7-7.9,1.1c-2.9,0.4-4.1,0.6-6.6,0.9c-2.5,0.3-3.7,0.6-5.8,0.8C45.8,29.9,44.9,30,44,30h13.5
    		c0.7-0.1,1.4-0.2,2.3-0.4c2.9-0.5,4.6-0.7,7.9-1.2c3.3-0.6,5.1-1,8.5-1.6c3.4-0.6,5.3-0.9,8.4-1.4c3.1-0.5,4.8-0.7,7.2-1.2
    		c2.4-0.4,3.4-0.6,4.9-1c1.5-0.4,2.2-0.5,2.7-0.9C99.8,21.9,99.7,21.3,99,21.2z"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default SignatureOne
