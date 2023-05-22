import { defineConfig } from 'father'
import transformImportLess2Css from './scripts/transformImportLess2Css'
export default defineConfig({
	extends: '../../.fatherrc.base.ts',
	extraBabelPlugins: [transformImportLess2Css],
})
