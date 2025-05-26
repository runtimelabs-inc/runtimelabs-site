// components/Hero.tsx

import React from 'react'

export default function Hero() {
  return (
    <section className="w-full py-32 text-center bg-black text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold tracking-tight leading-snug">
          Runtime Labs builds{' '}
          <span className="text-runtime-accent">memory systems</span>, planners,
          and tools for grounding agents in{' '}
          <span className="text-runtime-accent">time.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Our infrastructure enables agents to reason across schedules, reflect on memory,
          and act within user-defined time constraints.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="https://docs.runtimelabs.ai"
            className="px-6 py-2 text-sm font-medium text-black bg-white rounded hover:bg-gray-100 transition"
          >
            Documentation
          </a>
          <a
            href="https://github.com/runtimelabs-inc"
            className="px-6 py-2 text-sm font-medium border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="mailto:derek@runtimelabs.ai"
            className="px-6 py-2 text-sm font-medium border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
