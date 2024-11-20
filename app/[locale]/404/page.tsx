/**
 * 404 Page - `not-found.tsx` doesn't work with intl + static generation
 */
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import styles from './page.module.css';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('app.404');

  return (
    <main className={styles.wrapper}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link href="/">{t('back')}</Link>
    </main>
  );
};

export default Page;
