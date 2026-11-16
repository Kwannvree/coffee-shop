import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { Cormorant_Garamond, DM_Sans, Prompt } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AntdProvider from '@/components/Providers/AntdProvider';
import PreferencesProvider from '@/components/Providers/PreferencesProvider';
import { dictionaries } from '@/i18n';
import { LOCALE_COOKIE, THEME_COOKIE, parseLocale, parseTheme } from '@/lib/preferences';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Thai: Prompt for headings and body. Only downloaded when the page is shown in Thai.
const thai = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-th',
  display: 'swap',
  preload: false,
});

async function getPreferences() {
  const store = await cookies();
  return {
    locale: parseLocale(store.get(LOCALE_COOKIE)?.value),
    theme: parseTheme(store.get(THEME_COOKIE)?.value),
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getPreferences();
  const { meta } = dictionaries[locale];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: 'website',
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#5C4033',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { locale, theme } = await getPreferences();
  const fontVars = [serif, sans, thai].map((f) => f.variable).join(' ');

  return (
    <html lang={locale} data-theme={theme} className={fontVars}>
      <body>
        <AntdRegistry>
          <PreferencesProvider initialLocale={locale} initialTheme={theme}>
            <AntdProvider>{children}</AntdProvider>
          </PreferencesProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
