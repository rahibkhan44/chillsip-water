import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://chillsip-water.vercel.app";
const SITE_NAME = "CHILLSIP Mineral Water";
const TELEPHONE = "+92-345-5928122";
const WHATSAPP = "https://wa.me/923455928122";
const ADDRESS = {
  street: "Peshawar Industrial Estate, Hayatabad",
  locality: "Peshawar",
  region: "Khyber Pakhtunkhwa",
  postal: "25000",
  country: "PK",
};
// Approximate Peshawar geo coordinates
const GEO = { lat: 33.9988, lng: 71.4329 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "CHILLSIP Mineral Water | Pure Drinking Water from Peshawar, Pakistan",
    template: "%s | CHILLSIP Mineral Water",
  },
  description:
    "CHILLSIP Mineral Water is crystal-clear drinking water from Peshawar, Pakistan. Rich in natural minerals, zero additives. Order on WhatsApp for fast delivery.",
  applicationName: "CHILLSIP",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "CHILLSIP",
    "ChillSip",
    "ChillSip mineral water",
    "CHILLSIP mineral water",
    "mineral water Pakistan",
    "mineral water Peshawar",
    "pure water Peshawar",
    "best mineral water Pakistan",
    "natural mineral water Pakistan",
    "drinking water Peshawar",
    "premium water Pakistan",
    "bottled water Peshawar",
    "bottled water KP",
    "water delivery Peshawar",
    "water delivery Hayatabad",
    "WhatsApp water order Peshawar",
    "1.5L mineral water Pakistan",
    "500ml mineral water Pakistan",
    "Khyber Pakhtunkhwa water brand",
    "Pakistani water brand",
  ],
  category: "Food & Beverage",
  classification: "Beverage / Mineral Water",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "en-PK": "/",
      "ur-PK": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    alternateLocale: ["ur_PK"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "CHILLSIP Mineral Water | Feel the Chill",
    description:
      "Pure mineral water from Peshawar, Pakistan. Crystal-clear, naturally rich in minerals. Order on WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHILLSIP Mineral Water | Feel the Chill",
    description:
      "Pure mineral water from Peshawar, Pakistan. Crystal-clear, naturally rich in minerals.",
    creator: "@chillsip",
    site: "@chillsip",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Screenshot_12.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/Screenshot_12.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  verification: {
    google: "eYStEl2n6ViOLSQZI6tAzC0_6RMjuWCDwKrearaDJ9w",
    other: {
      "msvalidate.01": "FE847921E7BAD9558A7105B0FEDD2708",
    },
  },
  other: {
    "geo.region": "PK-KP",
    "geo.placename": "Peshawar",
    "geo.position": `${GEO.lat};${GEO.lng}`,
    ICBM: `${GEO.lat}, ${GEO.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0099FF" },
    { media: "(prefers-color-scheme: dark)", color: "#001A3A" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Top-class JSON-LD: Organization + LocalBusiness + Product + Brand + WebSite + BreadcrumbList + FAQPage
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["ChillSip", "Chill Sip"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Screenshot_12.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/Screenshot_12.png`,
      description:
        "Premium mineral water sourced and bottled in Peshawar, Pakistan. Crystal-clear, naturally rich in minerals, zero additives.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Ahmad Alam",
        jobTitle: "Founder & Chief Executive Officer",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postal,
        addressCountry: ADDRESS.country,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: TELEPHONE,
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: TELEPHONE,
          contactType: "sales",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61579034075612",
        "https://www.instagram.com/ahmii_xxo/",
        WHATSAPP,
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      image: `${SITE_URL}/Screenshot_12.png`,
      url: SITE_URL,
      telephone: TELEPHONE,
      priceRange: "$",
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postal,
        addressCountry: ADDRESS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Peshawar" },
        { "@type": "City", name: "Islamabad" },
        { "@type": "City", name: "Lahore" },
        { "@type": "City", name: "Karachi" },
        { "@type": "Country", name: "Pakistan" },
      ],
    },
    {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: "CHILLSIP",
      logo: `${SITE_URL}/Screenshot_12.png`,
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "CHILLSIP Mineral Water",
      image: [
        `${SITE_URL}/Screenshot_12.png`,
        `${SITE_URL}/Screenshot_3.png`,
        `${SITE_URL}/Screenshot_2.png`,
      ],
      description:
        "Premium mineral water rich in natural calcium, magnesium and potassium. Zero artificial additives. Sourced and bottled in Peshawar, Pakistan.",
      brand: { "@id": `${SITE_URL}/#brand` },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
      category: "Mineral Water",
      countryOfOrigin: {
        "@type": "Country",
        name: "Pakistan",
      },
      offers: {
        "@type": "Offer",
        url: SITE_URL,
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": `${SITE_URL}/#organization` },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Official website of CHILLSIP Mineral Water, Peshawar, Pakistan.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en-PK", "ur-PK"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Story",
          item: `${SITE_URL}/#about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Product",
          item: `${SITE_URL}/#products`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Leadership",
          item: `${SITE_URL}/#leadership`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Stockists",
          item: `${SITE_URL}/#stockists`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: `${SITE_URL}/#contact`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is CHILLSIP Mineral Water from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CHILLSIP is sourced and bottled in Peshawar, Khyber Pakhtunkhwa, Pakistan. We deliver across Pakistan with a focus on Peshawar, Islamabad, Lahore and Karachi.",
          },
        },
        {
          "@type": "Question",
          name: "How can I order CHILLSIP water?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can order CHILLSIP directly on WhatsApp. Tap any Order Now button on the site, send us your address and how many bottles you need, and we will confirm delivery.",
          },
        },
        {
          "@type": "Question",
          name: "What sizes does CHILLSIP come in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CHILLSIP is currently available in 500ml and 1.5L bottles. Bulk and case orders are available for homes, offices, gyms and events.",
          },
        },
        {
          "@type": "Question",
          name: "Does CHILLSIP contain any additives or chemicals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. CHILLSIP contains zero artificial additives. It is naturally rich in calcium, magnesium and potassium, with nothing added that does not belong in clean drinking water.",
          },
        },
        {
          "@type": "Question",
          name: "Is CHILLSIP safe for daily drinking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CHILLSIP is purified through a multi-stage process and tested for purity before bottling. It is safe and recommended for daily hydration for the whole family.",
          },
        },
        {
          "@type": "Question",
          name: "Do you deliver outside Peshawar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We serve customers across Pakistan. Message us on WhatsApp with your city and quantity and we will share delivery options and timing.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      dir="ltr"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        {/* Performance: preconnect / dns-prefetch */}
        <link rel="preconnect" href="https://embed.tawk.to" crossOrigin="" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
