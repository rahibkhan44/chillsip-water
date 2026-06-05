import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CHILLSIP Mineral Water | Pure, Crisp, Refreshing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #001A3A 0%, #002966 45%, #0047AB 100%)",
          fontFamily: "system-ui, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.35) 0%, rgba(0,212,255,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -160,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,153,255,0.3) 0%, rgba(0,153,255,0) 70%)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            color: "#00D4FF",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Premium Mineral Water · Pakistan
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
            display: "flex",
          }}
        >
          <span style={{ color: "white" }}>CHILL</span>
          <span
            style={{
              background: "linear-gradient(135deg, #0099FF, #00D4FF)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SIP
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: "rgba(255,255,255,0.75)",
            marginTop: 16,
          }}
        >
          Feel the Chill. Taste the Refreshment.
        </div>

        {/* CTA Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 36,
            padding: "18px 44px",
            borderRadius: 999,
            background: "linear-gradient(135deg, #25D366, #1EBE57)",
            color: "white",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 1,
            boxShadow: "0 12px 40px rgba(37, 211, 102, 0.45)",
          }}
        >
          <span>Order on WhatsApp</span>
          <span style={{ fontSize: 32 }}>→</span>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            gap: 48,
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>100% Pure</span>
          <span>·</span>
          <span>Zero Additives</span>
          <span>·</span>
          <span>Peshawar, PK</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
