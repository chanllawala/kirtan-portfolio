import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08090b",
          borderRadius: 14,
        }}
      >
        <div style={{ display: "flex", color: "#e2a25c", fontSize: 30, fontWeight: 700, fontFamily: "sans-serif" }}>
          KC
        </div>
      </div>
    ),
    { ...size }
  );
}
