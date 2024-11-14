import { setRequestLocale } from 'next-intl/server';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <h1>Landing page</h1>;
};

export default Page;
