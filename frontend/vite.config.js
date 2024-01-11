import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,
    open: true,
    proxy: {
       '^/api/.*': {
          target: 'http://localhost:3000',
          ws: true,
          secure: false,
          changeOrigin: true,
       },
    }
  }
})
