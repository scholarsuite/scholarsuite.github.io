import Link from 'next/link';
import styles from './index.module.css';
import type { FC } from 'react';

const Footer: FC = async () => (
  <footer className={styles.footer}>
    <p>
      MIT License - Copyright (c) 2024{' '}
      <Link href="https://augustinmauroy.github.io">Augustin Mauroy</Link>
    </p>
  </footer>
);

export default Footer;
