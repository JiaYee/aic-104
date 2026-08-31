# Mobile App Dev Workshop — Hands-On Activities

**Template repo:** [github.com/JiaYee/aic-104](https://github.com/JiaYee/aic-104)  
**Stack:** Expo SDK 54 · React Native · TypeScript · NativeWind (Tailwind) · React Navigation

This guide walks beginners through **customizing their own Resume/CV app** by editing **data**, **text**, **photos**, and **colors**. No advanced coding required for the core activities — most changes happen in one data file and a few styling files.

---

## Before You Start

### 1. Get the project running

```bash
git clone https://github.com/JiaYee/aic-104.git
cd aic-104
npm install
npm run start
```

Scan the QR code with **Expo Go** on your phone (same Wi‑Fi as your computer).

### 2. Know the four tabs

| Tab | What it shows |
|-----|----------------|
| **Profile** | Photo, name, job title, bio, contact buttons |
| **Skills** | Technical skills grouped by years of experience (bar chart) |
| **Languages** | Spoken languages with proficiency bars |
| **Work** | Career timeline (newest job at top) |

### 3. The golden rule

> **Most content lives in one file:** `src/data/resumeData.ts`  
> Edit that file first. Save. The app hot-reloads automatically.

### 4. Project map (files you will touch)

```
aic-104/
├── assets/
│   └── profile.jpg          ← your photo
├── global.css               ← app-wide colors (theme)
├── src/
│   ├── data/
│   │   └── resumeData.ts    ← ★ main data file (name, skills, jobs, languages)
│   ├── navigation/
│   │   └── AppNavigator.tsx ← header & tab bar colors, screen titles
│   └── screens/
│       ├── ProfileScreen.tsx    ← layout + "Get in touch" label + button labels
│       ├── SkillsScreen.tsx     ← section heading text
│       ├── LanguagesScreen.tsx  ← intro text
│       └── WorkExperienceScreen.tsx ← intro text
```

---

## Activity 1 — Make It Yours: Profile Data (15 min)

**Goal:** Change the name, title, bio, and contact links on the **Profile** tab.

**File:** `src/data/resumeData.ts`

Find the `profile` object near the top:

```typescript
export const profile = {
  name: 'Tai Jia Yee',
  title: 'Lead AI Engineer',
  bio:
    'Lead AI Engineer with 11 years of experience...',
  email: 'taijiayee@gmail.com',
  linkedin: 'linkedin.com/in/jiayeetai',
  phone: 'wa.me/60107789729',
};
```

### Steps

1. Open `src/data/resumeData.ts`.
2. Replace `name` with your full name.
3. Replace `title` with your role (e.g. `'Software Engineering Student'`).
4. Rewrite `bio` in 2–3 sentences about you.
5. Set `email` to your real email.
6. Set `linkedin` to your LinkedIn path only (no `https://`) — e.g. `'linkedin.com/in/yourname'`.
7. Set `phone` to your WhatsApp link — e.g. `'wa.me/60123456789'` (country code, no spaces).

### Check your work

- [ ] Profile tab shows your name and title
- [ ] Bio text matches what you typed
- [ ] **Email** button opens your mail app
- [ ] **LinkedIn** button opens your profile in the browser
- [ ] **WhatsApp** button opens a chat to your number

### Tips

- Keep quotes around strings: `'Your Name'`
- Use `+` at the end of a line to split long bio text across lines (see existing code)
- If the app does not update, shake the phone → **Reload**, or press `r` in the terminal

---

## Activity 2 — Change Screen Text & Labels (10 min)

**Goal:** Customize visible labels and headings (not just data from the resume).

Some text is **hard-coded in screen files**. Data from `resumeData.ts` is **dynamic**.

| Text you see | Where it comes from |
|--------------|---------------------|
| Your name, bio, title | `resumeData.ts` → `profile` |
| "Get in touch" | `ProfileScreen.tsx` |
| Button labels "Email", "LinkedIn", "WhatsApp" | `ProfileScreen.tsx` |
| Header "My Resume" | `AppNavigator.tsx` |
| Tab labels "Profile", "Skills", etc. | `AppNavigator.tsx` |

### 2a — Profile section label

**File:** `src/screens/ProfileScreen.tsx`

Find:

```tsx
<Text variant="small" className="mb-3 text-center uppercase tracking-wider text-muted-foreground">
  Get in touch
</Text>
```

Change to something personal, e.g. `'Contact Me'` or `'Let\'s Connect'`.

### 2b — Contact button labels (optional)

In the same file, find the three `<Button>` components:

```tsx
<Button label="Email" ... />
<Button label="LinkedIn" ... />
<Button label="WhatsApp" ... />
```

Try shorter labels if needed on small screens: `"Mail"`, `"LinkedIn"`, `"Chat"`.

### 2c — App header title

**File:** `src/navigation/AppNavigator.tsx`

Find:

```tsx
options={{
  title: 'My Resume',
  tabBarLabel: 'Profile',
```

Change `'My Resume'` to `'Your Name CV'` or `'Portfolio'`.

### 2d — Skills & Work intro sentences

**File:** `src/screens/SkillsScreen.tsx`

```tsx
<Text variant="muted" className="mb-6">
  Technical stack grouped by years of hands-on experience.
</Text>
```

Rewrite in your own words.

**File:** `src/screens/WorkExperienceScreen.tsx` — edit the intro `<Text>` the same way.

### Check your work

- [ ] At least two custom strings appear in the app
- [ ] No red error screen after saving

---

## Activity 3 — Replace Your Profile Photo (10 min)

**Goal:** Use your own headshot on the Profile tab.

### Option A — Replace the file (easiest)

1. Pick a square-ish photo (JPEG or PNG).
2. Copy it into the project folder: `assets/profile.jpg` (overwrite the existing file).
3. Keep the filename **`profile.jpg`** so you do not need to change code.

### Option B — Use a different filename

1. Add your image to `assets/`, e.g. `assets/my-photo.jpg`.
2. Open `src/screens/ProfileScreen.tsx`.
3. Update the `require` path:

```tsx
source={require('../../assets/my-photo.jpg')}
```

Also update the accessibility label:

```tsx
accessibilityLabel="Profile photo of Your Name"
```

### Photo tips for beginners

- Square photos look best in the circular frame
- File size under 1 MB loads faster on Expo Go
- If the image does not show, check the path and filename spelling (case-sensitive on some systems)

### Check your work

- [ ] Your photo appears on the Profile tab
- [ ] Image is cropped in a circle with a border

---

## Activity 4 — Theme Colors: Rebrand the App (20 min)

**Goal:** Change the app’s color scheme (background, primary blue, accents, headers).

Colors are controlled in two places that should **match**:

1. **`global.css`** — NativeWind / Tailwind theme (screens, buttons, cards)
2. **`src/navigation/AppNavigator.tsx`** — navigation header and tab bar

### 4a — Understand CSS variables

**File:** `global.css`

```css
:root {
  --background: 210 40% 98%;      /* page background — light gray-blue */
  --foreground: 222 47% 11%;      /* main text — dark navy */
  --primary: 221 83% 53%;         /* main brand color — blue */
  --accent: 199 89% 48%;          /* secondary highlight — cyan */
  --muted-foreground: 215 16% 47%; /* subtitle text — gray */
  --border: 214 32% 91%;          /* borders */
}
```

Values are **HSL without** `hsl()` — just three numbers: `Hue Saturation% Lightness%`.

### 4b — Try a preset theme

**Purple portfolio**

In `global.css`, change:

```css
--primary: 262 83% 58%;
--accent: 280 70% 55%;
```

In `AppNavigator.tsx`, update matching lines:

```typescript
primary: 'hsl(262 83% 58%)',
// ...
headerStyle: { backgroundColor: 'hsl(262 83% 58%)' },
tabBarActiveTintColor: 'hsl(262 83% 58%)',
```

**Green / teal professional**

```css
--primary: 160 84% 39%;
--accent: 174 72% 40%;
```

Use the same hue numbers in `AppNavigator.tsx` with `hsl(...)` wrappers.

### 4c — Use a color picker (recommended)

1. Go to [https://uicolors.app/create](https://uicolors.app/create) or any HSL color tool.
2. Pick a primary brand color.
3. Convert to HSL format: `H S% L%` (e.g. `221 83% 53%`).
4. Paste into `--primary` in `global.css`.
5. Copy the same color into `AppNavigator.tsx` as `hsl(H S% L%)`.

### What each color affects

| Variable | Used for |
|----------|----------|
| `--primary` | Header bar, active tab, Email button, skill bars (9yr tier) |
| `--accent` | Links, 2yr skill bars, language bars (Professional) |
| `--background` | Screen background |
| `--foreground` | Headings and body text |
| `--muted-foreground` | Subtitles, helper text |
| `--border` | Card outlines, dividers |

### Check your work

- [ ] Header color matches your brand
- [ ] Active tab icon uses your primary color
- [ ] Skills bars still readable on light background

---

## Activity 5 — Technical Skills (15 min)

**Goal:** List **your** skills and years of experience on the **Skills** tab.

**File:** `src/data/resumeData.ts` → `technicalSkills` array

Each skill is one object:

```typescript
{ name: 'React Native', years: 2 },
```

- **`name`** — skill name shown on the bar chart
- **`years`** — number of years (bar length; max scale is 11 years in the chart)

### Steps

1. Delete skills that are not yours (or leave as examples).
2. Add your own, e.g. `{ name: 'Figma', years: 1 }`.
3. Group by experience: skills with the same `years` value appear under one tier (**Core Stack** for 9+, **Modern Stack** for lower years).

Example starter set for a student:

```typescript
export const technicalSkills: TechnicalSkill[] = [
  { name: 'HTML & CSS', years: 2 },
  { name: 'JavaScript', years: 1 },
  { name: 'React', years: 1 },
  { name: 'Git', years: 1 },
  { name: 'Python', years: 3 },
];
```

### Optional — rename tier titles

**File:** `src/components/ExperienceBarChart.tsx`

Find:

```typescript
title: isCore ? 'Core Stack' : 'Modern Stack',
subtitle: isCore ? 'Long-term expertise' : 'Recent technologies',
```

Change to labels that fit your data, e.g. `'Expert'` / `'Learning'`.

### Check your work

- [ ] Skills tab lists only your technologies
- [ ] Bar lengths look reasonable for the years you entered

---

## Activity 6 — Languages (10 min)

**Goal:** Show languages you speak on the **Languages** tab.

**File:** `src/data/resumeData.ts` → `languages` array

```typescript
{
  name: 'English',
  level: 'Professional',   // Native | Professional | Conversational | Basic
  proficiency: 85,         // 0–100 — width of the bar
  initial: 'EN',           // 1–2 characters shown in the circle
},
```

### Steps

1. Edit existing entries or add new ones.
2. Set `level` to one of: `'Native'`, `'Professional'`, `'Conversational'`, `'Basic'`.
3. Set `proficiency` between `0` and `100`.
4. Set `initial` to a short badge (letters or one character).

Example:

```typescript
export const languages: Language[] = [
  { name: 'Malay', level: 'Native', proficiency: 100, initial: 'MY' },
  { name: 'English', level: 'Professional', proficiency: 90, initial: 'EN' },
  { name: 'Mandarin', level: 'Conversational', proficiency: 60, initial: '中' },
];
```

### Check your work

- [ ] Each language shows a circle initial, name, level, and bar
- [ ] Bars match the proficiency numbers you chose

---

## Activity 7 — Work Experience Timeline (20 min)

**Goal:** Add your education, internships, or jobs on the **Work** tab.

**File:** `src/data/resumeData.ts` → `roles` array

Each role:

```typescript
{
  title: 'Intern — Mobile Developer',
  company: 'ABC Startup',
  location: 'Kuala Lumpur',
  period: 'Jun 2025 – Aug 2025',
  highlights: [
    'Built a React Native prototype for internal testing.',
    'Collaborated with a designer in Figma.',
  ],
},
```

### Steps

1. **Newest job first** — the array order is top-to-bottom on screen.
2. Replace placeholder roles with your own (or keep one as an example).
3. Write 2–3 bullet points per role in `highlights`.
4. For students with no work history yet, use projects or education:

```typescript
{
  title: 'Bachelor of Computer Science',
  company: 'Universiti Malaysia Pahang',
  location: 'Pahang, Malaysia',
  period: '2022 – 2026',
  highlights: [
    'Dean\'s List 2024.',
    'Final year project: cross-platform mobile app.',
  ],
},
```

### Check your work

- [ ] Work tab shows a vertical timeline with dots and lines
- [ ] Your most recent entry appears at the top
- [ ] Bullet points display under each role

---

## Activity 8 — Challenge Extensions (Optional)

### Challenge A — Hide a tab

Comment out a `<Tab.Screen ... />` block in `AppNavigator.tsx` if you do not need Languages, for example.

### Challenge B — Bigger profile photo

In `ProfileScreen.tsx`, change:

```tsx
className="mb-4 h-[120px] w-[120px] ..."
```

to:

```tsx
className="mb-4 h-[160px] w-[160px] ..."
```

### Challenge C — Dark header text on a light header

If you switch to a light header color, set:

```tsx
headerTintColor: '#1E293B',
```

in `AppNavigator.tsx` so the back button and title stay readable.

### Challenge D — Add a fifth skill tier color

Explore `ExperienceBarChart.tsx` — skills with `years >= 9` use primary blue; others use accent cyan. Try adding your own rule for `years >= 5`.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Red error screen after edit | Read the error message — usually a missing comma, quote, or bracket in `resumeData.ts` |
| Changes not visible | Save the file; press `r` in terminal to reload Expo |
| Photo not showing | Check `assets/` path and filename in `require('...')` |
| Colors only changed in one place | Update **both** `global.css` and `AppNavigator.tsx` |
| WhatsApp link fails | Use format `wa.me/60123456789` (no `+`, no spaces) |
| LinkedIn opens wrong page | Use `linkedin.com/in/username` without `https://` |
| TypeScript errors in editor | Run `npx tsc --noEmit` in the project folder to see details |

---

## Submission Checklist (for students)

Hand in or demo:

- [ ] Cloned repo runs in Expo Go
- [ ] Profile: your name, title, bio, photo, working contact buttons
- [ ] Skills: at least 4 personal skills with years
- [ ] Languages: at least 2 languages with proficiency
- [ ] Work: at least 2 timeline entries (jobs, projects, or education)
- [ ] Custom colors applied (primary theme changed)
- [ ] At least one custom label or heading text changed

---

## Quick Reference — One Page

```
CHANGE THIS              →  FILE
─────────────────────────────────────────────────────
Name, bio, contacts      →  src/data/resumeData.ts (profile)
Skills & years           →  src/data/resumeData.ts (technicalSkills)
Languages                →  src/data/resumeData.ts (languages)
Jobs / education         →  src/data/resumeData.ts (roles)
Profile photo            →  assets/profile.jpg
App colors (screens)     →  global.css (:root variables)
Header & tab colors      →  src/navigation/AppNavigator.tsx
"Get in touch", buttons  →  src/screens/ProfileScreen.tsx
Screen titles            →  src/navigation/AppNavigator.tsx
```

---

## For Instructors

- **Duration:** Activities 1–7 ≈ 90–100 minutes; Activity 8 + buffer ≈ 30 minutes.
- **Minimum viable demo:** Activities 1, 3, 4, and 5.
- **Pair programming:** One student edits `resumeData.ts`, partner edits `global.css`.
- **Live reload:** Keep `npm run start` running; students see changes within seconds.
- **Expo Go:** Requires SDK 54 — project uses `"expo": "^54.0.0"`.

---

*Template maintained by Tai Jia Yee · Workshop repo: [JiaYee/aic-104](https://github.com/JiaYee/aic-104)*
