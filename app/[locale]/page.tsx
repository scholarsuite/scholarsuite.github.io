import { setRequestLocale } from 'next-intl/server';
import Footer from '~/components/Footer';
import GetInvolved from '~/components/GetInvolved';
import Hero from '~/components/Hero';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

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
