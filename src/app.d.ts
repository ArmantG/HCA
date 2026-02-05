// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte'
	const component: typeof SvelteComponent
	export default component
	export const metadata: {
		title: string
		date: string
		excerpt: string
		category?: string
	}
}

declare module '*.svx' {
	import type { SvelteComponent } from 'svelte'
	const component: typeof SvelteComponent
	export default component
	export const metadata: {
		title: string
		date: string
		excerpt: string
		category?: string
	}
}

export { };
