import contentstack from 'contentstack'

const { Stack, Region } = contentstack

const stack = new Stack({
api_key: process.env.CONTENTSTACK_API_KEY ?? '',
delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN ?? '',
environment: process.env.CONTENTSTACK_ENVIRONMENT ?? '',
region: Region.US,
})

export default defineEventHandler(async (event) => {
const { type, uid } = getQuery(event)
const data = await stack
    .ContentType(type?.toString()!)
    .Entry(uid?.toString()!)
    .toJSON()
    .includeEmbeddedItems()
    .fetch()

return data
})