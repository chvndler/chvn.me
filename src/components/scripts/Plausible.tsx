import Script from 'next/script';

export const PlausibleScript = () => {
  return (
    <>
      <Script defer data-domain="chvn.me" src="https://plausible.io/js/script.js"></Script>
    </>
  );
};

/*
 * <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
 */
