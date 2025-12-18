"use client"

import { usePathname } from "next/navigation"

interface OrganizationSchemaProps {
  url?: string
}

export function OrganizationSchema({ url }: OrganizationSchemaProps = {}) {
  const pathname = usePathname()
  const siteUrl = url || "https://medwhole.org"

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "MedWHOLE Alliance for Health and Development",
        alternateName: "MedWHOLE",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 200,
          height: 200,
        },
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
        description:
          "A network of competent, character-driven leaders empowering individuals and families to achieve wholeness and become agents of community transformation across Nigeria and Africa.",
        email: "info@medwhole.org",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
          addressRegion: "Nigeria",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Nigeria",
          },
          {
            "@type": "Continent",
            name: "Africa",
          },
        ],
        foundingDate: "2015",
        founder: {
          "@type": "Person",
          name: "MedWHOLE Founders",
        },
        sameAs: [
          "https://www.instagram.com/p/DPTPS3_jeae/",
          "https://www.youtube.com/channel/UCE4pi2L2ztpUVv9D4cCSIYg",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@medwhole.org",
          contactType: "General Inquiries",
          areaServed: "NG",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "MedWHOLE Alliance for Health and Development",
        description:
          "Advancing health, leadership, and development across Africa through education, health services, and consulting.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/news?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}${pathname}#webpage`,
        url: `${siteUrl}${pathname}`,
        name: "MedWHOLE Alliance",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/og-image.png`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "NGO",
        "@id": `${siteUrl}/#ngo`,
        name: "MedWHOLE Alliance for Health and Development",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        mission:
          "To help individuals live a boundless fulfilling life through interventions that promote whole health, whole persons, and whole communities.",
        vision: "Transformed communities through individuals and households who have been made whole.",
        nonprofitStatus: "NonprofitType",
        subOrganization: [
          {
            "@type": "EducationalOrganization",
            name: "MedWHOLE Academy",
            description: "Raising godly, purpose-driven children to transform communities.",
          },
          {
            "@type": "MedicalOrganization",
            name: "MedWHOLE Health",
            description:
              "Providing wholistic, accessible, and affordable healthcare rooted in faith-based values.",
          },
          {
            "@type": "ProfessionalService",
            name: "MedWHOLE Consult",
            description: "Strategic guidance and technical expertise to strengthen health systems.",
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: ArticleSchemaProps) {
  const siteUrl = "https://medwhole.org"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image.startsWith("http") ? image : `${siteUrl}${image}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || "MedWHOLE Alliance",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "MedWHOLE Alliance for Health and Development",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${siteUrl}${url}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}

interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  image?: string
  url: string
}

export function EventSchema({ name, description, startDate, endDate, location, image, url }: EventSchemaProps) {
  const siteUrl = "https://medwhole.org"

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate || startDate,
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
      },
    },
    image: image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : `${siteUrl}/og-image.png`,
    organizer: {
      "@type": "Organization",
      name: "MedWHOLE Alliance for Health and Development",
      url: siteUrl,
    },
    url: url.startsWith("http") ? url : `${siteUrl}${url}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
