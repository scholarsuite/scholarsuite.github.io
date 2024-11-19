/**
 * @todo:
 * - Add icons using `@heroicons/react`
 * - Add correct links
 */
import NextLink from 'next/link';
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
    <>
      <section className={styles.hero}>
        <div className={styles.title}>
          <h1>Scholarsuite</h1>
          <span className={styles.badge}>Active development</span>
        </div>
        <p className={styles.tagline}>
          Your school management app, all free and open source
        </p>
        <Link href="/about">Learn more</Link>
      </section>
      <section className={styles.getInvolved}>
        <h2>Ready to get involved?</h2>
        <p className={styles.description}>
          There are many ways you can help us build the app.
        </p>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h3>Contribute to the project</h3>
            <p>
              Help us build the app by contributing to the codebase on GitHub.
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={styles.card}>
            <h3>Test the app</h3>
            <p>
              Help us test the app by using it in your school and providing
              feedback.
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={styles.card}>
            <h3>Report bugs</h3>
            <p>Help us improve the app by reporting bugs you find.</p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={styles.card}>
            <h3>Request features</h3>
            <p>Help us improve the app by requesting features you need.</p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={styles.card}>
            <h3>Explain your interest in the app</h3>
            <p>
              Help us understand how you plan to use the app. What size of
              school, what part of the app are you interested in ...
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className={styles.card}>
            <h3>Support the project</h3>
            <p>
              Help us keep the project alive by supporting us. Just by starring
              the project on GitHub, you are already helping.
            </p>
            <Link href="#">Learn more</Link>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>
          MIT License - Copyright (c) 2024{' '}
          <NextLink href="https://augustinmauroy.github.io">
            Augustin Mauroy
          </NextLink>
        </p>
      </footer>
    </>
  );
};

export default Page;
