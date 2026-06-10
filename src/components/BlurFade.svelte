<script lang="ts">
	import { cn } from '$lib/utils'
	import { inview } from 'svelte-inview'
	import { AnimatePresence, Motion } from 'svelte-motion'
	import type { Snippet } from 'svelte'

	let {
		duration = 1.4,
		delay = 0,
		yOffset = 10,
		inViewMargin = '-50px',
		blur = '6px',
		once = false,
		class: className = '',
		children
	}: {
		duration?: number
		delay?: number
		yOffset?: number
		inViewMargin?: string
		blur?: string
		once?: boolean
		class?: string
		children: Snippet
	} = $props()

	const id = crypto.randomUUID().slice(0, 8)
	const defaultVariants = $derived({
		hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
		visible: { opacity: 1, y: 0, filter: `blur(0px)` }
	})
	let isInView: 'hidden' | 'visible' = $state('hidden')
</script>

<AnimatePresence let:item list={[{ key: id }]}>
	<Motion
		initial="hidden"
		animate={isInView}
		exit="hidden"
		variants={defaultVariants}
		transition={{
			delay: 0.04 + delay,
			duration,
			ease: 'easeOut'
		}}
		let:motion
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
			use:motion
			oninview_change={(e) => {
				isInView = e.detail.inView ? 'visible' : 'hidden'
			}}
			class={cn(className)}
		>
			{@render children()}
		</div>
	</Motion>
</AnimatePresence>
