import Image from "next/image";
import Link from "next/link";
import ProfilePic from "@/public/images/chibi-gojo-pfp-y94l9od6ofeaco23.jpg";
import { HyperText } from "@/registry/magicui/hyper-text";
import { Button } from "./ui/button";
import SpotifyLastPlayedMini from "./SpotifyLastPlayedMini";

export default function Intro() {
  return (
    <div className="-z-10 flex w-full flex-col-reverse items-center justify-between gap-10 lg:flex-row">
      <div className="flex w-full flex-col gap-3 lg:w-4/5">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Hello! I&apos;m <HyperText className="inline-block text-slate-900 dark:text-slate-50">Harisundar</HyperText>.
        </h1>
        <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
          Aspiring AI & ML Engineer passionate on building innovative solutions that solve real-world problems.
        </p>
        <p className="muted-copy">
          I work across frontend, backend, and Machine Learning with a strong
          emphasis on UX quality, maintainability, and scalable architecture.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="#projects">
            <Button>View Projects</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:mb-0">
        <Image
          src={ProfilePic}
          alt="Yatharth"
          width={160}
          height={160}
          className="rounded-full border-2 border-slate-200 object-cover dark:border-slate-700"
          priority
        />
        <SpotifyLastPlayedMini />
      </div>
    </div>
  );
}

