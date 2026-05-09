'use client'

import { useEffect } from 'react'

export default function LumaButton() {
  useEffect(() => {
    const id = 'luma-checkout'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = 'https://embed.lu.ma/checkout-button.js'
      s.async = true
      document.head.appendChild(s)
    }
  }, [])

  return (
    <a
      href="https://lu.ma/cjxvvr0m"
      className="luma-checkout--button mt-4 inline-block px-5 py-2 text-sm bg-[#2c1a0e] text-[#f5f0e6] rounded hover:bg-[#4a3222] transition-colors"
      data-luma-action="checkout"
    >
      RSVP
    </a>
  )
}
