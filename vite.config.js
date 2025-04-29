import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        ws: true
      },
      '/ws': {
        target: 'ws://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  define: {
    'import.meta.env.VITE_WS_URL': JSON.stringify('ws://3.138.33.220/ws'),
    'import.meta.env.VITE_API_URL': JSON.stringify('http://3.138.33.220/api')
  }
}) 