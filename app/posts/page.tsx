import type { Metadata } from "next";
import Link from "@/components/Link";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <main className="flex flex-col">
      <article className="max-w-[70ch] self-center">
        <header>
          <h2 className="text-3xl">I wonder what the first post will be about?</h2>
          <p className="text-lg pt-2">
            Posted by <Link href="#">Paolo</Link> on Thu 9th Jul 2026 in{" "}
            <Link href="#">Random</Link>
          </p>
        </header>
        <p className="pt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </article>
    </main>
  );
}
