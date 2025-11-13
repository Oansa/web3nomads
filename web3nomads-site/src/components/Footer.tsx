export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-medium">Web3Nomads</p>
          <p>© {year} Web3Nomads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}




