"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Web3Nomads" width={32} height={32} priority />
          <span className="text-sm font-semibold tracking-wide">Web3Nomads</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#programs" className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">Programs</a>
          <a href="#join" className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">Join</a>
          <a href="#" className="rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200">Get Started</a>
        </nav>
      </div>
    </header>
  );
}


