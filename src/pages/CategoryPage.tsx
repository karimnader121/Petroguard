import { useParams, Link } from "react-router-dom";
import { getCategoryBySlug } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import { categories } from "../data/categories";
import Icon from "../components/Icon";

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug ?? "");
  const products = getProductsByCategory(categorySlug ?? "");

  if (!category) {
    return (
      <div className="py-40 text-center px-4">
        <Icon name="error" className="text-error mx-auto mb-4" size="xl" />
        <h1 className="font-display text-headline-md text-on-surface mb-4">
          Category Not Found
        </h1>
        <Link to="/products" className="text-primary underline font-body">
          ← Back to all products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${category.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/60 to-transparent" />
        <div className="relative z-10 px-4 md:px-16 py-10 max-w-[1440px] mx-auto w-full">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 font-mono-spec text-utility-sm text-primary-fixed hover:text-primary-fixed-dim mb-4 transition-colors"
          >
            <Icon name="arrow_back" size="sm" />
            All Products
          </Link>
          {/* <span className="font-mono-spec text-utility-sm text-primary-fixed-dim uppercase tracking-widest">
            Product Category
          </span> */}
          <h1 className="font-display text-display-lg text-inverse-on-surface">
            {category.name}
          </h1>
        </div>
      </section>

      {/* Category info + specs */}
      <section className="py-12 md:py-16 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="font-body text-body-lg text-secondary leading-relaxed">
              {category.description}
            </p>
          </div>
          <div className="bg-on-background p-6">
            <h3 className="font-mono-spec text-utility-sm text-primary-fixed uppercase tracking-widest mb-5">
              Specification Highlights
            </h3>
            <div className="flex flex-col gap-4">
              {category.specHighlights.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 border-b border-outline/20 pb-3 last:border-0"
                >
                  <span className="font-mono-spec text-label-caps text-surface-variant uppercase tracking-wider">
                    {s.label}
                  </span>
                  <span className="font-mono-spec text-body-md text-inverse-on-surface font-bold">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider">
              {products.length} Products in this category
            </h2>
            <Link
              to="/contact"
              className="font-mono-spec text-utility-sm text-primary uppercase tracking-widest border-b border-primary hover:text-primary-container transition-colors self-start"
            >
              Request Custom Spec →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${categorySlug}/${product.id}`}
                className="group bg-surface border border-outline-variant hover:border-primary transition-all flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 p-2">
                    <StatusBadge status={product.status} />
                  </div> */}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  {/* <div className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1">
                    {product.sku}
                  </div> */}
                  <h3 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors mb-2 text-body-md">
                    {product.name}
                  </h3>
                  {/* <p className="font-body text-[13px] text-secondary flex-grow mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p> */}
                  {/* <div className="grid grid-cols-2 gap-3 mt-auto pt-3 border-t border-outline-variant">
                    <div>
                      <div className="font-mono-spec text-[10px] text-outline uppercase tracking-wider">
                        WLL
                      </div>
                      <div className="font-mono-spec text-[12px] font-bold text-on-surface">
                        {product.workingLoadLimit.split(" (")[0]}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono-spec text-[10px] text-outline uppercase tracking-wider">
                        Material
                      </div>
                      <div className="font-mono-spec text-[12px] font-bold text-on-surface truncate">
                        {product.material.split(",")[0]}
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="px-5 pb-5 pt-0">
                  <div className="text-center bg-surface-container group-hover:bg-primary group-hover:text-on-primary text-on-surface py-2 font-mono-spec text-utility-sm uppercase tracking-wider border border-outline-variant group-hover:border-primary transition-all">
                    View Product →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling categories */}
      <section className="py-14 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="font-mono-spec text-utility-sm text-on-surface-variant uppercase tracking-widest mb-6">
            Other Categories
          </h3>
          <div className="flex flex-wrap gap-4">
            {categories
              .filter((c) => c.slug !== categorySlug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  className="flex items-center gap-2 bg-surface border border-outline-variant hover:border-primary px-4 py-3 transition-colors group"
                >
                  {/* <Icon name={c.icon} className="text-primary" size="sm" /> */}
                  <span className="font-body text-body-md text-on-surface group-hover:text-primary transition-colors">
                    {c.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
