import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/guides/example/'
	},
	integrations: [
		starlight({
			title: 'Menu app',
			sidebar: [
				{
					label: 'Installation',
					autogenerate: { directory: 'install' },
				},
				{
					label: "Properties Project",
					autogenerate: { directory: 'project' },
				}

			],
		}),
	],
});
