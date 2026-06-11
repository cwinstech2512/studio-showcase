import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  base: '/studio-showcase/',
  plugins: [vue()],
})
