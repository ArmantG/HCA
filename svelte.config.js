import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import sequence from 'svelte-sequential-preprocessor';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: sequence([
		vitePreprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]),

	kit: {
		adapter: adapter(),
		csrf: {
			trustedOrigins: [
				'https://hca-one.vercel.app/',
				'http://localhost:5174',
				'https://www.hardingchristianacademy.co.za/'
			]
		},
		prerender: {
			crawl: true,
			handleHttpError: 'warn',
			entries: ['*']
		}
	}
};

export default config;
