import { ImageResponse } from "next/og";
import { personal } from "@/lib/content";

export const alt = "Kirtan Chanllawala — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08090b",
          backgroundImage:
            "linear-gradient(to bottom right, #08090b 0%, #0f1114 60%, #08090b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#e2a25c",
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: "#e2a25c", display: "flex" }} />
          Full Stack Developer
        </div>
        <div style={{ display: "flex", color: "#f2f3f5", fontSize: 92, fontWeight: 600, marginTop: 24 }}>
          {personal.name}
        </div>
        <div style={{ display: "flex", color: "#a8adb7", fontSize: 32, marginTop: 24, maxWidth: 900 }}>
          Production web platforms &amp; AI-powered software — React, TypeScript, Python, Flask
        </div>
        <div style={{ display: "flex", color: "#6f7580", fontSize: 26, marginTop: 48 }}>
          github.com/chanllawala · Stirling, Scotland
        </div>
      </div>
    ),
    { ...size }
  );
}
