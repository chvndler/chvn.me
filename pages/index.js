import Page from '@components/page'
import Link from '@components/link'
import { Container } from '@system/container'

const About = () => {
  return (
    <Page description="making cool.">
      <Container size="3">
        <h1>Chandler Chappell</h1>
        <p>
          Frontend developer, designer, and director. We are the distracted
          generation, so I push truth over all else. Currently building{' '}
          <Link underline href="https://vercel.com" external>
            <strong>Atelier Design Yield</strong>
          </Link>
          ® [ ady® ], to calm the noise within the design culture.
          <br />
          <br />
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
      </Container>
    </Page>
  )
}

export default About