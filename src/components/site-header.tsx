import Link from "next/link";
import { profile } from "@/data/portfolio";
import { PortfolioImage } from "@/components/portfolio-image";

export function SiteHeader() {
  return (
    <header className="mb-8 flex flex-col justify-between gap-6 border-b border-zinc-800/80 pb-8 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="group relative shrink-0"
          aria-label="Back to all categories"
        >
          <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-zinc-700/80 bg-zinc-900 shadow-xl transition-colors group-hover:border-zinc-400 sm:h-20 sm:w-20">
            <PortfolioImage
              src={profile.avatar}
              alt={profile.name}
              loading="eager"
              placeholder="https://placehold.co/200x200/18181b/ffffff?text=MH"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </Link>

        <div>
          <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {profile.name}
          </h1>
          <p className="mt-0.5 text-xs font-medium text-zinc-400 sm:text-sm">
            {profile.role}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {profile.status}
          </p>
        </div>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 self-start rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-black shadow-md transition-all hover:bg-white active:scale-95"
      >
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Get in Touch
      </a>
    </header>
  );
}
