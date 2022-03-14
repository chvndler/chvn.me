import Page from '@components/page';
import Entry from '@components/entry';

// Data
import { data as items } from '@data/film.json';

const Artwork = () => {
  return (
    <Page title="Graphic Design & Art" description="Collection of my creations.">
      <article>
        {items.map(entry => {
          return <Entry key={entry.title} title={entry.title} image={entry.image} href={entry.url} description={entry.description} />;
        })}
      </article>
    </Page>
  );
};

export default Artwork;
