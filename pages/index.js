import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page title="Chvn®" description="chvn.me/">
      <h1>Chandler Chappell</h1>
      <h4>Front-end Developer, Designer, & Director</h4>
      <br />

      <h5>About</h5>
      <p>
        I've been a designer for nearly 7 years so <strong>front-end</strong>{' '}
        code is where my most valuable set of skills live. I am currently
        studying to be full-stack and building{' '}
        <Link underline href="https://vercel.com" external>
          <strong>Atelier Design Yield</strong>
        </Link>
        ® [ ady® ], to calm the noise within the design.
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
