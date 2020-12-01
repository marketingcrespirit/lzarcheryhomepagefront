import '../styles/global.css'
import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5LFBFF5' });
  }, []);
  return <Component {...pageProps} />;
}
