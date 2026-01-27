import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/introduction">
            Get Started
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/views/overview">
            Explore Views
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, link}: {title: string; description: string; link: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md padding-vert--lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link}>Learn more →</Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <Feature
            title="Manage Your Data"
            description="Learn how to navigate, create, and organize data within your Solid Pod using the SolidOS databrowser."
            link="/getting-started/navigation"
          />
          <Feature
            title="Social Features"
            description="Discover the Address Book, Chat, and other social views that help you connect with contacts and collaborate."
            link="/views/addressbook"
          />
          <Feature
            title="Control Access"
            description="Understand how to share your data securely and manage permissions for your resources."
            link="/views/sharing"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="SolidOS User Guide"
      description="Learn to use the SolidOS Databrowser - manage your data, connect with contacts, and control access to your Solid Pod.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
