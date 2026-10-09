import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo1.png";
import Icon from "../components/Icon";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/equipment", label: "Equipment" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-surface border-b-2 border-outline-variant z-50">
      <div className="relative flex items-center justify-between px-4 md:px-16 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 focus-visible:outline-primary absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          {/* <Logo /> */}
          <div className="leading-none">
            {/* <span
              className="block font-display text-primary font-bold"
              style={{ fontSize: "16px", letterSpacing: "0.02em" }}
            >
              Prolift
            </span>
            <span
              className="block font-display text-on-surface font-semibold"
              style={{ fontSize: "14px", letterSpacing: "0.04em" }}
            >
              Industrial
            </span> */}
            <img
              src={logoImage}
              alt="Prolift Industrial Logo"
              className="h-8 w-auto shrink-0"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex flex-1 justify-center items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary py-1 font-body text-body-md transition-colors"
                  : "text-secondary font-medium hover:text-on-surface hover:bg-surface-container-high px-2 py-1 font-body text-body-md transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto">
          {/* <Icon
            name="engineering"
            className="text-primary hidden md:inline-block"
          /> */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-primary hover:bg-primary-container text-on-primary px-4 py-2 font-mono-spec text-utility-sm uppercase tracking-wider transition-all duration-75 active:translate-y-0.5 border-b-2 border-on-primary-fixed-variant"
          >
            Contact
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-on-surface"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size="md" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-surface border-t border-outline-variant flex flex-col"
          aria-label="Mobile navigation"
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `px-6 py-4 font-body text-body-md border-b border-outline-variant transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-l-4 border-l-primary bg-surface-container-low"
                    : "text-on-surface hover:bg-surface-container-low"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mx-6 my-4 bg-primary text-on-primary py-3 text-center font-mono-spec text-utility-sm uppercase tracking-wider"
          >
            24/7 Support
          </Link>
        </nav>
      )}
    </header>
  );
}
