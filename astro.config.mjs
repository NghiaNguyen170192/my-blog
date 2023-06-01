import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  output: "static",
  integrations: [
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    },
    syntaxHighlight: 'shiki'
  },
  experimental: {
    assets: true
  }
});