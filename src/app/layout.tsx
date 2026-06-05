import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://chillsip.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CHILLSIP Mineral Water — Pure, Crisp, Refreshing | Peshawar, Pakistan",
    template: "%s | CHILLSIP Mineral Water",
  },
  description:
    "CHILLSIP Mineral Water — Crystal-clear, naturally rich mineral water from the heart of Peshawar, Pakistan. Zero additives, 100% natural minerals. Order now via WhatsApp.",
  applicationName: "CHILLSIP",
  authors: [{ name: "CHILLSIP Mineral Water" }],
  generator: "Next.js",
  keywords: [
    "CHILLSIP",
    "ChillSip mineral water",
    "mineral water Pakistan",
    "pure water Peshawar",
    "best mineral water Pakistan",
    "natural mineral water",
    "drinking water Peshawar",
    "premium water Pakistan",
    "bottled water KP",
    "water delivery Peshawar",
  ],
  category: "Food & Beverage",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "CHILLSIP Mineral Water",
    title: "CHILLSIP Mineral Water — Feel the Chill",
    description:
      "Pure mineral water from the heart of Peshawar, Pakistan. Crystal-clear, naturally rich in minerals. So Cool. So Fresh.",
    images: [
      {
        url: "/Screenshot_12.png",
        width: 1200,
        height: 630,
        alt: "CHILLSIP Mineral Water bottle — Pure, crisp and refreshing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHILLSIP Mineral Water — Feel the Chill",
    description:
      "Pure mineral water from Peshawar, Pakistan. Crystal-clear, naturally rich in minerals.",
    images: ["/Screenshot_12.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#001A3A",
  width: "device-width",
  initialScale: 1,
};

// Organization + Product structured data for rich Google results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "CHILLSIP Mineral Water",
      alternateName: "ChillSip",
      url: SITE_URL,
      logo: `${SITE_URL}/Screenshot_12.png`,
      description:
        "Premium mineral water sourced and bottled in Peshawar, Pakistan. Crystal-clear, naturally rich in minerals, zero additives.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Peshawar",
        addressRegion: "Khyber Pakhtunkhwa",
        addressCountry: "PK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-345-5928122",
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61579034075612",
        "https://www.instagram.com/ahmii_xxo/",
      ],
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product`,
      name: "CHILLSIP Mineral Water",
      image: [`${SITE_URL}/Screenshot_12.png`, `${SITE_URL}/Screenshot_3.png`],
      description:
        "Premium mineral water rich in natural calcium, magnesium and potassium. Zero artificial additives. Sourced and bottled in Peshawar, Pakistan.",
      brand: {
        "@type": "Brand",
        name: "CHILLSIP",
      },
      category: "Mineral Water",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "CHILLSIP Mineral Water",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-PK",
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
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
