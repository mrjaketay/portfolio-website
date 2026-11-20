import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // keep react in its own file so it caches between deploys
        manualChunks: { vendor: ['react', 'react-dom', 'react-dom/client', 'react-router-dom'] },
      },
    },
  },
})
