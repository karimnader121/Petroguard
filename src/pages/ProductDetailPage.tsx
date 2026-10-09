import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/products";
import { getCategoryBySlug } from "../data/categories";
import Icon from "../components/Icon";

export default function ProductDetailPage() {
  const { categorySlug, productId } = useParams<{
    categorySlug: string;
    productId: string;
  }>();
  const product = getProductById(productId ?? "");
  const category = getCategoryBySlug(categorySlug ?? "");

  if (!product || !category) {
    return (
      <div className="py-40 text-center px-4">
        <Icon name="error" className="text-error mx-auto mb-4" size="xl" />
        <h1 className="font-display text-headline-md text-on-surface mb-4">
          Product Not Found
        </h1>
        <Link to="/products" className="text-primary underline font-body">
          ← Back to all products
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="bg-surface-container-low border-b border-outline-variant px-4 md:px-16 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2 flex-wrap">
          <Link
            to="/"
            className="font-mono-spec text-utility-sm text-secondary hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Icon name="chevron_right" size="sm" className="text-outline" />
          <Link
            to="/products"
            className="font-mono-spec text-utility-sm text-secondary hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Icon name="chevron_right" size="sm" className="text-outline" />
          <Link
            to={`/products/${categorySlug}`}
            className="font-mono-spec text-utility-sm text-secondary hover:text-primary transition-colors"
          >
            {category.name}
          </Link>
          <Icon name="chevron_right" size="sm" className="text-outline" />
          <span className="font-mono-spec text-utility-sm text-on-surface truncate max-w-[200px]">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-10 md:py-16 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden">
            <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-surface-container-low overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="absolute top-4 right-4">
              {/* <StatusBadge status={product.status} /> */}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="font-mono-spec text-utility-sm text-primary uppercase tracking-widest">
              {category.name}
            </span>

            <h1 className="font-display text-display-lg text-on-surface mb-2">
              {product.name}
            </h1>

            {/* <div className="font-mono-spec text-utility-sm text-outline uppercase tracking-widest mb-6">
              SKU: {product.sku}
            </div> */}

            <p className="font-body text-body-lg text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Key Specs */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mb-8 border border-outline-variant">
              {[
                {
                  label: "Working Load Limit",
                  value: product.workingLoadLimit,
                },
                { label: "Material", value: product.material },
                // { label: "Certification", value: product.certification },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`p-4 bg-surface ${i < 2 ? "sm:border-r border-outline-variant border-b sm:border-b-0" : ""}`}
                >
                  <div className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="font-mono-spec text-body-md font-bold text-on-surface">
                    {item.value}
                  </div>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-6 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant text-center active:translate-y-1 active:border-b-0"
              >
                Request a Quote
              </Link>
              {/* <Link
                to="/certifications"
                className="border-2 border-outline text-on-surface px-6 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-surface-container transition-all text-center"
              >
                View Certifications
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {product.hasTable && (
        <section className="py-12 md:py-16 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-8">
              Technical Specifications
            </h2>
            <div className="overflow-hidden">
              <div className="p-4 flex flex-col gap-4 items-start">
                {Array.isArray(product.table) ? (
                  product.table.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${product.name} table ${i + 1}`}
                      className="block max-w-full h-auto"
                    />
                  ))
                ) : (
                  <img
                    src={product.table}
                    alt={`${product.name} table`}
                    className="block max-w-full h-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back nav */}
      <div className="px-4 md:px-16 py-8 border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <Link
            to={`/products/${categorySlug}`}
            className="inline-flex items-center gap-2 font-mono-spec text-utility-sm text-primary uppercase tracking-widest hover:text-primary-container transition-colors"
          >
            <Icon name="arrow_back" size="sm" />
            Back to {category.name}
          </Link>
        </div>
      </div>
    </>
  );
}
