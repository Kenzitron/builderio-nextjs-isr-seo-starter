import React from 'react'

import { GetServerSideProps } from 'next'
import { getAllPages } from '@/utils/builderio'

import SEO from '@/config/seo';

const Sitemap: React.FC = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    const pages = await getAllPages()

    res.setHeader('Content-Type', 'text/xml')
    res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`)

    pages.map( (page) => {

      if (page?.data?.url) {
        res.write(`<url><loc>${SEO?.openGraph?.url + page.data.url}</loc>`)

        if (page.lastUpdated) {
          const lastUpdate = new Date(page?.lastUpdated)
          res.write(`<lastmod>${lastUpdate.toISOString().split("T")[0]}</lastmod>`)
        }

        res.write(`<priority>0.8</priority>`)
        res.write(`</url>`)
      }

    })
    res.write(`</urlset>`)
    res.end()
  }
  return {
    props: {},
  }
}

export default Sitemap
