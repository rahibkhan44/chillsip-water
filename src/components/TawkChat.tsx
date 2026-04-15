"use client";

import { useEffect } from "react";

// Tawk.to Live Chat widget
// To activate: replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID with your own from tawk.to dashboard
// Go to: https://www.tawk.to → Dashboard → Administration → Chat Widget → Direct Chat Link

const TAWK_PROPERTY_ID = "YOUR_PROPERTY_ID"; // Replace with your Tawk.to property ID
const TAWK_WIDGET_ID = "default";              // Replace with your widget ID if different

declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      setAttributes?: (attrs: Record<string, string>, callback?: () => void) => void;
      customStyle?: object;
    };
    Tawk_LoadStart?: Date;
  }
}

export default function TawkChat() {
  useEffect(() => {
    // Skip if placeholder IDs not replaced yet
    if (TAWK_PROPERTY_ID === "YOUR_PROPERTY_ID") return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    // Pre-fill chat greeting
    window.Tawk_API.onLoad = function () {
      window.Tawk_API?.setAttributes?.(
        { name: "CHILLSIP Customer" },
        () => {}
      );
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
