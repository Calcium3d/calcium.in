import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Blog({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} />
      <section class='mx-10 h-screen pt-card lg:pt-section-spacing py-about'>
        <h1 class='text-about mx-auto max-w-4xl font-bold pb-about text-heading2'>
          Blog Posts
        </h1>
        {!posts.length && 'No posts found.'}
        {posts.map((frontMatter) => {
          const { slug, date, title, summary } = frontMatter
          return (
            <ul key={slug} class='pt-card max-w-3xl mx-auto  '>
              <Link href={`/blog/${slug}`}>
                <article class='p-card bg-card rounded-lg shadow-lg shadow-bg-card/40 cursor-pointer'>
                    <h2 class='text-heading2 text-card-heading font-semibold tracking-tightest '>
                        {title}
                    </h2>
                    <div class='mt-2 mb-4 text-2xl font-medium'>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </div>
                    <div class='max-w-lg'>
                      {summary}
                    </div>
                </article>
              </Link>
            </ul>
          )
        })}
      </section>
    </>
  )
}
