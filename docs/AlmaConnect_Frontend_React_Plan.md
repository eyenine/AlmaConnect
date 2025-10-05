## AlmaConnect React Frontend Execution Plan

- **Version**: 1.0
- **Date**: October 05, 2025
- **Scope**: End-to-end plan to deliver the AlmaConnect web frontend in React, aligned with the SRS and design principles. No backend dependency is assumed for UI scaffolding; use mock APIs where needed.

---

## 1) Objectives

- Deliver a production-ready, accessible, and responsive SPA that implements SRS core features
- Establish scalable architecture for future growth and micro-frontend potential
- Maintain high DX: fast builds, strict typing, testing, and automated checks

---

## 2) Technology Choices

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + shadcn/ui (Radix primitives) + class-variance-authority
- **State**: Redux Toolkit + RTK Query (API caching, normalization)
- **Forms & Validation**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Charts**: Recharts (admin analytics)
- **Dates**: date-fns
- **Testing**: Vitest + React Testing Library; Cypress for e2e

Rationale: Combines rapid development, strong type-safety, and performance with a proven ecosystem.

---

## 3) Architecture & Project Structure

Feature-oriented structure with clear boundaries and shared primitives.

```
src/
  app/                 # app providers, router, store, theme, error boundaries
  entities/            # domain models (user, post, job, event, group, chat)
  features/            # feature slices (auth, feed, search, notifications)
  pages/               # route-level containers
  widgets/             # composite UI (navbars, sidebars, dashboards)
  components/          # shared UI components (buttons, inputs, cards)
  services/            # api clients, socket manager, analytics
  store/               # redux store, slices, rtk query apis
  lib/                 # utilities, hooks, constants, types
  assets/              # static assets
  styles/              # globals, tailwind
```

Guidelines:
- Keep business logic in features/entities; keep pages thin
- Colocate tests with code (`*.test.tsx`)
- Use absolute imports with path aliases

---

## 4) Routing Map & Access Control

Public:
- `/` (marketing/landing or redirect to feed if authed)
- `/login`, `/register`, `/verify`, `/reset-password`
- `/news`

Authenticated (guarded):
- `/feed`
- `/profile/:id`, `/profile/edit`
- `/jobs`, `/jobs/:id`
- `/events`, `/events/:id`
- `/groups`, `/groups/:id`
- `/mentorship`
- `/chat`
- `/search`
- `/admin`

Implement route guards with an `AuthGate` component that checks auth state and redirects.

---

## 5) State Management & Data Layer

- Redux Toolkit slices: `auth`, `ui`, `notifications`
- RTK Query API slices: `authApi`, `userApi`, `postsApi`, `jobsApi`, `eventsApi`, `groupsApi`, `chatApi`, `searchApi`, `adminApi`
- Base query handles token injection and refresh; unified error handling and toasts

---

## 6) UI System & Components

- Theme tokens per design doc (colors, spacing, radii); dark mode with `class` strategy
- Core components: Button, Input, Textarea, Select, Avatar, Badge, Card, Modal/Dialog, Drawer, Tabs, Tooltip, Dropdown, Breadcrumb, Pagination, Skeleton, Toast/Alert
- Layout primitives: AppShell (navbar + sidebar), PageHeader, ContentArea, EmptyState, ErrorState

---

## 7) Key Feature Scopes (UI)

1. Auth: Login, Register, Verify Email, Reset Password; form validation; error feedback
2. Shell: Navbar (global search, notifications, avatar menu), Sidebar (sections), Dashboard shell
3. Feed: Post composer (text, attachments), feed list, reactions, comments, shares, mentions (@)
4. Profile: Public profile (bio, batch, company, links), edit profile forms
5. Jobs: Listings grid/list, filters (domain, company, location, experience), job details, apply CTA
6. Events: Calendar/list views, event details, RSVP states
7. Groups: Department/batch groups with posts and announcements
8. Chat: DM/group chat UI, conversations list, typing/presence indicators (via WebSocket)
9. Search: People/companies/skills/locations filters; results list and detail
10. Admin: Moderation queues, analytics charts (active users, events, jobs)
11. Notifications: In-app bell, toasts, inbox page

---

## 8) Real-time Strategy

- Socket.io client with connection manager (auth handshake, auto-reconnect)
- Channels: `presence`, `typing`, `message:new`, `notification:new`
- Optimistic UI for messages and reactions

---

## 9) Forms & Validation

- React Hook Form + Zod schemas per form
- Reusable `FormField` wrappers integrated with shadcn/ui
- File uploads: drag-and-drop component with size/type validation (stub)

---

## 10) Testing & Quality

- Unit: Vitest + RTL for components, hooks, slices
- Integration: component flows (auth, post composer)
- e2e: Cypress for critical paths (auth, feed post, search, RSVP)
- Linting/formatting: ESLint, Prettier, Stylelint (if needed)

---

## 11) Performance & Accessibility

- Performance budgets: Lighthouse ≥ 90; initial JS < 250KB gz
- Code-splitting per route; lazy-load feature chunks
- Image optimization; prefetch critical routes
- A11y: WCAG 2.1 AA, keyboard navigation, focus management, ARIA

---

## 12) Telemetry & Analytics

- Pluggable analytics adapter (GA4 or PostHog) with consent banner
- Track: page views, search, post interactions, RSVP, job apply clicks

---

## 13) Configuration & Environments

- `.env` variables: `VITE_API_BASE_URL`, `VITE_SOCKET_URL`, `VITE_ANALYTICS_KEY`
- Build-time injection via Vite; runtime config shim if needed

---

## 14) Security Considerations

- XSS-safe rendering, sanitize rich text
- CSRF not applicable for pure token APIs; ensure `SameSite` for cookies if used
- CSP recommendations and dependency audit in CI

---

## 15) Milestones & Timeline (Frontend)

Milestone 0 – Foundation (1 week)
- FE-01 Scaffold React (Vite + TS), Tailwind, shadcn/ui
- FE-02 Theme tokens, light/dark mode, design tokens

Milestone 1 – Auth & Shell (1–2 weeks)
- FE-03 Auth pages (login/register/verify/reset) with RHF+Zod
- FE-04 Core layout (navbar, sidebar, dashboard shell)

Milestone 2 – Feed & Profile (2 weeks)
- FE-05 Community feed UI + post composer
- FE-06 Profile pages + edit forms

Milestone 3 – Jobs & Events (2 weeks)
- FE-07 Jobs listing, filters, details
- FE-08 Events calendar/list + RSVP

Milestone 4 – Groups & Chat (3 weeks)
- FE-09 Groups pages and group feed
- FE-10 Chat UI with WebSocket integration

Milestone 5 – Search & Admin (2 weeks)
- FE-11 Search page with filters and results
- FE-12 Admin dashboard UI with analytics

Milestone 6 – Notifications, QA & Hardening (1–2 weeks)
- FE-13 Notifications UI + toasts
- FE-14 Accessibility and responsive QA
- FE-15 Testing foundation (Vitest/RTL)
- FE-16 e2e flows (Cypress)
- FE-17 Performance and a11y budgets validation

---

## 16) Definition of Done (per feature)

- Meets acceptance criteria and design specs
- Unit tests added; e2e updated for critical path
- a11y checks pass; responsive verified (sm/md/lg/xl)
- No major lint issues; types error-free
- Docs updated (README or feature docs)

---

## 17) Risks & Mitigations

- Backend API volatility → Use MSW/mocks; isolate API layer via RTK Query
- Scope creep in UI features → Strict milestone scoping; accept follow-up tickets
- Performance regressions → Budgets in CI; analyze bundles regularly


