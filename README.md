
<div align="center">
	<h1>Pop!_OS Clone</h1>
	<p>Lightweight front-end recreation / inspired landing page.</p>
	<p><strong>Live Demo:</strong> <a href="https://pop-os-clone-tau.vercel.app/" target="_blank">https://pop-os-clone-tau.vercel.app/</a></p>
</div>

## Tech Stack
React + TypeScript + Vite + Tailwind CSS + shadcn/ui (Radix primitives + utility components).

## Features
- Hero + product style sections
- Pop!_OS themed marketing layout
- Responsive design
- Simple componentized structure (see `src/components` & `src/pages`)

## Quick Start
```sh
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev
```
Visit: http://localhost:5173

## Build
```sh
npm run build
```
Outputs to `dist/` (static assets, deploy anywhere).

## Customize
- Replace images under `src/assets/` or add new.
- Adjust theme in `index.css` + Tailwind config.
- Edit sections in `src/components/Features.tsx`, `Hero.tsx`, `pages/`.

## Roadmap / Ideas
- Add dark mode toggle
- Add CI (build + lint) workflow
- Accessibility audit & improvements
- Real data / markdown content sourcing

## License
Currently unlicensed (all rights reserved). Add an MIT or other LICENSE if you intend to open source.

---
Maintained by Adithya.
