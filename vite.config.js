import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // lets you test the service worker in `npm run dev`, not just prod builds
      },
      includeAssets: ['favicon.ico', 'revyze_favicon/apple-touch-icon.png', 'revyze_favicon/favicon-16x16.png', 'revyze_favicon/favicon-32x32.png'],
      manifest: {
        name: 'Revyze',
        short_name: 'Revyze',
        description: 'Revise what you learned, before you forget it.',
        theme_color: '#1F9D63',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/revyze_favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/revyze_favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/revyze_favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // precache everything the app needs — full offline-first
        globPatterns: ['**/*.{js,css,html,svg,png,ico,ttf,woff2}'],
        runtimeCaching: [
          {
            // images not covered by precache (e.g. category icons loaded at runtime)
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
            },
          },
        ],
      },
    }),
     tailwindcss()],
})
