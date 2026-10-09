import Icon from "../components/Icon";
import { offices } from "../data/services";
import { FaMapMarkerAlt } from "react-icons/fa";

// const timeline = [
//   {
//     year: "1987",
//     title: "Founded in Houston",
//     desc: "Prolift Industrial begins as a wire rope supply company serving Gulf Coast refineries and offshore rigs.",
//   },
//   {
//     year: "1995",
//     title: "ISO Certification",
//     desc: "Achieved ISO 9001 certification — one of the first lifting equipment suppliers to do so in North America.",
//   },
//   {
//     year: "2003",
//     title: "European Expansion",
//     desc: "Opened Aberdeen office to serve the North Sea oil and gas market. First DNV-certified product range launched.",
//   },
//   {
//     year: "2010",
//     title: "Middle East Office",
//     desc: "Jebel Ali facility opened to serve Gulf region operations, including Saudi Aramco and ADNOC supply chains.",
//   },
//   {
//     year: "2017",
//     title: "Asia Pacific Hub",
//     desc: "Singapore logistics hub established to support deepwater operations across Southeast Asia and Australia.",
//   },
//   {
//     year: "2024",
//     title: "500T Capability",
//     desc: "Launched our heaviest-rated shackle and spreader beam lines, enabling ultra-heavy module lift support.",
//   },
// ];

