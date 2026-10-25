import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/content";

/*
  Image de partage (LinkedIn, WhatsApp, Facebook, X) : le nom dans la nuit, comme le premier écran.
  Générée au build, en 1200 × 630. Police : Space Grotesk Bold (celle du nom 3D, OFL).
*/
export const alt = `${site.brand} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(path.join(process.cwd(), "assets/3d/fonts/SpaceGrotesk-Bold.ttf"));
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
          background: "radial-gradient(ellipse 70% 60% at 50% 48%, #16295f 0%, #0b1530 45%, #070d1c 100%)",
          color: "#eef1f8",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            fontSize: 172,
            lineHeight: 1,
            letterSpacing: -8,
            backgroundImage: "linear-gradient(180deg, #f6f8ff 0%, #c9d6ff 38%, #3a5fc9 52%, #9fb8ff 70%, #e6ecfb 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          rd-solutions
        </div>
        <div style={{ marginTop: 34, fontSize: 34, color: "#c5cee3", textAlign: "center" }}>
          Sites web pour artisans, commerçants, TPE, associations et mairies
        </div>
        <div style={{ marginTop: 18, fontSize: 26, color: "#7fa6ff" }}>
          {`${site.name} · Hauts-de-France · Île-de-France · à distance`}
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, weight: 700, style: "normal" }] },
  );
}
