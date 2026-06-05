import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CHILLSIP Mineral Water",
    short_name: "CHILLSIP",
    description:
      "Pure, crisp, naturally rich mineral water from the heart of Peshawar, Pakistan.",
    start_url: "/",
    display: "standalone",
    background_color: "#001A3A",
    theme_color: "#001A3A",
    orientation: "portrait",
    categories: ["food", "lifestyle", "shopping", "health"],
    lang: "en-PK",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/Screenshot_12.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
