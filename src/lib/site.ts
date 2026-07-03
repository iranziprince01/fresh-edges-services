export const siteConfig = {
  name: "Fresh Edges Services Ltd",
  brandName: "Fresh Edges Services",
  shortName: "Fresh Edges",
  tagline: "Reliable Property Care · Trusted Service · Stronger Communities",
  homeTitleTagline: "Reliable Property Care",
  description:
    "Edmonton-based professional cleaning, property maintenance, landscaping, snow removal, facility support, and exterior care for residential and commercial clients across Alberta.",
  url: "https://www.freshedges.ca",
  locale: "en_CA",
  phone: "+1 (780) 292-5470",
  phoneHref: "tel:+17802925470",
  email: "info@freshedgesservices.ca",
  careersEmail: "careers@freshedgesservices.ca",
  address: {
    street: "10180 101 Street NW, Suite 3400",
    city: "Edmonton",
    province: "Alberta",
    postalCode: "T5J 3S4",
    country: "Canada",
    countryCode: "CA",
  },
  geo: {
    latitude: 53.5419,
    longitude: -113.4938,
  },
  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com/freshedgesservices",
    instagram: "https://instagram.com/freshedgesservices",
    linkedin: "https://linkedin.com/company/fresh-edges-services",
  },
  foundedYear: 2014,
  serviceAreas: [
    "Edmonton",
    "St. Albert",
    "Sherwood Park",
    "Beaumont",
    "Leduc",
  ],
  extendedServiceAreas: [
    "Edmonton",
    "St. Albert",
    "Sherwood Park",
    "Beaumont",
    "Leduc",
    "Spruce Grove",
    "Stony Plain",
    "Fort Saskatchewan",
  ],
  assets: {
    logo: "/logo.svg",
    logoFooter: "/logo_white.svg",
    favicon: "/favicon.ico",
    icon: "/icon.png",
    appleIcon: "/apple-icon.png",
    faviconPng: "/favicon.png",
    story: "/story.jpg",
  },
  logoVersion: "5",
  faviconVersion: "3",
  storyVersion: "3",
  keywords: [
    "Commercial Cleaning Edmonton",
    "Residential Cleaning Edmonton",
    "Property Maintenance Edmonton",
    "Snow Removal Edmonton",
    "Janitorial Services Edmonton",
    "Pressure Washing Edmonton",
    "Landscaping Edmonton",
    "Facility Maintenance Alberta",
    "Cleaning Company Edmonton",
    "Property Services Edmonton",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function brandedLogoUrl(variant: "default" | "footer" = "default") {
  const path =
    variant === "footer" ? siteConfig.assets.logoFooter : siteConfig.assets.logo;
  return `${path}?v=${siteConfig.logoVersion}`;
}
