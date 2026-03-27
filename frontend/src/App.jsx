import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="bg-bg text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center font-mono text-xs text-gray-600 border-t border-border">
        © {new Date().getFullYear()} Achyutha Sushanth Ariga · Built with React + Tailwind
      </footer>
    </div>
  )
}

export default App
