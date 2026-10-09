import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const certs = [
  {
    code: "ISO 9001:2015",
    body: "Bureau Veritas",
    scope: "Design, manufacture, supply, inspection, and certification of lifting and rigging equipment for the oil, gas, and petrochemical industries.",
    issued: "2018-03-14",
    expires: "2027-03-13",
    icon: "verified",
  },
  {
    code: "DNV 2.7-1 / EN 12079",
    body: "DNV GL",
    scope: "Offshore containers, baskets, and rigging assemblies for use in offshore hydrocarbon production environments.",
    issued: "2019-06-01",
    expires: "2026-05-31",
    icon: "anchor",
  },
  {
    code: "ATEX Zone 1 (94/9/EC)",
    body: "SGS ATEX",
    scope: "Hydraulic hoists and handling equipment for use in potentially explosive atmospheres — gas group IIB, temperature class T4.",
    issued: "2020-11-10",
    expires: "2026-10-09",
    icon: "local_fire_department",
  },
  {
    code: "EN 13414-1:2003",
    body: "Lloyd's Register",
    scope: "Wire rope sling assemblies — safety requirements and testing procedures for lifting applications.",
    issued: "2017-08-22",
    expires: "2027-08-21",
    icon: "cable",
  },
  {
    code: "EN 13889:2003",
    body: "TÜV Rheinland",
    scope: "Forged steel shackles for general lifting purposes — design criteria, proof load, and marking requirements.",
    issued: "2018-01-05",
    expires: "2027-01-04",
    icon: "link",
  },
  {
    code: "LEEA 047 — Inspection Body",
    body: "LEEA",
    scope: "Lifting Equipment Engineers Association accreditation for third-party examination, testing, and thorough examination of lifting equipment.",
    issued: "2016-04-19",
    expires: "2026-04-18",
    icon: "engineering",
  },
];

const standards = [
  { ref: "ASME B30.9", description: "Slings — safety standard for textile, chain, wire, and synthetic rope slings." },
  { ref: "ASME B30.10", description: "Hooks — safety standard for rigging hooks and lifting attachments." },
  { ref: "OSHA 1910.184", description: "U.S. federal regulations for sling use in general industry settings." },
  { ref: "API RP 2D", description: "Operation and maintenance of offshore cranes — rigging practice guidance." },
  { ref: "BS 7121", description: "Code of practice for the safe use of cranes, including rigging and slinging." },
  { ref: "LOLER 1998", description: "UK Lifting Operations and Lifting Equipment Regulations — inspection intervals and requirements." },
];

