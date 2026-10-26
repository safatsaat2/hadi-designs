import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ExploreHeading } from "@/components/explore-heading";
import { FilterBar } from "@/components/filter-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkGallery } from "@/components/work-gallery";
import { categories, getCategory } from "@/data/portfolio";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Work" };

  return {
    title: category.title,
    description: category.description,
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <SiteHeader />
        <section className="mb-10">
          <ExploreHeading />
          <Suspense fallback={<FilterBar active="" />}>
            <CategoryPage params={params} />
          </Suspense>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}

async function CategoryPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <FilterBar active={category.slug} />
      <div className="mt-10">
        <WorkGallery category={category} />
      </div>
    </>
  );
}
