import { useMessages, NextIntlClientProvider} from 'next-intl';
import type { FC, PropsWithChildren } from 'react';

type LocaleProviderProps = PropsWithChildren<{
  locale: string;
}>;

export const LocaleProvider: FC<LocaleProviderProps> = ({
  children,
  locale,
}) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
    >
      {children}
    </NextIntlClientProvider>
  );
};
