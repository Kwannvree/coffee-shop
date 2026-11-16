'use client';

import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { images, processSteps } from '@/data/site';
import styles from './Experience.module.css';

export default function Experience() {
  const { t } = useI18n();
  const copy = t.experience;

  return (
    <section
      id="experience"
      className={`section ${styles.experience}`}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <Row gutter={[{ xs: 0, lg: 88 }, 64]} align="middle">
          <Col xs={24} lg={12}>
            <Reveal>
              <figure className={styles.media}>
                <div className={styles.mainImage}>
                  <Image
                    src={images.experience}
                    alt={copy.mainImageAlt}
                    fill
                    sizes="(max-width: 991px) 100vw, 50vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.insetImage}>
                  <Image
                    src={images.beans}
                    alt={copy.beansImageAlt}
                    fill
                    sizes="(max-width: 991px) 40vw, 240px"
                    className={styles.image}
                  />
                </div>
                <figcaption className={styles.caption}>{copy.caption}</figcaption>
              </figure>
            </Reveal>
          </Col>

          <Col xs={24} lg={12}>
            <Reveal delay={120}>
              <SectionHeading
                id="experience-title"
                tone="light"
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.description}
              />

              <ol className={styles.steps}>
                {processSteps.map((step) => (
                  <li key={step.id} className={styles.step}>
                    <span className={styles.stepNumber} aria-hidden="true">
                      {step.step}
                    </span>
                    <div>
                      <h3 className={styles.stepTitle}>{copy.steps[step.id].title}</h3>
                      <p className={styles.stepText}>{copy.steps[step.id].description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </Col>
        </Row>

        <Reveal>
          <aside className={styles.promo} aria-label={copy.promo.label}>
            <div>
              <p className={styles.promoEyebrow}>{copy.promo.eyebrow}</p>
              <p className={styles.promoTitle}>{copy.promo.title}</p>
            </div>
            <div className={styles.promoAside}>
              <p className={styles.promoNote}>{copy.promo.note}</p>
              <Button type="primary" size="large" href="#contact" className={styles.promoButton}>
                {copy.promo.cta}
              </Button>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
