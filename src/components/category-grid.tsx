import Link from "next/link";
import { categories } from "@/data/portfolio";
import { PortfolioImage } from "@/components/portfolio-image";

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/work/${category.slug}`}
          className="group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600/80 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.7)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
            <PortfolioImage
              src={category.cover}
              alt={`${category.title} cover`}
              loading="eager"
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-3.5 right-3.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-zinc-300 backdrop-blur-md">
              {category.images.length} items
            </div>
            <div className="absolute right-3.5 bottom-3.5 left-3.5 flex items-center justify-between text-white">
              <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:text-white">
                Open Gallery
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-base font-bold text-white transition-colors group-hover:text-zinc-200">
              {category.title}
            </h3>
            <p className="mt-1 text-xs text-zinc-400">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
