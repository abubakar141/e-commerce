import {createClient} from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url"
export const client = createClient({
    projectId: '8fuu3zjs',
    dataset: 'production',
    apiVersion: '2025-09-23',
    useCdn: true,
});
const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source)
}