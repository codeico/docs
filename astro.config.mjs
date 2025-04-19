// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.bangcode.id',
  integrations: [
    starlight({
      customCss: ['/src/styles/global.css','/src/styles/stake-buttons.css'],  // Menyediakan path dalam array
      title: 'BANGCODE',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/codeico' }
      ],
      sidebar: [
        {
          label: '0G Labs',
          // Autogenerate a group of links for the 'constellations' directory.
          autogenerate: { directory: '0g-labs' },
        },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
});
