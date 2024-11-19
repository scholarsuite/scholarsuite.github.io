import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import Footer from '~/components/Footer';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('app.about');

  return (
    <>
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto w-2/3 py-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t('header.title')}
          </h1>
          <Link href="/" className="text-indigo-500 hover:underline mt-2">
            {t('header.back')}
          </Link>
        </div>
      </header>
      <main className="flex w-full flex-col items-center justify-center gap-10 py-10">
        <section className="w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('keyFeatures.title')}
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 size-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {t('keyFeatures.classGroup.title')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('keyFeatures.classGroup.description')}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 size-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {t('keyFeatures.attendance.title')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('keyFeatures.attendance.description')}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 size-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {t('keyFeatures.report.title')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('keyFeatures.report.description')}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 size-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {t('keyFeatures.admin.title')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('keyFeatures.admin.description')}
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 size-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {t('keyFeatures.grade.title')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('keyFeatures.grade.description')}
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('maintainer.title')}
          </h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="mt-4 flex flex-col items-center gap-2">
              <a href="https://github.com/augustinmauroy">
                <img
                  src="https://avatars.githubusercontent.com/AugustinMauroy"
                  alt="Augustin Mauroy"
                  className="size-20 rounded-full"
                />
              </a>
              <p className="flex flex-col items-center gap-1">
                <span>Augustin Mauroy</span>
                <a
                  href="https://github.com/augustinmauroy"
                  className="text-indigo-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://augustinmauroy.github.io"
                  className="text-indigo-500 hover:underline"
                >
                 {t('maintainer.website')}
                </a>
              </p>
            </div>
            <div className="text-center">
              <p>
                {t('maintainer.new-contributors-1')}
                <br />
                {t('maintainer.new-contributors-2')}
              </p>
            </div>
          </div>
        </section>
        <section className="w-2/3">
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('repo.title')}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {t('repo.description')}
          </p>
          <a
            href="https://github.com/augustinmauroy/scholarsuite"
            className="mt-1.5 block text-indigo-500 hover:underline"
          >
            GitHub{' '}
            <code className="rounded-sm bg-gray-200 p-1 dark:bg-gray-700">
              augustinmauroy/scholarsuite
            </code>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
