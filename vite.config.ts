import svg from '@poppanator/sveltekit-svg'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import Icons from 'unplugin-icons/vite'
import { defineConfig, type Plugin } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		svg({
			svgoOptions: {
				plugins: [
					{
						name: 'preset-default',
						fn: () => ({}),
						params: {
							overrides: {
								removeViewBox: false
							}
						}
					},
					'removeDimensions'
				]
			}
		}),
		Icons({ compiler: 'svelte', defaultClass: 'icon' }),
		rawFonts(['.ttf']),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'webp'
				})
			}
		})
	],
	server: {
		fs: {
			allow: ['./', '..']
		},
		port: 5174
	}
})

function rawFonts(ext: string[]): Plugin {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(_code, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id)
				return { code: `export default ${JSON.stringify(buffer)}`, map: null }
			}
		}
	}
}
