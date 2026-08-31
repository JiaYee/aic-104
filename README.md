# aic-104 — Resume/CV Starter (Expo)

A beginner-friendly **Expo SDK 54** workshop template: a 4-tab personal Resume/CV app you clone, personalize, and run in **Expo Go**. Most content lives in one data file; styling uses **NativeWind** (Tailwind for React Native).

**Live repo:** [github.com/JiaYee/aic-104](https://github.com/JiaYee/aic-104)

---

## Documentation

| Doc | Audience |
|-----|----------|
| [**WORKSHOP.md**](./WORKSHOP.md) | Students & instructors — step-by-step hands-on activities |
| [**AGENTS.md**](./AGENTS.md) | AI coding agents — architecture, file map, constraints |

---

## Features

| Tab | What it shows |
|-----|----------------|
| **Profile** | Photo, name, title, bio, contact CTAs (Email, LinkedIn, WhatsApp) |
| **Skills** | Technical skills grouped by years of experience (horizontal bar chart) |
| **Languages** | Spoken languages with proficiency bars |
| **Work** | Career timeline (newest role first) |

---

## Tech stack

| Layer | Package |
|-------|---------|
| Framework | Expo SDK **54** |
| Language | TypeScript |
| UI | NativeWind v4 + shadcn-style components (`src/components/ui/`) |
| Navigation | React Navigation bottom tabs |
| Icons | lucide-react-native |

Expo docs: [docs.expo.dev/versions/v54.0.0](https://docs.expo.dev/versions/v54.0.0/)

---

## Quick start

**Requirements:** Node.js 18+, [Expo Go](https://expo.dev/go) on your phone (SDK 54), same Wi‑Fi as your computer.

```bash
git clone https://github.com/JiaYee/aic-104.git
cd aic-104
npm install
npm run start
```

Scan the QR code with **Expo Go**. Changes hot-reload as you edit files.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start Expo dev server (Expo Go) |
| `npm run android` | Start with Android emulator |
| `npm run ios` | Start with iOS simulator |
| `npm run web` | Start web preview |
| `npx tsc --noEmit` | Type-check (run after TypeScript edits) |

---

## Customize

> **Golden rule:** edit `src/data/resumeData.ts` first — name, skills, languages, and jobs all live there.

| Change | File(s) |
|--------|---------|
| Profile, skills, languages, work history | `src/data/resumeData.ts` |
| Profile photo | `assets/profile.jpg` |
| App-wide colors (cards, buttons, text) | `global.css` |
| Header + active tab color | `src/navigation/AppNavigator.tsx` (keep in sync with `global.css`) |
| Screen layout / labels | `src/screens/*.tsx` |

Full walkthrough with activities → [**WORKSHOP.md**](./WORKSHOP.md)

---

## Project structure

```
aic-104/
├── App.tsx                      # Entry — global.css, AppNavigator, PortalHost
├── global.css                   # Theme CSS variables
├── assets/
│   └── profile.jpg              # Default profile photo
├── src/
│   ├── data/
│   │   └── resumeData.ts        # ★ Primary data (profile, skills, languages, roles)
│   ├── navigation/
│   │   └── AppNavigator.tsx     # Bottom tabs + header/tab bar theme
│   ├── screens/
│   │   ├── ProfileScreen.tsx
│   │   ├── SkillsScreen.tsx
│   │   ├── LanguagesScreen.tsx
│   │   └── WorkExperienceScreen.tsx
│   ├── components/
│   │   ├── ExperienceBarChart.tsx
│   │   └── ui/                  # Button, Text, Card, Badge
│   └── types/
│       ├── resume.ts
│       └── navigation.ts
├── WORKSHOP.md                  # Student hands-on guide
└── AGENTS.md                    # AI agent instructions
```

---

## For AI agents

Read [**AGENTS.md**](./AGENTS.md) before making changes. Key constraints:

- Stay on **Expo SDK 54** — do not upgrade without explicit request
- Prefer editing `src/data/resumeData.ts` for content changes
- Use NativeWind `className`, not new StyleSheet blocks
- Sync colors in both `global.css` and `AppNavigator.tsx`
- Keep diffs small and workshop-friendly

---

## License

Private workshop template — see repository owner for usage.
