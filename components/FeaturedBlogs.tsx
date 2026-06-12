import Link from "next/link";
import { blogs } from "@/lib/blogs-data";

export default function FeaturedBlogs() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Featured Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="section-card block p-5 hover:border-zinc-300"
          >
            <h3 className="font-semibold text-navy">{blog.title}</h3>
            {blog.description && (
              <p className="mt-2 text-sm text-zinc-600">{blog.description}</p>
            )}
            <p className="mt-2 text-xs text-zinc-500">
              {blog.date} · {blog.readTime}
            </p>
          </Link>
        ))}
      </div>
      <Link
        href="/blogs"
        className="mt-4 inline-block text-sm font-medium text-zinc-600 underline-offset-4 hover:underline"
      >
        View all blogs →
      </Link>
    </section>
  );
}
