import Link from "next/link";
import { notFound } from "next/navigation";
import { Tweet } from "react-tweet";
import { blogs, getBlogBySlug } from "@/lib/blogs-data";

const tweetUrlRegex = /https:\/\/(?:x|twitter)\.com\/\w+\/status\/(\d+)/;

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 pb-16 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mb-8">
        <Link
          href="/blogs"
          className="text-sm text-zinc-600 underline-offset-4 hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-navy">
            {blog.title}
          </h1>
          <p className="mt-3 text-sm text-zinc-500">
            {blog.date} · {blog.readTime}
          </p>
        </header>

        <div className="space-y-5 text-zinc-700 leading-relaxed">
          {blog.body.flatMap((block, blockIdx) =>
            block.split("\n\n").map((segment, segIdx) => {
              const trimmed = segment.trim();
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={`${blockIdx}-${segIdx}`}
                    className="border-l-4 border-zinc-400 pl-4 italic text-zinc-600"
                  >
                    {trimmed.slice(2)}
                  </blockquote>
                );
              }
              const tweetMatch = trimmed.match(tweetUrlRegex);
              if (tweetMatch) {
                return (
                  <div key={`${blockIdx}-${segIdx}`} className="not-prose flex justify-center">
                    <Tweet id={tweetMatch[1]} />
                  </div>
                );
              }
              return (
                <p key={`${blockIdx}-${segIdx}`}>{trimmed}</p>
              );
            })
          )}
        </div>
      </article>

      <div className="mt-12 border-t border-zinc-200 pt-6">
        <Link
          href="/blogs"
          className="text-sm font-medium text-zinc-700 underline-offset-4 hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </main>
  );
}
