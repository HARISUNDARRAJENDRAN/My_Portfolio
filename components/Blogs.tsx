export default function Blogs() {
  const blogs = [
    {
      title: "Blog Post Title",
      description: "A brief description of the blog post.",
      date: "January 1, 2024",
      readTime: "5 min read",
      link: "#",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Blog</h2>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {blog.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">{blog.description}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-3">
              {blog.date} · {blog.readTime}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
