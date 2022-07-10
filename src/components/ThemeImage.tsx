import Image from 'next/image';
import { Box } from '@/system';

export const ThemeImage = ({ ...props }) => {
  return (
    <>
      <Box css={{ paddingBottom: '24px' }}>
        <Image className="blog_image" alt={props.alt} src={props.image} {...props} />
      </Box>
    </>
  );
};
