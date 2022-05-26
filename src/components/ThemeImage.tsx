import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Box } from '@/system';

type ThemeImageProps = {
  alt?: string;
};

export const ThemeImage = ({ alt, ...props }: ThemeImageProps) => {
  const { theme } = useTheme();

  return (
    <>
      <Box css={{ paddingBottom: '24px' }}>
        <Image className="blog_image" alt={props.alt} src={theme === 'light' ? props.light : props.dark} {...props} />
      </Box>
    </>
  );
};
