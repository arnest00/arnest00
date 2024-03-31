import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$components': '/src/components',
			'$styles': '/src/styles',
		},
	},
	preprocess: [vitePreprocess()],
};

export default config;
