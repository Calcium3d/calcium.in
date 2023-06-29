import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import About from '@/components/About'
import Image from 'next/image'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} />
      <About />
      <section class='pt-spacing'>
        <h1 class='text-heading1 mx-auto max-w-4xl text-section-title font-bold'>
          Blog Posts
        </h1>
        {!posts.length && 'No posts found.'}
        {posts.slice(0, 2).map((frontMatter) => {
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

        <Link href='/blog'>
          <div class='text-card-body text-link font-semibold mx-auto max-w-3xl pt-navbar cursor-pointer'>
            Checkout More Here
          </div>
        </Link>
      </section>
      
      <section class='pt-spacing'>
        <h1 class='text-heading1 mx-auto max-w-4xl text-section-title font-bold'>
          Renders
        </h1>

        <section class='pt-card max-w-3xl mx-auto'>
          <article class='p-card bg-card rounded-lg shadow-lg shadow-bg-card/40'>
            <h2 class='text-heading2 text-card-heading font-semibold tracking-tightest'>
              Int Alpha
            </h2>
            <div class='grid grid-cols-2 mt-5 gap-6 grid-flow-col'>
              <img src='/render/alpha/hero.webp' class='image self-center'/>
              <div class='grid grid-cols-2 gap-3 h-content justify-between'>
                <img src='/render/alpha/side/1.webp' class='image'/>
                <img src='/render/alpha/side/2.webp' class='image'/>
                <img src='/render/alpha/side/3.webp' class='image'/>
                <img src='/render/alpha/side/4.webp' class='image'/>
              </div>
            </div>
          </article>
        </section>

        <section class='pt-card max-w-3xl mx-auto'>
          <article class='p-card bg-card rounded-lg shadow-lg shadow-bg-card/40'>
            <h2 class='text-heading2 text-card-heading font-semibold tracking-tightest'>
              GT300 Alpine A110
            </h2>
            <div class='grid grid-cols-2 mt-5 gap-6 grid-flow-col'>
              <img src='/render/a110/hero.webp' class='image self-center'/>
              <div class='grid grid-cols-2 gap-3 h-content justify-between'>
                <img src='/render/a110/side/1.webp' class='image'/>
                <img src='/render/a110/side/2.webp' class='image'/>
                <img src='/render/a110/side/3.webp' class='image'/>
                <img src='/render/a110/side/4.webp' class='image'/>
              </div>
            </div>
          </article>

          <Link href='https://www.artstation.com/calcium_3d'>
            <div class='text-card-body text-link font-semibold mx-auto max-w-3xl pt-navbar cursor-pointer'>
              Checkout More Here
            </div>
          </Link>
        </section>
      </section>

      <section class='pt-spacing'>
        <h1 class='text-heading1 mx-auto max-w-4xl text-section-title font-bold'>
          Projects
        </h1>

        <section class='pt-card max-w-3xl mx-auto'>
          <article class='p-card bg-card rounded-lg shadow-lg shadow-bg-card/40'>
            <h2 class='mt-2 text-heading2 text-card-heading font-semibold tracking-tightest'>
                Medical App Backend
            </h2>
            <h3 class='max-w-lg mt-2'>
              An MVP built for the backend for a medical data logging app
            </h3>
            <h3 class='mt-12 max-w-lg text-2xl text-heading1 font-semibold'>
              Technologies Used:
            </h3>
            <div class='flex flex-row space-x-3 mt-4'>
              <p class='bg-technology px-[12px] py-[7px] rounded-lg'>
                Prisma
              </p>
              <p class='bg-technology px-[12px] py-[7px] rounded-lg'>
                Apollo
              </p>
              <p class='bg-technology px-[12px] py-[7px] rounded-lg'>
                Graphql
              </p>
            </div>
            <Link href='https://github.com/Calcium3d/server'>
              <div class='text-card-body text-link font-semibold mx-auto max-w-3xl mt-8 cursor-pointer'>
                Checkout the project here
              </div>
            </Link>

          </article>
        </section>

        <section class='pt-card max-w-3xl mx-auto'>
          <article class='p-card bg-card rounded-lg'>
            <h2 class='mt-2 text-heading2 text-card-heading font-semibold tracking-tightest'>
                CLI Password Manager
            </h2>
            <h3 class='max-w-lg mt-2'>
              Password Manager built in rust as a proof concept of locally running password managers with proper standards of encryption
            </h3>
            <h3 class='mt-12 max-w-lg text-2xl text-heading1 font-semibold'>
              Technologies Used:
            </h3>
            <div class='flex flex-row space-x-3 mt-4'>
              <p class='bg-technology px-[12px] py-[7px] rounded-lg'>
                Rusqlite
              </p>
            </div>
            <Link href='https://github.com/Calcium3d/password_manager_rust_edition'>
              <div class='text-card-body text-link font-semibold mx-auto max-w-3xl mt-8 cursor-pointer'>
                Checkout the project here
              </div>
            </Link>

          </article>

          <Link href='https://github.com/Calcium3d'>
            <div class='text-card-body text-link font-semibold mx-auto max-w-3xl pt-navbar pointer-events-auto cursor-pointer'>
              Checkout More Here
            </div>
          </Link>
        </section>
      </section>
    </>
  )
}

