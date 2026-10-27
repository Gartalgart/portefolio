import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/content";

/*
  Image de partage (LinkedIn, WhatsApp, Facebook, X) : le flanc du véhicule, comme le premier écran.
  Générée au build, en 1200 × 630. Police : Archivo (OFL, paquet @fontsource/archivo).
*/
export const alt = `${site.name} — création de sites internet, ${site.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (w: number) => readFile(path.join(process.cwd(), `node_modules/@fontsource/archivo/files/archivo-latin-${w}-normal.woff`));

export default async function Image() {
  const [black, bold] = await Promise.all([fontFile(900), fontFile(800)]);
  const [first, last] = site.name.toUpperCase().split(" ");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f4f3ee", fontFamily: "Archivo" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "56px 72px 0", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 900, lineHeight: 0.88, color: "#c8361b", letterSpacing: -2 }}>
            <span>{first}</span>
            <span>{last}</span>
          </div>
          <div style={{ marginTop: 26, fontSize: 50, fontWeight: 900, color: "#1d2125", textTransform: "uppercase" }}>Création de sites internet</div>
        </div>
        <div style={{ height: 54, background: "#c8361b" }} />
        <div style={{ height: 8, marginTop: 6, background: "#1d2125" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 72px 34px", fontSize: 30, fontWeight: 800, color: "#1d2125" }}>
          <span style={{ textTransform: "uppercase" }}>Hauts-de-France · Île-de-France</span>
          <span style={{ color: "#c8361b" }}>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: black, weight: 900, style: "normal" },
        { name: "Archivo", data: bold, weight: 800, style: "normal" },
      ],
    },
  );
}
