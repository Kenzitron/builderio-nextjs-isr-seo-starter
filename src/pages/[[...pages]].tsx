import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import { NextSeo } from 'next-seo'
import { getPages , getAllPages } from '@/utils/builderio'

// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'


export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ pages: string[], locale: string }>) {

  const page = await getPages(params?.pages)

  return {
    props: {
      page,
      locale: 'en-US',
    },
    revalidate: 24 * 60 * 60 * 60 // 1 día
  }
}

export async function getStaticPaths() {
  const pages = await getAllPages()

  return {
    paths: pages.map((page) => {
      return `${page.data?.url}`
    }),
    fallback: true,
  }
}

export default function Page({
  page, locale
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !page && !isPreviewingInBuilder

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  const { title, description, image } = page?.data! || {}

  return (
    <>
      {show404 ? (
        <>
          <NextSeo noindex={true} nofollow={true} />
          <DefaultErrorPage statusCode={404} />
        </>
      ) : (<>
        {title && (
          <NextSeo
            title={title}
            description={description}
            openGraph={{
              type: 'website',
              title,
              description,
              locale,
              ...(image && {
                images: [
                  {
                    url: image,
                    width: 800,
                    height: 600,
                    alt: title,
                  },
                ],
              }),
            }}
          />
        )}
        <BuilderComponent model="page" content={page} />
        </>
      )}
    </>
  )
}