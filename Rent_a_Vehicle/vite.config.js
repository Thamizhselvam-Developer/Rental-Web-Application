import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      
    }
  },
  define: {
       'process.env.VITE_API_REACT_APP_BackendApi': JSON.stringify(process.env.VITE_API_REACT_APP_BackendApi),
  }  
});