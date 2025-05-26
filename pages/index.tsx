// runtime_landing_page/index.tsx

//Runtime Labs builds memory systems, planners, and runtime tools for grounding agent systems in time.

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Runtime Labs</title>
        <meta name="description" content="Runtime Labs – Temporal runtime layer for AI agents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-6 py-24 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">Runtime Labs</h1>
        <p className="mt-6 text-xl text-gray-700">
        Runtime Labs builds memory systems, planners, and runtime tools for grounding agent systems in time.
        </p>
        <p className="mt-4 text-gray-600">
        Our infrastructure enables agents to reason across schedules, reflect on memory, and act within user-defined time constraints.
        </p>

        <div className="mt-10 space-x-4">
          <Link href="https://docs.runtimelabs.ai" className="text-blue-600 underline text-lg">Documentation</Link>
          <Link href="https://github.com/runtimelabs-inc" className="text-blue-600 underline text-lg">GitHub</Link>
          <Link href="mailto:derek@runtimelabs.ai" className="text-blue-600 underline text-lg">Contact</Link>
        </div>

        <footer className="mt-16 text-sm text-gray-400">
          Built in San Francisco • © {new Date().getFullYear()} Runtime Labs
        </footer>
      </main>
    </div>
  );
}
