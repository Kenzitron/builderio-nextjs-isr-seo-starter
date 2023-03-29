import React from 'react'

import { GetServerSideProps } from 'next'

import SEO from '@/config/seo';

const Sitemap: React.FC = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {

    res.setHeader('Content-Type', 'text/plain')
    res.write(`# Block all crawlers for /accounts
User-agent: *
Disallow: /api/

# Allow all crawlers
User-agent: *
Allow: /

Sitemap: ${SEO?.openGraph?.url}/sitemap.xml`)
    res.end()
  }
  return {
    props: {},
  }
}

export default Sitemap
