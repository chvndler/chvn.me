import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

type TweetEmbedProps = { tweetId?: string };

export const TweetEmbed = ({ tweetId, ...props }: TweetEmbedProps) => {
  return (
    <>
      <TwitterTweetEmbed tweetId={tweetId} />
    </>
  );
};
