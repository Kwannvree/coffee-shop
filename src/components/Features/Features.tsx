'use client';

import { Card, Col, Row } from 'antd';
import Icon from '@/components/common/Icon';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { features } from '@/data/site';
import styles from './Features.module.css';

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="why-us" className={`section ${styles.features}`} aria-labelledby="features-title">
      <div className="container">
        <SectionHeading
          id="features-title"
          align="center"
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          description={t.features.description}
        />

        <Row gutter={[28, 28]} className={styles.grid}>
          {features.map((feature, index) => (
            <Col key={feature.id} xs={24} md={8}>
              <Reveal delay={index * 110} className="full-height">
                <Card className={styles.card}>
                  <span className={styles.number} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className={styles.iconWrap}>
                    <Icon name={feature.icon} className={styles.icon} />
                  </span>
                  <h3 className={styles.title}>{t.features.items[feature.id].title}</h3>
                  <p className={styles.description}>{t.features.items[feature.id].description}</p>
                </Card>
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
