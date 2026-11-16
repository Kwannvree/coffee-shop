'use client';

import SectionHeading from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { menuItems } from '@/data/menu';
import MenuGrid from './MenuGrid';
import styles from './MenuSection.module.css';

export default function MenuSection() {
  const { t } = useI18n();

  return (
    <section id="menu" className={`section ${styles.menu}`} aria-labelledby="menu-title">
      <div className="container">
        <div className={styles.header}>
          <SectionHeading id="menu-title" eyebrow={t.menu.eyebrow} title={t.menu.title} />
          <p className={styles.intro}>{t.menu.intro}</p>
        </div>

        <MenuGrid items={menuItems} />
      </div>
    </section>
  );
}
