# Relayboard — "Ship what customers actually asked for."

Relayboard is a complete, production-grade, highly polished B2B SaaS marketing platform and interactive sandbox application designed specifically for mid-market product managers, engineering leads, and software squad operators.

This repository represents a funded-startup tier design and codebase—with pristine responsive layouts, custom interactive components, state-managed pricing grids, and long-scroll case study tables.

## 🛠️ Technology Stack
- **Vite 6** + **React 19** + **TypeScript**
- **React Router Dom 7** for smooth client-side SPA routing
- **Tailwind CSS v4** for clean utility classes & display variable designs
- **Lucide React** for premium, lightweight SVG icon structures
- **Motion (framer-motion)** for smooth entrance transitions & micro-interactions

---

## 🚀 Local Development Guide

### 1. Prerequisites
Ensure you have **Node.js 18.x** or higher installed on your environment, along with a package manager such as **npm** or **yarn**.

### 2. Installations
Boot up terminal sessions in this workspace root directory and issue:
```bash
npm install
```

### 3. Run Development Server
Spins up standard local dev proxy on port 3000:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 4. Build Bundles (Production Compiles)
Compiles React templates and outputs lightweight, optimized production static assets under `/dist` directory:
```bash
npm run build
```

### 5. Preview Locally
Launches local node processes serving build outcomes from `/dist` on port 3000 to verify structural integrity:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

The workspace includes a complete `vercel.json` configuration specifying clean URL routing redirects that correctly fall back to `index.html`. This ensures sub-page routes (such as `/pricing`, `/changelog`, or `/careers`) handle direct scrolling entries perfectly without throwing 404 responses.

To deploy via Vercel CLI:
1. Initialize the project: `vercel`
2. Ship compilation assets: `vercel --prod`

To deploy via GitHub:
1. Push this repository workspace to a custom GitHub account repository.
2. Link the repository inside your Vercel Dashboard.
3. Keep default build presets active (`Vite` template is automatically caught). Vercel handles continuous deployments on main muscle branches.

---

## 🔒 Security Commitments
Relayboard products adhere strictly to SOC2 regulatory guidelines. No personal metadata or database keys are publicly disclosed or outputted to client client consoles.
