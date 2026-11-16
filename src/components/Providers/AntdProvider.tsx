'use client';

// Silences antd v5's React 19 compatibility warning and enables static methods.
import '@ant-design/v5-patch-for-react-19';
import { useMemo, type ReactNode } from 'react';
import { App, ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import thTH from 'antd/locale/th_TH';
import { getTheme } from '@/theme/themeConfig';
import { usePreferences } from './PreferencesProvider';

interface AntdProviderProps {
  children: ReactNode;
}

export default function AntdProvider({ children }: AntdProviderProps) {
  const { theme, locale } = usePreferences();
  const themeConfig = useMemo(() => getTheme(theme), [theme]);

  return (
    <ConfigProvider theme={themeConfig} locale={locale === 'th' ? thTH : enUS}>
      <App>{children}</App>
    </ConfigProvider>
  );
}
