import { services } from "../data/services";
import servicesImage from "../assets/sevices-img2.jpg";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative overflow-hidden bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(17, 28, 45, 0.86) 0%, rgba(17, 28, 45, 0.7) 55%, rgba(17, 28, 45, 0.45) 100%), url(${servicesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 industrial-grid opacity-20" />
        <div className="relative max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            What We Do
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">
            Our Services
          </h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            End-to-end lifting equipment management — from inspection and
            testing to custom engineering and emergency support.
          </p>
        </div>
      </section>

      {/* Pillars */}
      {/* <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Why Choose Prolift Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-surface border border-outline-variant p-6 flex flex-col gap-4 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <Icon name={p.icon} className="text-on-primary" />
                </div>
                <h3 className="font-headline font-bold text-on-surface text-body-md">
                  {p.title}
                </h3>
                <p className="font-body text-body-md text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Service Offerings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="group flex gap-5 p-6 border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all"
              >
                <div className="w-11 h-11 bg-surface-container-highest group-hover:bg-primary flex items-center justify-center shrink-0 transition-colors border border-outline-variant group-hover:border-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1"></div>
                  <h3 className="font-headline font-bold text-on-surface mb-2 text-body-md group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  {/* <p className="font-body text-body-md text-secondary leading-relaxed">
                    {svc.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}

      {/* CTA */}
      {/* <section className="bg-primary py-14 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-on-primary" style={{ fontSize: "28px", lineHeight: "36px" }}>
              Schedule an Inspection
            </h2>
            <p className="text-on-primary-container font-body text-body-md mt-2 max-w-lg">
              Our certified inspection teams are available globally. Get your lifting register audited by experts.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-on-background text-primary-fixed px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-inverse-surface transition-all border-b-4 border-on-primary-fixed text-center shrink-0 active:translate-y-1"
          >
            Book a Service Call
          </Link>
        </div>
      </section> */}
    </>
  );
}
