// En-têtes de sécurité envoyés avec chaque réponse. HTTPS strict (HSTS) est déjà ajouté par l'hébergeur.
const securityHeaders = [
  // Le navigateur ne devine pas le type d'un fichier : il suit celui annoncé par le serveur.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Le site ne peut pas être affiché dans un cadre sur un autre site (détournement de clic).
  { key: "X-Frame-Options", value: "DENY" },
  // Vers un autre site, seule l'origine est transmise, jamais l'adresse complète de la page.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Le site n'utilise ni caméra, ni micro, ni position.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // La feuille Tailwind (~7 Ko compressée) arrive avec le HTML au lieu d'une requête qui bloque le rendu :
    // le premier affichage n'attend plus le CSS, ce qui compte sur un téléphone en 4G (trace du 27/10/2026).
    inlineCss: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};
export default nextConfig;
