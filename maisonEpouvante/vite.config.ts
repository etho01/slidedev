import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.mkv'],
  server: {
    fs: {
      strict: false
    }
  }
})
