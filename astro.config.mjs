import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:3000",
	output: "static",
	integrations: [mdx()],
	markdown: {
		shikiConfig: {
			theme: "dracula",
		},
	},
});
