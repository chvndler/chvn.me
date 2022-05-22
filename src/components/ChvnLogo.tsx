import React from 'react';
import { Flex } from '@/system';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export const ChvnLogo = ({ label = 'Home' }: { label?: string }) => (
  <AccessibleIcon label={label}>
    <Flex css={{ align: 'center', alignItems: 'center' }}>
      <svg width="90" height="30" viewBox="0 0 60 20" fill="#837e95" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7,6.7C6.9,6.4,6.7,6.3,6.4,6.3C6.2,6.3,6,6.4,5.9,6.5C5.8,6.6,5.7,6.8,5.6,7.1C5.6,7.4,5.5,7.7,5.5,8.2c0,0.5,0,1.1,0,1.8
    		c0,0.7,0,1.3,0,1.8c0,0.5,0.1,0.9,0.1,1.1c0.1,0.3,0.2,0.5,0.3,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3,0,0.4-0.1
    		c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.2,0.1-0.5,0.1-0.8c0-0.3,0-0.8,0-1.3H10v0.8c0,0.8-0.1,1.4-0.3,1.8c-0.2,0.5-0.5,0.9-0.8,1.1
    		c-0.3,0.3-0.7,0.5-1.1,0.6c-0.4,0.1-0.9,0.1-1.3,0.1c-0.8,0-1.4-0.1-1.9-0.3c-0.5-0.2-0.9-0.5-1.2-1c-0.3-0.4-0.5-1-0.6-1.7
    		C2.6,11.9,2.6,11,2.6,10c0-1,0.1-1.9,0.2-2.6c0.1-0.7,0.3-1.3,0.6-1.7c0.3-0.4,0.7-0.8,1.2-1c0.5-0.2,1.1-0.3,1.8-0.3
    		C7,4.4,7.6,4.5,8,4.7c0.4,0.2,0.8,0.4,1.1,0.7C9.4,5.7,9.6,6,9.7,6.4c0.1,0.4,0.2,0.9,0.2,1.4v0.7H7.2V7.9C7.2,7.3,7.1,6.9,7,6.7z"
        />
        <path
          d="M13,4.7v3.5h0c0.2-0.4,0.5-0.7,0.9-0.9c0.3-0.2,0.7-0.2,1-0.2c0.3,0,0.5,0,0.8,0.1c0.3,0.1,0.5,0.2,0.7,0.4
    		c0.2,0.2,0.4,0.4,0.5,0.7C16.9,8.5,17,8.8,17,9.3v6.1h-2.7V10c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.2-0.3-0.2-0.5-0.2
    		c-0.2,0-0.4,0.1-0.5,0.2C13,9.4,13,9.7,13,10v5.4h-2.7V4.7H13z"
        />
        <path
          d="M21.3,15c0-0.2,0-0.3-0.1-0.5h0c-0.2,0.4-0.4,0.6-0.7,0.8c-0.3,0.2-0.7,0.3-1.1,0.3c-0.4,0-0.8-0.1-1-0.2
    		c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.3-0.5-0.4-0.8c-0.1-0.3-0.1-0.6-0.1-1c0-0.4,0-0.7,0.1-1c0.1-0.3,0.2-0.5,0.4-0.7
    		c0.2-0.2,0.4-0.4,0.7-0.5c0.3-0.1,0.7-0.3,1.1-0.4l1.1-0.3c0.3-0.1,0.5-0.2,0.6-0.3c0.1-0.1,0.2-0.3,0.2-0.6c0-0.5-0.2-0.8-0.7-0.8
    		c-0.3,0-0.5,0.1-0.6,0.2c-0.1,0.1-0.2,0.4-0.2,0.9h-2.3c0-0.6,0.1-1.1,0.3-1.4C18,8,18.2,7.7,18.5,7.5c0.3-0.2,0.6-0.3,1-0.4
    		c0.4-0.1,0.7-0.1,1-0.1c0.5,0,0.9,0,1.3,0.1c0.4,0.1,0.7,0.2,1,0.4c0.3,0.2,0.5,0.5,0.7,0.8c0.2,0.3,0.2,0.8,0.2,1.3v4
    		c0,0.4,0,0.7,0,1c0,0.3,0.1,0.5,0.2,0.8h-2.6C21.4,15.3,21.3,15.1,21.3,15z M21.1,13.5c0.1-0.2,0.2-0.6,0.2-1v-1h0
    		c-0.1,0.1-0.2,0.2-0.4,0.2c-0.2,0-0.3,0.1-0.5,0.2c-0.2,0.1-0.4,0.2-0.4,0.4c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.3,0.1,0.5,0.2,0.6
    		c0.1,0.2,0.3,0.2,0.5,0.2C20.7,13.8,20.9,13.7,21.1,13.5z"
        />
        <path
          d="M27,7.3v1h0C27.4,7.4,28,7,29,7c0.3,0,0.6,0,0.8,0.1c0.3,0.1,0.5,0.2,0.7,0.4c0.2,0.2,0.3,0.4,0.5,0.7
    		c0.1,0.3,0.2,0.6,0.2,1.1v6.1h-2.7V10c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.2-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2
    		c-0.1,0.2-0.2,0.4-0.2,0.7v5.4h-2.7V7.3H27z"
        />
        <path
          d="M38.3,4.7v10.7h-2.6v-1.1h0c-0.2,0.5-0.4,0.8-0.7,1c-0.3,0.2-0.7,0.3-1.2,0.3c-0.9,0-1.5-0.4-1.9-1.1
    		c-0.4-0.7-0.5-1.8-0.5-3.3c0-0.8,0.1-1.4,0.2-1.9c0.1-0.5,0.3-0.9,0.5-1.3c0.2-0.3,0.5-0.6,0.8-0.7c0.3-0.1,0.7-0.2,1-0.2
    		c0.4,0,0.7,0.1,1,0.2c0.3,0.2,0.5,0.5,0.7,0.9h0V4.7H38.3z M34.1,12.4c0,0.3,0.1,0.5,0.1,0.7s0.1,0.3,0.2,0.4
    		c0.1,0.1,0.2,0.1,0.4,0.1c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3,0-0.7,0-1.1
    		c0-0.4,0-0.8,0-1.1c0-0.3-0.1-0.5-0.1-0.7c-0.1-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.3,0-0.4,0.1
    		c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.3,0,0.7,0,1.1C34.1,11.8,34.1,12.1,34.1,12.4z"
        />
        <path d="M41.6,4.7v10.7h-2.7V4.7H41.6z" />
        <path
          d="M44.6,12.8c0,0.4,0.1,0.7,0.2,0.9c0.2,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3s0.2-0.6,0.2-1.1h2.4c0,1-0.3,1.8-0.8,2.3
    		c-0.5,0.5-1.3,0.8-2.4,0.8c-0.7,0-1.2-0.1-1.6-0.2c-0.4-0.1-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.8-0.6-1.3c-0.1-0.5-0.2-1.2-0.2-2
    		c0-0.8,0.1-1.4,0.2-2c0.1-0.5,0.3-1,0.6-1.3c0.3-0.3,0.6-0.6,1.1-0.7c0.4-0.2,1-0.2,1.6-0.2c0.5,0,1,0.1,1.4,0.2
    		c0.4,0.1,0.7,0.3,1,0.7c0.3,0.3,0.5,0.7,0.6,1.2c0.1,0.5,0.2,1.1,0.2,1.9v0.8h-4V12.8z M45.9,9c-0.1-0.2-0.3-0.3-0.6-0.3
    		c-0.3,0-0.5,0.1-0.6,0.3c-0.1,0.2-0.2,0.5-0.2,0.9v0.4h1.5V9.9C46.1,9.5,46,9.2,45.9,9z"
        />
        <path
          d="M51.3,7.3v1.3h0c0.2-0.5,0.4-0.9,0.7-1.1C52.4,7.2,52.7,7,53.1,7h0.4v2.5c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0
    		c-0.5,0-0.9,0.1-1.1,0.3c-0.3,0.2-0.4,0.6-0.4,1.1v4.4h-2.7V7.3H51.3z"
        />
        <path
          d="M53.9,15.2c-0.4-0.2-0.7-0.5-0.9-0.8c-0.2-0.4-0.3-0.7-0.3-1.2s0.1-0.8,0.3-1.2c0.2-0.4,0.5-0.6,0.9-0.8
    		c0.4-0.2,0.8-0.3,1.2-0.3c0.4,0,0.8,0.1,1.2,0.3c0.4,0.2,0.7,0.5,0.9,0.8c0.2,0.4,0.3,0.7,0.3,1.2s-0.1,0.8-0.3,1.2
    		c-0.2,0.4-0.5,0.6-0.9,0.8s-0.8,0.3-1.2,0.3C54.6,15.6,54.2,15.5,53.9,15.2z M56,14.9c0.3-0.2,0.5-0.4,0.7-0.7s0.3-0.6,0.3-1
    		s-0.1-0.7-0.3-1c-0.2-0.3-0.4-0.5-0.7-0.7c-0.3-0.2-0.6-0.3-1-0.3c-0.4,0-0.7,0.1-1,0.3c-0.3,0.2-0.5,0.4-0.7,0.7
    		c-0.2,0.3-0.3,0.6-0.3,1s0.1,0.7,0.3,1s0.4,0.5,0.7,0.7c0.3,0.2,0.6,0.3,1,0.3C55.4,15.2,55.7,15.1,56,14.9z M55.9,14.3
    		c-0.2,0.2-0.5,0.3-0.9,0.3c-0.4,0-0.7-0.1-0.9-0.3c-0.2-0.2-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1c0.2-0.2,0.5-0.3,0.9-0.3
    		c0.4,0,0.7,0.1,0.9,0.3c0.2,0.2,0.3,0.4,0.3,0.6h-0.6c0-0.3-0.2-0.4-0.6-0.4c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.6
    		c0,0.3,0.1,0.5,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.6-0.2,0.6-0.5h0.6C56.3,13.9,56.2,14.1,55.9,14.3z"
        />
      </svg>
    </Flex>
  </AccessibleIcon>
);
