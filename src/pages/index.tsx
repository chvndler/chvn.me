import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  // Redirect..
  useEffect(() => {
    router.replace('/chvn');
  });

  return null;
};

export default Index;
