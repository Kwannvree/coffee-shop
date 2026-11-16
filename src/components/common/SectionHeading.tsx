import { Fragment } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  /** Wrap a phrase in *asterisks* to render it as the accent <em>. */
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  /** id for aria-labelledby on the parent section */
  id?: string;
}

/** Renders "Discover Your *Perfect* Cup" as "Discover Your <em>Perfect</em> Cup". */
export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split('*').map((part, index) =>
        index % 2 === 1 ? <em key={index}>{part}</em> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  id,
}: SectionHeadingProps) {
  const classes = [styles.heading, styles[align], tone === 'light' ? styles.light : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        <Emphasis text={title} />
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
