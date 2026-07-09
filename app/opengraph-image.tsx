import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = "Portfólio de João Victor Pedrosa";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.24), transparent 28%), linear-gradient(135deg, #020617 0%, #0f172a 58%, #111827 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "32px",
            padding: "48px",
            background: "rgba(15,23,42,0.62)",
            backdropFilter: "blur(18px)",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontSize: 24,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#67e8f9",
              }}
            >
              Portfolio
            </span>
            <h1
              style={{
                margin: 0,
                fontSize: 68,
                lineHeight: 1.04,
                maxWidth: 860,
              }}
            >
              João Victor Pedrosa
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: 30,
                lineHeight: 1.4,
                maxWidth: 860,
                color: "#cbd5e1",
              }}
            >
              Desenvolvedor Full Stack com foco em frontend, interfaces
              modernas e produtos web bem estruturados.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#cbd5e1",
            }}
          >
            <span>{siteConfig.websiteUrl.replace("https://", "")}</span>
            <span>React • Vue • Next.js • TypeScript</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
