
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('blog')
  const paths = Array.from(1, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('blog')

  return {
    props: {
      posts,
    },
  }
}