module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended', '@vue/prettier', '@vue/typescript/recommended', '@vue/prettier/@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	globals: {},
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never',
			},
		],
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
	ignorePatterns: ['tests/**/*', '**/_mocks/**/*', 'public/nicedcv/**/*', 'public/test-dcv/**/*'],
};
