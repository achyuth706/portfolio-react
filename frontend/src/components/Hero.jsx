import { motion } from 'framer-motion'

const stats = [
  { value: '2+', label: 'Years at Oracle', sub: 'Production SWE' },
  { value: '60%', label: 'Runtime Cut', sub: 'Java microservices' },
  { value: '157K+', label: 'Embeddings Indexed', sub: 'ML/RAG project' },
  { value: '3.8', label: 'GPA', sub: 'MS @ UIUC' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-4"
          >
            Software Engineer &amp; MS @ UIUC
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-heading font-black leading-none mb-6"
          >
            <span className="block text-5xl md:text-7xl text-white">Achyutha</span>
            <span className="block text-5xl md:text-7xl text-accent">Sushanth</span>
            <span className="block text-5xl md:text-7xl text-white">Ariga</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="text-gray-400 leading-relaxed mb-8 max-w-md"
          >
  2+ years as a Software Development Engineer at{' '}
  <span className="text-white font-medium">Oracle Corporation</span>,
  building cloud-native Java microservices and REST APIs at scale. Now pursuing an{' '}
  <span className="text-white font-medium">MS at UIUC</span>{' '}
  , working across full-stack development, distributed systems, and ML/RAG pipelines,
  with projects spanning crime intelligence, real-time notification infrastructure,
  and data engineering.
  <br /><br />

<span className="text-gray-500 text-sm">📍 Champaign, Illinois · Open to relocate</span>
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="mailto:achyuthariga@gmail.com"
              className="px-6 py-3 rounded-lg bg-accent text-bg font-heading font-bold text-sm hover:bg-accent/90 transition-colors"
            >
              Get in touch
            </a>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-lg border border-border text-gray-300 font-heading font-semibold text-sm hover:border-accent/50 hover:text-accent transition-colors"
            >
              View projects
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/achyutha-sushanth-ariga"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/achyutha-sushanth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Right — stat cards */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-1"
            >
              <span className="font-heading font-black text-4xl text-accent">{s.value}</span>
              <span className="font-heading font-semibold text-white text-sm">{s.label}</span>
              <span className="font-mono text-xs text-gray-500">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
