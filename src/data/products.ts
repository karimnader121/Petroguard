import type { Product } from "../types";
import WIRELOCK_IMG from "../assets/Lifting_accessories/Wire-lock.png";
import OPEN_SPELTER_SOCKET_IMG from "../assets/Lifting_accessories/open-spelter-socket.png";
import CLOSED_SPELTER_SOCKET_IMG from "../assets/Lifting_accessories/closed-spelter-socket.png";
import SHACKLE_IMG from "../assets/Lifting_accessories/shackles.png";
import WIRE_ROPE_CLIPS_IMG from "../assets/Lifting_accessories/wire-rope-clips.png";
import ALLOY_MASTER_LINK_IMG from "../assets/Lifting_accessories/alloy-master-link.png";
import HOOKS_IMG from "../assets/Lifting_accessories/hooks.png";
import CHAIN_BLOCK_IMG from "../assets/Lifting_accessories/chain-blocks.png";
import BEAM_TROLLEY_IMG from "../assets/Lifting_accessories/beam-trolley.png";
import FLAT_WEBBING_SLING_IMG from "../assets/Webbing_slings/flat-webbing-sling.png";
import ROUND_WEBBING_SLING_IMG from "../assets/Webbing_slings/round-webbing-sling.png";
import RATCHET_STRAP_IMG from "../assets/Webbing_slings/ratchet-strap.png";
import ONE_PIECE_COVERALL_IMG from "../assets/PPE/one-piece-coverall.png";
import TWO_PIECE_COVERALL_IMG from "../assets/PPE/two-piece-coverall.png";
import OPEN_TOP_CONTAINER_IMG from "../assets/Offshore_containers/open-top-container.png";
import LIFTING_FRAME_IMG from "../assets/Offshore_containers/lifting-frame.png";
import PERSONNEL_BASKET_IMG from "../assets/Offshore_containers/personnel-basket.png";
import SPREADER_BEAM_IMG from "../assets/Offshore_containers/spreader-beam.png";
import PAD_EYES_IMG from "../assets/Offshore_containers/pad-eyes.jpg";
import CHAINS_IMG from "../assets/chains.jpeg";
import CONTAINER_IMG from "../assets/Offshore_containers/offshore-container.png";
import LEVER_HOIST_IMG from "../assets/Lifting_accessories/lever-hoist.png";
import WIRE_ROPE_SLINGS_2_IMG from "../assets/Wire_rope_slings/wire-rope-slings-2.jpeg";
import PLAIN_WIRE_ROPE_SLING_IMG from "../assets/Wire_rope_slings/plain-wire.jpg";

const PPE_IMG =
  "https://humanfocus.co.uk/wp-content/uploads/what-are-types-of-PPE.jpg";

const PLACEHOLDER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDP76LWSh8eaTJJfyYqza5a7GPs-n_w1j7QbJQFru9xNV-hgA71dFYLDPwfHNKwYcH6nEga1K8fu50JUKMUwhImjixLQb2YEe9UHPFkKM-PKimnPd7UnVjMKKVf-TAkdai9LcbYUyuB-eeHllVEHBSTqHjkekSS9U9SERdSB9PXNnc0TsSYZcpqIkCeDKAiWDMIK_kEtV-aqwER7UkkeecGdzS9BpHstAvDXoPt0r-FALQKxzwx6ytXosLrj65A8PXR8ouC5ZEtexk";

//Tables
import CHAINS_TABLE_IMG from "../assets/tables/chains/chains-table.png";
import CHAINS_TABLE_2_IMG from "../assets/tables/chains/chains-table-2.png";
import WIRE_ROPE_SLINGS_TABLE_IMG from "../assets/tables/wire-rope-slings-tables/plain-wire-table.png";
import WIRE_LEGS_TABLE_IMG from "../assets/tables/wire-rope-slings-tables/wire-legs-table.png";
import FLATE_WEBBING_SLING_TABLE_IMG from "../assets/tables/webbing-slings-tables/flat-webbing-sling-table.png";
import ROUND_WEBBING_SLING_TABLE_IMG from "../assets/tables/webbing-slings-tables/round-webbing-sling-table.png";
import SHACKLES_TABLE_IMG from "../assets/tables/lifting-accessories-tables/shackles-table.jpeg";
import ML_TABLE_IMG from "../assets/tables/lifting-accessories-tables/ML-table.jpeg";
import MLA_TABLE_IMG from "../assets/tables/lifting-accessories-tables/MLA-table.jpeg";
import WIRE_ROPE_CLIPS_TABLE_IMG from "../assets/tables/lifting-accessories-tables//wire-rope-clips-table.png";
import WIRELOCK_TABLE_IMG from "../assets/tables/lifting-accessories-tables/wirelock-table.jpeg";

