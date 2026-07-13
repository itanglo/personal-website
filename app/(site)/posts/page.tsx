import type { Metadata } from "next";
import Link from "@/components/Link";
import { formatPostDate } from "@/lib/formatDate";
import { getPosts } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col">
      <div className="max-w-[70ch] self-center w-full">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul className="flex flex-col gap-8">
            {posts.map((post) => (
              <li key={post._id}>
                <h2 className="text-3xl">
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-lg pt-2">
                  Posted by {post.author} on {formatPostDate(post.publishedAt)} in{" "}
                  {post.category}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}