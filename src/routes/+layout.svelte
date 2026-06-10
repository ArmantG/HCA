<script lang="ts">
	import { page } from '$app/state'
	import { GOOGLE_MAPS_URL, SITE_ADDRESS, SITE_EMAIL, SITE_LOGO, SITE_PHONE } from '$lib/config'
	import { resolveSeo, SITE_NAME } from '$lib/seo'
	import '../app.css'
	import type { Snippet } from 'svelte'
	import type { LayoutData } from './$types'

	let { data, children } = $props<{ data: LayoutData; children: Snippet }>()

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/academics', label: 'Academics' },
		{ href: '/admissions', label: 'Admissions' },
		{ href: '/fees', label: 'Fees' },
		{ href: '/policies', label: 'Policies' },
		{ href: '/contact', label: 'Contact' }
	]

	const seo = $derived(resolveSeo(data?.seo, page.url.pathname))
	const activePath = $derived(page.url.pathname)
	const isActive = (href: string) =>
		href === '/' ? activePath === '/' : activePath.startsWith(href)
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={seo.canonical} />
	<meta name="robots" content={seo.robots} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:type" content={seo.ogType} />
	<meta property="og:url" content={seo.canonical} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image" content={seo.ogImage} />
	<meta property="og:image:alt" content={`${SITE_NAME} logo`} />
	<meta property="og:locale" content="en_ZA" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.ogImage} />
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900">
	<header class="border-b border-slate-200 bg-white">
		<div
			class="mx-auto flex max-w-[1760px] flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between xl:px-12 2xl:px-16"
		>
			<a
				class="flex min-w-0 items-center gap-3 lg:shrink-0"
				href="/"
				aria-label="Harding Christian Academy home"
			>
				<img class="h-14 w-14 object-contain sm:h-16 sm:w-16" src={SITE_LOGO} alt="" />
				<span class="min-w-0 leading-tight">
					<span class="block text-lg font-semibold text-navy sm:text-xl"
						>Harding Christian Academy</span
					>
					<span class="block text-sm text-slate-600">Thy Word is Our Lamp</span>
				</span>
			</a>

			<div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
				<nav
					class="flex flex-wrap gap-1 rounded-md bg-slate-50 p-1 text-sm sm:flex-nowrap sm:overflow-x-auto lg:bg-white lg:p-0"
					aria-label="Main navigation"
				>
					{#each navItems as item (item.href)}
						<a
							class={`inline-flex min-h-11 items-center whitespace-nowrap rounded-md px-3 py-2 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy ${
								isActive(item.href)
									? 'bg-gold/15 font-semibold text-navy'
									: 'text-slate-700 hover:bg-slate-100 hover:text-navy'
							}`}
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
						>
							{item.label}
						</a>
					{/each}
				</nav>
				<a
					class="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
					href="/admissions/apply"
				>
					Apply
				</a>
			</div>
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer class="border-t border-slate-200 bg-white">
		<div
			class="mx-auto flex max-w-[1760px] flex-col gap-10 px-5 py-10 text-sm text-slate-600 sm:px-8 lg:flex-row lg:items-start lg:justify-between xl:px-12 2xl:px-16"
		>
			<div class="flex max-w-xl items-start gap-4">
				<img class="h-20 w-20 shrink-0 object-contain" src={SITE_LOGO} alt="" />
				<div>
					<h2 class="text-base font-semibold text-slate-900">Harding Christian Academy</h2>
					<p class="mt-2 max-w-md">
						Independent Christian schooling in Harding, KwaZulu-Natal, serving learners from Grades
						1 to 9.
					</p>
				</div>
			</div>

			<div
				class="grid w-full gap-8 sm:grid-cols-[minmax(0,1fr)_auto] lg:w-[58%] lg:max-w-4xl lg:gap-12"
			>
				<div>
					<h2 class="text-base font-semibold text-slate-900">Contact</h2>
					<ul class="mt-3 space-y-2">
						<li>
							<a class="hover:text-navy" href={`tel:${SITE_PHONE.replaceAll(' ', '')}`}
								>{SITE_PHONE}</a
							>
						</li>
						<li><a class="hover:text-navy" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
						<li><a class="hover:text-navy" href={GOOGLE_MAPS_URL}>{SITE_ADDRESS}</a></li>
					</ul>
				</div>
				<div>
					<h2 class="text-base font-semibold text-slate-900">Useful Links</h2>
					<ul class="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:block sm:space-y-2">
						<li><a class="hover:text-navy" href="/admissions/apply">Apply online</a></li>
						<li><a class="hover:text-navy" href="/policies">Policies</a></li>
						<li><a class="hover:text-navy" href="/privacy">Privacy</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>
