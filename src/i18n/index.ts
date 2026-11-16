import type { Locale } from '@/lib/preferences';
import en from './en';
import th from './th';
import type { Dictionary } from './types';

export const dictionaries: Record<Locale, Dictionary> = { en, th };

export type { Dictionary };
