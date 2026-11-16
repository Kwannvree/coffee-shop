'use client';

import { Rate } from 'antd';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import type { Testimonial } from '@/types';
import styles from './Testimonials.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const initials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2);

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { t } = useI18n();
  const copy = t.testimonials.items[testimonial.id];

  return (
    <figure className={styles.card}>
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>
      <div className={styles.rating}>
        <span aria-hidden="true">
          <Rate disabled allowHalf defaultValue={testimonial.rating} />
        </span>
        <span className="visually-hidden">{t.testimonials.rated(testimonial.rating)}</span>
      </div>
      <blockquote className={styles.quote}>
        <p>{copy.quote}</p>
      </blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {initials(testimonial.name)}
        </span>
        <span>
          <span className={styles.name}>{testimonial.name}</span>
          <span className={styles.role}>{copy.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
