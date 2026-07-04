/** Verified Unsplash image IDs. All return HTTP 200 via images.unsplash.com. */
import { siteConfig } from "@/lib/site";

export function unsplash(
  photoId: string,
  width = 1200,
  extra = "",
): string {
  return `https://images.unsplash.com/${photoId}?w=${width}&q=80&auto=format&fit=crop${extra}`;
}

const img = `${siteConfig.mediaBaseUrl}/images`;

export const images = {
  hero: unsplash("photo-1600880292203-757bb62b4baf", 1920),
  heroVideo: `${siteConfig.assets.heroVideo}?v=${siteConfig.heroVideoVersion}`,
  cityVideo: `${siteConfig.assets.cityVideo}?v=${siteConfig.cityVideoVersion}`,
  aboutBannerVideo: `${siteConfig.assets.aboutBannerVideo}?v=${siteConfig.aboutBannerVideoVersion}`,
  impactVideo: `${siteConfig.assets.impactVideo}?v=${siteConfig.impactVideoVersion}`,
  heroRightVideo: `${siteConfig.assets.heroRightVideo}?v=${siteConfig.heroRightVideoVersion}`,
  joinUsVideo: `${siteConfig.assets.joinUsVideo}?v=${siteConfig.joinUsVideoVersion}`,
  impactCanadaVideo: `${siteConfig.assets.impactCanadaVideo}?v=${siteConfig.impactCanadaVideoVersion}`,
  chooseVideo: `${siteConfig.assets.chooseVideo}?v=${siteConfig.chooseVideoVersion}`,
  /** Video poster frames (extracted from the matching Blob videos). */
  heroPoster: `${img}/hero_poster.jpg`,
  heroRightPoster: `${img}/hero_right_poster.jpg`,
  choosePoster: `${img}/choose_poster.jpg`,
  impactPoster: `${img}/impact_poster.jpg`,
  impactCanadaPoster: `${img}/impact_canada_poster.jpg`,
  intro: `${img}/second.jpg`,
  commercial: `${img}/commercial.jpg`,
  snowRemoval: `${img}/snow_removal.jpg`,
  snowRemovalBenefits: `${img}/snow_removal_benefits.jpg`,
  landscapingBenefits: `${img}/landscaping_benefits.jpg`,
  pressureWashingService: `${img}/pressure_washing.jpg`,
  pressureWashingBenefits: `${img}/presure_washing_benefits.jpg`,
  postConstructionCleanup: `${img}/post_cons_cleanup.jpg`,
  postConstructionCleanupBenefits: `${img}/post_cons_cleanup_benefits.jpg`,
  career: `${img}/career.jpg`,
  join: `${img}/join.jpg`,
  story: `${siteConfig.assets.story}?v=${siteConfig.storyVersion}`,
  coreValue: `${img}/value.jpg`,
  servicesBanner: `${img}/servie_banner.jpg`,
  bookingBanner: `${img}/booking.jpg`,
  contactBanner: `${img}/contact_banner.jpg`,
  og: unsplash("photo-1600880292203-757bb62b4baf", 1200, "&h=630"),

  edmontonSkyline: unsplash("photo-1477959858617-67f85cf4f1df", 1200),

  commercialOffice: unsplash("photo-1497366216548-37526070297c", 1920),
  commercialLobby: unsplash("photo-1497366754035-f200968a6e72", 800),
  commercialMeeting: unsplash("photo-1497366811353-6870744d04b2", 1200),

  residentialCleaning: unsplash("photo-1581578731548-c64695cc6952", 1920),
  residentialBefore: unsplash("photo-1628177142898-93e36e4e3a50", 800),

  janitorial: unsplash("photo-1628177142898-93e36e4e3a50", 1920),

  snowPlow: unsplash("photo-1551524164-687a55dd1126", 1920),
  snowStreet: unsplash("photo-1514565131-fce0801e5785", 800),
  snowCleared: unsplash("photo-1578662996442-48f60103fc96", 800),

  landscaping: unsplash("photo-1558904541-efa843a96f01", 1920),
  garden: unsplash("photo-1416879595882-3373a0480b5b", 800),

  lawn: unsplash("photo-1558618666-fcd25c85cd64", 1920),

  pressureWashing: unsplash("photo-1504307651254-35680f356dfd", 1920),
  exteriorClean: unsplash("photo-1497366216548-37526070297c", 800),

  postConstruction: unsplash("photo-1503387762-592deb58ef4e", 1920),
  propertyMaintenance: unsplash("photo-1560518883-ce09059eeffa", 1920),

  processSteps: [`${img}/01.jpg`, `${img}/02.jpg`, `${img}/03.jpg`, `${img}/04.jpg`] as const,
} as const;
