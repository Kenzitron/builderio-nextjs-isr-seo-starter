# Builder.IO & NextJs starter with ISR & SEO optimization

This project aims to be an starting project for every initiative around [Builder.io](https://builder.io) and [Next.js](https://nextjs.org) that requires ISR capabilities and SEO optimizations like having a dynamic sitemap.xml and few other tricks.

If you want to see a Live site using this starter go to [Kenzilab.com](https://kenzilab.com)

# Features
- Typescript support ❤️
- ISR for every Page generated.
- Sitemap.xml generated in SSR connected with Builder.io
- NextSeo package added.
- Robots.txt
- Perfect Lighthouse Score 100 / 100 / 100 / 100 by default.


# Initial setup

- Clone this repo
- Run ```npm i``` command
- Create your environment variables file. Create a .env file in the root with the following values.
  - **NEXT_PUBLIC_BUILDER_PUBLIC_KEY** - This is obtained through the Builder.io admin panel.
  - **REVALIDATE_SECRET** - This is a custom generated key for granting access to the revalidate endpoint. Use your favorite password generator or use your own one.
- Go to Builder.io and create the first page (https://www.builder.io/c/docs/create-page)
- Enable Builder.io Webhook for pages (https://www.builder.io/c/docs/webhooks) make sure you point it to /api/revalidate?secret={REVALIDATE_SECRET}
- Adjust the values you want to use for SEO. You can edit them in */src/config/seo*


# Starting the server (Locally)
It is as easy as running ```npm run dev``` and open a web browser in *http://localhost:3000*

# Deploy on Vercel
I recommend use [Vercel](https://vercel.com). This repo also has Vercel Analytics npm dependency so it is included out of the box.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKenzitron%2Fbuilderio-nextjs-isr-seo-starter)

You will have to configure the environment variables in the admin panel. Name them as they are in the **.env** file.

# Deploy elsewhere
I refer you to official NextJs documentation (https://nextjs.org/docs/deployment)

Although there are many choices out there I recommend explore Cloudflare Pages. It is easy, powerful, costless and very straight forward.


# Websites using this project
- [Kenzilab.com](https://kenzilab.com)

If you want to list here your project you can open a PR with your url.