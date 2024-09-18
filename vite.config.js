import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure correct resolution of React and React-DOM
      'react-dom/client': 'react-dom'
    }
  }
});
