import {
  CodeBracketIcon,
  BoltIcon,
  BugAntIcon,
  SparklesIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';
import { getTranslations } from 'next-intl/server';
import { Link } from '~/lib/i18n/routing';
import styles from './index.module.css';
import type { FC } from 'react';

const GetInvolved: FC = async () => {
  const t = await getTranslations('components.getInvolved');

  return (
    <section className={styles.getInvolved}>
      <h2>{t('title')}</h2>
      <p className={styles.description}>{t('description')}</p>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <CodeBracketIcon />
          <h3>{t('cards.contribute.title')}</h3>
          <p>
            {t('cards.contribute.description')}
          </p>
          <Link href="https://github.com/AugustinMauroy/scholarsuite/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22">
            {t("cards.learnMore")} <ArrowRightIcon />
          </Link>
        </div>
        <div className={styles.card}>
          <BoltIcon />
          <h3>{t("cards.testApp.title")}</h3>
          <p>
          {t("cards.testApp.description")}
          </p>
          <Link href="https://github.com/AugustinMauroy/scholarsuite?tab=readme-ov-file#having-your-instance-of--scholarsuite-">
          {t("cards.learnMore")} <ArrowRightIcon />
          </Link>
        </div>
        <div className={styles.card}>
          <BugAntIcon />
          <h3>{t("cards.reportBugs.title")}</h3>
          <p>{t("cards.reportBugs.description")}</p>
          <Link href="https://github.com/AugustinMauroy/scholarsuite/issues">
          {t("cards.learnMore")} <ArrowRightIcon />
          </Link>
        </div>
        <div className={styles.card}>
          <SparklesIcon />
          <h3>{t("cards.featureRequests.title")}</h3>
          <p>{t("cards.featureRequests.description")}</p>
          <Link href="https://github.com/AugustinMauroy/scholarsuite/issues">
          {t("cards.learnMore")} <ArrowRightIcon />
          </Link>
        </div>
        <div className={styles.card}>
          <ChatBubbleLeftEllipsisIcon />
          <h3>{t("cards.explainInterest.title")}</h3>
          <p>
            {t("cards.explainInterest.description")}
          </p>
          <Link href="#">
          {t("cards.learnMore")} <ArrowRightIcon />
          </Link>
        </div>
        <div className={styles.card}>
          <HeartIcon />
          <h3>{t("cards.supportProject.title")}</h3>
          <p>
            {t("cards.supportProject.description")}
          </p>
          <Link href="https://github.com/AugustinMauroy/scholarsuite">
          {t("cards.learnMore")} <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
