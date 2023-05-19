import { defineConfig } from "father"

export default defineConfig({
    esm: {
        input: 'src',
        output: 'dist/es',
        platform:'browser',
        transformer: 'esbuild',
        sourcemap: false,
    },
    cjs: {
        input: 'src',
        output: 'dist/lib',
        platform:'node',
        transformer: 'babel',
        sourcemap: false,
    },
})