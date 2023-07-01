import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <div>
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
            <div class="text-link cursor-pointer">
              LinkTree
            </div>
          </Link>
        </header>
        <main class="pb-card">{children}</main>
        <Footer/>
      </div>
    </div>
  )
}

export default LayoutWrapper
