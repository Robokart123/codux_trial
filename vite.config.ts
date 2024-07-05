import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg?react',
        }),
    ],
    
    base: './', // Use './' to make paths relative in the build
    
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/'),
        },
    },
});