// const values = [
//   {
//     icon: "verified",
//     title: "Zero Compromise on Safety",
//     desc: "We refuse shortcuts. Every product either meets the full certification requirement or it doesn't ship.",
//   },
//   {
//     icon: "precision_manufacturing",
//     title: "Engineering-Led Design",
//     desc: "Our product team includes practising rigging engineers — not just purchasing departments.",
//   },
//   {
//     icon: "handshake",
//     title: "Partnership Over Transaction",
//     desc: "We act as an extension of your lifting team, not a catalogue vendor.",
//   },
//   {
//     icon: "public",
//     title: "Global, Yet Local",
//     desc: "Worldwide coverage with local offices, local stock, and engineers who understand your regulatory environment.",
//   },
// ];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            Our Story
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">
            About Prolift
          </h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            PROlift has been established to serve Oil & Gas companies and
            Construction Companies in Egypt by providing certified lifting
            supplies ( WIRE ROPE SLING, LIFTING ACCESSORIES, FLAT WEBBING SLING
            / RATCHET STRAP, PERSONAL PROTECTIVE EQUIPMENT ( PPE ), OFFSHORE
            CONTAINERS ) With high quality and competitive price.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 px-4 md:px-16 relative overflow-hidden">
        <div className="industrial-grid absolute inset-0 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="font-mono-spec text-utility-sm text-primary tracking-[0.3em] uppercase mb-4">
                Mission
              </div>
              <h2 className="font-display text-display-lg text-on-surface mb-6">
                Strength You Can Certify
              </h2>
              <div className="h-1 w-24 bg-primary mb-8" />
              <p className="font-body text-body-lg text-secondary leading-relaxed mb-6">
                We exist to ensure that every lift regardless of scale is
                executed safely with certified, reliable equipment. Rigorous
                inspection and engineering integrity are at the heart of
                everything we do to keep your operations running smoothly.
              </p>
              <p className="font-body text-body-lg text-secondary leading-relaxed">
                By combining this technical expertise with a commitment to
                premium quality and unmatched customer service, our goal is to
                set the benchmark that defines the lifting industry across
                Egypt.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5", label: "Years in Operation" },
                { value: "40+", label: "Costumers" },
                { value: "24/7", label: "Emergency Response" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-on-background p-6 border-l-4 border-primary"
                >
                  <div
                    className="font-display text-primary-fixed font-bold mb-2"
                    style={{ fontSize: "40px", lineHeight: "48px" }}
                  >
                    {value}
                  </div>
                  <div className="font-mono-spec text-label-caps text-surface-variant uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {/* <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-surface border border-outline-variant p-8 flex gap-5 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <Icon name={v.icon} className="text-on-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface mb-3 text-body-md">
                    {v.title}
                  </h3>
                  <p className="font-body text-body-md text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      {/* <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-12">
            Company History
          </h2>
          <div className="relative flex flex-col gap-0">
            {/* Vertical line 
            <div className="absolute left-[19px] md:left-[51px] top-0 bottom-0 w-0.5 bg-outline-variant z-0" />
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative flex gap-6 md:gap-10 pb-10 last:pb-0 z-10"
              >
                Year bubble 
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center border-2 border-surface">
                    <Icon name="circle" className="text-on-primary" size="sm" />
                  </div>
                </div>
                <div className="bg-surface border border-outline-variant p-5 flex-grow hover:border-primary transition-colors">
                  <div
                    className="font-mono-spec font-bold text-primary mb-1"
                    style={{ fontSize: "20px" }}
                  >
                    {item.year}
                  </div>
                  <h3 className="font-headline font-bold text-on-surface mb-2 text-body-md">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-md text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Global Offices */}
      <section className="py-16 md:py-20 px-4 md:px-16 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-10">
            Global Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {offices.map((office) => (
              <div
                key={office.region}
                className={`p-6 lg:p-8 flex flex-col gap-4 border min-h-[260px] ${
                  office.isHQ
                    ? "bg-on-background border-primary"
                    : "bg-surface border-outline-variant hover:border-primary transition-colors"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    name="location_on"
                    className={
                      office.isHQ ? "text-primary-fixed" : "text-primary"
                    }
                    size="sm"
                  />
                  <span
                    className={`font-mono-spec text-utility-sm uppercase tracking-widest font-bold ${
                      office.isHQ ? "text-primary-fixed" : "text-on-surface"
                    }`}
                  >
                    {office.region}
                  </span>
                  {office.isHQ && (
                    <span className="ml-auto bg-primary px-2 py-0.5 font-mono-spec text-label-caps text-on-primary uppercase tracking-wider">
                      HQ
                    </span>
                  )}
                </div>
                <div>
                  {office.address.map((line) => (
                    <p
                      key={line}
                      className={`font-body text-body-md ${office.isHQ ? "text-surface-variant" : "text-secondary"}`}
                    >
                      {line}
                    </p>
                  ))}
                  <a
                    href="https://maps.app.goo.gl/FzBmcSu1Ai8s7kns7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-surface-variant hover:text-white transition-colors flex items-center gap-2"
                    title="Open location in Google Maps"
                  >
                    <FaMapMarkerAlt size={16} />
                    <span className="font-body text-body-sm">
                      View on Google Maps
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-outline/20">
                  <Icon
                    name="phone"
                    className={
                      office.isHQ ? "text-primary-fixed-dim" : "text-outline"
                    }
                    size="sm"
                  />
                  <span
                    className={`font-mono-spec text-utility-sm ${office.isHQ ? "text-primary-fixed-dim" : "text-secondary"}`}
                  >
                    {office.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-outline/20">
                  <Icon
                    name="phone"
                    className={
                      office.isHQ ? "text-primary-fixed-dim" : "text-outline"
                    }
                    size="sm"
                  />
                  <span
                    className={`font-mono-spec text-utility-sm ${office.isHQ ? "text-primary-fixed-dim" : "text-secondary"}`}
                  >
                    {office.phone2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-primary py-14 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-on-primary" style={{ fontSize: "28px", lineHeight: "36px" }}>
              Work with our engineering team
            </h2>
            <p className="text-on-primary-container font-body text-body-md mt-2 max-w-lg">
              Talk directly with a Prolift engineer about your next project, no sales intermediaries.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-on-background text-primary-fixed px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:bg-inverse-surface transition-all border-b-4 border-on-primary-fixed text-center shrink-0 active:translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </>
  );
}
