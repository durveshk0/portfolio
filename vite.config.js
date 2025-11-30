import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // ⚠️ IMPORTANT: Change 'portfolio' to your actual repository name
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

