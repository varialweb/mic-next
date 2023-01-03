import { MongoClient } from "mongodb";
import Link from "next/link";

async function getBlogPosts() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let blogPosts = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const blogPostModel = await client.collection('content_models').findOne({ 'name.value': 'Blog Post' })
    await client.collection('contents').find({ contentModel: blogPostModel._id, published: true }).forEach(blogPost => blogPosts.push(blogPost))
  } catch (error) {
    console.error('Error:', error)
  }

  return blogPosts
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <main className="grid gap-8 justify-center bg-gradient-to-b from-[#081135] via-[#0D1A4F] to-[#113277] p-4 py-12 lg:py-16">
      {blogPosts.reverse().map(blogPost => {
            const createdAt = new Date(blogPost.createdAt).toDateString()
            const updatedAt = new Date(blogPost.updatedAt).toDateString()
            const { title, description, slug, coverImage } = blogPost.fields
            return (
              <div
                key={blogPost._id}
                className="bg-white max-w-[800px] text-black grid lg:grid-cols-2 rounded-md shadow-md"
              >
                <picture>
                  <source srcSet={`${coverImage.url}?w=1600`} media="(min-width: 768px)" />
                  <img src={`${coverImage.url}?w=750`} alt={coverImage.description} width="400" height="400" className="w-full lg:h-full aspect-square object-cover rounded-t-md lg:rounded-t-none lg:rounded-l-md" />
                </picture>
                <div className="flex flex-col w-full h-full gap-4 justify-between p-4 lg:p-8">
                  <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm">{updatedAt !== createdAt ? updatedAt : createdAt}</p>
                  </div>
                  <p className="text-[16px] w-full">{description}</p>
                  <Link href={`/blog/${slug}`} className="bg-gradient-to-b from-[#FF5E00] to-[#F05800] text-white w-full py-2 px-12 mt-4 rounded-full shadow block text-center">
                      Read full article
                  </Link>
                </div>
              </div>
            )
            // return (
            //   <div key={blogPost._id} className="w-full md:w-[calc(50%_-_32px)] lg:w-[calc(33%_-_32px)]  border p-4 rounded-md grid gap-4 bg-white border-none shadow overflow-hidden">
            //     <picture>
            //       <img src={coverImage.url} alt={coverImage.description} width="400" height="300" className="w-full max-w-full aspect-square object-cover rounded-md" />
            //     </picture>
            //     <div>
            //       <h2>{title}</h2>
            //       <p>{updatedAt !== createdAt ? updatedAt : createdAt}</p>
            //     </div>
            //     <p>{description}</p>
            //     <Link href={`/blog/${slug}`}>
            //       <a className="bg-nicholson-blue-500 text-white w-full py-2 px-12 rounded-full shadow block text-center">
            //         Read full article
            //       </a>
            //     </Link>
            //   </div>
            // )
          })}
    </main>
  )
}