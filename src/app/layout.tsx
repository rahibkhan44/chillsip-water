import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "CHILLSIP Mineral Water — Pure, Crisp, Refreshing",
  description:
    "CHILLSIP Mineral Water — Crystal-clear, naturally rich mineral water from the heart of Peshawar. Taste the refreshment in every sip. Order now via WhatsApp.",
  keywords: [
    "CHILLSIP",
    "mineral water Pakistan",
    "pure water Peshawar",
    "best mineral water Pakistan",
    "natural mineral water",
  ],
  openGraph: {
    title: "CHILLSIP Mineral Water — Feel the Chill",
    description: "Pure mineral water from Peshawar, Pakistan. So Cool. So Fresh.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
