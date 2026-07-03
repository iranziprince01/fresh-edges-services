import type { Metadata } from "next";
import { siteConfig } from "./site";
import { images } from "./images";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
  ogImage = images.og,
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${siteConfig.brandName} | ${siteConfig.homeTitleTagline}`
      : `${title} | ${siteConfig.brandName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [
        {
          url: `${siteConfig.assets.favicon}?v=${siteConfig.faviconVersion}`,
          sizes: "any",
        },
        {
          url: `${siteConfig.assets.faviconPng}?v=${siteConfig.faviconVersion}`,
          type: "image/png",
          sizes: "512x512",
        },
        {
          url: `${siteConfig.assets.icon}?v=${siteConfig.faviconVersion}`,
          type: "image/png",
          sizes: "32x32",
        },
        {
          url: `/icon-192.png?v=${siteConfig.faviconVersion}`,
          type: "image/png",
          sizes: "192x192",
        },
      ],
      apple: [
        {
          url: `${siteConfig.assets.appleIcon}?v=${siteConfig.faviconVersion}`,
          type: "image/png",
          sizes: "180x180",
        },
      ],
      shortcut: `${siteConfig.assets.favicon}?v=${siteConfig.faviconVersion}`,
    },
  };
}
