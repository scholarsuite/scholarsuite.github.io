import Link from 'next/link';
import type { FC } from 'react';

const NotFoundPage: FC = () => (
  <main>
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link href="/">Back to home</Link>
  </main>
);

export default NotFoundPage;
