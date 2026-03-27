import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const schools = [
  {
    badge: 'UIUC',
    degree: 'MS Information Management',
    track: 'Computer Science focused',
    school: 'University of Illinois Urbana-Champaign',
    period: 'Aug 2024 – May 2026',
    location: 'Champaign, IL',
    gpa: '3.8 / 4.0',
    gpaLabel: 'GPA',
    color: 'accent',
  },
  {
    badge: 'NIT Durgapur',
    degree: 'BTech Mechanical Engineering',
    track: null,
    school: 'National Institute of Technology, Durgapur',
    period: 'Jul 2018 – Jun 2022',
    location: 'Durgapur, India',
    gpa: '8.36 / 10.0',
    gpaLabel: 'CGPA',
    color: 'yellow',
  },
]

export default function Education() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            / education
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">
            Academic Background
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((edu, i) => (
            <motion.div
              key={edu.badge}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300"
            >
              {/* Badge */}
              <span
                className={`self-start font-mono text-xs px-3 py-1 rounded-full border ${
                  edu.color === 'accent'
                    ? 'text-accent bg-accent/10 border-accent/20'
                    : 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
                }`}
              >
                {edu.badge}
              </span>

              {/* Degree */}
              <div>
                <h3 className="font-heading font-bold text-xl text-white leading-snug">
                  {edu.degree}
                </h3>
                {edu.track && (
                  <p className="text-gray-500 text-sm mt-1">{edu.track}</p>
                )}
              </div>

              {/* School */}
              <p className="font-mono text-xs text-accent tracking-wide">
                {edu.school}
              </p>

              {/* Period & Location */}
              <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
                <span>{edu.period}</span>
                <span className="text-border">·</span>
                <span>{edu.location}</span>
              </div>

              {/* GPA */}
              <div className="mt-auto pt-4 border-t border-border">
                <span
                  className={`font-mono text-xs px-3 py-1.5 rounded-lg border ${
                    edu.color === 'accent'
                      ? 'text-yellow-400 bg-yellow-400/07 border-yellow-400/20'
                      : 'text-yellow-400 bg-yellow-400/07 border-yellow-400/20'
                  }`}
                >
                  {edu.gpaLabel} {edu.gpa}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}