/**
 * @todo:
 * - Use css-modules
 * - Add icons using `@heroicons/react`
 * - Add correct links
 */
import NextLink from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-600/60  to-transparent py-20">
        <div className="relative">
          <h1 className="text-center text-6xl font-bold">Scholarsuite</h1>
          <span className="absolute -left-16 -top-4 -rotate-[25deg] rounded-md bg-green-700 px-2 py-1 text-xs font-bold text-white">
            Active development
          </span>
        </div>
        <p className="mt-4 text-center text-lg">
          Your school management app, all free and open source
        </p>
        <Link
          href="/about"
          className="mt-8 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Learn more
        </Link>
      </section>
      <section className="py-40">
        <h2 className="mt-8 text-center text-3xl font-bold">
          Ready to get involved?
        </h2>
        <p className="mt-4 text-center">
          There are many ways you can help us build the app.
        </p>
        <div className="mx-auto mt-4 grid w-2/3 grid-cols-1 gap-4 md:w-1/2 md:grid-cols-2">
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">Contribute to the project</h3>
            <p>
              Help us build the app by contributing to the codebase on GitHub.
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">Test the app</h3>
            <p>
              Help us test the app by using it in your school and providing
              feedback.
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">Report bugs</h3>
            <p>Help us improve the app by reporting bugs you find.</p>
            <Link href="#">Learn more</Link>
          </div>
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">Request features</h3>
            <p>Help us improve the app by requesting features you need.</p>
            <Link href="#">Learn more</Link>
          </div>
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">
              Explain your interest in the app
            </h3>
            <p>
              Help us understand how you plan to use the app. What size of
              school, what part of the app are you interested in ...
            </p>
            <Link href="#">Learn more</Link>
          </div>
          <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
            <h3 className="text-xl font-bold">Support the project</h3>
            <p>
              Help us keep the project alive by supporting us. Just by starring
              the project on GitHub, you are already helping.
            </p>
            <Link href="#">Learn more</Link>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>
          MIT License - Copyright (c) 2024{' '}
          <NextLink
            href="https://augustinmauroy.github.io"
            className="hover:underline"
          >
            Augustin Mauroy
          </NextLink>
        </p>
      </footer>
    </>
  );
};

export default Page;
