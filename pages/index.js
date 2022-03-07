import Page from '@components/page'
import Link from '@components/link'
import Entry from '@components/entry'

// Data
import { data as items } from '@data/film.json'

const About = () => {
  return (
    <Page title="Chvn®" description="chvn.me/">
      <h1>Chandler Chappell</h1>
      <h4>Front-end Developer, Designer, & Director</h4>
      <br />
      <br />
      <br />

      <h5>About.</h5>
      <p>
        I've been a designer for nearly 7 years so <strong>front-end</strong>{' '}
        code is where my most valuable set of skills live. I am currently
        studying to be full-stack and building{' '}
        <Link underline href="https://vercel.com" external>
          <strong>Atelier Design Yield</strong>
        </Link>
        ® [ ady® ], to calm the noise within design.
      </p>

      <br />
      <br />
      <h5>Connect.</h5>
      <p className="links">
        <Link href="https://twitter.com/chv_ndler">Twitter</Link>{' '}
        <Link href="https://github.com/chvndler">GitHub</Link>{' '}
        <Link href="https://www.instagram.com/chv.ndler/">Instagram</Link>
      </p>

      <br />
      <br />
      <h5>Current Projects.</h5>
      <article>
        {items.map(entry => {
          return (
            <Entry
              key={entry.title}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              description={entry.description}
            />
          )
        })}
      </article>
    </Page>
  )
}

export default About
