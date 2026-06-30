import { services } from "@/data/services";

export type NavLink = {
  title: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavLink[];
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  groups?: NavGroup[];
  items?: NavLink[];
  wide?: boolean;
};

const commercialSlugs = new Set([
  "commercial-cleaning",
  "janitorial-services",
  "post-construction-cleaning",
]);
const residentialSlugs = new Set(["residential-cleaning", "lawn-care"]);

function serviceLinks(slugs: Set<string>): NavLink[] {
  return services
    .filter((s) => slugs.has(s.slug))
    .map((s) => ({
      title: s.shortTitle,
      href: `/services/${s.slug}`,
      description: s.description.split(".")[0] + ".",
    }));
}

function maintenanceLinks(): NavLink[] {
  return services
    .filter((s) => !commercialSlugs.has(s.slug) && !residentialSlugs.has(s.slug))
    .map((s) => ({
      title: s.shortTitle,
      href: `/services/${s.slug}`,
    }));
}

export const mainNav: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  {
    id: "services",
    label: "Services",
    href: "/services",
    wide: true,
    groups: [
      { label: "Commercial", items: serviceLinks(commercialSlugs) },
      { label: "Residential", items: serviceLinks(residentialSlugs) },
      { label: "Maintenance & Seasonal", items: maintenanceLinks() },
    ],
    items: [{ title: "View All Services", href: "/services" }],
  },
  { id: "impact", label: "Impact", href: "/impact" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "contact", label: "Contact", href: "/contact" },
];
