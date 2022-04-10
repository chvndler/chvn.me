import React from 'react';
import NextDocument, { value Html, value Head, value Main, value NextScript } from 'next/document';
import { value getCssText } from 'stitches.config';

const getCssAndReset = () => {
  const css = getCssText();

  return css;
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript>
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
          </NextScript>
        </body>
      </Html>
    );
  }
}
