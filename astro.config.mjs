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
			items: [
			  '0g-labs',
			  {
				label: 'Validator Nodes',
				items: [
				  '0g-labs/validator-node',
				  '0g-labs/validator-node/backup',
				  '0g-labs/validator-node/commands',
				  '0g-labs/validator-node/addrbook',
				  '0g-labs/validator-node/livepeers',
				],
			  },
			  {
				label: 'Storage Node',
				items: [
				  '0g-labs/storage-node/installation',
				  '0g-labs/storage-node/snapshot',
				  '0g-labs/storage-node/install_v3',
				  '0g-labs/storage-node/migration_to_v3',
				],
			  },
			],
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
