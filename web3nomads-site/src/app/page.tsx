import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Hero layering: backtop.png base */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] overflow-hidden bg-black">
        <Image
          src="/background2.svg"
          alt="Hero background"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />

        {/* Readability overlay above images */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-black/10" />
        <div className="relative z-30 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Taste the freedom of Web3
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-200">
              Join a community of enthusiasts turning bold ideas into real-world solutions using blockchain and crypto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/LOFGilccRjQ0HlwL8sDB1p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Join the nomads
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founders intro (two-column) */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Image placeholder on the left */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/visionary.png"
                alt="Founders illustration"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Text on the right */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Embark on a transformative journey as a Web3 Founder
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Ready to build the future with Web3? Web3Nomads is your launchpad, supporting founders and developers to
              turn bold ideas into real-world solutions using blockchain and smart contracts. Join us to start building
              and scale your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Programs / Activities */}
      <section id="programs" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Join, Build & Grow Together</h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          From campus clubs and cohorts to mentorship and launch support, we help you go from first dApp to mainnet-ready product.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
              <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Build with us</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Founder cohorts, bootcamps, and technical tracks for smart contracts, crypto, and AI builders.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
              <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Connect & Co-create</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Meet mentors, partners, and collaborators to share your vision and scale it.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
              <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Launch & Scale</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Move from prototype to product with guidance, exposure, and potential backing.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
              <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Get Discovered</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Tap into grants, bounties, residencies, and accelerator programs in the ecosystem.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
              <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Campus Clubs</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Join or start a campus club and begin your Web3 journey with peers.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
              <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Mentorship</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Learn from experienced builders and operators to level up faster.
            </p>
          </div>
        </div>
      </section>

      {/* Join section */}
      <section id="join" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to get started?</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Plug into programs, resources, and a network built for ambitious founders.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/LOFGilccRjQ0HlwL8sDB1p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Join WhatsApp
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-orange-500 px-6 py-3 text-sm font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                Join Discord
              </a>
              <a
                href="https://calendly.com/kamandemuiruri101/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-orange-500 px-6 py-3 text-sm font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
