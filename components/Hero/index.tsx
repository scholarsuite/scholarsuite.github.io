import { getTranslations } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import styles from './index.module.css';
import type { FC } from 'react';

const Hero: FC = async () => {
  const t = await getTranslations('components.hero');

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.title}>
        <h1>{t('title')}</h1>
        <span className={styles.badge}>{t('badge')}</span>
      </div>
      <p className={styles.tagline}>{t('tagline')}</p>
      <Link href="/about">{t('learnMore')}</Link>
    </section>
  );
};

export default Hero;
