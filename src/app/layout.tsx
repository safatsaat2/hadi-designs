import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Misbah Hadi — Creative Portfolio",
    template: "%s · Misbah Hadi",
  },
  description:
    "Selected work by Misbah Hadi, graphic designer and visual creator. Social ads, restaurant, fashion, travel, automobile, and education campaigns.",
  referrer: "no-referrer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
