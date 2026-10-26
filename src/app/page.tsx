import { CategoryGrid } from "@/components/category-grid";
import { ExploreHeading } from "@/components/explore-heading";
import { FilterBar } from "@/components/filter-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <SiteHeader />
        <section className="mb-10">
          <ExploreHeading />
          <FilterBar active="all" />
        </section>
        <CategoryGrid />
      </div>
      <SiteFooter />
    </>
  );
}
