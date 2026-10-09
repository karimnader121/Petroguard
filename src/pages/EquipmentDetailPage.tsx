import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import { getEquipmentById } from "../data/equipment";

export default function EquipmentDetailPage() {
  const { equipmentId } = useParams<{ equipmentId: string }>();
  const item = getEquipmentById(equipmentId ?? "");

  if (!item) {
    return (
      <div className="py-40 text-center px-4">
        <Icon name="error" className="text-error mx-auto mb-4" size="xl" />
        <h1 className="font-display text-headline-md text-on-surface mb-4">
          Equipment Not Found
        </h1>
        <Link to="/equipment" className="text-primary underline font-body">
          ← Back to equipment
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-surface-container-low border-b border-outline-variant px-4 md:px-16 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center gap-2">
          <Link
            to="/"
            className="font-mono-spec text-utility-sm text-secondary hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Icon name="chevron_right" size="sm" className="text-outline" />
          <Link
            to="/equipment"
            className="font-mono-spec text-utility-sm text-secondary hover:text-primary transition-colors"
          >
            Equipment
          </Link>
          <Icon name="chevron_right" size="sm" className="text-outline" />
          <span className="font-mono-spec text-utility-sm text-on-surface truncate">
            {item.name}
          </span>
        </div>
      </div>

      <section className="py-10 md:py-16 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="aspect-[4/3] bg-surface-container-low overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-mono-spec text-utility-sm text-primary uppercase tracking-widest mb-2">
              {item.category}
            </span>
            <h1 className="font-display text-display-lg text-on-surface mb-4">
              {item.name}
            </h1>
            <p className="font-body text-body-lg text-secondary leading-relaxed mb-8">
              {item.description}
            </p>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant text-center active:translate-y-1 active:border-b-0"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-8">
            Specifications
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant">
            {item.specifications.map((spec) => (
              <div
                key={spec.label}
                className="p-4 bg-surface border-r border-b border-outline-variant"
              >
                <dt className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1">
                  {spec.label}
                </dt>
                <dd className="font-body text-body-md font-semibold text-on-surface">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="px-4 md:px-16 py-8 border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <Link
            to="/equipment"
            className="inline-flex items-center gap-2 font-mono-spec text-utility-sm text-primary uppercase tracking-widest hover:text-primary-container transition-colors"
          >
            <Icon name="arrow_back" size="sm" />
            Back to equipment
          </Link>
        </div>
      </div>
    </>
  );
}
