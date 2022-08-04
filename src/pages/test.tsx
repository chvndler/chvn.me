import { Box, Text, Grid } from '@/system';
import { ScrollBox } from '@/components/ScrollBox';

export default function Test() {
  return (
    <>
      <Box
        css={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '20px',
          height: '100vh',
          width: '100vw',
          zIndex: '0',
          overflowY: 'visible',
          overflowX: 'visible',
          '@sm': {
            overflowY: 'scroll',
            overflowX: 'scroll',
            overflow: 'auto',
          },
        }}>
        <Grid
          align="center"
          columns={{ '@xl': 4, '@lg': 4, '@md': 3, '@sm': 2, '@xs': 1 }}
          css={{ gap: '20px', placeItems: 'stretch', gridAutoRows: 'auto', mb: '2px' }}>
          <Text css={{ color: '$rhythm12', fontSize: '14px', fontWeight: '600', lineHeight: 'normal' }}>Chandler.Chappell</Text>
          <Box
            css={{
              margin: '0',
              height: '90vh',
              '@md': {
                border: '1px solid $mauve9',
                borderRightWidth: '0',
                borderLeftWidth: '0',
                borderBottomWidth: '1px',
                borderTopWidth: '0',
                maxHeight: '300px',
              },
              '@sm': {
                border: '1px solid $mauve9',
                borderRightWidth: '0',
                borderLeftWidth: '0',
                borderBottomWidth: '1px',
                borderTopWidth: '0',
                maxHeight: '300px',
              },
            }}>
            <Text css={{ color: '$rhythm11', fontSize: '14px', fontWeight: '700', lineHeight: 'normal' }}>Design</Text>

            <ScrollBox />
          </Box>

          <Box
            css={{
              margin: '0',
              height: '90vh',
              '@md': {
                border: '1px solid $mauve9',
                borderRightWidth: '0',
                borderLeftWidth: '0',
                borderBottomWidth: '1px',
                borderTopWidth: '0',
                maxHeight: '300px',
              },
              '@sm': {
                border: '1px solid $mauve9',
                borderRightWidth: '0',
                borderLeftWidth: '0',
                borderBottomWidth: '1px',
                borderTopWidth: '0',
                maxHeight: '300px',
              },
            }}>
            <Text css={{ color: '$rhythm9', fontSize: '14px', fontWeight: '500', lineHeight: 'normal' }}>Projects</Text>
            <ScrollBox />
          </Box>

          <Box
            css={{
              margin: '0',
              height: '90vh',
              '@md': {
                border: '1px solid $mauve9',
                borderRightWidth: '0',
                borderLeftWidth: '0',
                borderBottomWidth: '1px',
                borderTopWidth: '0',
                maxHeight: '300px',
              },
              '@sm': {
                border: '1px solid $mauve9',
                borderRightWidth: '0',
                borderLeftWidth: '0',
                borderBottomWidth: '1px',
                borderTopWidth: '0',
                maxHeight: '300px',
              },
            }}>
            <Text css={{ color: '$rhythm9', fontSize: '14px', fontWeight: '500', lineHeight: 'normal' }}>Blog</Text>
            <ScrollBox />
          </Box>
        </Grid>
      </Box>
    </>
  );
}
