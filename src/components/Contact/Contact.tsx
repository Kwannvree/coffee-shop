'use client';

import { Col, Row } from 'antd';
import Icon from '@/components/common/Icon';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { useI18n } from '@/components/Providers/PreferencesProvider';
import { contactInfo } from '@/data/site';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  const { t, locale } = useI18n();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&hl=${locale}&output=embed`;

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className="container">
        <Row gutter={[{ xs: 0, lg: 64 }, 48]}>
          <Col xs={24} lg={10}>
            <Reveal>
              <SectionHeading
                id="contact-title"
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                description={t.contact.description}
              />

              <address className={styles.details}>
                <div className={styles.detail}>
                  <Icon name="environment" className={styles.detailIcon} />
                  <div>
                    <p className={styles.detailTitle}>{t.contact.visit}</p>
                    <p>
                      {contactInfo.addressLines[0]}
                      <br />
                      {contactInfo.addressLines[1]}
                    </p>
                  </div>
                </div>

                <div className={styles.detail}>
                  <Icon name="clock" className={styles.detailIcon} />
                  <div>
                    <p className={styles.detailTitle}>{t.contact.openingHours}</p>
                    <dl className={styles.hours}>
                      {t.contact.hours.map((entry) => (
                        <div key={entry.days} className={styles.hoursRow}>
                          <dt>{entry.days}</dt>
                          <dd>{entry.hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className={styles.detail}>
                  <Icon name="phone" className={styles.detailIcon} />
                  <div>
                    <p className={styles.detailTitle}>{t.contact.callOrWrite}</p>
                    <p>
                      <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                      <br />
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </p>
                  </div>
                </div>
              </address>

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
            </Reveal>
          </Col>

          <Col xs={24} lg={14}>
            <Reveal delay={120} className="full-height">
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>
                <p className={styles.formIntro}>{t.contact.formIntro}</p>
                <ContactForm />
              </div>
            </Reveal>
          </Col>
        </Row>

        <Reveal>
          <div className={styles.map}>
            <iframe
              title={t.contact.mapTitle(contactInfo.mapQuery)}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
