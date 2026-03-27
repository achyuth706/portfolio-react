import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const api = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      await axios.post(`${api}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-surface border border-border rounded-xl px-4 py-3 text-white text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors'

  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Reach out</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Let's work together
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Open to full-time SWE roles in the US. Drop me a message and I'll get back to you soon.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 32 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 text-left"
        >
          <div>
            <label className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's on your mind?"
              className={inputClass + ' resize-none'}
            />
          </div>

          {status === 'success' && (
            <p className="font-mono text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
              Message sent! I'll be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
              Something went wrong. Please try emailing me directly at achyuthariga@gmail.com
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-accent text-bg font-heading font-bold text-sm hover:bg-accent/90 disabled:opacity-60 transition-colors"
          >
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
