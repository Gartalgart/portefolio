# Consignes de design

Ce fichier donne les consignes de départ pour concevoir ou redessiner l'interface de ce projet. À lire en entier avant de produire du design ou du code d'interface.

> Utilisation : place ce fichier à la racine du projet, lance `claude` depuis cette racine, puis écris :
> « Lis CONSIGNES-DESIGN.md et applique-le. »

---

## 1. Principe général

Le design doit être **soigné, cohérent et adapté à ce projet précis**. Il ne doit jamais ressembler à une interface générique produite par IA. Pour y arriver, tu t'appuies sur les skills et outils ci-dessous, sur des exemples réels d'excellents designs, et sur mes réponses à tes questions.

## 2. Skills et outils à utiliser

Vérifie d'abord ce qui est installé avec `/skills` et ce qui est connecté. Si quelque chose manque, dis-le-moi et continue avec le reste.

| Outil | Rôle | Quand l'utiliser |
|---|---|---|
| **Impeccable** | Vocabulaire et règles de design professionnel, anti-patterns | Toujours : `/impeccable shape` avant de coder, `/impeccable craft` pour construire, `/impeccable audit` et `/impeccable polish` pour finir |
| **Taste** (`design-taste-frontend`, `redesign-existing-projects`, `full-output-enforcement`) | Goût visuel : mise en page, typographie, animations, espacements ; évite le code incomplet | Pour définir le style (variance, animations, densité), et `redesign-existing-projects` si le projet existe déjà |
| **Awesome Design** (fichiers `DESIGN.md`) | Design systems de marques connues, lisibles par un agent | Pour choisir une base de tokens (couleurs, typographie, espacements, composants) |
| **Playwright CLI** | Ouvrir le site, prendre des captures (desktop, tablette, mobile), vérifier le rendu | Pour voir le résultat réel et pour consulter des sites d'inspiration |
| **Blender (MCP)** | Créer des scènes et des objets 3D | Seulement quand c'est nécessaire (voir section 6) |
| **img2threejs** | Reconstruire un objet simple en code Three.js à partir d'une image | Pour un objet simple, quand une image de référence existe |
| **MCP GitHub** | Chercher des dépôts et des exemples proches du projet | Pour la recherche d'inspiration (section 4) |

**Priorité en cas de conflit** : Impeccable > Taste > DESIGN.md. Ne mélange pas des directions contradictoires.

D'autres outils complémentaires (extraction de design system, bibliothèques de composants, Figma, qualité) sont listés avec leurs commandes d'installation en **section 9**.

## 3. Awesome Design : emplacement local

La collection `awesome-design-md` est déjà sur ma machine :

```
C:\Users\rdenimal\Documents\dev_perso\_outils\awesome-design-md
```

- Ce dossier est hors du projet : si tu n'y as pas accès, demande-moi de l'autoriser (par exemple avec `/add-dir`).
- Chaque marque a son dossier avec un fichier `DESIGN.md` (par exemple `linear.app/DESIGN.md`).
- Liste d'abord le contenu du dossier, choisis **2 ou 3 marques** dont l'univers se rapproche du projet, lis leurs `DESIGN.md`, et dis-moi pourquoi tu les proposes.
- **Ne copie pas une marque à l'identique** : retiens des principes et adapte les tokens à l'identité du projet. Ne clone pas cette collection dans le projet.

## 4. S'inspirer des meilleurs designs (internet et GitHub)

