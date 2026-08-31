import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind class names — used by all shadcn-style components. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
