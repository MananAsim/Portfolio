import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Manan Asim | Customer Success & Technical Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #ffffff, #f0f4f8)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" }}>
           <div style={{ width: 64, height: 64, background: "#2563EB", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 32, fontWeight: "bold" }}>M</div>
           <div style={{ fontSize: 48, fontWeight: 800, color: "#111111", letterSpacing: "-1px" }}>Manan Asim</div>
        </div>
        
        <div style={{ 
          fontSize: 72, 
          fontWeight: 800, 
          color: "#111111", 
          textAlign: "center", 
          lineHeight: 1.1,
          letterSpacing: "-2px",
          marginBottom: "20px"
        }}>
          Helping users succeed with technology.
        </div>
        <div style={{
          fontSize: 32,
          fontWeight: 500,
          color: "#4B5563",
          textAlign: "center"
        }}>
          Customer Success & Technical Support
        </div>
      </div>
    ),
    { ...size }
  );
}
