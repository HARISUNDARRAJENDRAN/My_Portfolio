import Link from "next/link";
import { blogs } from "@/lib/blogs-data";

export default function BlogsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 pb-16 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-zinc-600 underline-offset-4 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      <section>
        <h1 className="mb-2 text-3xl font-bold text-navy">
          Blogs
        </h1>
        <p className="mb-8 text-zinc-700">
          Thoughts on software engineering, design, and everything in between.
        </p>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="section-card block p-6 hover:border-zinc-300"
            >
              <h2 className="font-semibold text-navy">
                {blog.title}
              </h2>
              {blog.description && (
                <p className="mt-2 text-zinc-600">
                  {blog.description}
                </p>
              )}
              <p className="mt-3 text-sm text-zinc-500">
                {blog.date} · {blog.readTime}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
