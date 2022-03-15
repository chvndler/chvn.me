// React & Next.js Imports
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();

  // Redirect to /cover
  useEffect(() => {
    router.replace('/cover');
  });

  return null;
};

Index.theme = 'light';
export default Index;
