import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/components/Link";
import PortableText from "@/components/PortableText";
import { formatPostDate } from "@/lib/formatDate";
import { getPostBySlug, getPosts } from "@/sanity/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return { title: post.title };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="flex flex-col">
      <article className="max-w-[70ch] self-center">
        <header>
          <h2 className="text-3xl">{post.title}</h2>
          <p className="text-lg pt-2">
            Posted by <Link href="#">{post.author}</Link> on{" "}
            {formatPostDate(post.publishedAt)} in{" "}
            <Link href="#">{post.category}</Link>
          </p>
        </header>
        <div className="pt-8 [&_p]:mb-4">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  );
}