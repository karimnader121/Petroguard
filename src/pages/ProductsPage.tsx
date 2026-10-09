import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { products } from "../data/products";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const categoryName =
      categories.find((category) => category.slug === product.categorySlug)
        ?.name ?? "";
    const searchableText = [
      product.name,
      product.shortDescription,
      product.description,
      product.sku,
      product.material,
      product.workingLoadLimit,
      categoryName,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            Full Catalog
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">
            Product Catalog
          </h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            ISO-certified lifting and rigging equipment engineered for the
            toughest offshore and onshore environments.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-16 py-6 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <label
            htmlFor="product-search"
            className="block font-mono-spec text-label-caps text-on-surface uppercase tracking-wider mb-2"
          >
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Type a product name, category, or keyword..."
            className="w-full bg-surface border border-outline-variant px-4 py-3 font-body text-body-md text-on-surface placeholder:text-secondary focus:border-primary focus:outline-primary"
          />
        </div>
      </section>

      {!normalizedSearch && (
        <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-8">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {categories.map((cat) => {
                const count = products.filter(
                  (p) => p.categorySlug === cat.slug,
                ).length;
                return (
                  <Link
                    key={cat.slug}
                    to={`/products/${cat.slug}`}
                    className="group bg-surface border border-outline-variant hover:border-primary transition-all duration-200 flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${cat.image}')` }}
                      />
                      <div className="absolute inset-0 bg-on-background/30 group-hover:bg-on-background/10 transition-colors" />
                      <div className="absolute bottom-4 right-4 bg-on-background/80 px-2 py-1">
                        <span className="font-mono-spec text-label-caps text-primary-fixed uppercase tracking-wider">
                          {count} Products
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-headline text-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">
                        {cat.name}
                      </h3>
                      <p className="font-body text-body-md text-secondary flex-grow mb-4">
                        {cat.shortDescription}
                      </p>
                      {/* <div className="flex flex-wrap gap-2">
                        {cat.specHighlights.map((s) => (
                          <span
                            key={s.label}
                            className="bg-surface-container px-2 py-1 font-mono-spec text-[11px] text-on-surface-variant border border-outline-variant"
                          >
                            {s.label}: <strong>{s.value}</strong>
                          </span>
                        ))}
                      </div> */}
                    </div>
                    <div className="px-5 pb-5">
                      <div className="w-full bg-primary group-hover:bg-primary-container text-on-primary py-3 font-mono-spec text-utility-sm uppercase tracking-widest text-center transition-colors border-b-2 border-on-primary-fixed-variant">
                        View Products →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Products Flat List */}
      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-8">
            {normalizedSearch
              ? `${filteredProducts.length} Search Results`
              : "All Products"}
          </h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const cat = categories.find(
                  (c) => c.slug === product.categorySlug,
                );
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.categorySlug}/${product.id}`}
                    className="group bg-surface border border-outline-variant hover:border-primary transition-all flex flex-col"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      {/* Status dot */}
                      {/* <div
                        className={`absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-surface ${
                          product.status === "certified"
                            ? "bg-primary"
                            : product.status === "maintenance"
                              ? "bg-[#f97316]"
                              : "bg-error"
                        }`}
                      /> */}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="font-mono-spec text-[10px] text-primary uppercase tracking-widest mb-1">
                        {cat?.name}
                      </div>
                      <h3 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors mb-2 text-body-md">
                        {product.name}
                      </h3>
                      <p className="font-body text-[13px] text-secondary flex-grow mb-3 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-outline-variant">
                        {/* <span className="font-mono-spec text-[11px] text-on-surface-variant">
                        WLL:{" "}
                        <strong>
                          {product.workingLoadLimit.split(" ")[0]}
                        </strong>
                      </span> */}
                        <span className="font-mono-spec text-utility-sm text-primary group-hover:underline">
                          Details →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="font-body text-body-md text-secondary py-8">
              No products match “{searchQuery}”. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-surface-container-highest py-14 px-4 md:px-16 border-t-2 border-outline-variant">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3
              className="font-display font-bold text-on-surface"
              style={{ fontSize: "24px" }}
            >
              Need a custom specification?
            </h3>
            <p className="text-secondary font-body text-body-md mt-1">
              Our engineers will design a certified lifting solution for your
              exact requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant text-center shrink-0 active:translate-y-1"
          >
            Request Engineering Support
          </Link>
        </div>
      </section> */}
    </>
  );
}
