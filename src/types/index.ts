export type CategorySlug =
  | "wire-rope-slings"
  | "lifting-accessories"
  | "webbing-slings"
  | "offshore-containers"
  | "ppe"
  | "chains";

export interface ProductCategory {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  heroImage: string;
  specHighlights: { label: string; value: string }[];
}

export interface Product {
  id: string;
  categorySlug: CategorySlug;
  name: string;
  sku: string;
  image: string;
  shortDescription: string;
  description: string;
  workingLoadLimit: string;
  material: string;
  certification: string;
  hasTable: boolean;
  table: string | string[];
  status: "certified" | "maintenance" | "out-of-service";
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface OfficeLocation {
  region: string;
  address: string[];
  phone: string;
  phone2: string;
  isHQ?: boolean;
}
