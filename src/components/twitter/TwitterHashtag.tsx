import React from 'react';
import { TwitterHashtagButton } from 'react-twitter-embed';

type TwitterHashtagProps = { tweetTag?: string };

export const TwitterHashtag = ({ tweetTag, ...props }: TwitterHashtagProps) => {
  return (
    <>
      <TwitterHashtagButton
        onLoad={function noRefCheck() {}}
        options={{
          buttonHashtag: undefined,
          screenName: undefined,
          size: 'large',
        }}
        tag={tweetTag}
      />
    </>
  );
};
