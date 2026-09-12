import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-assets-resolver',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Normalize URL-decoded path
          const decodedUrl = decodeURIComponent(req.url || '');

          // If request starts with /assets/ or /Public/ or /Puplic/
          if (decodedUrl.startsWith('/assets/') || decodedUrl.startsWith('/Public/') || decodedUrl.startsWith('/Puplic/')) {
            const basename = path.basename(decodedUrl);
            const puplicPath = path.join(__dirname, 'Puplic', basename);
            if (fs.existsSync(puplicPath)) {
              req.url = '/' + encodeURIComponent(basename);
            }
          }
          next();
        });
      },
    },
  ],
  publicDir: 'Puplic',
  server: {
    port: 5173,
    host: true,
  },
});
