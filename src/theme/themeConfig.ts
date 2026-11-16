import { theme as antdTheme, type ThemeConfig } from 'antd';
import type { ThemeMode } from '@/lib/preferences';

/** Brand palette, mirrored as CSS variables in globals.css */
export const palette = {
  coffee: '#5C4033',
  beige: '#D8C3A5',
  cream: '#FAF7F2',
  ink: '#2C2520',
  accent: '#A67C52',
  sand: '#F3EADF',
  muted: '#6B5D52',
} as const;

/** Per-mode surface and text colors. Dark values match `[data-theme='dark']` in globals.css. */
const modeColors = {
  light: {
    primary: palette.coffee,
    link: palette.accent,
    linkHover: palette.coffee,
    text: palette.ink,
    textSecondary: palette.muted,
    placeholder: '#A3968A',
    bgLayout: palette.cream,
    bgContainer: '#FFFDF9',
    border: '#E3D6C4',
    borderSecondary: '#EFE5D6',
    brandText: palette.coffee,
    buttonBorder: palette.coffee,
    hoverBg: palette.sand,
    messageBg: palette.ink,
    messageText: palette.cream,
    shadow: '0 18px 40px -18px rgba(44, 37, 32, 0.35)',
  },
  dark: {
    primary: palette.accent,
    link: palette.beige,
    linkHover: '#EADBC6',
    text: '#F1E9DE',
    textSecondary: '#B3A595',
    placeholder: '#7D7064',
    bgLayout: '#15110E',
    bgContainer: '#251E19',
    border: '#43382F',
    borderSecondary: '#352C25',
    brandText: palette.beige,
    buttonBorder: 'rgba(216, 195, 165, 0.6)',
    hoverBg: '#2B231D',
    messageBg: '#2B231D',
    messageText: '#F1E9DE',
    shadow: '0 18px 40px -18px rgba(0, 0, 0, 0.7)',
  },
} as const;

export function getTheme(mode: ThemeMode): ThemeConfig {
  const c = modeColors[mode];

  return {
    algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: c.primary,
      colorInfo: c.primary,
      colorLink: c.link,
      colorLinkHover: c.linkHover,
      colorText: c.text,
      colorTextSecondary: c.textSecondary,
      colorTextPlaceholder: c.placeholder,
      colorBgLayout: c.bgLayout,
      colorBgContainer: c.bgContainer,
      colorBorder: c.border,
      colorBorderSecondary: c.borderSecondary,
      colorSuccess: '#5E7A4E',
      colorError: '#B3473A',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 52,
      boxShadowSecondary: c.shadow,
    },
    components: {
      Button: {
        borderRadius: 999,
        borderRadiusLG: 999,
        borderRadiusSM: 999,
        fontWeight: 500,
        paddingInlineLG: 32,
        contentFontSizeLG: 15,
        primaryShadow: 'none',
        defaultShadow: 'none',
        defaultBg: 'transparent',
        defaultColor: c.brandText,
        defaultBorderColor: c.buttonBorder,
      },
      Card: {
        borderRadiusLG: 20,
        paddingLG: 24,
      },
      Tag: {
        // Sits on top of photos, so it stays light in both modes.
        defaultBg: 'rgba(250, 247, 242, 0.92)',
        defaultColor: palette.coffee,
      },
      Rate: {
        starColor: palette.accent,
        starSize: 18,
      },
      Input: {
        activeBorderColor: palette.accent,
        hoverBorderColor: palette.accent,
        activeShadow: '0 0 0 3px rgba(166, 124, 82, 0.16)',
        paddingBlock: 10,
        paddingInline: 16,
      },
      Form: {
        labelColor: c.text,
        labelFontSize: 14,
        verticalLabelPadding: '0 0 6px',
      },
      Menu: {
        itemBg: 'transparent',
        itemColor: c.text,
        itemHoverBg: c.hoverBg,
        itemHoverColor: c.brandText,
        itemSelectedBg: c.hoverBg,
        itemSelectedColor: c.brandText,
        itemHeight: 52,
        itemBorderRadius: 12,
        fontSize: 17,
      },
      Drawer: {
        colorBgElevated: c.bgLayout,
      },
      Layout: {
        bodyBg: c.bgLayout,
      },
      Message: {
        contentBg: c.messageBg,
        colorText: c.messageText,
      },
    },
  };
}
