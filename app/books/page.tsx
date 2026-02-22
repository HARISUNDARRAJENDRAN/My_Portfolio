import Link from "next/link";
import Image from "next/image";

const books = [
  "Man's Search for Meaning by Viktor Frankl",
  "The Laws of Human Nature by Robert Greene",
  "Atomic Habits by James Clear",
  "Can't Hurt Me by David Goggins.",
  "The 48 Laws of Power by Robert Greene",
  "The Managerial Revolution by James BurnHam",
  "The True Believer by Eric Hoffer",
  "The Soverign Individual",
];

const bookImages = [
  "/personal/books/1.jpg",
  "/personal/books/2.jpg",
  "/personal/books/3.jpeg",
  "/personal/books/4.jpg",
  "/personal/books/5.jpg",
  "/personal/books/6.jpg",
  "/personal/books/7.jpg",
  "/personal/books/8.jpg",
];

export default function BooksPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 pb-16 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mb-6">
        <Link href="/" className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400">
          ← Back to Home
        </Link>
      </div>

      <section>
        <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Books</h1>
        <p className="mb-8 text-zinc-700 dark:text-zinc-300">
          Personal fav books that have influenced my thinking and growth :)
        </p>

        <div className="space-y-4">
          {books.map((book, index) => (
            <div key={book} className="section-card p-4">
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900/50">
                <Image
                  src={bookImages[index]}
                  alt={book}
                  fill
                  className="object-contain"
                  priority={index < 3}
                />
              </div>
              <p className="text-zinc-800 dark:text-zinc-200">
                {index + 1}. {book}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
