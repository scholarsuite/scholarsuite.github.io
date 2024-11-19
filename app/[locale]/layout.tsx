import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '~/providers/localeProvider';
import { routing } from '~/lib/i18n/routing';
import type { FC, PropsWithChildren } from 'react';
import type { BaseParams } from '~/types/params';
import '~/styles/globals.css';

type RootLayoutProps = PropsWithChildren<BaseParams>;

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!routing.locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
};

// Generate params for all available locales
// It's allow us to build the website statically for all locales
export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale }));

export default RootLayout;
