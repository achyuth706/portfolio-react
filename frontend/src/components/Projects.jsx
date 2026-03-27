import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Narrative Intelligence for Urban Crime',
    type: 'ML + RAG',
    description:
      'End-to-end ML and RAG pipeline analyzing 1.88M+ Chicago crime records. Achieved AUC 0.85, 78% answer groundedness, 80% hallucination reduction, and 2.6 s query latency with SentenceTransformers + FAISS retrieval and Gemini generation.',
    stats: [
      { label: 'Records', value: '1.88M+' },
      { label: 'AUC', value: '0.85' },
      { label: 'Groundedness', value: '78%' },
      { label: 'Latency', value: '2.6 s' },
    ],
    tags: ['SentenceTransformers', 'FAISS', 'XGBoost', 'SageMaker', 'Gemini'],
    accent: '#00e5b0',
  },
  {
    title: 'Distributed Notification System',
    type: 'Backend Infrastructure',
    description:
      'High-throughput notification platform handling 10K+ events/second using Apache Kafka for event streaming, Spring Boot microservices, Kubernetes orchestration, Docker containers, and Prometheus for observability.',
    stats: [
      { label: 'Throughput', value: '10K+/s' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tags: ['Kafka', 'Kubernetes', 'Docker', 'Spring Boot', 'Prometheus'],
    accent: '#3d8ef0',
  },
  {
    title: 'Illini Lost & Found',
    type: 'Full Stack',
    description:
      'Campus lost-and-found platform built with React + TypeScript frontend, Node.js backend, MongoDB Atlas persistence, and Firebase for real-time updates. Sub-1 s search with JWT-based authentication.',
    stats: [
      { label: 'Search', value: '<1 s' },
      { label: 'Auth', value: 'JWT' },
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB Atlas', 'Firebase', 'JWT'],
    accent: '#f0c040',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5 hover:border-accent/30 transition-colors"
    >
      <div>
        <span
          className="font-mono text-xs font-semibold uppercase tracking-widest"
          style={{ color: project.accent }}
        >
          {project.type}
        </span>
        <h3 className="font-heading font-bold text-xl text-white mt-1">{project.title}</h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Mini stats */}
      <div className="flex flex-wrap gap-3">
        {project.stats.map((s) => (
          <div key={s.label} className="bg-surface border border-border rounded-lg px-3 py-2">
            <div className="font-heading font-bold text-sm" style={{ color: project.accent }}>
              {s.value}
            </div>
            <div className="font-mono text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded-md border"
            style={{
              borderColor: project.accent + '40',
              color: project.accent,
              backgroundColor: project.accent + '10',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Work</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
