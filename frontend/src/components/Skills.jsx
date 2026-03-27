import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const groups = [
  {
    label: 'Languages',
    color: '#00e5b0',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C/C++', 'Bash'],
  },
  {
    label: 'Frameworks & Infra',
    color: '#3d8ef0',
    skills: ['Spring Boot', 'React', 'Node.js', 'Apache Kafka', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    label: 'Cloud & Databases',
    color: '#f0c040',
    skills: [
      'AWS (ECS · S3 · RDS)',
      'GCP BigQuery',
      'Azure AKS',
      'MongoDB Atlas',
      'PostgreSQL',
      'Firebase',
      'Neo4J',
    ],
  },
  {
    label: 'ML / Data',
    color: '#00e5b0',
    skills: [
      'SentenceTransformers',
      'FAISS',
      'XGBoost',
      'Pandas / NumPy',
      'SageMaker',
      'Vertex AI',
      'Tableau',
    ],
  },
]

function SkillGroup({ group, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-6"
    >
      <h3
        className="font-mono text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: group.color }}
      >
        {group.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-md border border-border text-gray-300 bg-surface hover:border-accent/40 hover:text-accent transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Stack</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <SkillGroup key={g.label} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
