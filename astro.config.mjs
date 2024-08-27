import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://github.com/luisluchos/portfolio_minimal',  // Reemplaza <tu-usuario> con tu nombre de usuario de GitHub
  base: '/portfolio_minimal ',  // Reemplaza "mi-sitio" con el nombre de tu repositorio
});