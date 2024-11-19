import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import Footer from '~/components/Footer';
import type { FC } from 'react';
import type { BaseParams } from '~/types/params';

type PageProps = BaseParams;

/**
 * Things we need on this page:
 * - Section about features (whanted but not especially implemented).
 *   - Class and group management `1.0.0`
 *   - Attendance management (present, late, absent) => Justification management `1.0.0`
 *   - Management of disciplinary reports `1.0.0`
 *   - Admin dashboard to ocherstrate the whole system `1.0.0`
 *   - Management of grades `1.1.0`
 * - Note about the maintainer (Augustin Mauroy)
 *   - https://github.com/AugustinMauroy
 *   - https://augustinmauroy.github.io/
 *
 * Repo of the project: https://github.com/AugustinMauroy/scholarsuite
 */

const Page: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            About ScholarSuite
          </h1>
          <Link href="/" className="text-indigo-500 hover:underline">
            Back to home
          </Link>
        </div>
      </header>
      <main className="flex w-full flex-col items-center justify-center gap-10 py-10">
        <section className="w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Class and Group Management
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Seamlessly manage classes and groups, allowing for easy
                  student enrollment and teacher assignment.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Attendance Tracking and Justification
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Monitor student attendance and track absences with ease. A
                  justification system ensures fairness and transparency.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Disciplinary Report Management
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Efficiently manage disciplinary reports, with features for
                  adding, editing, and removing reports as necessary.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Comprehensive Admin Dashboard
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The central hub for managing the entire system, allowing for
                  quick and easy access to add, edit, and remove students,
                  teachers, classes, and groups.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  Grade Management
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Keep track of student grades with a user-friendly interface
                  for adding, editing, and removing grades as needed.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            About the Maintainer
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
              <p className="flex flex-col gap-1 items-center">
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
                  Website
                </a>
              </p>
            </div>
            <div className="text-center">
              <p>
                Maybe you can contribute to the project by adding new features
                or fixing bugs.
                <br />
                Your contributions are welcome!
              </p>
            </div>
          </div>
        </section>
        <section className="w-2/3">
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Project Repository
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Get the source code of the project on GitHub and contribute to its
            development.
          </p>
          <a
            href="https://github.com/augustinmauroy/scholarsuite"
            className="mt-6 text-indigo-500 hover:underline"
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
