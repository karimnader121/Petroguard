import { useState } from "react";
import { Link } from "react-router-dom";
import { equipment } from "../data/equipment";
import equipmentBanner from "../assets/Equipment.jpeg";

export default function EquipmentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredEquipment = equipment.filter((item) =>
    [
      item.name,
      item.category,
      item.description,
      ...item.specifications.flatMap((spec) => [spec.label, spec.value]),
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  return (
    <>
      <section className="relative min-h-72 md:min-h-96 overflow-hidden flex items-end border-b-4 border-primary">
        <img
          src={equipmentBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/45 to-on-background/10" />
        <div className="relative z-10 px-4 md:px-16 py-10 max-w-[1440px] mx-auto w-full">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            Prolift Fleet
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-3">
            Equipment
          </h1>
          <p className="font-body text-body-lg text-inverse-on-surface max-w-2xl">
            Reliable machinery and power equipment for construction, industrial,
            and material-handling operations.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-16 py-6 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <label
            htmlFor="equipment-search"
            className="block font-mono-spec text-label-caps text-on-surface uppercase tracking-wider mb-2"
          >
            Search equipment
          </label>
          <input
            id="equipment-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Type an equipment name, category, or keyword..."
            className="w-full bg-surface border border-outline-variant px-4 py-3 font-body text-body-md text-on-surface placeholder:text-secondary focus:border-primary focus:outline-primary"
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-2">
              {normalizedSearch
                ? `${filteredEquipment.length} Search Results`
                : "Available Equipment"}
            </h2>
            <p className="font-body text-body-md text-secondary">
              Browse our equipment and open an item to view its specifications.
            </p>
          </div>

          {filteredEquipment.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:grid-cols-2">
              {filteredEquipment.map((item) => (
                <article
                  key={item.id}
                  className="group bg-surface border border-outline-variant hover:border-primary transition-all flex flex-col"
                >
                  <div className="aspect-[3/2] overflow-hidden bg-surface-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="font-mono-spec text-[10px] text-primary uppercase tracking-widest mb-2">
                      {item.category}
                    </div>
                    <h3 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors mb-2 text-body-md">
                      {item.name}
                    </h3>
                    <p className="font-body text-[13px] text-secondary flex-grow mb-5 line-clamp-3">
                      {item.description}
                    </p>
                    <Link
                      to={`/equipment/${item.id}`}
                      className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 font-mono-spec text-utility-sm uppercase tracking-widest text-center transition-colors border-b-2 border-on-primary-fixed-variant"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="font-body text-body-md text-secondary py-8">
              No equipment matches “{searchQuery}”. Try another search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
