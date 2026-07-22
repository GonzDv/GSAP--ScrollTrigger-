// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  // 1. Tu dominio principal de GitHub Pages
  site: 'https://TU-gonzdv.github.io', 
  
  // 2. El nombre EXACTO de tu repositorio (con la barra al inicio)
  base: '/GSAP--ScrollTrigger-',
  vite: {
    plugins: [tailwindcss()],
  },
});
