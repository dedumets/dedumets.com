// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://dedumets.com",
	trailingSlash: "never",
	integrations: [
		mdx(),
		sitemap({
			// TODO: Consider implementing sitemaps manually to automate hiding posts.
			filter: (page) => page.includes("markdown-style-guide"),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "K2D",
			cssVariable: "--font-sans",
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Cascadia Mono",
			cssVariable: "--font-mono",
			fallbacks: ["mono"],
		},
	],
});
