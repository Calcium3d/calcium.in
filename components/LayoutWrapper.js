import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div class="">
        <header class="bg-navbar flex items-center justify-between p-navbar">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div class=" flex items-center justify-between">
                  <div class="font-extrabold  tracking-tightest text-heading2 text-card-body">
                    {siteMetadata.headerTitle}
                  </div>
              </div>
            </Link>
          </div>
          <Link href="https://linktr.ee/calciumoxide">
            <div class="text-link">
              LinkTree
            </div>
          </Link>
        </header>
        <main class="pb-card">{children}</main>
        <Footer/>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
