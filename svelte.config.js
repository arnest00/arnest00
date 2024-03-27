import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$styles': '/src/styles',
		}
	},
};

export default config;
