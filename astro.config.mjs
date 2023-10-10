import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/install/example',
		'guides/example/': '/install/example'
	},
	output: 'static',
	adapter: vercelStatic(),
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
