'use client';

import { Col, Row } from 'antd';
import Icon from '@/components/common/Icon';
import Logo from '@/components/common/Logo';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { brand, contactInfo, navLinks } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <Row gutter={[48, 48]} className={styles.top}>
          <Col xs={24} lg={9}>
            <a href="#home" className={styles.brand} aria-label={t.common.backToTop(brand.name)}>
              <Logo />
            </a>
            <p className={styles.description}>{t.footer.description}</p>
            <ul className={styles.socials} aria-label={t.common.socialMedia}>
              {contactInfo.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.common.opensInNewTab(social.label)}
                    className={styles.social}
                  >
                    <Icon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} md={8} lg={4}>
            <nav aria-label={t.footer.navLabel}>
              <h2 className={styles.heading}>{t.footer.explore}</h2>
              <ul className={styles.list}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={styles.link}>
                      {t.nav.links[link.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>

          <Col xs={12} md={8} lg={5}>
            <h2 className={styles.heading}>{t.footer.contact}</h2>
            <address className={styles.list}>
              <span>{contactInfo.addressLines[0]}</span>
              <span>{contactInfo.addressLines[1]}</span>
              <a href={contactInfo.phoneHref} className={styles.link}>
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                {contactInfo.email}
              </a>
            </address>
          </Col>

          <Col xs={24} md={8} lg={6}>
            <h2 className={styles.heading}>{t.footer.hours}</h2>
            <dl className={styles.list}>
              {t.contact.hours.map((entry) => (
                <div key={entry.days} className={styles.hoursRow}>
                  <dt>{entry.days}</dt>
                  <dd>{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </Col>
        </Row>

        <div className={styles.bottom}>
          <p>{t.footer.rights(year, brand.name)}</p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
