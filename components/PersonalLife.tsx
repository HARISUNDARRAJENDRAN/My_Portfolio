import Link from "next/link";

export default function PersonalLife() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Personal Life</h2>
      <div className="space-y-4">
        <div className="section-card p-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Books</h3>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            Personal fav books that have influenced my thinking and growth :)
          </p>
          <Link
            href="/books"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            View Books List
          </Link>
        </div>
        <div className="section-card p-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Mangas</h3>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            All time fav Animes and Mangas which helped me a lot to grow as a person
          </p>
          <Link
            href="/mangas"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            View Manga List
          </Link>
        </div>
        <div className="section-card p-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Movies</h3>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            Movies and shows that have inspired and entertained me over the years.
          </p>
          <Link
            href="/movies-series"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            View Movies & Series List
          </Link>
        </div>
      </div>
    </section>
  );
}
