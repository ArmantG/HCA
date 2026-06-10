import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

import svelte from 'eslint-plugin-svelte'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import ts from 'typescript-eslint'

export default [
	{
		ignores: [
			'**/.DS_Store',
			'**/node_modules',
			'build',
			'**/build/**',
			'.svelte-kit',
			'**/.svelte-kit/**',
			'.vercel',
			'.vercel/**',
			'.pnpm-store',
			'.pnpm-store/**',
			'.playwright-mcp',
			'.playwright-mcp/**',
			'package',
			'static/vendor',
			'static/vendor/**',
			'src/assets/blobs/**',
			'src/assets/curves/**',
			'src/assets/icons/**',
			'src/components/**',
			'src/features/**',
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
	{
		plugins: {
			import: importPlugin,
			'unused-imports': unusedImports
		}
	},
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
			'@typescript-eslint/no-explicit-any': 'off',
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/require-each-key': 'off'
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		},
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
]
