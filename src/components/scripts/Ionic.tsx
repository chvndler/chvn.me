import Script from 'next/script';

export const IonicScript = () => {
  return (
    <>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
    </>
  );
};
