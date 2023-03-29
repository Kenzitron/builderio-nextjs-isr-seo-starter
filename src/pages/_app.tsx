import type { AppProps } from 'next/app'

import { Analytics } from '@vercel/analytics/react';

import { builder } from '@builder.io/react'
import builderConfig from '@/config/builder'
builder.init(builderConfig.apiKey)

import { DefaultSeo } from 'next-seo';
import SEO from '@/config/seo';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEO}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
