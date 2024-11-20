import { setRequestLocale, getTranslations } from 'next-intl/server';
import Footer from '~/components/Footer';
import GetInvolved from '~/components/GetInvolved';
import Hero from '~/components/Hero';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('app.home.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <GetInvolved />
      <Footer />
    </>
  );
};

export default Page;
