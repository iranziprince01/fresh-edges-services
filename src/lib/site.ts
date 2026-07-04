/**
 * Base URL for large media (videos) hosted on Vercel Blob rather than committed
 * to the repo. Override per-environment with NEXT_PUBLIC_MEDIA_BASE_URL; the
 * fallback points at the production Blob store so builds work without extra env.
 */
const mediaBase =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  "https://exqtua0v7kdbdrpj.public.blob.vercel-storage.com/videos";

export const siteConfig = {
  name: "Fresh Edges Services Ltd",
  brandName: "Fresh Edges Services",
  shortName: "Fresh Edges",
  tagline: "Reliable Property Care · Trusted Service · Stronger Communities",
  homeTitleTagline: "Reliable Property Care",
  description:
    "Book trusted property care in Edmonton and across Alberta. Fresh Edges Services delivers commercial cleaning, residential cleaning, snow removal, landscaping, and facility maintenance with free quotes and reliable service.",
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
  /** Official cities in Alberta (municipal status: city). */
  albertaCities: [
    "Airdrie",
    "Beaumont",
    "Brooks",
    "Calgary",
    "Camrose",
    "Chestermere",
    "Cold Lake",
    "Edmonton",
    "Fort Saskatchewan",
    "Grande Prairie",
    "Lacombe",
    "Leduc",
    "Lethbridge",
    "Lloydminster",
    "Medicine Hat",
    "Red Deer",
    "Spruce Grove",
    "St. Albert",
    "Wetaskiwin",
  ],
  assets: {
    logo: "/logo.svg",
    logoFooter: "/logo_white.svg",
    favicon: "/favicon.ico",
    icon: "/icon.png",
    appleIcon: "/apple-icon.png",
    faviconPng: "/favicon.png",
    story: "/story.jpg",
    heroVideo: `${mediaBase}/hero.mp4`,
    cityVideo: `${mediaBase}/city.mp4`,
    aboutBannerVideo: `${mediaBase}/about_banner.mp4`,
    impactVideo: `${mediaBase}/impact.mp4`,
    heroRightVideo: `${mediaBase}/hero_right.mp4`,
    joinUsVideo: `${mediaBase}/join_us.mp4`,
    impactCanadaVideo: `${mediaBase}/impact_canada.mp4`,
    chooseVideo: `${mediaBase}/choose.mp4`,
  },
  logoVersion: "5",
  faviconVersion: "3",
  storyVersion: "3",
  heroVideoVersion: "2",
  cityVideoVersion: "1",
  aboutBannerVideoVersion: "1",
  impactVideoVersion: "1",
  heroRightVideoVersion: "1",
  joinUsVideoVersion: "1",
  impactCanadaVideoVersion: "1",
  chooseVideoVersion: "1",
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
