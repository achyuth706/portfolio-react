import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Center for Innovation in Teaching and Learning, UIUC',
    role: 'Graduate Research Assistant',
    period: 'Jun 2025 – Present',
    color: '#3d8ef0',
    bullets: [
      'Conducted Python and SQL-based data analysis on large educational datasets to surface actionable insights for CITL research initiatives.',
      'Built interactive Tableau and PowerBI dashboards to visualize student engagement and learning outcome metrics for stakeholders.',
      'Contributed to CITL website frontend development, improving UX and accessibility across key student-facing pages.',
    ],
  },
  {
    company: 'Oracle Corporation',
    role: 'Software Development Engineer',
    period: 'Jul 2022 – Aug 2024',
    color: '#f0c040',
    bullets: [
      'Designed and maintained 12+ microservices using Java and Spring Boot, achieving a 60% reduction in end-to-end runtime through architectural optimizations.',
      'Built and documented REST APIs that improved third-party integration response times by 20%, enabling smoother partner onboarding.',
      'Optimized SQL queries and database schemas across 10+ services, cutting average query execution time significantly.',
      'Developed 15+ reusable Oracle JET UI components, accelerating frontend feature delivery across multiple product teams.',
      'Managed Jenkins CI/CD pipelines, reducing deployment errors by 30% through automated test gates and rollback strategies.',
    ],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Dot */}
      <div
        className="absolute left-[-5px] top-2 w-3 h-3 rounded-full border-2"
        style={{ borderColor: exp.color, backgroundColor: '#04070a' }}
      />

      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <span
              className="font-mono text-xs font-semibold uppercase tracking-widest"
              style={{ color: exp.color }}
            >
              {exp.company}
            </span>
            <h3 className="font-heading font-bold text-xl text-white mt-1">{exp.role}</h3>
          </div>
          <span className="font-mono text-xs text-gray-500 bg-surface px-3 py-1.5 rounded-full border border-border whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-3">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Career</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">Experience</h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
