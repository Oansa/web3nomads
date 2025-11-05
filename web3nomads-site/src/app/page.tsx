import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* Hero layering: backtop.jpg base + top.png overlay */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] overflow-hidden bg-black">
        <Image
          src="/top.png"
          alt="Hero background"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        {/* Foreground overlay image */}
        <Image
          src="/top.png"
          alt="Hero foreground"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "contain", objectPosition: "center top", zIndex: 10 }}
        />
        {/* Readability overlay above images */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-black/10" />
        <div className="relative z-30 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Build the future with Web3
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-200">
              Join a community of founders and developers turning bold ideas into real-world solutions using blockchain and smart contracts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Join the community
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

      {/* Programs / Activities */}
      <section id="programs" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Join, Build & Grow Together</h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          From campus clubs and cohorts to mentorship and launch support, we help you go from first dApp to mainnet-ready product.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Build with us</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Founder cohorts, bootcamps, and technical tracks for smart contract, data, and AI builders.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Connect & Co-create</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Meet mentors, partners, and collaborators to share your vision and scale it.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Launch & Scale</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Move from prototype to product with guidance, exposure, and potential backing.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Get Discovered</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Tap into grants, bounties, residencies, and accelerator programs in the ecosystem.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold">Campus Clubs</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Join or start a campus club and begin your Web3 journey with peers.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
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
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
              >
                Join WhatsApp
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Join Discord
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
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
