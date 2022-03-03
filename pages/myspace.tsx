// REACT & NEXT IMPORTS
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

// ATELIER® DESIGN SYSTEM
import { Box } from '@system/box'
import { Container } from '@system/container'
import { Section } from '@system/section'
import { Heading } from '@system/heading'
import { Text } from '@system/text'

// STITCHES.DEV
import { styled } from '@stitches/react'

const Card = styled('div', {
  display: 'flex',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none',
  height: '300px'
})

const SmallButton = styled('button', {
  borderRadius: '6px',
  height: 'auto',
  marginLeft: '-1px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  fontSize: '12px',
  lineHeight: '1.2',
  width: 'auto',
  bc: '$slate4',
  border: '1px solid',
  borderColor: '$slate10'
})

const MySpace: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shop.</title>
      </Head>

      <Box css={{ overflow: 'auto', height: '100vh' }}>
        <Section size="3">
          <Container
            size="3"
            css={{
              ai: 'center',
              paddingTop: '100px',
              margin: 'auto',
              textAlign: 'center'
            }}
          >
            <Heading size="4">The design yield.</Heading>
            <Text
              as="p"
              css={{
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '4',
                color: '$slate9'
              }}
            >
              Shop all.
            </Text>
          </Container>
        </Section>
      </Box>
    </div>
  )
}

export default MySpace
