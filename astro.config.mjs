import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify/functions';
import image from '@astrojs/image';

export default defineConfig({
	site: "http://localhost:3000",
	output: "server",
	integrations: [
		mdx(),
		image()
	],
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true
		},
		syntaxHighlight: 'shiki'
	},
	adapter: netlify(),
});
