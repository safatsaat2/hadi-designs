"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Category } from "@/data/portfolio";
import { PortfolioImage } from "@/components/portfolio-image";

export function WorkGallery({ category }: { category: Category }) {
  const [index, setIndex] = useState<number | null>(null);
  const activeThumb = useRef<HTMLButtonElement>(null);
  const total = category.images.length;
  const current = index === null ? null : category.images[index];

  useEffect(() => {
    if (index === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowLeft") {
        setIndex((value) =>
          value === null ? value : (value - 1 + total) % total,
        );
      }
      if (event.key === "ArrowRight") {
        setIndex((value) => (value === null ? value : (value + 1) % total));
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, total]);

  useEffect(() => {
    activeThumb.current?.scrollIntoView({
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-zinc-800/80 pb-6 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 self-start rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to All Categories
        </Link>

        <div className="text-left sm:text-right">
          <div className="flex items-center gap-3 sm:justify-end">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {category.title}
            </h2>
            <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 font-mono text-xs text-zinc-300">
              {total} items
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-400">{category.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {category.images.map((image, imageIndex) => (
          <button
            key={image.url}
            type="button"
            onClick={() => setIndex(imageIndex)}
            className="group overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/80 text-left shadow-lg transition-all duration-300 hover:border-zinc-500"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
              <PortfolioImage
                src={image.url}
                alt={image.caption}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="scale-75 rounded-full border border-white/20 bg-black/70 p-3 text-white transition-transform group-hover:scale-100">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="bg-zinc-950 p-3">
              <p className="truncate text-xs font-medium text-zinc-300">
                {image.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {current && index !== null ? (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[rgba(3,3,5,0.94)] p-4 backdrop-blur-[14px] sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          <div className="z-10 mx-auto flex w-full max-w-6xl items-center justify-between">
            <div className="text-left">
              <span className="block text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                {category.title}
              </span>
              <span className="text-sm font-bold text-white sm:text-base">
                {current.caption}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 font-mono text-xs text-zinc-400">
                {index + 1} / {total}
              </span>
              <button
                type="button"
                onClick={() => setIndex(null)}
                className="rounded-full border border-zinc-700/80 bg-zinc-900/90 p-2.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                title="Close (Esc)"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative mx-auto my-3 flex w-full max-w-6xl flex-1 items-center justify-center overflow-hidden">
            <button
              type="button"
              onClick={() =>
                setIndex((value) =>
                  value === null ? value : (value - 1 + total) % total,
                )
              }
              className="absolute left-2 z-20 rounded-full border border-white/10 bg-black/60 p-3 text-zinc-300 backdrop-blur-md transition-all hover:bg-black/90 hover:text-white active:scale-95 sm:left-4 sm:p-3.5"
              title="Previous image"
            >
              <span className="sr-only">Previous image</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <PortfolioImage
              key={current.url}
              src={current.url}
              alt={current.caption}
              loading="eager"
              className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl sm:max-h-[78vh]"
            />

            <button
              type="button"
              onClick={() =>
                setIndex((value) => (value === null ? value : (value + 1) % total))
              }
              className="absolute right-2 z-20 rounded-full border border-white/10 bg-black/60 p-3 text-zinc-300 backdrop-blur-md transition-all hover:bg-black/90 hover:text-white active:scale-95 sm:right-4 sm:p-3.5"
              title="Next image"
            >
              <span className="sr-only">Next image</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="z-10 mx-auto w-full max-w-4xl overflow-x-auto py-2">
            <div className="flex min-w-max items-center justify-center gap-2 px-4">
              {category.images.map((image, imageIndex) => {
                const selected = imageIndex === index;
                return (
                  <button
                    key={image.url}
                    ref={selected ? activeThumb : undefined}
                    type="button"
                    onClick={() => setIndex(imageIndex)}
                    className={`h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      selected
                        ? "scale-105 border-white shadow-md"
                        : "border-zinc-800 opacity-50 hover:opacity-100"
                    }`}
                    aria-label={image.caption}
                    aria-current={selected ? "true" : undefined}
                  >
                    <PortfolioImage
                      src={image.url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
