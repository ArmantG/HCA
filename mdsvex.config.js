import rehypeSectionize from '@hbsnow/rehype-sectionize'
import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import relativeImages from 'mdsvex-relative-images'
import path from 'path'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import autolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeFormat from 'rehype-format'
import rehypeSemanticBlockquote from 'rehype-semantic-blockquote'
import slugPlugin from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import remarkGFM from 'remark-gfm'
import remarkGithub from 'remark-github'
import remarkParse from 'remark-parse'
import preview, { textFormatter } from 'remark-preview'
import readingTime from 'remark-reading-time'

/** @type {import('mdsvex').Config} */
const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.mdx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		[
			remarkGithub,
			{
				repository: 'https://github.com/ArmantG/armant_blog_svelte.git'
			}
		],
		// adds a `readingTime` frontmatter attribute
		readingTime(),
		remarkGFM,
		posts,
		relativeImages,
		remarkParse,
		preview(textFormatter({ length: 999999, maxBlocks: 999 }), {
			attribute: 'searchPreview'
		}),
		preview(
			textFormatter({
				length: 250,
				maxBlocks: 2
			}),
			{
				attribute: 'preview'
			}
		)
	],
	rehypePlugins: [
		slugPlugin,
		[
			autolinkHeadings,
			{
				behavior: 'wrap'
			}
		],
		rehypeAccessibleEmojis,
		rehypeUnwrapImages,
		rehypeSectionize,
		rehypeFormat,
		rehypeStringify,
		rehypeSemanticBlockquote,
		responsiveTablesRehypePlugin,
		[rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]
	]
})

export default config

function responsiveTablesRehypePlugin() {
	return (tree) => {
		if (!tree.children) return

		for (let i = 0; i < tree.children.length; i++) {
			const child = tree.children[i]

			if (child.type === 'element' && child.tagName === 'table') {
				const wrapper = {
					type: 'element',
					tagName: 'div',
					properties: {
						style: 'overflow:auto'
					},
					children: [child]
				}

				tree.children[i] = wrapper

				i++
			}
		}
	}
}

function posts() {
	return (_, file) => {
		const parsed = path.parse(file.filename)
		const slug =
			parsed.name === 'index' ? path.parse(file.filename).dir.split('/').pop() : parsed.name

		file.data.fm = {
			...file.data.fm,
			slug,

			// remove timezone from parsed date
			date: file.data.fm.date ? formatDateProperly(new Date(file.data.fm.date)) : undefined,
			// use the actual lastUpdated frontmatter if present
			lastUpdated: file.data.fm.lastUpdated
				? formatDateProperly(new Date(file.data.fm.lastUpdated))
				: undefined,
			path: file.filename
				? `/blog/${file.filename.split('/').slice(-1).join('/').replace('.md', '')}`
				: undefined
		}
	}
}

function formatDateProperly(date) {
	return new Date(date).toLocaleDateString('en-ZA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

// function youtube() {
//     return (tree) => {
//         visit(tree, (node) => {
//             if (!node || typeof node.value !== 'string') return
//             if (!node.value.startsWith('<youtube ')) return

//             let id = getAttr(node.value, 'youtube', 'id')
//             let title = getAttr(node.value, 'youtube', 'title')

//             if (!id) return

//             node.value = `<iframe title="${title ?? ''}" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="747" height="420" ></iframe>`
//             return node
//         })
//     }
// }

// ...existing code...

function getAttr(str, elem, attr) {
	const regex = new RegExp(`<${elem}[^>]*?${attr}=(["\\'])?((?:.(?!\\1|>))*.?)\\1?`, 'ig')
	const res = regex.exec(str)
	return res && res[2] ? res[2] : null
}
