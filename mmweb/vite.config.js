import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from "vite-plugin-md"
import Prism from 'markdown-it-prism'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		Vue({
			include: [ /\.vue$/, /\.md$/ ]
		}),
		Markdown({
			wrapperClasses: 'markdown-body',
			markdownItUses: [ Prism ],
		}),
	],
	server: {
		port: '8000'
	}
})
