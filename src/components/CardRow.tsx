import React from 'react';

// @/system
import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Text } from '@/system/text';
import { Grid } from '@/system/grid';

import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$gray2',
  border: 'solid 1px $slate7',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '4px',
  marginBottom: '0',
  padding: '12px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '150px',
});

export const CardRow = () => {
  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '80px' }}>
        <Heading size="1" css={{ px: '8px', marginBottom: '10px', fontWeight: '600', lineHeight: '2' }}>
          Projects
        </Heading>
        <Grid
          css={{
            gap: '4px',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr 1fr',
            },
          }}>
          {/* PRODUCT ROW ONE */}
          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '18px', marginRight: '18px' }}>
                <Text size="3" css={{ fontWeight: '700', lineHeight: '1.8' }}>
                  Atelier®
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.2' }}>
                  An ongoing web project w/ Adobe® After Effects.
                  <br />
                  <br />
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '18px', marginRight: '18px' }}>
                <Text size="3" css={{ fontWeight: '700', lineHeight: '1.8' }}>
                  Next.Start
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.2' }}>
                  A minimal Next.js starter project.
                  <br />
                  <br />
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '18px', marginRight: '18px' }}>
                <Text size="3" css={{ fontWeight: '700', lineHeight: '1.8' }}>
                  SFX.001
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.2' }}>
                  Sound design for your open-source projects.
                  <br />
                  <br />
                </Text>
              </Box>
            </Card>
          </Box>

          {/* PRODUCT ROW ONE */}
          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '18px', marginRight: '18px' }}>
                <Text size="3" css={{ fontWeight: '700', lineHeight: '1.8' }}>
                  Atelier®
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.2' }}>
                  An ongoing web project w/ Adobe® After Effects.
                  <br />
                  <br />
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '18px', marginRight: '18px' }}>
                <Text size="3" css={{ fontWeight: '700', lineHeight: '1.8' }}>
                  Next.Start
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.2' }}>
                  A minimal Next.js starter project.
                  <br />
                  <br />
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', marginLeft: '18px', marginRight: '18px' }}>
                <Text size="3" css={{ fontWeight: '700', lineHeight: '1.8' }}>
                  SFX.001
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.2' }}>
                  Sound design for your open-source projects.
                  <br />
                  <br />
                </Text>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CardRow;