function getStatusStyle(expires: string) {
  const exp = new Date(expires);
  const now = new Date();
  const daysLeft = Math.ceil((exp.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (daysLeft > 365) return { label: "Active", color: "bg-primary text-on-primary" };
  if (daysLeft > 0) return { label: "Expiring Soon", color: "bg-[#f97316] text-white" };
  return { label: "Expired", color: "bg-error text-on-error" };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function CertificationsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            Compliance &amp; Quality
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">
            Certifications
          </h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            Every Prolift product and service is backed by internationally recognised third-party certification. Our compliance register is maintained annually and available to clients on request.
          </p>
        </div>
      </section>

      {/* Cert Summary Bar */}
      <section className="bg-primary py-8 px-4 md:px-16 border-b-2 border-on-primary-fixed-variant">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "6", label: "Active Certifications" },
            { value: "4", label: "Certifying Bodies" },
            { value: "40+", label: "Standards Compliance" },
            { value: "Annual", label: "Audit Cycle" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-on-primary font-bold" style={{ fontSize: "32px" }}>{value}</div>
              <div className="font-mono-spec text-label-caps text-on-primary-container uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Active Certificates
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certs.map((cert) => {
              const status = getStatusStyle(cert.expires);
              return (
                <div
                  key={cert.code}
                  className="bg-surface border border-outline-variant hover:border-primary transition-colors flex flex-col"
                >
                  {/* Header bar */}
                  <div className="flex items-center justify-between px-6 py-4 bg-surface-container-low border-b border-outline-variant">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary p-1.5">
                        <Icon name={cert.icon} className="text-on-primary" size="sm" />
                      </div>
                      <span className="font-mono-spec font-bold text-on-surface text-body-md">{cert.code}</span>
                    </div>
                    <span className={`font-mono-spec text-label-caps uppercase tracking-wider px-3 py-1 ${status.color}`}>
                      {status.label}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="business" size="sm" className="text-outline" />
                      <span className="font-mono-spec text-utility-sm text-secondary">
                        Issuing Body: <strong className="text-on-surface">{cert.body}</strong>
                      </span>
                    </div>
                    <p className="font-body text-body-md text-secondary leading-relaxed mb-5">
                      {cert.scope}
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-4">
                      <div>
                        <div className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1">Issued</div>
                        <div className="font-mono-spec text-utility-sm font-bold text-on-surface">{formatDate(cert.issued)}</div>
                      </div>
                      <div>
                        <div className="font-mono-spec text-label-caps text-outline uppercase tracking-wider mb-1">Expires</div>
                        <div className="font-mono-spec text-utility-sm font-bold text-on-surface">{formatDate(cert.expires)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer action */}
                  <div className="px-6 pb-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-mono-spec text-utility-sm text-primary uppercase tracking-widest hover:text-primary-container transition-colors border-b border-primary hover:border-primary-container"
                    >
                      <Icon name="download" size="sm" />
                      Request Certificate Copy
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Standards Compliance Reference
          </h2>
          <div className="border border-outline-variant overflow-hidden">
            <div className="grid grid-cols-[180px_1fr] bg-on-background px-6 py-3">
              <span className="font-mono-spec text-label-caps text-primary-fixed uppercase tracking-widest">Standard</span>
              <span className="font-mono-spec text-label-caps text-primary-fixed uppercase tracking-widest">Description</span>
            </div>
            {standards.map((s, i) => (
              <div
                key={s.ref}
                className={`grid grid-cols-[180px_1fr] gap-4 px-6 py-4 border-b border-outline-variant last:border-0 items-start ${
                  i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"
                }`}
              >
                <span className="font-mono-spec text-utility-sm font-bold text-primary">{s.ref}</span>
                <span className="font-body text-body-md text-secondary">{s.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-6">
                Our Quality Commitment
              </h2>
              <div className="h-1 w-24 bg-primary mb-8" />
              <p className="font-body text-body-lg text-secondary leading-relaxed mb-6">
                Prolift operates a fully integrated quality management system. Every product shipped carries traceable documentation — from raw material mill certificates through proof load test records to final inspection sign-off.
              </p>
              <p className="font-body text-body-lg text-secondary leading-relaxed">
                Our internal audit cycle runs quarterly; external surveillance audits are conducted annually by accredited third-party certification bodies. All non-conformances are tracked, investigated, and closed under our documented CAPA process.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: "inventory_2", text: "100% proof load testing on critical lifting equipment before dispatch" },
                { icon: "history", text: "Full material traceability from mill certificate to final test report" },
                { icon: "fact_check", text: "Annual third-party surveillance audits by accredited bodies" },
                { icon: "manage_accounts", text: "Dedicated Quality Manager on every manufacturing site" },
                { icon: "description", text: "Digital compliance pack shipped with every order" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 p-4 border border-outline-variant bg-surface-container-low">
                  <Icon name={item.icon} className="text-primary shrink-0 mt-0.5" />
                  <span className="font-body text-body-md text-on-surface">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-on-primary" style={{ fontSize: "28px", lineHeight: "36px" }}>
              Need full compliance documentation?
            </h2>
            <p className="text-on-primary-container font-body text-body-md mt-2 max-w-lg">
              We provide complete certificate packs, material test reports, and declaration of conformity for every order.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-on-background text-primary-fixed px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-inverse-surface transition-all border-b-4 border-on-primary-fixed text-center shrink-0 active:translate-y-1"
          >
            Request Documentation
          </Link>
        </div>
      </section>
    </>
  );
}
