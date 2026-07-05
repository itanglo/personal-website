'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8 justify-center">
      {NAV_LINKS.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname === href
              ? 'text-black whitespace-nowrap'
              : 'text-[#0000ee] underline whitespace-nowrap'
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
