/** User preferences shared by the server (cookies) and the client (context). */

export const LOCALES = ['en', 'th'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const THEME_MODES = ['light', 'dark'] as const;
export type ThemeMode = (typeof THEME_MODES)[number];
export const DEFAULT_THEME: ThemeMode = 'light';

export const LOCALE_COOKIE = 'hb-locale';
export const THEME_COOKIE = 'hb-theme';

export const parseLocale = (value: string | undefined): Locale =>
  LOCALES.includes(value as Locale) ? (value as Locale) : DEFAULT_LOCALE;

export const parseTheme = (value: string | undefined): ThemeMode =>
  THEME_MODES.includes(value as ThemeMode) ? (value as ThemeMode) : DEFAULT_THEME;

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Client-only: persist a preference so the server can render it on the next visit. */
export const writePreferenceCookie = (name: string, value: string): void => {
  document.cookie = `${name}=${value}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
};
