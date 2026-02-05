<script lang="ts">
	import { page } from '$app/state';
	import { showMobileDropdown } from '$lib/stores';
	import { onMount } from 'svelte';
	import { Dropdown } from '.';
	import { ChevronRight, HamburgerMenu } from '../assets/icons';
	import { pcsLogoNew, pcsLogoNewOutlineWhite } from '../assets/images';
	import { navItems } from '../constants';
	import NavbarMobile from './mobile/NavbarMobile.svelte';

	type NavItem = (typeof navItems)[number];

	let scrolled = $state(false);
	let hovered = $state(false);
	let hoveredElement = $state('');

	// For smaller devices
	let show = $state(false);

	const activePrefixes: Record<string, string[]> = {
		home: ['/'],
		about: ['/about', '/policies', '/gallery', '/privacy'],
		academics: [
			'/academics',
			'/foundation-phase',
			'/intermediate-phase',
			'/senior-phase',
			'/calendar'
		],
		admissions: ['/admissions'],
		fees: ['/fees'],
		news: ['/news'],
		contact: ['/contact']
	};

	const currentPath = $derived(page.url.pathname);

	showMobileDropdown.subscribe((value) => (show = value));

	$effect(() => {
		page.url.pathname;
		hovered = false;
		hoveredElement = '';
		showMobileDropdown.update(() => (show = false));
	});

	function shrinkNav() {
		window.scrollY > 20 ? (scrolled = true) : (scrolled = false);
	}

	function handleClickOutside(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const clickedNavLink = target.closest('[data-nav-link="true"]');

		if (clickedNavLink) {
			hovered = false;
			hoveredElement = '';
			showMobileDropdown.update(() => (show = false));
			return;
		}

		if (window.innerWidth >= 1024) {
			if (!target.closest('[data-desktop-nav="true"]')) {
				hovered = false;
				hoveredElement = '';
			}
			return;
		}

		const clickedMobileNav = target.closest('[data-mobile-nav="true"]');
		const clickedMobileToggle = target.closest('[data-mobile-toggle="true"]');

		if (show && !clickedMobileNav && !clickedMobileToggle) {
			showMobileDropdown.update(() => (show = false));
		}
	}

	function isActiveNav(item: NavItem) {
		if (item.path === '/') {
			return currentPath === '/';
		}

		const prefixes = activePrefixes[item.data] ?? [item.path];

		return prefixes.some(
			(prefix) => currentPath === prefix || currentPath.startsWith(`${prefix}/`)
		);
	}

	const applyClass = $derived(page.url.pathname === '/contact');

	onMount(() => {
		window.addEventListener('scroll', shrinkNav);
		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
</script>

<div class="fixed left-0 top-0 z-100 w-full">
	<!-- Navbar large devices -->
	<div
		class={`from-nav-gradient absolute left-0 top-0 z-10 hidden w-full bg-linear-to-b transition-[opacity,height] duration-500 ease-in-out lg:block ${
			scrolled || applyClass ? 'h-20 opacity-0' : 'h-40 opacity-100'
		}`}
	></div>
	<nav
		class={`absolute left-0 top-0 z-40 hidden w-full transform-gpu items-center
    justify-between px-[5%] transition-[box-shadow,background-color,height] duration-500 ease-in-out lg:flex ${
			scrolled || applyClass ? 'bg-navy shadow-nav-shadow h-16' : 'h-40 bg-none shadow-none'
		}`}
		data-desktop-nav="true"
	>
		<a
			href="/"
			class={`z-20 flex origin-left transform-gpu flex-row items-center gap-4 transition-transform duration-500 ease-in-out ${
				scrolled || applyClass ? 'scale-50' : 'scale-100'
			}`}
			data-nav-link="true"
		>
			<!-- HCA logo -->
			<div class="relative h-28 w-28">
				<img
					src={pcsLogoNewOutlineWhite}
					class="absolute z-9 h-28 w-28 bg-cover bg-no-repeat hover:scale-105 transform duration-200 ease-in-out"
					alt="Harding Christian Academy logo"
					loading="lazy"
				/>
			</div>

			<!-- HCA text -->
			<div
				class="flex origin-left flex-col text-white transition-[color] duration-500 ease-in-out hover:text-neutral-400"
			>
				<span class="text-5xl uppercase">Harding</span>
				<div class="flex justify-between">
					<span class="text-xl uppercase tracking-wide">Christian</span>
					<span class="text-xl uppercase tracking-wide">Academy</span>
				</div>
			</div></a
		>
		<ul class="nav-links z-20 hidden h-full flex-row md:flex">
			{#each navItems as item, idx (idx)}
				{#if item.data === 'about' || item.data === 'academics'}
					<li
						class="relative h-full text-white hover:text-neutral-300"
						aria-current={isActiveNav(item) ? 'page' : undefined}
					>
						<!-- svelte-ignore a11y_invalid_attribute -->
						<button
							class="flex h-full items-center gap-2 px-4 text-lg transition-colors duration-300"
							onclick={(e) => {
								e.stopPropagation();
								if (hoveredElement === item.data && hovered) {
									hovered = false;
								} else {
									hoveredElement = item.data;
									hovered = true;
								}
							}}
							data-nav={item.data}
						>
							{item.title}
							<ChevronRight
								style="h-4 w-4 transition-transform duration-300 {hoveredElement === item.data &&
								hovered
									? 'rotate-180'
									: 'rotate-90'}"
							/>
						</button>
						{#if hoveredElement === item.data && hovered}
							<Dropdown drop={hoveredElement} {scrolled} />
						{/if}
					</li>
				{:else}
					<li
						class="relative h-full text-white hover:text-neutral-300"
						aria-current={isActiveNav(item) ? 'page' : undefined}
					>
						<a
							class="flex h-full items-center px-4 text-lg transition-colors duration-300"
							href={item.path}
							data-nav={item.data}
							data-nav-link="true">{item.title}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>

	<!-- Navbar small devices -->
	<nav
		class="bg-navy shadow-nav-shadow flex h-16 w-full items-center justify-between from-transparent px-[5%] lg:hidden"
	>
		<a href="/" data-nav-link="true">
			<div class="relative h-14 w-14">
				<img
					src={pcsLogoNew}
					class="absolute z-10 h-14 w-14 transform-gpu bg-cover bg-no-repeat opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
					alt="Harding Christian Academy logo"
					loading="lazy"
				/>
				<img
					src={pcsLogoNewOutlineWhite}
					class="absolute z-9 h-14 w-14 bg-cover bg-no-repeat"
					alt="Harding Christian Academy logo"
					loading="lazy"
				/>
			</div>
		</a>
		<button
			onclick={() => showMobileDropdown.update(() => (show = !show))}
			aria-label="hamburger menu"
			data-mobile-toggle="true"
		>
			<HamburgerMenu />
		</button>
	</nav>
	{#if show}
		<NavbarMobile />
	{/if}
</div>

<style>
	.nav-links li[aria-current='page']::before {
		--size: 5px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-accent);
	}
</style>
