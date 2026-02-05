import type { SvelteComponent } from 'svelte';

export type NewsPostMeta = {
	title: string;
	date: string;
	excerpt: string;
	category?: string;
	slug: string;
};

type NewsPostModule = {
	metadata: Omit<NewsPostMeta, 'slug'>;
	default: typeof SvelteComponent;
};

const modules = import.meta.glob('/src/content/news/*.md', { eager: true });

const posts: (NewsPostMeta & { component: typeof SvelteComponent })[] = Object.entries(modules)
	.map(([path, mod]) => {
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		const { metadata, default: component } = mod as NewsPostModule;

		return {
			slug,
			...metadata,
			component
		};
	})
	.filter((post) => post.slug && post.title && post.date)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllNewsPosts(): NewsPostMeta[] {
	return posts.map(({ component, ...meta }) => meta);
}

export function getNewsPost(slug: string): (NewsPostMeta & { component: typeof SvelteComponent }) | null {
	return posts.find((post) => post.slug === slug) ?? null;
}
