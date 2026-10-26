import Link from "next/link";
import { categories } from "@/data/portfolio";

const filters = [
  { slug: "all", href: "/", label: "All Categories" },
  ...categories.map((category) => ({
    slug: category.slug,
    href: `/work/${category.slug}`,
    label: category.title,
  })),
];

export function FilterBar({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 pb-2">
      {filters.map((filter) => {
        const isActive = filter.slug === active;
        return (
          <Link
            key={filter.slug}
            href={filter.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-xs transition-all ${
              isActive
                ? "border-white bg-white font-semibold text-black"
                : "border-zinc-800/80 bg-zinc-900/70 font-medium text-zinc-400 hover:border-zinc-600 hover:bg-zinc-800/80 hover:text-white"
            }`}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
}
