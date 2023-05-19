module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	// 指定环境
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['@typescript-eslint'],
	globals: {
		module: true,
		exports: true,
		require: true,
		window: true,
		process: true,
		location: true,
		__locals: true,
		__dirname: true,
		ENV: true,
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'no-extra-semi': 'error',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-comment': 'off'
	},
}
