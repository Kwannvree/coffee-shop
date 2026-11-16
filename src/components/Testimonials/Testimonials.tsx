'use client';

import { Col, Row } from 'antd';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { testimonials } from '@/data/site';
import TestimonialCard from './TestimonialCard';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section
      id="testimonials"
      className={`section ${styles.testimonials}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          align="center"
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
        />

        <Row gutter={[28, 28]} className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} xs={24} md={12} lg={8}>
              <Reveal delay={index * 110} className="full-height">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
