'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { dictionaries, type Dictionary } from '@/i18n';
import {
  LOCALE_COOKIE,
  THEME_COOKIE,
  writePreferenceCookie,
  type Locale,
  type ThemeMode,
} from '@/lib/preferences';

interface PreferencesValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const PreferencesContext = createContext<PreferencesValue | null>(null);

interface PreferencesProviderProps {
  /** Read from cookies on the server so the first paint is already correct. */
  initialLocale: Locale;
  initialTheme: ThemeMode;
  children: ReactNode;
}

export default function PreferencesProvider({
  initialLocale,
  initialTheme,
  children,
}: PreferencesProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dictionaries[locale].meta.title;
    writePreferenceCookie(LOCALE_COOKIE, locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writePreferenceCookie(THEME_COOKIE, theme);
  }, [theme]);

  const toggleLocale = useCallback(() => setLocale((l) => (l === 'en' ? 'th' : 'en')), []);
  const toggleTheme = useCallback(() => setTheme((m) => (m === 'light' ? 'dark' : 'light')), []);

  const value = useMemo<PreferencesValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      toggleLocale,
      theme,
      setTheme,
      toggleTheme,
    }),
    [locale, theme, toggleLocale, toggleTheme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences(): PreferencesValue {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error('usePreferences must be used inside <PreferencesProvider>');
  return value;
}

/** Shorthand for components that only need translations. */
export const useI18n = () => {
  const { locale, t } = usePreferences();
  return { locale, t };
};
