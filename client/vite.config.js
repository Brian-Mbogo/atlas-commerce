import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite plugins for React rendering and Tailwind CSS processing.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
