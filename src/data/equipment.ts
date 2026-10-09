import furukawaLoaderImage from "../assets/equipment/furukawa-fl120a-wheel-loader.jpeg";
import caterpillarForkliftImage from "../assets/equipment/caterpillar-forklift.jpeg";
import olympianGeneratorImage from "../assets/equipment/olympian-250-kva-generator.jpeg";
import furukawaLoader85PsImage from "../assets/equipment/furukawa-fl120a-wheel-loader-85ps.jpeg";
import enclosedGeneratorImage from "../assets/equipment/olympian-enclosed-generator.jpeg";
import caterpillar455KvaGeneratorImage from "../assets/equipment/caterpillar-455-kva-generator.jpeg";
import lightTowerImage from "../assets/equipment/light-tower.jpeg";
import komatsuForkliftImage from "../assets/equipment/komatsu-forklift.jpeg";

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: { label: string; value: string }[];
}

export const equipment: EquipmentItem[] = [
  {
    id: "furukawa-fl120a-wheel-loader",
    name: "Furukawa FL120A Wheel Loader",
    category: "Wheel Loader",
    image: furukawaLoaderImage,
    description:
      "A versatile 4-wheel-drive loader for material handling, construction, quarrying, and general earthmoving.",
    specifications: [
      { label: "Manufacturer", value: "Furukawa" },
      { label: "Model", value: "FL120A" },
      { label: "Machine Type", value: "Wheel Loader" },
      { label: "Bucket Capacity", value: "Approx. 1.2–1.3 m³" },
      { label: "Engine", value: "Isuzu 6-cylinder diesel" },
      { label: "Operating Weight", value: "Approx. 7,660 kg" },
      { label: "Drive", value: "4-wheel drive" },
      { label: "Transmission", value: "Torque converter transmission" },
      { label: "Steering", value: "Articulated steering" },
      { label: "Cab", value: "Enclosed operator cabin" },
      { label: "Attachment", value: "Front loader bucket" },
      {
        label: "Application",
        value: "Material handling, loading, construction, quarrying, and earthmoving",
      },
    ],
  },
  {
    id: "caterpillar-forklift",
    name: "Caterpillar Forklift",
    category: "Forklift",
    image: caterpillarForkliftImage,
    description:
      "A used Caterpillar forklift suited to industrial, warehouse, and construction material handling.",
    specifications: [
      { label: "Brand", value: "Caterpillar (CAT)" },
      { label: "Equipment Type", value: "Forklift" },
      { label: "Fuel / Engine", value: "Benzene, Mitsubishi 4-cylinder" },
      { label: "Transmission", value: "Automatic / Power Shift" },
      { label: "Drive", value: "2WD" },
      { label: "Mast Type", value: "Standard mast" },
      { label: "Fork Type", value: "Standard forks" },
      { label: "Tires", value: "Solid / industrial tires" },
      { label: "Operating Condition", value: "Used – good working condition" },
      { label: "Operator Position", value: "Seated" },
      { label: "Steering", value: "Hydraulic power steering" },
      { label: "Safety", value: "Overhead guard and safety beacon" },
      { label: "Serial / Asset No.", value: "500270" },
      {
        label: "Application",
        value: "Industrial, warehouse, and construction use",
      },
    ],
  },
  {
    id: "olympian-250-kva-generator",
    name: "Olympian Caterpillar 250 kVA Generator",
    category: "Diesel Generator",
    image: olympianGeneratorImage,
    description:
      "An open skid-mounted diesel generator set for dependable standby and prime power in industrial, commercial, and construction settings.",
    specifications: [
      { label: "Brand", value: "Olympian Caterpillar" },
      { label: "Equipment Type", value: "Diesel generator set, 250 kVA" },
      { label: "Engine Type", value: "Perkins 1306 (English made)" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Generator", value: "Industrial alternator" },
      { label: "Cooling System", value: "Radiator-cooled" },
      { label: "Starting System", value: "Electric start" },
      { label: "Control Panel", value: "Digital control panel" },
      { label: "Exhaust System", value: "Heavy-duty industrial exhaust" },
      { label: "Configuration", value: "Open skid-mounted type" },
      { label: "Operating Mode", value: "Standby / prime power" },
      {
        label: "Application",
        value: "Industrial, commercial, and construction use",
      },
    ],
  },
  {
    id: "furukawa-fl120a-wheel-loader-85ps",
    name: "Furukawa FL120A Wheel Loader – 85 PS",
    category: "Wheel Loader",
    image: furukawaLoader85PsImage,
    description:
      "An FL120A wheel loader with an approximately 85 PS Isuzu diesel engine and a general-purpose bucket for demanding earthmoving work.",
    specifications: [
      { label: "Brand", value: "Furukawa" },
      { label: "Model", value: "FL120A" },
      { label: "Machine Type", value: "Wheel Loader" },
      { label: "Bucket Capacity", value: "Approx. 1.2–1.3 m³" },
      { label: "Engine", value: "Isuzu 6-cylinder diesel" },
      { label: "Rated Power", value: "Approx. 85 PS" },
      { label: "Operating Weight", value: "Approx. 7,660 kg" },
      { label: "Transmission", value: "Powershift / automatic" },
      { label: "Steering", value: "Hydraulic articulated steering" },
      { label: "Drive", value: "4-wheel drive" },
      { label: "Bucket", value: "Standard general-purpose bucket" },
      { label: "Cabin", value: "Enclosed operator cabin" },
      { label: "Hydraulic System", value: "Hydraulic boom and bucket system" },
      { label: "Braking System", value: "Hydraulic service brakes" },
      { label: "Tires", value: "Heavy-duty loader tires" },
      {
        label: "Application",
        value: "Construction, quarrying, earthmoving, and material handling",
      },
    ],
  },
  {
    id: "olympian-enclosed-generator",
    name: "Olympian Caterpillar Enclosed Generator",
    category: "Diesel Generator",
    image: enclosedGeneratorImage,
    description:
      "A weatherproof, sound-attenuated Olympian Caterpillar generator with a Perkins 1306 engine for rental, commercial, and industrial power.",
    specifications: [
      { label: "Brand", value: "Olympian Caterpillar" },
      { label: "Engine Type", value: "Perkins 1306 (English made)" },
      { label: "Series", value: "CAT Rental Power" },
      { label: "Configuration", value: "Enclosed / sound-attenuated canopy" },
      { label: "Fuel", value: "Diesel" },
      { label: "Cooling System", value: "Radiator-cooled" },
      { label: "Generator Type", value: "Industrial alternator" },
      { label: "Control System", value: "Digital generator control panel" },
      { label: "Starting System", value: "Electric start" },
      { label: "Mounting", value: "Skid-mounted" },
      { label: "Enclosure", value: "Weatherproof and sound-attenuated" },
      { label: "Operating Mode", value: "Prime / standby power" },
      {
        label: "Application",
        value: "Industrial, commercial, construction, and rental power",
      },
    ],
  },
  {
    id: "caterpillar-455-kva-generator",
    name: "CAT 3412 Diesel Generator Set – 455 kVA",
    category: "Diesel Generator",
    image: caterpillar455KvaGeneratorImage,
    description:
      "A heavy-duty Caterpillar 3412 diesel generator designed for reliable prime, standby, and emergency power applications.",
    specifications: [
      { label: "Brand", value: "Caterpillar (CAT)" },
      { label: "Type", value: "3412 diesel generator set, 455 kVA" },
      { label: "Engine", value: "Caterpillar heavy-duty diesel engine" },
      { label: "Generator", value: "Industrial alternator" },
      { label: "Cooling System", value: "Radiator-cooled" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Control System", value: "Digital control panel" },
      { label: "Starting System", value: "Electric start" },
      { label: "Performance", value: "Prime and standby power" },
      { label: "Construction", value: "Heavy-duty industrial design" },
      {
        label: "Noise Control",
        value: "Sound-attenuated enclosure when applicable",
      },
      { label: "Operation", value: "Automatic / manual control" },
      {
        label: "Application",
        value: "Industrial, commercial, construction, and emergency power",
      },
      {
        label: "Installation",
        value: "Suitable for stationary power applications",
      },
    ],
  },
  {
    id: "portable-led-light-tower",
    name: "Portable LED Light Tower",
    category: "Light Tower",
    image: lightTowerImage,
    description:
      "A mobile, generator-powered light tower providing wide-area illumination for construction sites and remote projects.",
    specifications: [
      { label: "Type", value: "Portable LED light tower" },
      { label: "Lighting System", value: "High-intensity LED floodlights" },
      { label: "Light Heads", value: "4 adjustable LED light heads" },
      { label: "Mast", value: "Telescopic vertical mast" },
      {
        label: "Mast Operation",
        value: "Hydraulic / mechanical extension system",
      },
      { label: "Power Source", value: "Integrated generator" },
      { label: "Lighting Coverage", value: "Wide-area illumination" },
      { label: "Mobility", value: "Trailer-mounted design with wheels" },
      { label: "Stability", value: "Heavy-duty adjustable outriggers" },
      { label: "Deployment", value: "Quick and easy setup" },
      { label: "Construction", value: "Heavy-duty steel structure" },
      {
        label: "Applications",
        value:
          "Construction sites, industrial projects, road works, foundation work, and remote sites",
      },
      {
        label: "Key Benefits",
        value:
          "High brightness, durable construction, easy operation, mobility, and reliable performance",
      },
    ],
  },
  {
    id: "komatsu-diesel-forklift",
    name: "Komatsu Diesel Forklift",
    category: "Forklift",
    image: komatsuForkliftImage,
    description:
      "A robust 3,000 kg diesel forklift built for smooth, dependable material handling in warehouses, factories, logistics, and construction.",
    specifications: [
      { label: "Brand", value: "Komatsu" },
      { label: "Type", value: "Diesel forklift" },
      { label: "Lifting Capacity", value: "3,000 kg" },
      { label: "Mast Type", value: "Hydraulic lifting mast" },
      { label: "Forks", value: "Heavy-duty forks" },
      { label: "Engine", value: "Powerful, reliable diesel engine" },
      { label: "Transmission", value: "Industrial heavy-duty transmission" },
      { label: "Steering", value: "Hydraulic steering system" },
      { label: "Operator Seat", value: "Adjustable operator seat" },
      {
        label: "Safety",
        value: "Overhead guard and heavy-duty safety structure",
      },
      { label: "Tires", value: "Heavy-duty industrial tires" },
      {
        label: "Application",
        value:
          "Warehouses, factories, logistics, construction sites, and material handling",
      },
    ],
  },
];

export const getEquipmentById = (id: string) =>
  equipment.find((item) => item.id === id);
