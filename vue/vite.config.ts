import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const plugins: Array<Plugin> = [vue()]

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './test')
    }
  },
  build: {
    sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline'
  }
})
