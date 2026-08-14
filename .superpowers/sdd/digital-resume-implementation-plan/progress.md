# SDD ledger — plan: docs/superpowers/plans/2026-08-14-digital-resume-implementation-plan.md

## Pre-flight scan results

| Task Pair | Issue | Ruling |
|-----------|-------|--------|
| Task 1 | Plan text says `npx shadcn-ui@latest init` but also says "no — just install tailwind" | Remove shadcn-ui line. Install only tailwindcss postcss autoprefixer. Cost if wrong: unnecessary dependency bloat. |
| Task 4 | ThemeToggle imports `../ui/icons` but icons.tsx not yet created in Step 1 | Create icons.tsx BEFORE theme-toggle in Task 4. Cost if wrong: build fails. |
| Task 5 | Hero uses `next/image` import but spec uses plain `<img>` | Use plain `<img>` not next/image. Cost if wrong: unnecessary abstraction. |
| Task 7 | ProjectCard uses `next/image` import but spec uses plain `<img>` | Use plain `<img>` not next/image. Cost if wrong: unnecessary abstraction. |

## BASE commit: 851cf3fa

## Task 1: complete (commits 851cf3fa..TBD, scaffold working)

### Notes
- Fixed module format conflict: removed `"type": "module"` from package.json (Next.js 16 Turbopack expects default module resolution)
- Fixed swcMinify warning: removed `swcMinify: true` from next.config.js (unsupported in Next.js 16)
- Fixed hsla() syntax → rgba() in both globals.css and tailwind.config.js boxShadow
- Fixed duplicate `card` key in tailwind.config.js borderRadius
- Server running on port 3001 (port 3000 occupied by old process)
- Fonts loading: Geist, Geist Mono, Source Serif 4 confirmed in HTML output