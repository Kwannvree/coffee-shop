import { brand } from '@/data/site';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

/** Brand mark + wordmark. Uses currentColor so it adapts to any background. */
export default function Logo({ className }: LogoProps) {
  return (
    <span className={`${styles.logo} ${className ?? ''}`}>
      <svg
        className={styles.mark}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18.5" opacity="0.45" />
        <ellipse cx="20" cy="20" rx="8" ry="12" transform="rotate(32 20 20)" />
        <path d="M14.6 11.6c4.2 3.6 1.2 9.8 5.6 13.4 1.6 1.3 3.1 2.2 5.2 3.3" />
      </svg>
      <span className={styles.text}>
        <span className={styles.name}>{brand.name}</span>
        <span className={styles.tagline}>{brand.tagline}</span>
      </span>
    </span>
  );
}
