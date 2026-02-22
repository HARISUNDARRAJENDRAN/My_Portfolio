"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

type SpotifyTrack = {
  name: string;
  artist: string;
  songUrl: string;
  imageUrl?: string | null;
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

  if (diffMs < hour) {
    const mins = Math.max(1, Math.floor(diffMs / minute));
    return `Played ${mins} min ago`;
  }

  const hours = Math.floor(diffMs / hour);
  return `Played ${hours} hr ago`;
}

export default function SpotifyLastPlayedMini() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch("/api/spotify-last-listened", { cache: "no-store" });
        const data = await response.json();

        if (!response.ok) {
          setError(data?.error ?? "Unable to load Spotify track.");
          setLoading(false);
          return;
        }

        setTrack(data?.track ?? null);
      } catch {
        setError("Unable to load Spotify track.");
      } finally {
        setLoading(false);
      }
    };

    void fetchTrack();
  }, []);

  return (
    <div className="mt-4 w-full max-w-md rounded-xl border border-zinc-200 bg-white/80 p-3 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
      {loading ? (
        <p className="text-xs text-zinc-600 dark:text-zinc-400">Loading latest track...</p>
      ) : error ? (
        <div className="space-y-1">
          <p className="text-xs text-zinc-700 dark:text-zinc-300">Connect Spotify to show recent track.</p>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-500">Set SPOTIFY_REFRESH_TOKEN in env.</p>
        </div>
      ) : track ? (
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-800">
            {track.imageUrl ? (
              <img
                src={track.imageUrl}
                alt={track.name}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{track.isPlaying ? "Now playing" : "Last played"}</span>
            </div>
            <a
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block truncate text-base font-medium text-zinc-900 hover:underline dark:text-zinc-100"
            >
              {track.name}
            </a>
            <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">by {track.artist}</p>
            <p className="truncate text-[11px] text-zinc-500 dark:text-zinc-500">{getPlayedLabel(track)}</p>
          </div>

          <a
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open track on Spotify"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <Play className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <p className="text-xs text-zinc-600 dark:text-zinc-400">No recent track found.</p>
      )}
    </div>
  );
}
