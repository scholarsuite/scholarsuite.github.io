/**
 * 404 Page - `not-found.tsx` doesn't work with intl + static generation
 */
import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import styles from './page.module.css';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className={styles.wrapper}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Back to home</Link>
    </main>
  );
};

export default Page;
