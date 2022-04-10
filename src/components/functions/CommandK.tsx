import React from 'react';
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useMatches, NO_GROUP } from 'kbar';

// ...
export const CommandK = () => {
  // KBar Actions..
  const actions = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'writing words',
      perform: () => (window.location.pathname = 'blog'),
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      keywords: 'email',
      perform: () => (window.location.pathname = 'contact'),
    },
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        {/* <!-- // Handles the show/hide and height animations --> */}
        <KBarPortal>
          {/* <!-- Centers the content --> */}
          <KBarPositioner>
            {/* <!-- // Begin Dialog --> */}
            <KBarSearch />
            {/* <!-- // End Dialog --> */}
          </KBarPositioner>
        </KBarPortal>
      </KBarProvider>
    </>
  );
};
