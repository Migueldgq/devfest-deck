import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    // Cloudflare quick tunnels (and similar) hit Vite's host check
    allowedHosts: true,
  },
})
