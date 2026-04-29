'use client'

import { usePathname } from 'next/navigation'

const tabs = [
  { label: 'About', href: '/about' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export default function NavTabs() {
  const pathname = usePathname()

  return (
    <nav className="-mb-px flex gap-8">
      {tabs.map(({ label, href }) => {
        const active = pathname === href
        return (
          <a
            key={href}
            href={href}
            className={
              active
                ? 'border-b-2 border-[#2c1a0e] pb-3 text-sm font-medium text-[#2c1a0e]'
                : 'border-b-2 border-transparent pb-3 text-sm font-medium text-[#7a5c42] hover:text-[#2c1a0e] hover:border-[#c8b99a] transition-colors'
            }
          >
            {label}
          </a>
        )
      })}
    </nav>
  )
}
