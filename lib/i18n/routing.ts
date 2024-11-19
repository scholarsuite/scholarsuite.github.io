import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { availableLocaleCodes, defaultLocale } from './config';

export const routing = defineRouting({
  locales: availableLocaleCodes,
  defaultLocale: defaultLocale.code,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
