// pages/index.tsx

import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Runtime Labs</title>
        <meta name="description" content="Runtime Labs – Temporal runtime layer for AI agents" />
        <meta property="og:title" content="Runtime Labs" />
        <meta property="og:description" content="Programmable memory + runtime interface for managing and scheduling agents." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-gray-100 min-h-screen font-sans">
        <NavBar />

        <main className="px-6 py-20 max-w-4xl mx-auto space-y-4">
          {/* Header Block */}
          <section>
            <h1 className="text-4xl font-bold mb-3">Runtime Labs</h1>
            <p className="text-lg text-gray-400 italic">
              Programmable Memory + Temporal Agent Runtime
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Confidential – Internal Preview – Do Not Distribute
            </p>
          </section>


          {/* Vision Section */}
          <section className="space-y-4 border-t border-gray-800 pt-4">
            <h2 className="text-2xl font-semibold text-runtime-accent"></h2>
            <p className="text-gray-300">
              Runtime Labs is building the runtime layer to ground agents in time and user context.
              We are also developing interfaces for transforming calendars into programmable and editable environments for scheduling agent planning, memory coordination, and time-based reasoning.
            </p>
            <p className="text-gray-400">
              Agents today operate without persistent memory, real-time execution, or feedback-driven coordination.
              Runtime Labs introduces a runtime-first architecture, enabling structured scheduling, reflection, and autonomous behavior grounded in user timelines.
            </p>
            <p className="text-gray-400">
              We treat time as a first-class interface for managing memory, agency, and behavior — unlocking a new class of intelligent systems.
            </p>
          </section>

                 {/* Stack Overview – Cards */}
                 <section className="space-y-4 border-t border-gray-800 pt-6">
            <h2 className="text-2xl font-semibold text-runtime-accent">Product Suite</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {[
                {
                  name: 'Chronologue',
                  status: 'Core memory-runtime calendar system',
                  role: 'Temporal compiler + coordination layer',
                  positioning: 'The interface between users and agents'
                },
                {
                  name: 'MemPort',
                  status: 'Portable long-term memory vault',
                  role: 'Interface for memory logging and recall',
                  positioning: 'Modular, but tightly coupled with Chronologue'
                },
                {
                  name: 'Agent Runtime',
                  status: 'Structured execution environment',
                  role: 'Planning, profiling, and feedback orchestration',
                  positioning: 'Core agent API layer'
                },
                {
                  name: 'Tempo Tokens',
                  status: 'Time-based tokenization layer',
                  role: 'Timestamping, duration modeling, conditioning',
                  positioning: 'Grammar of Chronologue'
                }
              ].map(product => (
                <div key={product.name} className="border border-gray-800 bg-gray-900 rounded-lg p-5 hover:border-runtime-accent transition">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-sm text-gray-400 italic">Status: {product.status}</p>
                  <p className="text-sm text-gray-300 mt-2"><strong>Role:</strong> {product.role}</p>
                  <p className="text-sm text-gray-400"><strong>Positioning:</strong> {product.positioning}</p>
                </div>
              ))}
            </div>
          </section>


          {/* Time Section */}
          <section id="time" className="space-y-4 border-t border-gray-800 pt-4">
            <h2 className="text-2xl font-semibold text-runtime-accent"></h2>
            <p className="text-gray-300">
              Achieving artificial general intelligence requires more than scaling models. It demands grounded intelligence in space and time, where agents are embedded in the physical context of users, organizations, and environments.
            </p>
            <p className="text-gray-400">
              Time is often abstracted away or omitted entirely during pretraining on natural language — despite its essential role in aligning intelligence with user intent at inference. This may represent a foundational gap in current training regimes.
            </p>
            <p className="text-gray-400">
              Runtime Labs treats time not as metadata, but as a core execution substrate — enabling agents to plan, reflect, and adapt their behavior in alignment with the evolving rhythms of our lives.
            </p>
          </section>

          {/* Tempo Tokens Section */}
          <section id="tempo-tokens" className="space-y-4 border-t border-gray-800 pt-4">
            <h2 className="text-2xl font-semibold text-runtime-accent">Tempo Tokens</h2>
            <p className="text-gray-300">
              At Runtime, we explore augmenting pretraining data with Tempo Tokens: compact representations of events tagged with timestamps.
              These tokens give models structured access to temporal context and enable natural language to be anchored to events as they unfold in the physical world.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-6 border-t border-gray-800 pt-10">
            <p className="text-sm text-gray-500">
              Based in San Francisco — Full-time on Runtime Labs
            </p>

            <div className="flex flex-wrap gap-4">
              <CTAButton label="Explore Docs" href="https://docs.runtimelabs.ai" external />
              <CTAButton label="View GitHub" href="https://github.com/runtimelabs-inc" external variant="outline" />
              <CTAButton label="Contact" href="mailto:derek@runtimelabs.ai" external variant="outline" />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}