import type { SvelteComponent } from 'svelte'

export type EventPostMeta = {
	title: string
	date: string
	excerpt: string
	category?: string
	slug: string
}

type EventPostModule = {
	metadata: Omit<EventPostMeta, 'slug'>
	default: typeof SvelteComponent
}

const modules = import.meta.glob('/src/content/events/*.md', { eager: true })

const posts: (EventPostMeta & { component: typeof SvelteComponent })[] = Object.entries(modules)
	.map(([path, mod]) => {
		const slug = path.split('/').pop()?.replace('.md', '') ?? ''
		const { metadata, default: component } = mod as EventPostModule

		return {
			slug,
			...metadata,
			component
		}
	})
	.filter((post) => post.slug && post.title && post.date)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getAllEventPosts(): EventPostMeta[] {
	return posts.map(({ component, ...meta }) => meta)
}

export function getEventPost(slug: string): (EventPostMeta & { component: typeof SvelteComponent }) | null {
	return posts.find((post) => post.slug === slug) ?? null
}
