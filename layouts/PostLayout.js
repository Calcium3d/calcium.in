import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, children }) {
  const { slug, title, summary } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        {...frontMatter}
      />
      <article class='mx-10'>
          <header class='pt-card lg:pt-section-spacing lg:py-about'>
            <h1  class='text-about mx-auto max-w-4xl font-bold text-heading2'>
              {title}
            </h1>
            <h2 class='text-heading1 lg:pb-about  mx-auto max-w-4xl text-section-title font-bold'>
              {summary}
            </h2>
          </header>
          <div class="prose prose-strong:text-heading2 prose-a:text-heading2 prose-lg prose-invert max-w-4xl mx-auto pt-card">
            {children}
          </div>
      </article>
    </SectionContainer>
  )
}