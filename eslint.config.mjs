import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

import svelte from 'eslint-plugin-svelte'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	{
		ignores: [
			'**/.DS_Store',
			'**/node_modules',
			'build',
			'.svelte-kit',
			'package',
			'**/.env',
			'**/.env.*',
			'!**/.env.example',
			'**/pnpm-lock.yaml',
			'**/package-lock.json',
			'**/yarn.lock'
		]
	},

	js.configs.recommended,
	...ts.configs.recommended,
	importPlugin,
	unusedImports,
	prettier,
	...svelte.configs['flat/recommended'],
	...svelte.configs['flat/prettier'],

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},

			ecmaVersion: 2020,
			sourceType: 'module'
		},

		rules: {
			'no-cond-assign': 'warn',
			'no-constant-condition': 'warn',
			'no-unreachable': 'warn',
			'no-unused-expressions': 'warn',
			'no-constant-binary-expression': 'warn',
			'no-sequences': 'warn',
			'@typescript-eslint/no-explicit-any': 'off'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: 'svelte-eslint-parser'
			}
		},
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
]
