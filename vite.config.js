import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Subhan-portfolio/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  },
  server: {
    fs: {
      allow: [
        // Add your project root directory here
        process.cwd()
        // Add any other paths you need to allow
      ]
    }
  }
})

