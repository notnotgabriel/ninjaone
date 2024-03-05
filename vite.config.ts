/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./src/test/setupTest.ts'],
    environment: 'jsdom',
    testNamePattern: /\.\/src\/(?:.*\/)*[^/]+\.test\.tsx?$/,
    globals: true
  }
})
