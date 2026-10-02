import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { defineCollection, reference } from "astro:content";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			category: z.string().optional(),
			title: z.string(),
			description: z.string(),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date().optional(),
			thumbnail: z.optional(image()),
			hidden: z.boolean().optional().default(false),
			relatedPosts: z.array(reference("blog")).optional(),
		}),
});

export const collections = { blog };