export const products: Product[] = [
  // ============================================
  // 1. Wire Rope Slings
  // ============================================
  {
    id: "wrs-001",
    categorySlug: "wire-rope-slings",
    name: "Plain Wire Rope Sling",
    sku: "WRS-PLN-STD",
    image: PLAIN_WIRE_ROPE_SLING_IMG,
    shortDescription:
      "Single-leg wire rope sling for general-purpose vertical and choker lifts.",
    description:
      "Our standard plain wire rope sling, built from galvanized wire rope over an independent wire rope core (IWRC). Suited for routine vertical, choker, and basket-hitch lifting on rig floors and laydown yards.",
    workingLoadLimit: "12 metric tons (vertical)",
    material: "Galvanized 6x19 IWRC Steel",
    certification: "",
    status: "certified",
    hasTable: true,
    table: WIRE_ROPE_SLINGS_TABLE_IMG,
  },
  {
    id: "wrs-002",
    categorySlug: "wire-rope-slings",
    name: "1,2,3,4 Legged Wire",
    sku: "WRS-LEG-1L",
    image: WIRE_ROPE_SLINGS_2_IMG,
    shortDescription:
      "Single-leg sling with eye terminations for straightforward vertical lifts.",
    description:
      "A wire rope sling assembly available in 1-leg, 2-leg, 3-leg, and 4-leg configurations, finished with soft eyes or thimble eyes to suit a wide range of lifting applications. Designed for vertical, choker, and basket hitches, each sling is manufactured to order and supplied with tagged Working Load Limit (WLL) ratings for full traceability and compliance with industry standards.",
    workingLoadLimit: "10 metric tons (vertical)",
    material: "Galvanized 6x36 IWRC Steel",
    certification: "",
    status: "certified",
    hasTable: true,
    table: WIRE_LEGS_TABLE_IMG,
  },

  // ============================================
  // 2. Lifting Accessories
  // ============================================
  {
    id: "acc-001",
    categorySlug: "lifting-accessories",
    name: "Wirelock kit 500cc",
    sku: "ACC-WLK-STD",
    image: WIRELOCK_IMG,
    shortDescription:
      "Cold-pour resin socketing compound for wire rope terminations.",
    description:
      "A two-part resin compound used to secure wire rope ends inside open or closed spelter sockets without the heat risk of molten zinc. Provides a termination efficiency of 100% of the rope's minimum breaking load when applied per manufacturer procedure.",
    workingLoadLimit: "N/A — termination compound",
    material: "Two-part epoxy resin",
    certification: "",
    status: "certified",
    hasTable: true,
    table: WIRELOCK_TABLE_IMG,
  },
  {
    id: "acc-002",
    categorySlug: "lifting-accessories",
    name: "Open Spelter Socket",
    sku: "ACC-OSS-STD",
    image: OPEN_SPELTER_SOCKET_IMG,
    shortDescription:
      "Open-throat socket termination for wire rope, resin or white-metal poured.",
    description:
      "Forged open spelter sockets provide a compact, high-efficiency termination for wire rope ends, accepting a clevis pin for direct connection to shackles or fittings. Compatible with both resin and traditional white-metal socketing methods.",
    workingLoadLimit: "Up to 80 metric tons (size dependent)",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "acc-003",
    categorySlug: "lifting-accessories",
    name: "Closed Spelter Socket",
    sku: "ACC-CSS-STD",
    image: CLOSED_SPELTER_SOCKET_IMG,
    shortDescription:
      "Closed-loop socket termination for direct pin or shackle connection.",
    description:
      "A fully enclosed spelter socket providing a rounded bearing surface for direct connection to a pin, hook, or shackle bow without an intermediate clevis pin. Preferred where a smoother load path or reduced fitting count is required.",
    workingLoadLimit: "Up to 100 metric tons (size dependent)",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "acc-004",
    categorySlug: "lifting-accessories",
    name: "Shackles",
    sku: "ACC-SHK-BOW",
    image: SHACKLE_IMG,
    shortDescription:
      "General rigging shackle with wide bow profile for multi-directional loading.",
    description:
      "Our most-specified shackle for general rigging work. The wide bow accommodates multi-leg sling configurations and angular loading without exceeding rated capacity. Forged in one piece from alloy steel, quenched and tempered, with a hot-dip galvanized finish.",
    workingLoadLimit: "9.5 metric tons",
    material: "Forged Alloy Steel, Galvanized",
    certification: "",
    status: "certified",
    hasTable: true,
    table: SHACKLES_TABLE_IMG,
  },
  {
    id: "acc-005",
    categorySlug: "lifting-accessories",
    name: "Wire Rope Clips",
    sku: "ACC-CLP-UBT",
    image: WIRE_ROPE_CLIPS_IMG,
    shortDescription:
      "Drop-forged U-bolt clips for field termination of wire rope ends.",
    description:
      "Drop-forged wire rope clips used to form eyes or secure rope ends in field assemblies. Sold individually or in matched sets, with saddle and U-bolt design to minimize rope damage while maintaining strong mechanical grip.",
    workingLoadLimit: "Varies by rope diameter",
    material: "Drop-forged Carbon Steel, Galvanized",
    certification: "",
    status: "certified",
    hasTable: true,
    table: WIRE_ROPE_CLIPS_TABLE_IMG,
  },
  {
    id: "acc-006",
    categorySlug: "lifting-accessories",
    name: "ML & MLA",
    sku: "ACC-MLK-ALY",
    image: ALLOY_MASTER_LINK_IMG,
    shortDescription:
      "Single-piece forged master link for multi-leg sling and bridle convergence.",
    description:
      "The convergence point for multi-leg slings and bridles. G80 and G100, this master link and master link assembly are the structural heart of complex rigging setups.",
    workingLoadLimit: "Up to 100 metric tons (size dependent)",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    hasTable: true,
    table: [ML_TABLE_IMG, MLA_TABLE_IMG],
  },
  {
    id: "acc-007",
    categorySlug: "lifting-accessories",
    name: "Lifting Hooks",
    sku: "ACC-HK-SWV",
    image: HOOKS_IMG,
    shortDescription:
      "Swivel-mounted hook with spring safety latch for general lifting duties.",
    description:
      "Heavy-duty lifting hooks designed for secure load engagement in a wide range of lifting and rigging applications. Manufactured from high-strength alloy steel and available in various types and capacities, each hook is engineered for durability, safety, and reliable performance. Supplied with clearly marked Working Load Limit (WLL) ratings to ensure full traceability and compliance with industry standards.",
    workingLoadLimit: "8 metric tons",
    material: "Forged Alloy Steel",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "acc-008",
    categorySlug: "lifting-accessories",
    name: "Chain Block",
    sku: "ACC-CHB-STD",
    image: CHAIN_BLOCK_IMG,
    shortDescription:
      "Manually operated chain hoist for workshop and field lifting tasks.",
    description:
      "A compact hand chain block with load-limiting brake mechanism, used for manual vertical lifting in workshops, laydown yards, and field maintenance work.",
    workingLoadLimit: "5 metric tons",
    material: "Steel housing, hardened load chain",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "acc-010",
    categorySlug: "lifting-accessories",
    name: "Lever Hoist",
    sku: "ACC-CHB-STD",
    image: LEVER_HOIST_IMG,
    shortDescription:
      "Manually operated chain hoist for workshop and field lifting tasks.",
    description:
      "A compact hand chain block with load-limiting brake mechanism, used for manual vertical lifting in workshops, laydown yards, and field maintenance work.",
    workingLoadLimit: "5 metric tons",
    material: "Steel housing, hardened load chain",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "acc-009",
    categorySlug: "lifting-accessories",
    name: "Beam Trolley",
    sku: "ACC-TRL-PSH",
    image: BEAM_TROLLEY_IMG,
    shortDescription:
      "Manually pushed trolley for mounting chain blocks on I-beam runways.",
    description:
      "A geared or push-type trolley designed to run along the bottom flange of an I-beam, carrying a chain block or hoist along the length of a runway beam. Adjustable wheelbase accommodates a range of beam flange widths.",
    workingLoadLimit: "5 metric tons",
    material: "Steel frame, hardened steel wheels",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  // ============================================
  // 3. Chains
  // ============================================
  {
    id: "chn-001",
    categorySlug: "chains",
    name: "Chains",
    sku: "CHN-CHAIN-STD",
    image: CHAINS_IMG,
    shortDescription:
      "High-strength alloy lifting chain for heavy-duty hoisting applications.",
    description:
      "Grade 80 lifting chain manufactured from heat-treated alloy steel for exceptional strength and wear resistance. Supplied as standard chain lengths or ready-made chain sling assemblies with certified fittings for industrial and offshore lifting operations.",
    workingLoadLimit: "10 metric tons",
    material: "Alloy Steel Grade 80",
    certification: "",
    status: "certified",
    hasTable: true,
    table: [CHAINS_TABLE_IMG, CHAINS_TABLE_2_IMG],
  },

  // ============================================
  // 4. Webbing Slings
  // ============================================
  {
    id: "web-001",
    categorySlug: "webbing-slings",
    name: "Flat Webbing Sling",
    sku: "WEB-FLT-STD",
    image: FLAT_WEBBING_SLING_IMG,
    shortDescription:
      "Flat woven polyester sling for load-friendly, mark-free lifting.",
    description:
      "A flat, high-tenacity polyester webbing sling designed to protect delicate or coated load surfaces from the marking and abrasion that chain or wire rope can cause. Color-coded by capacity for quick visual identification on site.",
    workingLoadLimit: "3 metric tons (vertical)",
    material: "High-tenacity Polyester Webbing",
    certification: "",
    status: "certified",
    hasTable: true,
    table: FLATE_WEBBING_SLING_TABLE_IMG,
  },
  {
    id: "web-002",
    categorySlug: "webbing-slings",
    name: "Round Webbing Sling",
    sku: "WEB-RND-STD",
    image: ROUND_WEBBING_SLING_IMG,
    shortDescription:
      "Endless round sling with protective outer sleeve over load-bearing core yarns.",
    description:
      "An endless round sling constructed from continuous polyester yarns encased in a durable woven sleeve. The circular form allows the sling to rotate freely under load, distributing wear and extending service life compared to flat slings in choker configurations.",
    workingLoadLimit: "5 metric tons (vertical)",
    material: "Polyester Core Yarns, Polyester Sleeve",
    certification: "",
    status: "certified",
    hasTable: true,
    table: ROUND_WEBBING_SLING_TABLE_IMG,
  },
  {
    id: "web-003",
    categorySlug: "webbing-slings",
    name: "Ratchet Strap",
    sku: "WEB-RCH-STD",
    image: RATCHET_STRAP_IMG,
    shortDescription:
      "Ratchet-tensioned webbing strap for load securing and cargo tie-down.",
    description:
      "A polyester webbing strap fitted with a ratchet tensioning mechanism for securing cargo during transport. Available with a variety of end fittings (flat hook, J-hook, ring) to suit different anchor points on flatbeds and transport frames.",
    workingLoadLimit: "2.5 metric tons (lashing capacity, LC)",
    material: "Polyester Webbing, Steel Ratchet",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },

  // ============================================
  // 5. Offshore Containers
  // ============================================
  {
    id: "ofc-001",
    categorySlug: "offshore-containers",
    name: "Offshore & Onshore Containers",
    sku: "OFC-CRG-STD",
    image: CONTAINER_IMG,
    shortDescription:
      "DNV-certified enclosed cargo container for offshore supply vessel transport.",
    description:
      "A fully enclosed offshore & onshore containers built for repeated crane lifts between supply vessels and platforms. Weatherproof construction protects contents from splash and spray, with corner-post lifting sets rated for the container's full gross weight.",
    workingLoadLimit: "10 metric tons (gross)",
    material: "Structural steel, marine-grade coating",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ofc-002",
    categorySlug: "offshore-containers",
    name: "Open Top Container",
    sku: "OFC-OPT-STD",
    image: OPEN_TOP_CONTAINER_IMG,
    shortDescription:
      "Open-top offshore container for oversized or top-loaded cargo.",
    description:
      "An open-top variant of our offshore container range, suited for cargo that exceeds standard enclosed container height or requires top-loading access by crane. Removable tarpaulin cover available for weather protection during transit.",
    workingLoadLimit: "8 metric tons (gross)",
    material: "Structural steel, marine-grade coating",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ofc-003",
    categorySlug: "offshore-containers",
    name: "Lifting Frame",
    sku: "OFC-FRM-STD",
    image: LIFTING_FRAME_IMG,
    shortDescription:
      "Purpose-built structural frame for lifting irregular or unpackaged equipment.",
    description:
      "A custom-engineered lifting frame for equipment that doesn't fit standard container dimensions or requires a dedicated rigid lifting structure.",
    workingLoadLimit: "15 metric tons",
    material: "Structural steel, marine-grade coating",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ofc-004",
    categorySlug: "offshore-containers",
    name: "Personnel Basket",
    sku: "OFC-PBK-STD",
    image: PERSONNEL_BASKET_IMG,
    shortDescription:
      "Certified personnel basket for safe crane transfer of crew offshore.",
    description:
      "Personnel baskets are engineered for the safe transfer of crew during lifting operations in offshore, construction, and industrial environments. Built from high-strength steel with non-slip flooring, protective guardrails, and secure lifting points, each basket is manufactured to meet industry standards and supplied with clearly marked Working Load Limit (WLL) ratings for safe and reliable operation.",
    workingLoadLimit: "12 personnel (rated safe working load)",
    material: "Structural steel frame, safety netting",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ofc-005",
    categorySlug: "offshore-containers",
    name: "Spreader Beam",
    sku: "OFC-SPB-STD",
    image: SPREADER_BEAM_IMG,
    shortDescription:
      "Structural spreader beam for controlled wide-load lifts on deck and quayside.",
    description:
      "A fabricated spreader beam that eliminates the bending moments and sling-angle penalties that come with single-point lifts of long or wide loads. Each beam is individually rated and calibrated as a complete assembly.",
    workingLoadLimit: "25 metric tons",
    material: "Structural steel, painted finish",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ofc-006",
    categorySlug: "offshore-containers",
    name: "Pad Eyes",
    sku: "OFC-PDE-STD",
    image: PAD_EYES_IMG,
    shortDescription:
      "Welded lifting pad eyes for permanent or semi-permanent structural attachment points.",
    description:
      "Engineered pad eyes for welding onto containers, frames, and skids to provide certified lifting or lashing points. Supplied with full weld procedure specifications and load test certification for each batch.",
    workingLoadLimit: "Up to 20 metric tons (size dependent)",
    material: "Structural steel plate",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },

  // ============================================
  // 6. PPE
  // ============================================
  {
    id: "ppe-001",
    categorySlug: "ppe",
    name: "One-Piece Coverall",
    sku: "PPE-CVL-1PC",
    image: ONE_PIECE_COVERALL_IMG,
    shortDescription:
      "Flame-retardant one-piece coverall for rig floor and workshop personnel.",
    description:
      "One-piece coverall designed for full-shift wear in rig floor and workshop environments. Reinforced stitching at high-wear points and reflective strips for low-visibility conditions.",
    workingLoadLimit: "N/A",
    material: "Flame-retardant cotton blend",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ppe-002",
    categorySlug: "ppe",
    name: "Two-Piece Coverall",
    sku: "PPE-CVL-2PC",
    image: TWO_PIECE_COVERALL_IMG,
    shortDescription:
      "Flame-retardant jacket-and-trouser set for flexible layering and mobility.",
    description:
      "A two-piece alternative to the standard coverall, offering separate jacket and trouser components for greater flexibility in hot climates or layered cold-weather wear.",
    workingLoadLimit: "N/A",
    material: "Flame-retardant cotton blend",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
  {
    id: "ppe-003",
    categorySlug: "ppe",
    name: "Helmet, Shoes, Gloves, etc..",
    sku: "PPE-HLM-STD",
    image: PPE_IMG,
    shortDescription:
      "Industrial safety helmet with adjustable harness and chin strap.",
    description:
      "A complete range of Personal Protective Equipment (PPE), including safety helmets, gloves, eyewear, protective clothing, footwear, hearing, and respiratory protection. Designed for comfort, durability, and reliable protection in demanding industrial environments.",
    workingLoadLimit: "N/A",
    material: "High-density polyethylene (HDPE) shell",
    certification: "",
    status: "certified",
    hasTable: false,
    table: PLACEHOLDER_IMG,
  },
];

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const getProductById = (id: string) => products.find((p) => p.id === id);
