type SpotifyCallbackPageProps = {
  searchParams: Promise<{ code?: string; error?: string }>;
};

export default async function SpotifyCallbackPage({ searchParams }: SpotifyCallbackPageProps) {
  const params = await searchParams;
  const code = params.code;
  const error = params.error;

  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-5 pb-16 pt-16 sm:px-8">
      <h1 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">Spotify Callback</h1>
      <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
        Use this page to copy your Spotify authorization code.
      </p>

      <div className="section-card p-4">
        {error ? (
          <p className="text-sm text-red-600 dark:text-red-400">Spotify returned an error: {error}</p>
        ) : code ? (
          <>
            <p className="mb-2 text-sm text-zinc-700 dark:text-zinc-300">Authorization code:</p>
            <p className="break-all rounded-md bg-zinc-100 p-3 text-xs text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              {code}
            </p>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Next step: exchange this code for a refresh token and paste it into SPOTIFY_REFRESH_TOKEN.
            </p>
          </>
        ) : (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">No code found in query params.</p>
        )}
      </div>
    </main>
  );
}
