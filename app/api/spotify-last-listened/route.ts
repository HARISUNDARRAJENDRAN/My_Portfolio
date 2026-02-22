import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

type SpotifyAccessTokenResponse = {
  access_token: string;
};

type SpotifyArtist = {
  name: string;
};

type SpotifyImage = {
  url: string;
};

type SpotifyTrackItem = {
  external_urls?: { spotify?: string };
  name: string;
  artists?: SpotifyArtist[];
  album?: { name?: string; images?: SpotifyImage[] };
};

type SpotifyRecentlyPlayedItem = {
  played_at?: string;
  track?: SpotifyTrackItem;
};

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Spotify environment variables are missing.");
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch Spotify access token.");
  }

  const data = (await response.json()) as SpotifyAccessTokenResponse;
  return data.access_token;
}

function normalizeTrack(track: SpotifyTrackItem, playedAt: string | null, isPlaying: boolean) {
  return {
    name: track.name,
    artist: track.artists?.map((artist) => artist.name).join(", ") ?? "Unknown Artist",
    album: track.album?.name ?? "Unknown Album",
    songUrl: track.external_urls?.spotify ?? "https://open.spotify.com/",
    imageUrl: track.album?.images?.[0]?.url ?? null,
    playedAt,
    isPlaying,
  };
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (nowPlayingResponse.ok && nowPlayingResponse.status !== 204) {
      const nowPlayingData = (await nowPlayingResponse.json()) as { item?: SpotifyTrackItem | null };
      if (nowPlayingData.item) {
        return NextResponse.json({ track: normalizeTrack(nowPlayingData.item, null, true) });
      }
    }

    const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!recentlyPlayedResponse.ok) {
      throw new Error("Unable to fetch recently played tracks.");
    }

    const recentlyPlayedData = (await recentlyPlayedResponse.json()) as {
      items?: SpotifyRecentlyPlayedItem[];
    };

    const latestItem = recentlyPlayedData.items?.[0];
    if (!latestItem?.track) {
      return NextResponse.json({ track: null });
    }

    return NextResponse.json({
      track: normalizeTrack(latestItem.track, latestItem.played_at ?? null, false),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load Spotify track.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
