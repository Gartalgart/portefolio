/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // La feuille Tailwind (~7 Ko compressée) arrive avec le HTML au lieu d'une requête qui bloque le rendu :
    // le premier affichage n'attend plus le CSS, ce qui compte sur un téléphone en 4G (trace du 27/10/2026).
    inlineCss: true,
  },
};
export default nextConfig;
