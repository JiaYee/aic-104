# Agent Instructions — aic-104 Resume/CV Starter

> **Audience:** AI coding agents (Cursor, Claude Code, Copilot, etc.)  
> **Human workshop guide:** see [`WORKSHOP.md`](./WORKSHOP.md)

## Project purpose

Beginner-friendly **Expo SDK 54** workshop template: a 4-tab personal Resume/CV app. Students clone, edit data/colors/photo, and run in **Expo Go**. Keep changes **simple**, **heavily commented**, and **modular**.

**Do not** over-engineer. Prefer editing existing files over adding dependencies.

---

## Stack (pinned — do not upgrade without explicit request)

| Layer | Version / package |
|-------|-------------------|
| Expo SDK | **54** (`expo@^54.0.0`) |
| React Native | 0.81.5 |
| React | 19.1.0 |
| Language | TypeScript (`.tsx` / `.ts` only — no new `.js` files) |
| Styling | **NativeWind v4** + Tailwind CSS 3 (`global.css`, `className`) |
| UI primitives | shadcn-style via `src/components/ui/*` (CVA + `@rn-primitives/slot`) |
| Navigation | `@react-navigation/bottom-tabs` (4 tabs) |
| Icons | `lucide-react-native` |

**Expo docs (required before writing Expo code):** https://docs.expo.dev/versions/v54.0.0/

---

## Commands

```bash
npm install          # after clone
npm run start        # Expo Go dev server
npx tsc --noEmit     # type-check (run after edits)
```

---

## Architecture

```
App.tsx                    # imports global.css, mounts AppNavigator + PortalHost
src/navigation/
  AppNavigator.tsx         # bottom tabs + header/tab bar theme colors
src/screens/
  ProfileScreen.tsx        # photo, bio, contact CTAs (Email / LinkedIn / WhatsApp)
  SkillsScreen.tsx         # wraps ExperienceBarChart
  LanguagesScreen.tsx      # language rows + proficiency bars
  WorkExperienceScreen.tsx # vertical timeline of roles
src/data/
  resumeData.ts              # ★ PRIMARY DATA — profile, skills, languages, roles
src/types/
  resume.ts                  # Profile, TechnicalSkill, Language, Role interfaces
  navigation.ts              # RootTabParamList
src/components/
  ExperienceBarChart.tsx     # grouped horizontal skill bars by years tier
  ui/                        # Button, Text, Card, Badge (shadcn-style)
assets/
  profile.jpg                # default profile photo (require() in ProfileScreen)
global.css                   # CSS variables for theme (--primary, --accent, …)
tailwind.config.js           # maps CSS vars to Tailwind tokens
```

---

## Where to change what (agent routing)

| User wants to… | Edit |
|----------------|------|
| Name, title, bio, email, LinkedIn, WhatsApp | `src/data/resumeData.ts` → `profile` |
| Technical skills + years | `src/data/resumeData.ts` → `technicalSkills` |
| Spoken languages + proficiency | `src/data/resumeData.ts` → `languages` |
| Jobs / education timeline | `src/data/resumeData.ts` → `roles` |
| Profile photo | Replace `assets/profile.jpg` or update `require()` in `ProfileScreen.tsx` |
| App-wide colors (screens, buttons, cards) | `global.css` → `:root` CSS variables |
| Header + active tab color | `src/navigation/AppNavigator.tsx` → `navTheme` + `screenOptions` (must match `global.css` primary) |
| Contact button labels, "Get in touch" | `src/screens/ProfileScreen.tsx` |
| Tab / header titles | `src/navigation/AppNavigator.tsx` |
| Skill tier labels ("Core Stack") | `src/components/ExperienceBarChart.tsx` |
| Screen intro copy | respective `src/screens/*.tsx` |

**Default rule:** content changes → `resumeData.ts` first. Only touch screens for layout/labels.

---

## Data schemas (`src/types/resume.ts`)

```typescript
Profile       { name, title, bio, email, linkedin, phone }
TechnicalSkill { name, years }           // years drives bar width (max scale 11)
Language      { name, level, proficiency, initial }
                // level: 'Native' | 'Professional' | 'Conversational' | 'Basic'
                // proficiency: 0–100
Role          { title, company, location, period, highlights: string[] }
```

`roles` array order = display order (newest first).  
`technicalSkills` with same `years` group into one tier in the bar chart.

---

## Styling rules

1. **Use NativeWind `className`** on `View`, `Text`, `Pressable`, `Image` — not `StyleSheet.create` for new code.
2. **Theme tokens:** `bg-primary`, `text-muted-foreground`, `border-border`, etc. — defined in `global.css` + `tailwind.config.js`.
3. **When changing `--primary` in `global.css`**, also update `hsl(...)` values in `AppNavigator.tsx` (`navTheme.colors.primary`, `headerStyle`, `tabBarActiveTintColor`).
4. **Import alias:** `@/` → `src/` (e.g. `@/data/resumeData`).
5. **UI components:** extend `src/components/ui/*`; use `cn()` from `@/lib/utils`.

---

## Navigation

`RootTabParamList`: `Profile` | `Skills` | `Languages` | `Work`

Do not add stack navigators unless requested. Tab icons: `UserRound`, `Code2`, `Languages`, `Briefcase`.

---

## Constraints & anti-patterns

| Do | Don't |
|----|-------|
| Keep SDK **54** | Upgrade to SDK 55+ without user request |
| Edit `resumeData.ts` for content | Hard-code student-specific strings in multiple files |
| Use `expo install <pkg>` for native deps | Add `expo-speech` / TTS (unreliable in Expo Go) |
| Minimal focused diffs | Refactor unrelated code |
| Comment non-obvious logic | Add abstractions for one-off helpers |
| Run `npx tsc --noEmit` after TS changes | Leave type errors |
| Use `./global.css` import in `App.tsx` | Use `../global.css` (wrong path) |

**Required native deps already installed:** `react-native-reanimated`, `react-native-worklets` (babel plugin in `babel.config.js`).

---

## Config files (do not break)

| File | Role |
|------|------|
| `babel.config.js` | `nativewind/babel`, `react-native-reanimated/plugin` (plugin must be last) |
| `metro.config.js` | `withNativeWind(config, { input: './global.css' })` |
| `index.ts` | Expo entry — `registerRootComponent(App)` |
| `components.json` | shadcn/reusables aliases — reference only |

---

## Contact link formats

```typescript
email:    'user@example.com'           // ProfileScreen → mailto:
linkedin: 'linkedin.com/in/username'   // ProfileScreen → https:// prefix
phone:    'wa.me/60123456789'          // ProfileScreen → https:// prefix, no spaces
```

---

## Verification checklist (after making changes)

- [ ] `npx tsc --noEmit` passes
- [ ] No new `.js` source files
- [ ] Content edits prefer `resumeData.ts`
- [ ] Color changes update both `global.css` and `AppNavigator.tsx`
- [ ] App still runs with `npm run start` on Expo Go SDK 54

---

## Related docs

- [`WORKSHOP.md`](./WORKSHOP.md) — step-by-step student activities
- [Expo SDK 54 docs](https://docs.expo.dev/versions/v54.0.0/)
- [NativeWind v4](https://www.nativewind.dev/)
- [React Native Reusables / shadcn RN](https://reactnativereusables.com/)
