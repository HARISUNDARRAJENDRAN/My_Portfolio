"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import ProfilePic from "@/public/images/chibi-gojo-pfp-y94l9od6ofeaco23.jpg";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const navLinks = [
    { label: "Work", href: "#experience" },
    { label: "Blogs", href: "#blogs" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between bg-white/80 px-5 py-3 backdrop-blur-sm dark:bg-black/80 sm:px-8 md:px-12 lg:px-16">
      <div className="flex items-center gap-6">
        <Link href="#home" className="flex-shrink-0">
          <Image
            src={ProfilePic}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <div className="hidden gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          className="rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "light" ? (
            <Moon className="h-5 w-5 text-zinc-700" />
          ) : (
            <Sun className="h-5 w-5 text-zinc-300" />
          )}
        </button>
      </div>
    </nav>
  );
}
