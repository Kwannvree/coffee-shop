'use client';

import Image from 'next/image';
import { Button, Space } from 'antd';
import { Emphasis } from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { images } from '@/data/site';
import styles from './Hero.module.css';

const highlights = [
  { value: '12', key: 'origins' },
  { value: '4.9', key: 'rating' },
  { value: '2014', key: 'since' },
] as const;

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          <Emphasis text={t.hero.title} />
        </h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>

        <Space size={16} wrap className={styles.ctas}>
          <Button type="primary" size="large" href="#menu" className={styles.primaryCta}>
            {t.hero.primaryCta}
          </Button>
          <Button size="large" href="#contact" className={styles.secondaryCta}>
            {t.hero.secondaryCta}
          </Button>
        </Space>

        <dl className={styles.highlights}>
          {highlights.map((item) => (
            <div key={item.key} className={styles.highlight}>
              <dt className={styles.highlightLabel}>{t.hero.highlights[item.key]}</dt>
              <dd className={styles.highlightValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className={styles.scrollCue} aria-label={t.hero.scrollLabel}>
        <span>{t.hero.scroll}</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
