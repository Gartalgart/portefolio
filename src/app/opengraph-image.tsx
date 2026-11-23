import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/content";

/*
  Image de partage (LinkedIn, WhatsApp, Facebook, X) : la phrase du premier écran sur fond blanc,
  la marque et la zone en pied. Générée au build, en 1200 × 630.
  Police : Hanken Grotesk (OFL, paquet @fontsource/hanken-grotesk).
*/
export const alt = `${site.brand} — création de sites internet, ${site.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (w: number) =>
  readFile(path.join(process.cwd(), `node_modules/@fontsource/hanken-grotesk/files/hanken-grotesk-latin-${w}-normal.woff`));

export default async function Image() {
  const [semi, bold] = await Promise.all([fontFile(600), fontFile(700)]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px 56px",
          background: "#ffffff",
          color: "#1a252f",
          fontFamily: "Hanken Grotesk",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>{site.brand}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, fontWeight: 600, lineHeight: 1.04, letterSpacing: -3 }}>
          <span>Un site qui fait venir</span>
          <span>vos clients.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "2px solid #dde1e5",
            fontSize: 28,
            fontWeight: 600,
            color: "#55626f",
          }}
        >
          <span>Création de sites internet · Hauts-de-France · Île-de-France</span>
          <span style={{ color: "#2c3e50" }}>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Hanken Grotesk", data: semi, weight: 600, style: "normal" },
        { name: "Hanken Grotesk", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
