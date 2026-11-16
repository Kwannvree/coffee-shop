'use client';

import { useEffect, useRef, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Drawer, Grid, Menu } from 'antd';
import {
  CloseOutlined,
  GlobalOutlined,
  MenuOutlined,
  MoonOutlined,
  ShoppingOutlined,
  SunOutlined,
} from '@ant-design/icons';
import Logo from '@/components/common/Logo';
import { usePreferences } from '@/components/Providers/PreferencesProvider';
import { brand, navLinks } from '@/data/site';
import styles from './Navbar.module.css';

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollToHash = (hash: string): void => {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', hash);
};

export default function Navbar() {
  const { t, locale, toggleLocale, theme, toggleTheme } = usePreferences();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  // Where to scroll once the drawer has finished closing (and unlocked body scroll).
  const pendingHash = useRef<string | null>(null);
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile drawer if the viewport grows to desktop size.
  useEffect(() => {
    if (screens.lg) setDrawerOpen(false);
  }, [screens.lg]);

  const navigateFromDrawer = (hash: string) => {
    pendingHash.current = hash;
    setDrawerOpen(false);
  };

  const menuItems: MenuProps['items'] = navLinks.map((link) => ({
    key: link.href,
    label: t.nav.links[link.key],
  }));

  const headerClass = [styles.header, scrolled || drawerOpen ? styles.scrolled : '']
    .filter(Boolean)
    .join(' ');

  const isDark = theme === 'dark';

  return (
    <header className={headerClass}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} aria-label={t.common.backToTop(brand.name)}>
          <Logo />
        </a>

        <nav aria-label={t.nav.primary} className={styles.nav}>
          <ul className={styles.links}>
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.link} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {t.nav.links[link.key]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button
            type="text"
            className={styles.langToggle}
            icon={<GlobalOutlined />}
            onClick={toggleLocale}
            aria-label={t.preferences.switchLanguage}
            title={t.preferences.switchLanguage}
          >
            <span lang={locale === 'en' ? 'th' : 'en'}>{t.preferences.languageLabel}</span>
          </Button>
          <Button
            type="text"
            className={styles.iconToggle}
            icon={isDark ? <SunOutlined /> : <MoonOutlined />}
            onClick={toggleTheme}
            aria-label={isDark ? t.preferences.toLight : t.preferences.toDark}
            title={isDark ? t.preferences.toLight : t.preferences.toDark}
          />
          <Button
            type="primary"
            href="#menu"
            icon={<ShoppingOutlined />}
            className={styles.orderButton}
          >
            {t.nav.orderNow}
          </Button>
          <Button
            type="text"
            className={`${styles.iconToggle} ${styles.menuToggle}`}
            icon={<MenuOutlined />}
            aria-label={t.nav.openMenu}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width={320}
        title={<Logo />}
        closeIcon={<CloseOutlined aria-label={t.nav.closeMenu} />}
        rootClassName={styles.drawer}
        afterOpenChange={(open) => {
          if (!open && pendingHash.current) {
            scrollToHash(pendingHash.current);
            pendingHash.current = null;
          }
        }}
        footer={
          <Button
            type="primary"
            size="large"
            block
            icon={<ShoppingOutlined />}
            onClick={() => navigateFromDrawer('#menu')}
          >
            {t.nav.orderNow}
          </Button>
        }
      >
        <nav aria-label={t.nav.mobile}>
          <Menu
            mode="inline"
            items={menuItems}
            selectedKeys={[`#${activeId}`]}
            onClick={({ key }) => navigateFromDrawer(key)}
            className={styles.drawerMenu}
          />
        </nav>
        <p className={styles.drawerNote}>
          {t.nav.drawerNote[0]}
          <br />
          {t.nav.drawerNote[1]}
        </p>
      </Drawer>
    </header>
  );
}
