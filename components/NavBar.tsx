// components/NavBar.tsx

import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/80 border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-gray-100">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold tracking-tight">
          <Link href="/">
            Runtime Labs
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="https://docs.runtimelabs.ai" className="hover:text-runtime-accent transition">
            Docs
          </Link>
          <Link href="https://github.com/runtimelabs-inc" className="hover:text-runtime-accent transition">
            GitHub
          </Link>
          <Link href="mailto:derek@runtimelabs.ai" className="hover:text-runtime-accent transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
