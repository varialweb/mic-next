import { MongoClient } from "mongodb"
import RichText from "./RichText"

async function getBlogPost(slug) {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let blogPost = {}

  console.log('SLUG', slug)

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const blogPostModel = await client.collection('content_models').findOne({ 'name.value': 'Blog Post' })
    blogPost = await client.collection('contents').findOne({ contentModel: blogPostModel._id, published: true, 'fields.slug': slug })

  } catch (error) {
    console.error('Error with Mongo', error)
  }

  return blogPost
}

export default async function BlogPost({ params }) {
  const blogPost = await getBlogPost(params.slug)

  console.log('slug', params.slug)

  console.log('blog post', blogPost)
  const createdAt = new Date(blogPost?.createdAt).toDateString()
  const updatedAt = new Date(blogPost?.updatedAt).toDateString()
  const { title, description, coverImage, body } = blogPost.fields

  return (
    <main className="bg-gradient-to-b from-[#081135] via-[#0D1A4F] to-[#113277] p-4 py-12 lg:py-16">
      <section className="w-full max-w-[1024px] mx-auto">
          <h1 className="text-3xl lg:text-5xl md:!leading-snug">{title}</h1>
          <p>{createdAt}</p>
          <br />
          <picture>
            <source srcSet={`${coverImage.url}?w=2400`} media="(min-width: 1024px)" />
            <source srcSet={`${coverImage.url}?w=1600`} media="(min-width: 768px)" />
            <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="400" height="300" className="w-full aspect-[4/3] object-cover rounded-md" />
          </picture>
          <br />
          <RichText src={body} className="py-2" maxWidth="1200px" />
        </section>
    </main>
  )
}