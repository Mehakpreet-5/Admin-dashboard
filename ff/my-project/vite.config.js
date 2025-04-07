import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //  base: '/', 
  plugins: [react()],
  server: {
    host: 'localhost',  // Ensure it's accessible locally
    port: 3000,         // Change to desired port
    strictPort: true,   // Ensures Vite fails if the port is unavailable
  },
})
