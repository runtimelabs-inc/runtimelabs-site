// components/ProductGrid.tsx

import React from 'react'

const products = [
  {
    name: 'Chronologue',
    description: 'A temporal planning system that transforms calendars into programmable execution layers.',
    href: 'https://docs.runtimelabs.ai/concepts/export-calendar',
  },
  {
    name: 'MemPort',
    description: 'Long-term memory vault for structured reflection and agent trace storage.',
    href: 'https://docs.runtimelabs.ai/concepts/memory-tagging',
  },
  {
    name: 'Agent Runtime (MCP)',
    description: 'A runtime protocol for context planning, tool execution, and feedback integration.',
    href: 'https://docs.runtimelabs.ai/concepts/agent-orchestration-interface',
  }
]

export default function ProductGrid() {
  return (
    <section className="w-full bg-black text-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 tracking-tight">
          Modular Infrastructure for Temporal Agents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="block bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-runtime-accent transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-runtime-accent">{product.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
