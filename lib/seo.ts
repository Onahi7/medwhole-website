import { Metadata } from "next"

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
  noindex?: boolean
}

const siteConfig = {
  name: "MedWHOLE Alliance for Health and Development",
  shortName: "MedWHOLE",
  description:
    "A network of competent, character-driven leaders empowering individuals and families to achieve wholeness and become agents of community transformation across Nigeria and Africa.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medwhole.org",
  ogImage: "/og-image.png",
  twitterHandle: "@medwhole",
  keywords: [
    "health",
    "education",
    "development",
    "Nigeria",
    "Africa",
    "healthcare",
    "public health",
    "medical training",
    "community health",
    "health consulting",
    "health academy",
    "capacity building",
    "health systems strengthening",
    "primary healthcare",
    "health leadership",
    "wholeness",
    "community transformation",
    "faith-based health",
    "maternal health",
    "child health",
    "health equity",
  ],
  locale: "en_US",
  alternateLocales: ["en_NG"],
}

export function generateSEO({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags,
  noindex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.shortName}` : siteConfig.name
  const pageDescription = description || siteConfig.description
  const pageImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.keywords, ...(tags || [])].join(", "),
    authors: author ? [{ name: author }] : [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: noindex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: pageUrl,
      languages: {
        "en-US": pageUrl,
        "en-NG": pageUrl,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      alternateLocale: siteConfig.alternateLocales,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === "article" &&
        publishedTime && {
          publishedTime,
          modifiedTime,
          authors: author ? [author] : undefined,
          tags,
        }),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      // Add other verification tokens as needed
      // yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
        { url: "/apple-touch-icon-167x167.png", sizes: "167x167", type: "image/png" },
        { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#0f766e",
        },
      ],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: siteConfig.shortName,
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    other: {
      "msapplication-TileColor": "#0f766e",
      "msapplication-config": "/browserconfig.xml",
    },
  }
}

export { siteConfig }
