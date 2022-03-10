import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Get in touch.">
      <article>
        <p>Get in touch.</p>

        <blockquote>
          <a href="mailto:chan@ady.world?subject=Hello" className="reset">
            chan@ady.world
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
