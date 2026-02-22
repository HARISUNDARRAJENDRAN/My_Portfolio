"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SpotifyTrack = {
  name: string;
  artist: string;
  album: string;
  songUrl: string;
  imageUrl: string | null;
  playedAt: string | null;
  isPlaying: boolean;
};

function getPlayedLabel(track: SpotifyTrack) {
  if (track.isPlaying) {
    return "Currently playing";
  }

  if (!track.playedAt) {
    return "Recently played";
  }

  const playedTime = new Date(track.playedAt).getTime();
  const diffMs = Date.now() - playedTime;

  if (Number.isNaN(playedTime) || diffMs < 0) {
    return "Recently played";
  }

  const minute = 60_000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diffMs < hour) {
    const mins = Math.max(1, Math.floor(diffMs / minute));
    return `Played ${mins} min ago`;
  }

  if (diffMs < day) {
    const hours = Math.floor(diffMs / hour);
    return `Played ${hours} hr ago`;
  }

  const days = Math.floor(diffMs / day);
  return `Played ${days} day${days > 1 ? "s" : ""} ago`;
}

export default function ContactMe() {
  const [spotifyTrack, setSpotifyTrack] = useState<SpotifyTrack | null>(null);
  const [spotifyError, setSpotifyError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyTrack = async () => {
      try {
        const response = await fetch("/api/spotify-last-listened", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          setSpotifyError(data?.error ?? "Unable to load Spotify track.");
          return;
        }

        setSpotifyTrack(data?.track ?? null);
      } catch {
        setSpotifyError("Unable to load Spotify track.");
      }
    };

    void fetchSpotifyTrack();
  }, []);

  const socials = [
    { name: "GitHub", link: "https://github.com/HARISUNDARRAJENDRAN" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/hari-sundar-237570286/" },
    { name: "Twitter", link: "https://x.com/0_either" },
    { name: "Spotify", link: "https://open.spotify.com/user/31s25myaojbhartzjg6ee4grfizq" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I&apos;m currently open to new opportunities. Feel free to reach out!
      </p>
      <div className="flex gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {social.name}
          </a>
        ))}
      </div>

      <div className="mt-6 section-card p-4">
        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Last listened on Spotify</h3>

        {spotifyError ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{spotifyError}</p>
        ) : !spotifyTrack ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading latest track...</p>
        ) : (
          <div className="flex items-center gap-4">
            {spotifyTrack.imageUrl ? (
              <Image
                src={spotifyTrack.imageUrl}
                alt={spotifyTrack.album}
                width={64}
                height={64}
                className="h-16 w-16 rounded-md object-cover"
              />
            ) : null}

            <div className="min-w-0">
              <a
                href={spotifyTrack.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate font-medium text-zinc-900 hover:underline dark:text-zinc-100"
              >
                {spotifyTrack.name}
              </a>
              <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">{spotifyTrack.artist}</p>
              <p className="truncate text-xs text-zinc-500 dark:text-zinc-500">{spotifyTrack.album}</p>
              <p className="truncate text-xs text-emerald-600 dark:text-emerald-400">{getPlayedLabel(spotifyTrack)}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
