"use client";

import { useState } from "react";

const SHOWCASE_PLACEHOLDER =
  "https://placehold.co/800x600/18181b/71717a?text=Visual+Showcase";

function driveThumbnail(src: string) {
  const match = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (!match) return SHOWCASE_PLACEHOLDER;
  return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1200`;
}

export function PortfolioImage({
  src,
  alt,
  className,
  loading = "lazy",
  placeholder = SHOWCASE_PLACEHOLDER,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  placeholder?: string;
}) {
  const [attempt, setAttempt] = useState(0);
  const current =
    attempt === 0 ? src : attempt === 1 ? driveThumbnail(src) : placeholder;

  return (
    // Google Drive hotlinks fail often enough that the browser needs a fallback chain.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      className={className}
      onError={() => {
        setAttempt((value) => (value >= 2 ? 2 : value + 1));
      }}
    />
  );
}
