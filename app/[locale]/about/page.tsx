import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import Footer from '~/components/Footer';
import styles from './page.module.css';
import type { FC } from 'react';
import type { Metadata } from 'next';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('app.about.metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('app.about');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.textWrapper}>
          <h1>{t('header.title')}</h1>
          <Link href="/">{t('header.back')}</Link>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>{t('keyFeatures.title')}</h2>
          <ul className={styles.featuresList}>
            <li>
              <CheckCircleIcon />
              <div>
                <h3>{t('keyFeatures.classGroup.title')}</h3>
                <p>{t('keyFeatures.classGroup.description')}</p>
              </div>
            </li>
            <li>
              <CheckCircleIcon />
              <div>
                <h3>{t('keyFeatures.attendance.title')}</h3>
                <p>{t('keyFeatures.attendance.description')}</p>
              </div>
            </li>
            <li>
              <CheckCircleIcon />
              <div>
                <h3>{t('keyFeatures.report.title')}</h3>
                <p>{t('keyFeatures.report.description')}</p>
              </div>
            </li>
            <li>
              <CheckCircleIcon />
              <div>
                <h3>{t('keyFeatures.admin.title')}</h3>
                <p>{t('keyFeatures.admin.description')}</p>
              </div>
            </li>
            <li>
              <CheckCircleIcon />
              <div>
                <h3>{t('keyFeatures.grade.title')}</h3>
                <p>{t('keyFeatures.grade.description')}</p>
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>{t('maintainer.title')}</h2>
          <div className={styles.maintainer}>
            <div className={styles.info}>
              <a href="https://github.com/augustinmauroy">
                <img
                  src="https://avatars.githubusercontent.com/AugustinMauroy"
                  alt="Augustin Mauroy"
                />
              </a>
              <p className={styles.text}>
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
            <div className={styles.text}>
              <p>
                {t('maintainer.new-contributors-1')}
                <br />
                {t('maintainer.new-contributors-2')}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>{t('repo.title')}</h2>
          <p className={styles.repoInfo}>{t('repo.description')}</p>
          <a
            href="https://github.com/augustinmauroy/scholarsuite"
            className={styles.repoLink}
          >
            GitHub <code>augustinmauroy/scholarsuite</code>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
