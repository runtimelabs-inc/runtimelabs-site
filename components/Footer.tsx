// components/Footer.tsx

import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          Built in San Francisco • © {new Date().getFullYear()} Runtime Labs
        </div>

        <div className="flex space-x-6">
          <a href="mailto:derek@runtimelabs.ai" className="hover:text-runtime-accent transition">
            Contact
          </a>
          <a href="https://github.com/runtimelabs-inc" className="hover:text-runtime-accent transition">
            GitHub
          </a>
          <a href="https://x.com/drosenzweig" className="hover:text-runtime-accent transition">
            X
          </a>
          {/* Optional future links */}
          {/* <a href="/privacy" className="hover:text-runtime-accent transition">Privacy</a>
          <a href="/terms" className="hover:text-runtime-accent transition">Terms</a> */}
        </div>
      </div>
    </footer>
  )
}
