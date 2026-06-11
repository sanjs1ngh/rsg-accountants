import { ImageResponse } from "next/og";

/**
 * Apple touch icon (home-screen / pinned-tab on iOS & Safari).
 * Temporary RSG wordmark, matching src/app/icon.svg (the browser-tab favicon).
 *
 * To use a final brand logo later, replace BOTH:
 *   - src/app/icon.svg       (browser tab)
 *   - this file              (Apple devices)   — or swap for a static apple-icon.png
 */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1C32",
          color: "#F7F5F0",
          fontSize: 66,
          fontWeight: 600,
          letterSpacing: -2,
          fontFamily: "Georgia, serif",
        }}
      >
        RSG
      </div>
    ),
    { ...size },
  );
}
