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
			provider: fontProviders.local(),
			name: "Atkinson",
			cssVariable: "--font-atkinson",
			fallbacks: ["sans-serif"],
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/atkinson-regular.woff"],
						weight: 400,
						style: "normal",
						display: "swap",
					},
					{
						src: ["./src/assets/fonts/atkinson-bold.woff"],
						weight: 700,
						style: "normal",
						display: "swap",
					},
				],
			},
		},
	],
});
