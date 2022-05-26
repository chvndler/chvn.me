import React from 'react';
import { Flex } from '@/system';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export const AppLogo = ({ label = 'Home' }: { label?: string }) => (
  <AccessibleIcon label={label}>
    <Flex css={{ align: 'center', alignItems: 'center' }}>
      <svg width="30" height="30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#A493F8"
          d="M30.6,0.4H9.4c-5,0-9,4-9,9v21.2c0,5,4,9,9,9h21.2c5,0,9-4,9-9V9.4C39.6,4.4,35.6,0.4,30.6,0.4z M19.8,25.2
      	c3.4,0,5.4-0.9,6.3-3.2h12.1c-0.7,2.5-1.9,4.4-4.6,5.8c-2.6,1.3-6.8,2.1-13.3,2.1c-6.5,0-18.6-0.3-18.6-9.9c0-9.6,12.1-9.9,18.6-9.9
      	c6.5,0,16.5,0.5,17.9,7.9H26.1c-0.3-1.3-1.6-3.2-5.8-3.2c-4.4,0-7.2,1.5-7.2,5.2C13.2,23.8,15.9,25.2,19.8,25.2z"
        />
        <path
          fill="#CEFE71"
          d="M38.3,22c-0.7,2.5-1.9,4.4-4.6,5.8c-2.6,1.3-6.8,2.1-13.3,2.1c-6.5,0-18.6-0.3-18.6-9.9
      		c0-9.6,12.1-9.9,18.6-9.9c6.5,0,16.5,0.5,17.9,7.9H26.1c-0.3-1.3-1.6-3.2-5.8-3.2c-4.4,0-7.2,1.5-7.2,5.2s2.7,5.2,6.6,5.2
      		c3.4,0,5.4-0.9,6.3-3.2H38.3z"
        />
      </svg>
    </Flex>
  </AccessibleIcon>
);
