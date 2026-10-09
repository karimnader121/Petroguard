import { useState, type FormEvent } from "react";
import Icon from "../components/Icon";
import { offices } from "../data/services";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  // Get your free access key at https://web3forms.com (takes ~30 seconds,
  // just enter the recipient email and it emails you a key — no account needed)
  const WEB3FORMS_ACCESS_KEY = "e9b145e1-ac88-4a3b-a85c-02c010a05f97";
  const recipientEmail = "info@prolift-co.com";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    region: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Basic required-field validation
    if (
      !form.name ||
      !form.company ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      setErrorMessage("Please fill in all required fields.");
      setState("error");
      return;
    }

    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          to_email: recipientEmail,
          subject: `New enquiry from ${form.name} (${form.company})`,
          from_name: form.name,
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          region: form.region,
          enquiry_subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setState("success");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly.",
      );
      setState("error");
    }
  }

  const inputClass =
    "w-full bg-surface border border-outline-variant px-4 py-3 font-body text-body-md text-on-surface placeholder-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  return (
    <>
      {/* Page Header */}
      <section className="bg-on-background py-16 md:py-20 px-4 md:px-16 border-b-4 border-primary">
        <div className="max-w-[1440px] mx-auto">
          <div className="font-mono-spec text-utility-sm text-primary-fixed tracking-[0.3em] uppercase mb-3">
            Talk to Us
          </div>
          <h1 className="font-display text-display-lg text-inverse-on-surface mb-4">
            Contact &amp; Support
          </h1>
          <p className="font-body text-body-lg text-surface-variant max-w-2xl">
            We operate during standard business hours and will get back to you
            shortly during the working week.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider mb-8">
              Send an Enquiry
            </h2>

            {state === "success" ? (
              <div className="border border-primary bg-surface-container-low p-10 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <Icon
                    name="check_circle"
                    className="text-on-primary"
                    size="xl"
                  />
                </div>
                <h3 className="font-display text-headline-md text-on-surface">
                  Message Received
                </h3>
                <p className="font-body text-body-lg text-secondary max-w-md">
                  We have received your enquiry and will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setState("idle");
                    setForm({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      region: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-2 bg-primary text-on-primary px-6 py-3 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {state === "error" && errorMessage && (
                  <div className="border border-red-500 bg-red-50 px-4 py-3 flex items-center gap-3">
                    <Icon
                      name="error"
                      className="text-red-600 shrink-0"
                      size="sm"
                    />
                    <p className="font-body text-body-md text-red-700">
                      {errorMessage}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Company *
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company or organisation"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+20 123 456 7890"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Region
                    </label>
                    <select
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select your region</option>
                      <option>Americas</option>
                      <option>Europe / North Sea</option>
                      <option>Middle East &amp; Africa</option>
                      <option>Asia Pacific</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option>Product Enquiry</option>
                      <option>Request a Quote</option>
                      <option>Inspection / Certification</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono-spec text-label-caps text-on-surface-variant uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your lifting requirement, project context, or question…"
                    className={inputClass + " resize-y"}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="bg-primary text-on-primary px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant active:translate-y-1 active:border-b-0 disabled:opacity-60 self-start flex items-center gap-3"
                >
                  {state === "submitting" ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Icon name="send" size="sm" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-headline-md text-on-surface uppercase tracking-wider">
              Our Offices
            </h2>
            {offices.map((office) => (
              <div
                key={office.region}
                className={`p-5 border flex flex-col gap-3 ${
                  office.isHQ
                    ? "bg-on-background border-primary"
                    : "bg-surface-container-low border-outline-variant"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono-spec text-utility-sm uppercase tracking-widest font-bold ${
                      office.isHQ ? "text-primary-fixed" : "text-on-surface"
                    }`}
                  >
                    {office.region}
                  </span>
                  {office.isHQ && (
                    <span className="bg-primary px-2 py-0.5 font-mono-spec text-label-caps text-on-primary uppercase tracking-wider">
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
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="phone"
                    className={
                      office.isHQ ? "text-primary-fixed-dim" : "text-outline"
                    }
                    size="sm"
                  />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className={`font-mono-spec text-utility-sm hover:underline ${office.isHQ ? "text-primary-fixed-dim" : "text-secondary"}`}
                  >
                    {office.phone}
                  </a>
                </div>
                {office.phone2 && (
                  <div className="flex items-center gap-2">
                    <Icon
                      name="phone"
                      className={
                        office.isHQ ? "text-primary-fixed-dim" : "text-outline"
                      }
                      size="sm"
                    />
                    <a
                      href={`tel:${office.phone2.replace(/\s/g, "")}`}
                      className={`font-mono-spec text-utility-sm hover:underline ${office.isHQ ? "text-primary-fixed-dim" : "text-secondary"}`}
                    >
                      {office.phone2}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
