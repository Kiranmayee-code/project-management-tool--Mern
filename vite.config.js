import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    Port:3000,
    Proxy:{
      "\api":{
        target:"http://localhost:8800",
        changeOrigin:true,
      },
    },
  },
});