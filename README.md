# Builder.IO & NextJs starter with ISR & SEO optimization

This project aims to be a starting project for every initiative around [Builder.io](https://builder.io) and [Next.js](https://nextjs.org) that requires ISR capabilities and SEO optimizations like having a dynamic `sitemap.xml` and a few other tricks.

If you want to see a live site using this starter go to [Kenzilab.com](https://kenzilab.com).

# Features

- Typescript support ❤️
- ISR for every Page generated.
- Sitemap.xml generated in SSR connected with Builder.io
- NextSeo package added.
- Robots.txt
- Perfect Lighthouse Score 100 / 100 / 100 / 100 by default.

# Initial setup

- Clone this repo.
- Run `npm i` command.
- Create your environment variables file. Create a .env file in the root with the following values.
  - **NEXT_PUBLIC_BUILDER_PUBLIC_KEY** - This is obtained through the Builder.io admin panel. For detailed instructions on getting your API Key, check out [Finding your Public API Key](https://www.builder.io/c/docs/using-your-api-key#finding-your-public-api-key) in the [Using Builder API Keys](https://www.builder.io/c/docs/using-your-api-key) documentation.
  - **REVALIDATE_SECRET** - This is a custom-generated key for granting access to the revalidate endpoint. Use your favorite password generator or use your own one.
- Go to Builder.io and create the first page (https://www.builder.io/c/docs/create-page).
- Enable Builder.io Webhook for pages (https://www.builder.io/c/docs/webhooks) make sure you point it to /api/revalidate?secret={REVALIDATE_SECRET}.
- Adjust the values you want to use for SEO. You can edit them in _/src/config/seo_.

# Starting the server (locally)

It is as easy as running `npm run dev` and open a web browser in _http://localhost:3000_.

# Deploy on Vercel

I recommend using [Vercel](https://vercel.com). This repo also has Vercel Analytics npm dependency so it is included out of the box.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKenzitron%2Fbuilderio-nextjs-isr-seo-starter)

You will have to configure the environment variables in the admin panel. Name them as they are in the **.env** file.

# Deploy elsewhere

I refer you to the official [Next.js documentation](https://nextjs.org/docs/deployment).

Although there are many choices out there I recommend exploring Cloudflare Pages. It is easy, powerful, costless and very straightforward.

# Websites using this project

- [Kenzilab.com](https://kenzilab.com)

If you want to list here your project you can open a PR with your url.
