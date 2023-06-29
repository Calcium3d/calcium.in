import Link from 'next/link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'

export default function PostLayout({ frontMatter, children }) {
  const { date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div>
          <header>
            <div class="">
              <dl>
                <div>
                  <dt class="">Published on</dt>
                  <dd class="t">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            class=""
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div class="">
              <div class="">{children}</div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
