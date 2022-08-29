import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:3000",
	output: "server",
	integrations: [mdx()],
	markdown: {
		shikiConfig: {
			theme: "dracula",
		},
	},
	adapter: netlify(),
});
