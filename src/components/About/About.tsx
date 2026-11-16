'use client';

import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { images } from '@/data/site';
import styles from './About.module.css';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className="container">
        <Row gutter={[{ xs: 0, lg: 80 }, 56]} align="middle">
          <Col xs={24} lg={11}>
            <Reveal>
              <div className={styles.media}>
                <div className={styles.frame} aria-hidden="true" />
                <div className={styles.imageWrap}>
                  <Image
                    src={images.about}
                    alt={t.about.imageAlt}
                    fill
                    sizes="(max-width: 991px) 100vw, 45vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeValue}>10+</span>
                  <span className={styles.badgeLabel}>
                    {t.about.badge[0]}
                    <br />
                    {t.about.badge[1]}
                  </span>
                </div>
              </div>
            </Reveal>
          </Col>

          <Col xs={24} lg={13}>
            <Reveal delay={120}>
              <div className={styles.copy}>
                <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} />
                <p className={styles.lead}>{t.about.lead}</p>
                <p className={styles.body}>{t.about.body}</p>

                <ul className={styles.values}>
                  {t.about.values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>

                <Button size="large" href="#experience" className={styles.cta}>
                  {t.about.cta}
                </Button>
              </div>
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
}
