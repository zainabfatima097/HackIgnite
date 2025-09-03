import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // change to any port you like
    open: true, // optional: auto opens browser
  },
})