1. **Sur le web** : cherche des sites récents, reconnus pour la qualité de leur design, dans le même secteur ou le même registre visuel que le projet. Ouvre les plus pertinents avec Playwright CLI et range les captures dans `design-audit/inspiration/`.
2. **Sur GitHub** (MCP GitHub) : cherche des dépôts open source bien conçus et proches du projet (même type de site ou d'application, même stack si possible). Étudie la structure des composants, la gestion des thèmes, les tokens de design.
3. **Présente-moi 3 à 5 pistes** (nom, lien, ce qui fonctionne bien, ce qu'on peut en retenir) et laisse-moi choisir.
4. **Adapte toujours au projet** : l'identité, le public et la stack comptent plus que la référence. L'inspiration n'est pas de la copie : ne recopie ni code ni contenu protégé, et vérifie la licence avant de réutiliser quoi que ce soit.

## 5. Poser des questions

**N'hésite pas à me poser des questions**, surtout au début et à chaque choix important. Règles :

- Regroupe-les (3 à 5 à la fois) et propose des choix quand c'est possible.
- Ne demande rien que tu peux déduire du projet (stack, pages, styles existants).
- Thèmes à couvrir : objectif du design, public cible, ton souhaité, identité existante (logo, couleurs, polices), périmètre (pages et composants), références que j'aime ou que je déteste, contraintes techniques, besoin de 3D ou d'animations.
- Si une information manque, demande-la plutôt que d'inventer.

## 6. Blender : scènes et objets 3D

Utilise Blender via le MCP **quand c'est nécessaire**, c'est-à-dire quand le design gagne vraiment à avoir un objet ou une scène 3D (visuel de produit, élément principal de l'accueil, illustration impossible à faire proprement en 2D). Sinon, reste en 2D.

- Avant de commencer, inspecte la scène Blender (informations de scène, capture du viewport) sans rien modifier sans mon accord.
- Demande-moi le sujet, le style (réaliste, low-poly, minimal) et la palette, en cohérence avec `DESIGN.md`.
- Modélise par étapes et montre-moi une capture du viewport à chaque étape clé.
- Exporte selon l'usage : **GLB optimisé** (peu de polygones, textures compressées, poids cible sous 2 Mo si possible) pour un modèle interactif, ou **image WebP/AVIF** pour un visuel statique.
- Prévois un repli en image fixe pour les appareils peu puissants et pour `prefers-reduced-motion`.
- Pour un objet simple à partir d'une image, img2threejs est plus léger : n'utilise pas les deux outils pour le même objet.
- Range les assets dans un dossier dédié (par exemple `assets/3d/`) et garde les fichiers `.blend` hors du site publié.

## 7. Méthode de travail

1. Découverte : analyse le projet, pose tes questions, écris un court brief (`PRODUCT.md`).
2. Inspiration : recherche web, GitHub et `awesome-design-md`, puis propose des pistes.
3. Direction : fixe les décisions dans `DESIGN.md` (palette, typographie, échelle d'espacement, composants, ton, règles d'animation).
4. Construction : page par page, en commençant par la plus importante, avec `/impeccable craft`.
5. Vérification : captures avant/après avec Playwright CLI (desktop 1440 px, tablette 768 px, mobile 375 px), puis `/impeccable audit` et `/impeccable polish`.

**Valide chaque étape avec moi avant de passer à la suivante.** Travaille sur une branche Git dédiée (`git checkout -b design`), et ne fais ni push ni pull request sans mon accord.

## 8. Exigences de qualité

- Responsive : mobile, tablette et desktop.
- Accessible : contrastes lisibles, navigation au clavier, textes alternatifs.
- Performant : images optimisées, 3D chargée en différé.
- Cohérent : tout vient des tokens de `DESIGN.md` (pas de couleurs ou d'espacements improvisés).
- Fonctionnel : ne casse aucune fonctionnalité existante.

## 9. Outils complémentaires et installation

### Règles d'installation

1. **Vérifie d'abord ce qui est déjà installé** : `/skills` dans Claude Code, puis dans le terminal `npx skills list`, `claude mcp list` et `npm ls -g --depth=0`.
2. **Demande-moi mon accord avant d'installer quoi que ce soit**, et ne propose que les outils utiles au projet (stack, besoin réel).
3. **Ne cumule pas plusieurs skills de « design complet »** (Impeccable, Taste, ui-ux-pro-max, Huashu Design) sans me prévenir : ils se contredisent. Garde une direction principale.
4. Les commandes `npx skills add …` demandent de choisir les agents : **coche Claude Code**, sinon le skill n'est pas visible. Les commandes qui commencent par `/plugin` se tapent **dans Claude Code**, pas dans le terminal.
5. Les commandes marquées *(à vérifier)* viennent de sources non officielles ou de mes connaissances générales : contrôle-les avec `--help` ou dans la documentation du projet avant de les lancer.
6. Après toute installation de skill, relance Claude Code depuis la racine du projet.

### A. Skills et outils de design

```bash
# frontend-design (skill officiel Anthropic) (à vérifier : tape /plugin pour parcourir le catalogue officiel)
/plugin install frontend-design@claude-plugins-official

# Skill UI : extrait le design system de n'importe quel site (couleurs, polices, espacements, composants)
npm install -g skillui
npm install playwright
npx playwright install chromium
skillui --url https://exemple.com --format design-md      # produit un DESIGN.md

# extract-design-system : extrait les tokens d'un site et génère tokens.json et tokens.css
npx skills add arvindrk/extract-design-system
npx playwright install chromium
npx extract-design-system https://exemple.com

# ui-ux-pro-max : palettes, polices et règles UX selon le type de projet (à vérifier : uipro --help)
npm install -g uipro-cli
uipro init --ai claude

# emilkowalski/skills : finition des animations et micro-interactions (choisis emil-design-eng)
npx skills@latest add emilkowalski/skills

# Huashu Design : variantes de design et motion design
npx skills add alchaincyf/huashu-design
```

- **Huashu Design** : usage personnel gratuit, mais **l'usage commercial demande une autorisation de l'auteur**. Ne l'utilise pas pour un projet client sans m'en parler.
- **Skill UI** et **extract-design-system** extraient des tokens publics d'un site : ils servent d'inspiration, pas à cloner l'identité d'une marque.

### B. Sources de DESIGN.md supplémentaires

```powershell
# awesome-claude-design (VoltAgent) : 68 DESIGN.md par famille esthétique, à cloner HORS du projet
git clone https://github.com/VoltAgent/awesome-claude-design.git "$HOME\Documents\dev_perso\_outils\awesome-claude-design"
```

- **design-md-chrome** (bergside) : extension Chrome qui génère un `DESIGN.md` depuis un site. Je n'ai pas de commande vérifiée : cherche `bergside/design-md-chrome` sur GitHub et suis son README.
- **Google Stitch** (à l'origine du format `DESIGN.md`) et **Claude Design** sont des plateformes web : rien à installer. Les skills Stitch pour Claude Code existent : `npx plugins add google-labs-code/stitch-skills --scope project --target claude-code`.

### C. Figma (si le projet a des maquettes Figma)

```bash
# Option recommandée : plugin officiel (MCP + skills), à lancer dans Claude Code
/plugin install figma@claude-plugins-official

# Alternative : serveur MCP distant, à lancer dans le terminal
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Autorise ensuite l'accès à ton compte Figma quand Claude Code te le demande.

### D. Bibliothèques de composants et d'animation (à installer dans le projet, pas globalement)

À proposer seulement si la stack est React ou Next.js avec Tailwind.

```bash
# shadcn/ui : composants accessibles et personnalisables
npx shadcn@latest init
npx shadcn@latest add button card
npx shadcn@latest mcp init --client claude            # (à vérifier : npx shadcn@latest mcp --help)

# Aceternity UI : composants animés via le registre shadcn
npx shadcn@latest add "https://ui.aceternity.com/registry/spotlight.json"

# Magic UI : composants animés (à vérifier : consulte la doc pour le nom exact du composant)
npx shadcn@latest add "https://magicui.design/r/globe"

# Animation et 3D (à vérifier selon les versions)
npm install motion
npm install gsap
npm install three @react-three/fiber @react-three/drei
npm install @splinetool/react-spline @splinetool/runtime
```

- **21st.dev** : le même principe, mais il faut une clé API gratuite (à générer sur https://21st.dev/mcp) et le nombre d'installations gratuites par jour est limité. Dans PowerShell : `$env:API_KEY_21ST="ta_clé"` puis `npx shadcn@latest add "https://21st.dev/r/<auteur>/<composant>?api_key=$env:API_KEY_21ST"`. **Ne mets jamais la clé dans un fichier versionné.**
- **Vérifie la licence de chaque composant** avant de le garder dans un projet client.
- **Spline** (3D en ligne) est plus simple que Blender pour des scènes légères, mais dépend d'un service externe : choisis Blender ou Spline selon le besoin, pas les deux pour le même élément.

### E. Contrôle qualité

```bash
# Lighthouse : performance, accessibilité, SEO (aussi disponible dans les outils de développement de Chrome)
npx lighthouse http://localhost:3000 --view

# axe : détection des problèmes d'accessibilité (à vérifier)
npx @axe-core/cli http://localhost:3000
```

À lancer en phase de vérification, après les captures Playwright, puis à corriger avec `/impeccable audit` et `/impeccable polish`.

