import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify/functions';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:3000",
	output: "static",
	integrations: [
		mdx(), 
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
	  	})],
	markdown: {
		shikiConfig: {
			theme: "dracula",
		},
	},
	adapter: netlify(),
});
