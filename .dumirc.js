import { defineConfig } from 'dumi'
import { defineThemeConfig } from 'dumi-theme-chakra'
import { description, keywords, author } from './package.json'

// const repo = 'web-design' // 仓库名称
const repo = 'monorepo'
function withGh(uri = '') {
	const prefix = process.env.MODE === 'prod' ? `/${repo}/` : '/'
	return [prefix, uri].join('')
}

export default defineConfig({
	favicons: [withGh('favicon.jpg')],
	// github page
	base: withGh(),
	publicPath: withGh(),
	// path
	// resolve: {
	// 	atomDirs: [
	// 		{
	// 			type: 'components',
	// 			dic: 'packages',
	// 		},
	// 	],
	// },
	// theme
	themeConfig: {
		nprogress: true,
		// logo: withGh('logo.jpeg'),
		logo: false,
		footer: '',
		...defineThemeConfig({
			helmetIcon: '🍺',
			// settingPanelVisible: true,
			thumbBackground: true,
			description,
			keywords,
			author,
			hero: {
				showVersionBadge: true,
			},
		}),
	},
})
