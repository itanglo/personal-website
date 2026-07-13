import { client } from "./lib/client";

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  category: string;
};

export type Post = PostListItem & {
  body: unknown[];
};

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  author,
  publishedAt,
  category
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  author,
  publishedAt,
  category,
  body
}`;

export async function getPosts(): Promise<PostListItem[]> {
  return client.fetch<PostListItem[]>(POSTS_QUERY);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch<Post | null>(POST_BY_SLUG_QUERY, { slug });
}