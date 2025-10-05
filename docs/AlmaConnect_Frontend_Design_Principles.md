## AlmaConnect Frontend Design Principles

- **Version**: 1.0
- **Date**: October 05, 2025
- **Scope**: Visual design guidance for AlmaConnect web frontend. No implementation work; design reference only.

---

## 1. Core Design Theme: "Modern University Elegance"

Alumni networking that feels professional like LinkedIn, yet warm and nostalgic like a campus reunion.

- **Tone**: Elegant · Minimal · Connected
- **Emotion**: Trust, pride, belonging

---

## 2. Color Palette Recommendations

| Element | Suggested Colors | Meaning |
|---|---|---|
| **Primary** | Deep Blue (`#1A365D`) or Royal Navy | Trust, professionalism |
| **Secondary** | Golden Amber (`#F6AD55`) or Copper | Achievement, alumni pride |
| **Accent** | Soft Teal (`#38B2AC`) or Green | Growth, connection |
| **Background** | Off-white (`#F9FAFB`) | Clean, neutral canvas |
| **Text** | Slate Gray or Charcoal | Readable and modern |

Tip: Use university brand colors subtly (logo, header accents, primary CTAs) to evoke identity without overwhelming the UI.

---

## 3. Typography

- **Headings**: `Poppins` or `Montserrat` (modern, confident)
- **Body**: `Inter` or `Open Sans` (clean, highly legible)
- **Highlights/Quotes**: `Playfair Display` (academic accent)

---

## 4. Layout Principles

- Card-based UI for alumni profiles, posts, events
- Generous white space; breathable layouts
- Consistent 12-column grid
- Sticky top navigation with clear sections: Feed, Jobs, Events, Mentorship
- Responsive for desktop and mobile

---

## 5. Component Design Ideas

### Profile Cards

- Rounded avatar; name; batch; company logo
- Hover reveal with a prominent "Connect" action

### Feed Posts

- Clean post container; like/comment/share icons
- Subtle shadows; rounded edges (e.g., `rounded-2xl`)

### Job Section

- Cards with company logo, role, location, "Apply" CTA
- Filter sidebar: Department, Year, Domain

### Events

- Modern calendar view; colored badges for upcoming events

### Chat / Message UI

- Minimalist chat bubbles (WhatsApp web style)
- Left sidebar: contacts; Right pane: active conversation

---

## 6. Light & Dark Mode Support

- Provide theme toggle
- Implement via Tailwind `dark:` variants; ensure contrast compliance

---

## 7. Emotion-Driven Visuals

- Hero banner: diverse alumni connecting
- Background motifs inspired by network graphs or campus outlines
- Subtle motion (Framer Motion) on hover/load

---

## 8. UI Libraries / Frameworks

- **Shadcn UI** + **Tailwind CSS** for polished, consistent UI
- **Framer Motion** for smooth transitions
- **Lucide Icons** or **HeroIcons** for consistent iconography
- **Recharts** or **Chart.js** for analytics

---

## 9. Accessibility & UX

- Large interactive targets; proper contrast ratios
- Keyboard navigation and ARIA labelling
- Smooth scroll and responsive menus

---

## 10. Example Design Inspiration

- LinkedIn (feed & networking)
- Notion / Medium (minimal, clean composition)
- Google Classroom (grouping & user cards)
- Dribbble alumni network concepts


