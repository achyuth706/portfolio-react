import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base to repo name for GitHub Pages — change if your repo is named differently
  base: '/portfolio-react/',
})
