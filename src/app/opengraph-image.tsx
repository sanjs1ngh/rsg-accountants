import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Chartered Accountants in Hayes, West London`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1C32",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#F7F5F0",
              color: "#0F1C32",
              fontSize: "26px",
              fontWeight: 600,
            }}
          >
            RSG
          </div>
          <div
            style={{
              color: "#F7F5F0",
              fontSize: "30px",
              letterSpacing: "-0.5px",
            }}
          >
            RSG Accountants
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#9FC0B8",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "22px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Chartered Accountants · Hayes, West London
          </div>
          <div
            style={{
              color: "#F7F5F0",
              fontSize: "64px",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Chartered accountants and business advisers for growing businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#C9D2D0",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "22px",
          }}
        >
          <span>Chartered</span>
          <span style={{ color: "#15514A" }}>•</span>
          <span>ICAEW listed</span>
          <span style={{ color: "#15514A" }}>•</span>
          <span>ACCA-qualified professionals</span>
          <span style={{ color: "#15514A" }}>•</span>
          <span>CIOT tax expertise</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
