# Nick Heymann Portfolio

> Globale Coding-Regeln & Self-Review Prompt siehe: `~/CLAUDE.md`

## Stack
Next.js 15 | TypeScript | Tailwind CSS | Vercel

## Project Structure
```
src/
├── app/           # Pages (page.tsx = Home)
├── components/    # React components
│   └── icons/     # SVG icon components
├── config/        # Site config (site.ts)
├── data/          # Static data (projects, services)
├── types/         # TypeScript interfaces
└── lib/           # Utilities (if needed)
```

## Quick Reference

| Ändern... | Datei |
|-----------|-------|
| Name, Email, Social | `src/config/site.ts` |
| Nav/Footer Links | `src/config/site.ts` |
| Farben | `src/app/globals.css` |
| Projekte | `src/data/projects.ts` |
| Services | `src/data/services.ts` |
| Neues Icon | `src/components/icons/index.tsx` |
| Types | `src/types/index.ts` |

## Commands
```bash
npm run dev     # localhost:3000
npm run build   # Production build
```

## Infrastructure & Integration

- **Frontend**: Vercel (nickheymann.de)
- **Backend**: Hetzner CX32 (91.99.177.238)
  - Traefik v2.11 (Reverse Proxy)
  - PostgreSQL 16
  - n8n (Automation/Workflows)
  - Supabase Self-Hosted (Datenbank, Auth, Storage)
- **Domain**: Migration Goneo → Cloudflare (in progress)
- **Deployment**:
  - Frontend: Automatisch via Vercel bei Push auf `main`
  - Backend-Services: Docker/Compose auf Hetzner
- **Secrets-Management**:
  - Vercel Environment Variables für Frontend
  - `.env`-Dateien auf Hetzner (nicht im Repo)
  - Dieses Repo enthält nur `.env.example` mit Platzhaltern

## CSS Variables
Definiert in `globals.css`:
- `--background` (#0a0a0a)
- `--foreground` (#fafafa)
- `--muted` (#a1a1aa)
- `--border` (#27272a)
- `--card` (#18181b)
- `--accent` (#3b82f6)

## Available Icons
`src/components/icons/index.tsx`:
- EmailIcon, InstagramIcon, LocationIcon
- PlayIcon, ArrowRightIcon, ArrowDownIcon
- MenuIcon, CloseIcon, CheckIcon

## Deployment-Standards

### Frontend (Vercel)
- Automatisches Deploy bei Push auf `main`
- Preview Deployments für PRs
- Environment Variables in Vercel Dashboard

### Backend-Services (Hetzner Docker)
Falls Backend benötigt:
```
/opt/nick-portfolio/
├── docker-compose.yml
├── .env
└── services/
```

### CI/CD
- Frontend: Vercel (automatisch)
- Backend: GitHub Actions → Docker → Hetzner

## Safety-Regeln für Git-Operationen durch LLM

- Arbeite NIEMALS direkt auf dem Branch `main`, sondern immer auf Feature-/Fix-Branches (z.B. `feature/...`, `fix/...`, `refactor/...`).
- Führe KEIN `git reset --hard`, KEIN `git push --force` und KEIN Löschen von Branches oder Tags aus, außer es wird explizit und eindeutig vom Nutzer angeordnet.
- Vor größeren Refactorings oder riskanten Änderungen:
  - Erstelle einen neuen Branch (z.B. `refactor/<kurze-beschreibung>`).
  - Setze einen Snapshot-Tag (z.B. `snapshot-YYYYMMDD-HHMM`) auf den letzten stabilen Commit.
  - Pushe den aktuellen Stand des Branches auf `origin`.
- Beschreibe im Commit-Text klar, was geändert wurde (z.B. „refactor: split monolithic file into modules"), damit der Verlauf nachvollziehbar bleibt.
