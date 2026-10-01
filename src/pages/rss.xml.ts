import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { getCollection } from "astro:content";

export const GET = (async ({ site }) => {
	const posts = await getCollection("blog");

	if (!site) {
		return new Response(null, {
			status: 500,
			statusText: "Misconfigured feed",
		});
	}

	return rss({
		site,
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}) satisfies APIRoute;
