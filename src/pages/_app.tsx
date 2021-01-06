import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Page } from '../types';

import '../styles/index.css';

function MyApp({
  Component,
  pageProps,
  err,
}: AppProps & {
  err: Error;
  Component: Page & React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta name="DC.title" content="Stupo - Die Medienbildungsplatform" />

        <title>{Component.title}</title>
        <meta name="description" content={Component.description} />
        <meta name="keywords" content={Component.keywords} />

        <meta name="author" content="Jonas Embach <j.embach@bit-production.com>" />
        <meta name="generator" content="Jonas Embach - j.embach@bit-production.com" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="revisit-after" content="7 days" />
        <link type="image/x-icon" href="favicon.ico" rel="shortcut icon" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div className="w-screen min-h-screen">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} err={err} />
      </div>
    </>
  );
}

export default MyApp;
