import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <SiteHeader />
        <div className="flex flex-1 flex-col items-start justify-center py-16">
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            404
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
            This gallery is not in the portfolio.
          </h2>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-white"
          >
            Back to all categories
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
