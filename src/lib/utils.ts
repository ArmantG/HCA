import { clsx } from "clsx"
import { slug } from "github-slugger"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: (string | undefined | null | false)[]): string {
	return twMerge(clsx(inputs))
}

export const makeSlug = (str: string) => {
	return slug(str)
}

export const copyToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text)
	} catch (error) {
		console.error(error)

		return false
	}

	return true
}

export function getFromSessionStorage(key: string) {
	if (typeof sessionStorage !== "undefined") {
		return sessionStorage.getItem(key)
	}

	return null
}

export function getFromLocalStorage(key: string) {
	if (typeof localStorage !== "undefined") {
		return localStorage.getItem(key)
	}

	return null
}

export function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
}

export function unSlugify(str: string) {
	return str
		.replace(/-/g, " ")
		.replace(
			/\w\S*/g,
			(txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		)
}
