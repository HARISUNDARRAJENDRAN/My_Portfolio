import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

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
        className={`${newsReader.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
