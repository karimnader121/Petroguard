import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import {
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const footerLinks = [
  { to: "/products", label: "Product Catalog" },
  { to: "/equipment", label: "Equipment" },
  { to: "/services", label: "Our Services" },
  { to: "/contact", label: "Emergency Support" },
  { to: "/about", label: "About us" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-on-background border-t-4 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 py-12 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="font-mono-spec text-label-caps text-surface-variant uppercase tracking-[0.2em]">
              Petroguard
            </span>
          </div>
          <p className="text-secondary-fixed-dim font-body text-body-md opacity-80 leading-relaxed max-w-xs">
            Providing high-performance lifting solutions that power USA's
            industries. Built on precision, reliability, and engineering
            excellence.
          </p>
          {/* <div className="flex gap-4 mt-1">
            <a
              href="https://www.linkedin.com/company/prolift-co/"
              className="text-surface-variant cursor-pointer hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100083321210616"
              className="text-surface-variant cursor-pointer hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </a>
          </div> */}
        </div>

        {/* Technical Nav */}
        <div className="flex flex-col gap-3 md:pl-8">
          <h4 className="font-mono-spec text-utility-sm text-primary-fixed uppercase tracking-widest mb-2">
            Technical Navigation
          </h4>
          {footerLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-surface-variant hover:text-white transition-colors font-body text-body-md"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Headquarters */}
        <div className="flex flex-col gap-4 md:pl-8">
          <h4 className="font-mono-spec text-utility-sm text-primary-fixed uppercase tracking-widest mb-2">
            Headquarters
          </h4>
          <p className="text-surface-variant font-body text-body-md">
            5900 Balcones Drive STE 100
            <br />
            Austin, TX
            <br />
            USA
          </p>
          {/* <a
            href="https://www.google.com/maps/search/?api=1&query=5900+Balcones+Drive+STE+100%2C+Austin%2C+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-surface-variant hover:text-white transition-colors flex items-center gap-2"
            title="Open location in Google Maps"
          >
            <FaMapMarkerAlt size={16} />
            <span className="font-body text-body-sm">View on Google Maps</span>
          </a> */}
          <div className="mt-2 flex flex-col gap-1 items-start">
            <p className="text-surface-variant font-body text-body-md flex items-baseline gap-2">
              <p className="font-bold text-primary-fixed">Contact :</p>
            </p>
            <p className="text-surface-variant font-body text-body-md pl-0 flex items-center gap-2">
              <FaPhone size={14} style={{ transform: "scaleX(-1)" }} />
              +1 (214) 436-3379
            </p>
            {/* <p className="text-surface-variant font-body text-body-md pl-0 flex items-center gap-2">
              <FaPhone size={14} style={{ transform: "scaleX(-1)" }} />
              +2 012 2275 5456
            </p> */}
            <p className="text-surface-variant font-body text-body-md pl-0 flex items-center gap-2">
              <FaEnvelope size={14} />
              info@petro-guard.com
            </p>
            {/* <p className="text-surface-variant font-body text-body-md pl-0 flex items-center gap-2">
              <FaEnvelope size={14} />
              sales@prolift-co.com
            </p> */}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Icon name="verified" className="text-primary-fixed" size="sm" />
            <span className="text-surface-variant font-mono-spec text-utility-sm">
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 md:px-16 py-5 border-t border-outline/20 max-w-[1440px] mx-auto">
        <p className="text-surface-variant font-body text-body-md text-sm opacity-70">
          © {new Date().getFullYear()} Petroguard. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
