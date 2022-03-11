import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';
import Head from 'next/head';

import Page from '@components/page';
import Entry from '@components/entry';

// Data
// import { data as items } from '@data/music.json';

const Music = () => {
  const fetcher = url => fetch(url).then(r => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  return (
    <Page title="Music" description="Collection of exemplary electronic music.">
      {/* <!--
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
          );
        })}
      </article>
      --> */}

      <div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={
            data?.isPlaying
              ? data.songUrl
              : 'https://open.spotify.com/user/1218029183'
          }
          className="relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72"
        >
          <div className="w-16">
            {data?.isPlaying ? (
              <img
                className="w-16 shadow-sm"
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            ) : (
              <SiSpotify size={64} color={'#1ED760'} />
            )}
          </div>

          <div className="flex-1">
            <p className="font-bold component text-gray-200	">
              {data?.isPlaying ? data.title : 'Not Listening'}
            </p>
            <p className="text-xs font-dark text-gray-200	">
              {data?.isPlaying ? data.artist : 'Spotify'}
            </p>
          </div>
          <div className="absolute bottom-1.5 right-1.5">
            <SiSpotify size={20} color={'#1ED760'} />
          </div>
        </a>
      </div>
    </Page>
  );
};

export default Music;
