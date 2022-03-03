// REACT & NEXT IMPORTS
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

// ATELIER® DESIGN SYSTEM
import { Text } from '@system/text'
import { Box } from '@system/box'

// STITCHES
import { styled } from '@stitches/react'

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100%',
  minWidth: '100vw',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: '$translucent',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  saturate: '300%',
  overflowY: 'hidden',
  overflowX: 'hidden'

  // <!-- RADIAL GRADIENT --> //
  /*
  backgroundImage: `
  radial-gradient(circle 300px at 500px 200px, $blue8, $lime9Alpha),
  radial-gradient(circle 500px at calc(100% - 900px) 300px, $lime6, $lime9Alpha),
  radial-gradient(circle 800px at left center, $blue6, $sky9Alpha)
  `,
  */
})

const TextBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem'
})

export default function Cover() {
  return (
    <Box
      css={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '0px',
        height: '100vh',
        width: '100vw',
        zIndex: '0',
        overflowY: 'visible',
        overflowX: 'visible'
      }}
    >
      <Head>
        <title>Atelier®.</title>
      </Head>

      <CoverBox>
        <TextBox>
          <Text css={{ fontWeight: '600', fontSize: '13px', lineHeight: '1' }}>
            An ongoing [ <strong>Web3</strong> ] project.
          </Text>
        </TextBox>
      </CoverBox>
    </Box>
  )
}
