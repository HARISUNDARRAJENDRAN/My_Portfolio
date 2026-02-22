import Link from "next/link";
import Image from "next/image";

const mangas = [
  "Usogui",
  "Tokyo Ghoul",
  "Monster",
  "Jujutsu Kaisen",
  "Kagurabachi",
  "Lookism Manhwa",
  "One Piece",
  "Berserk",
  "Vagabond",
  "JoJo No Kimyo na Bouken",
];

const mangaImages = [
  "/personal/manga/usogui.jpg",
  "/personal/manga/tokyo_ghoul.png",
  "/personal/manga/Monster.jpg",
  "/personal/manga/Jujutsu-Kaisen.jpg",
  "/personal/manga/Kagurabachi.jpg",
  "/personal/manga/lookism.jpg",
  "/personal/manga/one-piece.jpg",
  "/personal/manga/Berserk.jpg",
  "/personal/manga/Vagabond.jpg",
  "/personal/manga/Jojo.jpg",
];

export default function MangasPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 pb-16 pt-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mb-6">
        <Link href="/" className="text-sm text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400">
          ← Back to Home
        </Link>
      </div>

      <section>
        <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Mangas</h1>
        <p className="mb-8 text-zinc-700 dark:text-zinc-300">
          All time fav Animes and Mangas which helped me a lot to grow as a person
        </p>

        <div className="space-y-4">
          {mangas.map((manga, index) => (
            <div key={`${manga}-${index}`} className="section-card p-4">
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900/50">
                <Image
                  src={mangaImages[index]}
                  alt={manga}
                  fill
                  className="object-contain"
                  priority={index < 3}
                />
              </div>
              <p className="text-zinc-800 dark:text-zinc-200">
                {index + 1}. {manga}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
