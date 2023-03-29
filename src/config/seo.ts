import { NextSeoProps } from "next-seo";

const SEO : NextSeoProps =  {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'http://localhost',
      siteName: 'Site Name',
    },
    twitter: {
      handle: '@twitter',
      site: '@twitter',
      cardType: 'summary_large_image',
    },
  };

export default SEO