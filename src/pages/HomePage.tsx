import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { equipment } from "../data/equipment";
import { services } from "../data/services";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCflrHP9fq0EWSIcRwRU0zz5DLw7RUjrSbdLldDT_gmljLoe_cZJdSfByrHyU3YpCYQ4fTn33IRsEVq2Xd70yYtLtD5SKJU8JJVSErLbD3h93p-hNmAFou1YP3etH6IF2vThF7WSiKH01EM32AsD43wLe5uUn-T2i9dxNbtgTxiKPelyNKR-tCohdiFRx-BNS34qAIQV4GmCCx16-3O1XTaETd_bdpG7XznpDhsfdyRu5Gm7LqvIdI0O_RQrgrsg7VKYkovAc3u_jE";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[560px] md:h-[707px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_BG}')` }}
          />
          <div className="absolute inset-0 bg-on-background/40" />
        </div>
        <div className="relative z-10 px-4 md:px-16 max-w-[1440px] mx-auto w-full">
          <div className="max-w-xl md:max-w-2xl bg-surface/90 p-6 md:p-10 hard-shadow border-l-4 border-primary backdrop-blur-sm">
            <h1 className="font-display text-display-lg text-on-surface mb-4">
              Safety is the priority.. Quality is the standard
            </h1>
            {/* <p className="font-body text-body-lg text-secondary mb-8">
              ISO-Certified Equipment for Global Oil&nbsp;&amp;&nbsp;Gas
              Operations.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-primary text-on-primary px-6 md:px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant active:translate-y-1 active:border-b-0 text-center"
              >
                Explore Catalog
              </Link>
              {/* <Link
                to="/certifications"
                className="border-2 border-outline text-on-surface px-6 md:px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-surface-container-high transition-all active:translate-y-1 text-center"
              >
                Technical Specs
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision / Quote ── */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="industrial-grid absolute inset-0 pointer-events-none" />
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5">
              <div className="font-mono-spec text-utility-sm text-primary tracking-[0.3em] uppercase mb-4">
                Our Integrity
              </div>
              <h2 className="font-display text-display-lg mb-6">Our Vision</h2>
              <div className="h-1 w-24 bg-primary mb-8" />
            </div>
            <div className="md:col-span-7">
              <p className="font-body text-body-lg leading-relaxed text-secondary border-l-2 border-outline-variant pl-6 md:pl-8 italic">
                "To define the future of the lifting and rigging sector in Egypt
                as the market’s most valued and dependable service provider. Our
                vision is to empower industries with premium accessories and
                engineering integrity, fostering safer, more efficient
                workplaces and becoming the absolute benchmark for excellence in
                our field."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-on-background py-10 md:py-12 border-y-4 border-primary">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                value: `${new Date().getFullYear() - 2021}`,
                label: "Years in Operation",
              },
              { value: "ISO 9001", label: "Quality Standard" },
              { value: "200+", label: "Costumers" },
              { value: "24/7", label: "Emergency Support" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="font-display text-primary-fixed font-bold"
                  style={{ fontSize: "36px", lineHeight: "44px" }}
                >
                  {value}
                </div>
                <div className="font-mono-spec text-label-caps text-surface-variant uppercase tracking-widest mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment Categories ── */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 md:mb-12">
            <div>
              <h2 className="font-display text-headline-md uppercase tracking-wider text-on-surface">
                Products Categories
              </h2>
              <p className="text-secondary font-body text-body-md mt-2">
                Specialized hardware for extreme environments.
              </p>
            </div>
            <Link
              to="/products"
              className="text-primary font-mono-spec text-utility-sm uppercase tracking-widest border-b-2 border-primary hover:text-primary-container transition-colors self-start sm:self-auto"
            >
              All Solutions →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="group relative bg-surface border border-outline-variant flex flex-col h-full hover:border-primary transition-all duration-300"
              >
                {/* Image */}
                <div className="h-56 md:h-64 relative overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline text-headline-md mb-3 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-secondary font-body text-body-md mb-6 flex-grow">
                    {cat.shortDescription}
                  </p>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 font-mono-spec text-utility-sm uppercase tracking-widest transition-all border-b-2 border-on-primary-fixed-variant text-center block active:translate-y-0.5"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
      <section className="py-20 md:py-24">
        <div className="px-4 md:px-16 max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 md:mb-12">
            <div>
              <h2 className="font-display text-headline-md uppercase tracking-wider text-on-surface">
                Equipment
              </h2>
              <p className="text-secondary font-body text-body-md mt-2">
                Reliable machinery and power equipment for demanding jobs.
              </p>
            </div>
            <Link
              to="/equipment"
              className="text-primary font-mono-spec text-utility-sm uppercase tracking-widest border-b-2 border-primary hover:text-primary-container transition-colors self-start sm:self-auto"
            >
              All Equipment →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <div
                key={item.id}
                className="group relative bg-surface border border-outline-variant flex flex-col h-full hover:border-primary transition-all duration-300"
              >
                <div className="h-56 md:h-64 relative overflow-hidden bg-surface-container-low">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-mono-spec text-[10px] text-primary uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-headline text-headline-md mb-3 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-secondary font-body text-body-md mb-6 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <Link
                    to={`/equipment/${item.id}`}
                    className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 font-mono-spec text-utility-sm uppercase tracking-widest transition-all border-b-2 border-on-primary-fixed-variant text-center block active:translate-y-0.5"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 md:py-24 px-4 md:px-16 max-w-[1440px] mx-auto">
        <div className="mb-10 md:mb-12">
          <h2 className="font-display text-headline-md uppercase tracking-wider text-on-surface">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-primary mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="flex items-start gap-4 p-4 border border-outline-variant hover:border-primary transition-colors"
            >
              {String(i + 1).padStart(2, "0")}
              <div>
                <h4 className="font-headline font-bold text-on-surface text-body-md">
                  {svc.title}
                </h4>
                {/* <p className="text-sm text-secondary font-body mt-1">
                  {svc.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-primary py-14 md:py-16 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2
              className="font-display font-bold text-on-primary"
              style={{ fontSize: "28px", lineHeight: "36px" }}
            >
              Ready to spec your next lift?
            </h2>
            <p className="text-on-primary-container font-body text-body-md mt-2 max-w-lg">
              We are here to support your lifting operations. Get in touch with
              us, and we will get back to you shortly.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-on-background text-primary-fixed px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-inverse-surface transition-all border-b-4 border-on-primary-fixed text-center shrink-0 active:translate-y-1 active:border-b-0"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
