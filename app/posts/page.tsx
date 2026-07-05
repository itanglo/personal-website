import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Posts',
}

export default function PostsPage() {
  return (
    <main className="flow-root max-w-[60ch] pt-[8rem] px-[6%] pb-12 max-sm:pt-8 max-sm:pb-8">
      <Nav />
      <div className="text-[1.25rem] leading-[1.7]">
        <p>Nothing to see yet.</p>
      </div>
    </main>
  )
}
