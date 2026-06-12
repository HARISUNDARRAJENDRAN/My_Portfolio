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
        <Link href="/" className="text-sm text-zinc-600 underline-offset-4 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <section>
        <h1 className="mb-2 text-3xl font-bold text-navy">Mangas & Animes</h1>
        <p className="mb-8 text-zinc-700">
          All time fav Animes and Mangas which helped me a lot to grow as a person
        </p>

        <div className="space-y-4">
          {mangas.map((manga, index) => (
            <div key={`${manga}-${index}`} className="section-card flex items-center gap-4 p-4">
              <div className="relative h-28 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={mangaImages[index]}
                  alt={manga}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <p className="text-navy">
                {index + 1}. {manga}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
