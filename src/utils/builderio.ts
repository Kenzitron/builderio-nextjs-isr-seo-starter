import {  builder } from '@builder.io/react'
import builderConfig from '@/config/builder'

builder.init(builderConfig.apiKey)

const getPages = (pages: string[] | undefined) : Promise<any> => {
return (builder
    .get('page', {
    userAttributes: {
        urlPath: '/' + (pages?.join('/') || ''),
    },
    })
    .toPromise()) || null

}

const getAllPages = () => {
    return builder.getAll('page', {
        options: { noTargeting: true },
        omit: 'data.blocks',
      })
}

export { getPages, getAllPages}