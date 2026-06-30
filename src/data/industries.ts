import type { LucideIcon } from "lucide-react";
import {
  Building,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  ShoppingBag,
  Store,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
};

export const industries: Industry[] = [
  {
    slug: "office-buildings",
    title: "Office Buildings",
    description:
      "Daily janitorial, day porter, and after-hours cleaning that keeps professional workspaces spotless and productive.",
    icon: Building,
    services: ["commercial-cleaning", "janitorial-services"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Facilities",
    description:
      "Enhanced disinfection protocols for clinics, dental offices, and medical buildings across Edmonton.",
    icon: HeartPulse,
    services: ["commercial-cleaning", "janitorial-services"],
  },
  {
    slug: "retail",
    title: "Retail & Shopping Centres",
    description:
      "High-traffic floor care, entrance maintenance, and flexible scheduling around store hours.",
    icon: ShoppingBag,
    services: ["commercial-cleaning", "pressure-washing"],
  },
  {
    slug: "restaurants",
    title: "Restaurants & Food Service",
    description:
      "Kitchen-adjacent cleaning, front-of-house detailing, and grease-conscious exterior washing.",
    icon: UtensilsCrossed,
    services: ["commercial-cleaning", "pressure-washing"],
  },
  {
    slug: "education",
    title: "Schools & Universities",
    description:
      "Large-footprint janitorial programs with summer deep cleans and year-round support.",
    icon: GraduationCap,
    services: ["janitorial-services", "property-maintenance"],
  },
  {
    slug: "warehouses",
    title: "Warehouses & Industrial",
    description:
      "Floor maintenance, dock areas, and seasonal exterior care for logistics facilities.",
    icon: Warehouse,
    services: ["commercial-cleaning", "snow-removal"],
  },
  {
    slug: "property-management",
    title: "Property Management",
    description:
      "Multi-site maintenance bundles covering cleaning, landscaping, and snow for entire portfolios.",
    icon: Home,
    services: ["property-maintenance", "janitorial-services"],
  },
  {
    slug: "municipal",
    title: "Municipal & Public Sector",
    description:
      "Reliable, documented service for community centres, libraries, and civic buildings.",
    icon: Landmark,
    services: ["janitorial-services", "snow-removal"],
  },
  {
    slug: "construction",
    title: "Construction & Development",
    description:
      "Post-construction cleans and ongoing site maintenance through project completion.",
    icon: Factory,
    services: ["post-construction-cleaning", "pressure-washing"],
  },
  {
    slug: "storefronts",
    title: "Storefronts & Small Business",
    description:
      "Affordable, consistent cleaning that helps local businesses make great first impressions.",
    icon: Store,
    services: ["commercial-cleaning", "residential-cleaning"],
  },
];
