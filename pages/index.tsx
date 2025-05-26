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

        <main className="px-6 py-24 max-w-5xl mx-auto">
          <section className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-snug mb-4">
              Runtime Labs
            </h1>
            <p className="text-lg text-gray-400 italic">
              Programmable memory + interface for managing agents
              <br />
              Interface for Managing and Scheduling Agents
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Confidential – Internal Preview – Do Not Distribute
            </p>
          </section>

          <section className="mt-16 space-y-10 text-left">
            <div>
              <h2 className="text-2xl font-semibold text-runtime-accent mb-2">Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                Runtime Labs is building the temporal runtime layer for agent systems — where plans, memory, and behavior are grounded in time.
                We are transforming calendars from static interfaces into programmable execution environments, enabling agents to plan, reflect,
                receive feedback, replan, and take actions across time.
              </p>
              <p className="mt-4 text-gray-400">
                <strong className="text-runtime-accent">Temporal runtime layer</strong> — infrastructure that allows agents to reason over temporal context,
                receive feedback, and dynamically adapt behavior across time.
              </p>
              <p className="mt-4 text-gray-400">
                Our system prioritizes <em>user control and autonomy</em>, giving users the ability to adjust timing, edit agent-generated plans,
                and shape behavior through an accessible and auditable interface.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-runtime-accent mb-2">Problem</h2>
              <p className="text-gray-300 leading-relaxed">
                Today's language models (and agents) are typically stateless and are not yet grounded in time. They lack:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
                <li>Persistent memory across tasks</li>
                <li>Scheduling and execution guarantees</li>
                <li>Feedback loops and coordination</li>
                <li>Traceable user modeling over time</li>
                <li>Novel UI for controlling and logging agent timing and behavior</li>
              </ul>
              <p className="mt-4 text-gray-400">
                Most current solutions <strong>confine agents to chat windows</strong>, treating planning as reactive — disconnected from evolving user context and commitments.
              </p>
              <p className="mt-2 text-gray-400">
                Chronologue flips this by starting from <strong>runtime-first principles</strong>, inspired by CUDA’s host-device architecture:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
                <li><strong>User/Planner as Host</strong> — sets intent, approves plans, governs execution</li>
                <li><strong>Agent as Device</strong> — executes time-bound tasks, logs memory, and adapts</li>
              </ul>
            </div>

            <div className="text-sm text-gray-500 pt-4">
              Based in San Francisco — Full-time on Runtime Labs
            </div>
          </section>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <CTAButton label="Explore Docs" href="https://docs.runtimelabs.ai" external />
            <CTAButton label="View GitHub" href="https://github.com/runtimelabs-inc" external variant="outline" />
            <CTAButton label="Contact" href="mailto:derek@runtimelabs.ai" external variant="outline" />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
