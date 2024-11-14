import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type NotFoundPageProps = BaseParams;

const NotFoundPage: FC<NotFoundPageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Back to home</Link>
    </main>
  );
};

export default NotFoundPage;
