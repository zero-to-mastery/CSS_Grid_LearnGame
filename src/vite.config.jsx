import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  root: process.cwd(),
  base: command === 'build' ? '/CssGridGame/' : '/',
  build: { outDir: 'dist' }
}))