import svg from '@poppanator/sveltekit-svg'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from "@tailwindcss/vite"
import fs from 'node:fs'
import path from 'node:path'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import { imagetools } from "vite-imagetools"


export default defineConfig({

	plugins: [sveltekit(), tailwindcss(), svg({
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
	}), Icons({ compiler: 'svelte', defaultClass: 'icon' }), rawFonts(['.ttf']), imagetools({
		defaultDirectives: () => {
			return new URLSearchParams({
				format: "webp"
			})
		}
	})],
	server: {
		fs: {
			allow: ["./", ".."]
		},
		port: 5174
	},

	resolve: {
		alias: {
			$assets: path.resolve("./src/assets/"),
			$content: path.resolve("./content/"),
			$lib: path.resolve("./src/lib/"),
			$styles: path.resolve("./src/styles/"),
			$components: path.resolve("./src/components/")
		}
	},

})

function rawFonts(ext: any) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code: any, id: any) {
			if (ext.some((e: any) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id)
				return { code: `export default ${JSON.stringify(buffer)}`, map: null }
			}
		}
	}
}