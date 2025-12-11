# Nick Heymann - Projekt Kontext für Claude

> **Quick Start:** Für schnellen Kontext siehe `CLAUDE.md`

## Philosophie & Prinzipien

- **Lean & Smart**: Minimale Kosten, maximale Automatisierung
- **Open Source First**: Nur wo absolut notwendig paid Services
- **Self-Hosted**: Alles auf eigenem Hetzner Server wenn möglich
- **Iterativ**: Ein Use Case nach dem anderen, nicht alles auf einmal
- **Flexibel**: Docker-basiert, leicht austauschbar, kein Lock-in

## Infrastruktur

### Hetzner Server
- **IP:** 91.99.177.238
- **Typ:** CX33 (4 vCPU, 8GB RAM, 80GB SSD)
- **Kosten:** ~6.53€/Monat
- **OS:** Ubuntu mit Docker

### Aktive Services
| Service | Status | Zweck |
|---------|--------|-------|
| Traefik v2.11 | ✅ Läuft | Reverse Proxy, Auto-SSL |
| PostgreSQL 16 | ✅ Läuft | Hauptdatenbank |
| n8n | ✅ Läuft | Workflow Automation |

### Geplante Services (Self-Hosted)
| Service | Zweck | Priorität |
|---------|-------|-----------|
| Supabase | Auth, API, Realtime, Storage | Hoch |
| Minio | S3-kompatibler Video/Bild Storage | Mittel |
| Umami/Plausible | Privacy-freundliche Analytics | Niedrig |

## Externe Services (Minimal)

| Service | Zweck | Kosten |
|---------|-------|--------|
| Vercel | Website Hosting (nickheymann.de) | Kostenlos |
| GitHub | Code Repository | Kostenlos |
| n8n Cloud | Backup/Testing (Free Tier) | Kostenlos |

## Domains & Projekte

| Domain | Projekt | Hosting | Status |
|--------|---------|---------|--------|
| nickheymann.de | Portfolio Website | Vercel | ✅ Live |
| kathrin-stahl.de | Coaching Website | Hetzner (geplant) | 🔄 TODO |
| datebuch.de | Dating App | Hetzner (geplant) | 🔄 TODO |
| mysecondbrain.de | AI/Productivity Tool | Hetzner (geplant) | 🔄 TODO |
| [kunden-domains] | Kunden-Websites | Hetzner | 🔄 Später |

### Empfohlene Subdomain-Struktur
- `app.nickheymann.de` → Supabase Dashboard / Member Area
- `n8n.nickheymann.de` → n8n Workflows
- `api.nickheymann.de` → Supabase API Endpoint
- `storage.nickheymann.de` → Minio/Storage (optional)

### Multi-Tenant Architektur
Ein Server, viele Projekte:
- Jedes Projekt = eigener Docker Container
- Traefik routet nach Domain
- Shared Services: PostgreSQL, Supabase Auth (optional)
- Isoliert wo nötig: Separate DBs pro Projekt möglich

## Business Kontext

### Wer ist Nick?
- Videograf & Marketing-Experte aus Hamburg
- Portfolio-Website: nickheymann.de

### Zielgruppe
- [ ] TODO: Noch zu definieren (B2B? Kreative? Coaches?)

### Angebote
- [ ] TODO: Dienstleistungen? Kurse? Beides?

### Automatisierungs-Ziele
- [ ] TODO: Welche Prozesse sollen automatisiert werden?

## Technische Entscheidungen

### Warum Supabase statt nur PostgreSQL?
Supabase = PostgreSQL + diese Features out-of-the-box:
- Auth (Login, OAuth, Magic Links)
- Auto-generierte REST & GraphQL API
- Realtime Subscriptions
- Storage mit Policies
- Dashboard zur Verwaltung

Self-hosted Supabase nutzt die gleiche PostgreSQL, kostet aber nichts extra.

### Warum kein separates Auth-System?
Supabase Auth ist battle-tested, spart Entwicklungszeit, und ist trotzdem self-hosted.

### Video-Hosting Strategie
- Portfolio-Videos: Direkt auf Server oder Minio
- Kurs-Videos (falls später): Signed URLs + Watermarks für Soft-Protection
- Kein echtes DRM nötig bei Trust-basiertem Kundenmodell

## Offene Fragen

1. Welche Domain(s) sollen auf den Hetzner Server zeigen?
2. Was ist der erste konkrete Automatisierungs-Use-Case?
3. Wer sind die Zielkunden genau?
4. Welche Produkte/Services werden angeboten?

## Changelog

- 2025-12-08: Server aufgesetzt (Traefik, PostgreSQL, n8n)
- 2025-12-08: Kontext-Dokument erstellt
