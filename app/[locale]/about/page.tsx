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

  return(
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
    <main className='flex flex-col gap-10 w-full'>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Features
          </h2>
          <p className="mt-4">
            ScholarSuite is a school management software that aims to help schools to manage their students, teachers, and classes.
          </p>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="flex flex-col gap-2">
              <CheckCircleIcon className="size-6 text-green-500" />
              <span>Class and group management</span>
              <p>
                In scholarSuite, you can manage classes and groups of students. You can add students to a class, remove them, and add teachers to a class.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <CheckCircleIcon className="size-6 text-green-500" />
              <span>Attendance management (present, late, absent) =&gt; Justification management</span>
              <p>
                You can manage the attendance of students. You can mark them as present, late, or absent. You can also manage justifications for the absence of students.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <CheckCircleIcon className="size-6 text-green-500" />
              <span>Management of disciplinary reports</span>
              <p>
                You can manage disciplinary reports for students. You can add a report, remove it, and edit it.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <CheckCircleIcon className="size-6 text-green-500" />
              <span>Admin dashboard to ocherstrate the whole system</span>
              <p>
                You can manage the whole system from the admin dashboard. You can add students, teachers, classes, and groups.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <CheckCircleIcon className="size-6 text-green-500" />
              <span>Management of grades</span>
              <p>
                You can manage the grades of students. You can add grades, remove them, and edit them.
              </p>
            </li>
          </ul>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          About the maintainer
        </h2>
        <div className="flex flex-col gap-2 mt-4 items-center">
          <a href="https://github.com/augustinmauroy">
            <img src="https://avatars.githubusercontent.com/AugustinMauroy" alt="Augustin Mauroy" className="rounded-full size-20" />
          </a>
          <p className="flex flex-col gap-1">
            <span>Augustin Mauroy</span>
            <a href="https://github.com" className="text-indigo-500 hover:underline">
            GitHub
            </a>
            <a href="https://augustinmauroy.github.io" className="text-indigo-500 hover:underline">
            Website
            </a>
            </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-4">
          Repo of the project
        </h2>
        <a href="https://github.com/augustinmauroy/scholarsuite" className="text-indigo-500 hover:underline mt-6">
          GitHub <code className="rounded-sm bg-gray-200 dark:bg-gray-700 p-1">
            augustinmauroy/scholarsuite</code>
        </a>
      </section>
    </main>
    <Footer />
  </>
);
};

export default Page;
