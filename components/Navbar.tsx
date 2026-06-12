"use client";

import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/public/images/chibi-gojo-pfp-y94l9od6ofeaco23.jpg";

export default function Navbar() {

  const navLinks = [
    { label: "Work", href: "#experience" },
    { label: "Blogs", href: "#blogs" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between bg-cream/80 px-5 py-3 backdrop-blur-sm sm:px-8 md:px-12 lg:px-16">
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
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
