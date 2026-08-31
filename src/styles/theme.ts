/**
 * theme.ts
 * ---------
 * Shared colors and spacing values used across screens.
 * Keeping styles in one place makes it easy for students to re-theme the app.
 */

export const colors = {
  background: '#F5F7FA',
  surface: '#FFFFFF',
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  text: '#1E293B',
  textMuted: '#64748B',
  border: '#E2E8F0',
  accent: '#0EA5E9',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;
