
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    svgLoader(),
    
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)),},
  },
})
