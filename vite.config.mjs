import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({})
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/App'),
      '@rwv': path.resolve(__dirname, './src/reportWebVitals'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@fonts': path.resolve(__dirname, './src/fonts'),
      '@common': path.resolve(__dirname, './src/components/common-co'),
      '@layout': path.resolve(__dirname, './src/components/layout-co')
    }
  }
})