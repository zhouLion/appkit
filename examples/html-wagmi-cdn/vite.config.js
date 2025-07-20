import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
    port: 3000
  },
  optimizeDeps: {
    exclude: ['@cotofe/appkit-cdn']
  },
  build: {
    commonjsOptions: {
      include: []
    }
  }
})
