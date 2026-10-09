import type { ProductCategory } from "../types";
import LIFTING_ACCESSORIES_IMG from "../assets/Lifting_accessories/lifting-accessories.jpeg";
import WEBBING_SLINGS_IMG from "../assets/Webbing slings.png";
import CHAINS_IMG from "../assets/chains.jpeg";

const PLACEHOLDER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk";
const PPE_IMG =
  "https://humanfocus.co.uk/wp-content/uploads/what-are-types-of-PPE.jpg";
const CONTAINER_IMG =
  "https://pinnaclefreight.com/wp-content/uploads/2020/10/cargo-containers-1.jpg";

export const categories: ProductCategory[] = [
  {
    slug: "wire-rope-slings",
    name: "Wire Rope Slings",
    shortDescription:
      "High-capacity lifting slings engineered for durability in corrosive offshore environments.",
    description:
      "Our wire rope slings are constructed from high-tensile galvanized steel strands, braided to exact tolerances and fitted with heavy-duty thimbles and ferrules. Available as plain slings, multi-leg bridle assemblies, or pre-terminated wire ends for field splicing. Every sling is proof-load tested before it leaves the facility and shipped with full traceability documentation.",
    image: PLACEHOLDER_IMG,
    heroImage: PLACEHOLDER_IMG,
    specHighlights: [
      {
        label: "Material",
        value: "Galvanized 6x19 / 6x36 / 35x7 / 19x7 IWRC Steel / Crane Wires",
      },
      { label: "Diameter Range", value: "8 – 80 mm" },
    ],
  },
  {
    slug: "lifting-accessories",
    name: "Lifting Accessories",
    shortDescription:
      "Terminations, connectors, and hoisting hardware that complete every rigging assembly.",
    description:
      "From resin socketing systems and forged spelter sockets to shackles, master links, hooks, chain blocks, and beam trolleys — our lifting accessories range covers every connector and fitting needed to build a complete, certified rigging system. Every component is individually rated, marked, and traceable to batch and proof-test records.",
    image: LIFTING_ACCESSORIES_IMG,
    heroImage: PLACEHOLDER_IMG,
    specHighlights: [
      { label: "Material", value: "Forged Alloy & Carbon Steel" },
    ],
  },
  {
    slug: "webbing-slings",
    name: "Round & Webbing Slings",
    shortDescription:
      "Flat and round polyester slings, plus ratchet straps, for mark-free and flexible load handling.",
    description:
      "Our webbing sling range offers a lightweight, load-friendly alternative to wire rope and chain for applications where surface protection matters. Flat and round polyester slings minimize marking on coated or delicate loads, while our ratchet straps provide secure, adjustable tie-down for cargo transport.",
    image: WEBBING_SLINGS_IMG,
    heroImage: PLACEHOLDER_IMG,
    specHighlights: [
      { label: "Material", value: "High-tenacity Polyester Webbing" },
    ],
  },
  {
    slug: "chains",
    name: "Chains",
    shortDescription:
      "Heavy-duty lifting chains and chain slings for secure hoisting in demanding industrial applications.",
    description:
      "Our lifting chains from grade 80 and grade 100 alloy steel, heat-treated and proof-tested for high-strength load handling. Available as single-leg chain slings, multi-leg assemblies, and custom hook-and-shackle combinations, they are ideal for steel erection, construction, and offshore lifting where durability and traceability are essential.",
    image: CHAINS_IMG,
    heroImage: PLACEHOLDER_IMG,
    specHighlights: [
      { label: "Material", value: "Alloy Steel Grade 80 / Grade 100" },
    ],
  },
  {
    slug: "offshore-containers",
    name: "Offshore & Onshore Containers",
    shortDescription:
      "DNV-certified containers, frames, and baskets built for repeated offshore crane transfers.",
    description:
      "From enclosed cargo containers and open-top units to custom lifting frames, personnel transfer baskets, spreader beams, and pad eyes — our offshore container range is engineered and certified for the demanding cycle of vessel-to-platform crane lifts, with corrosion-resistant coatings suited to marine environments.",
    image: CONTAINER_IMG,
    heroImage: PLACEHOLDER_IMG,
    specHighlights: [
      { label: "Configuration", value: "Containers / Frames / Baskets" },
      // { label: "WLL Range", value: "8 – 25 metric tons" },
      // { label: "Certification", value: "ISO 9001:2015 / DNV 2.7-1 / DNV 2.13" },
    ],
  },
  {
    slug: "ppe",
    name: "PPE",
    shortDescription:
      "Certified personal protective equipment for rig floor, workshop, and field personnel.",
    description:
      "Our PPE range equips crews with coveralls, industrial safety helmets, steel-toe boots, and cut-resistant gloves — all certified to relevant international standards for heat, impact, and mechanical hazard protection in rig floor and workshop environments.",
    image: PPE_IMG,
    heroImage: PLACEHOLDER_IMG,
    specHighlights: [
      { label: "Coverage", value: "Coveralls / Helmets / Boots / Gloves" },
      // { label: "Sizes", value: "S – 4XL (apparel), 38–47 (footwear)" },
      // {
      //   label: "Certification",
      //   value: "EN ISO 11612 / EN 397 / EN ISO 20345 / EN 388",
      // },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
