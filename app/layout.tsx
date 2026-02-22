import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const newsReader = localFont({
  src: "./fonts/Newsreader[opsz,wght].ttf",
  variable: "--font-news-reader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harisundar",
  description: "Harisundar's personal website showcasing work experience, projects, and other blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${newsReader.variable} bg-zinc-50 font-sans text-zinc-900 antialiased transition-colors dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <Analytics />
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
