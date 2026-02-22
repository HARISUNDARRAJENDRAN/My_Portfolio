import Link from "next/link";
import Image from "next/image";

const moviesAndSeries = [
  "Whiplash (2014)",
  "Stalker (1979) by Andrei Tarkovsky",
  "500 days of Summer",
  "The Seventh Seal",
  "Utopia",
  "The Silicon Valley - Sitcom Series",
  "Kill Bill All volumes",
  "Dark",
  "Shawshank Redemption",
];

const movieImages = [
  "/personal/movies/whiplash.jpg",
  "/personal/movies/stalker-1979-poster.jpg",
  "/personal/movies/500daysofSummer.jpg",
  "/personal/movies/seventhSeal.jpg",
  "/personal/movies/Utopia.jpg",
  "/personal/movies/SiliconValley.jpg",
  "/personal/movies/KillBill.jpg",
  "/personal/movies/Dark.jpg",
  "/personal/movies/ShawshankRedemption.jpg",
];

export default function MoviesSeriesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 pb-16 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mb-6">
        <Link href="/" className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400">
          ← Back to Home
        </Link>
      </div>

      <section>
        <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Movies & Series</h1>
        <p className="mb-8 text-zinc-700 dark:text-zinc-300">
          Movies and shows that have inspired and entertained me over the years.
        </p>

        <div className="space-y-4">
          {moviesAndSeries.map((item, index) => (
            <div key={item} className="section-card p-4">
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900/50">
                <Image
                  src={movieImages[index]}
                  alt={item}
                  fill
                  className="object-contain"
                  priority={index < 3}
                />
              </div>
              <p className="text-zinc-800 dark:text-zinc-200">
                {index + 1}. {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
