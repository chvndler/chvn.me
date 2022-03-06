import Header from '@components/header'
import Page from '@components/page'
import Link from '@components/link'
import { Container } from '@system/container'

const About = () => {
  return (
    <Page>
      <h1>Chandler Chappell</h1>
      <h4>Frontend Developer, Designer, and Director.</h4>

      <p>
        Currently building{' '}
        <Link underline href="https://vercel.com" external>
          <strong>Atelier Design Yield</strong>
        </Link>
        ® [ ady® ], to calm the noise within the design culture.
      </p>

      <br />
      <br />
      <p>
        <Link underline href="/music">
          Music
        </Link>
        .{' '}
        <Link underline href="/video">
          Fashion
        </Link>
        .{' '}
        <Link underline href="/music">
          Code
        </Link>
        .
      </p>
    </Page>
  )
}

export default About
