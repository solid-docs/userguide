import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Take Control of Your Data
          </Heading>
          <p className={styles.heroSubtitle}>
            SolidOS is your personal data browser for the decentralized web.
            Manage contacts, collaborate with others, and keep your information
            private and secure in your own Solid Pod.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/getting-started/introduction">
              Get Started
            </Link>
            <Link
              className="button button--outline button--lg"
              style={{color: 'white', borderColor: 'white'}}
              to="/views/overview">
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    icon: '👥',
    title: 'Address Book',
    description: 'Keep your contacts organized with groups and detailed profiles. Your contacts stay in your Pod, not on corporate servers.',
    link: '/views/addressbook',
  },
  {
    icon: '💬',
    title: 'Chat & Collaborate',
    description: 'Real-time messaging and shared notepads for seamless collaboration. All conversations stored securely in your Pod.',
    link: '/views/longchat',
  },
  {
    icon: '📅',
    title: 'Schedule Meetings',
    description: 'Create meetings, share agendas, and coordinate availability with participants. Like Doodle, but you own the data.',
    link: '/views/meeting',
  },
  {
    icon: '🔒',
    title: 'Control Access',
    description: 'Decide exactly who can see and edit your data. Fine-grained permissions give you complete control.',
    link: '/views/sharing',
  },
  {
    icon: '👤',
    title: 'Your Profile',
    description: 'Manage your public identity on the decentralized web. Share what you want, keep private what you don\'t.',
    link: '/views/profile',
  },
  {
    icon: '🌐',
    title: 'Decentralized',
    description: 'Your data lives in your Solid Pod, not on someone else\'s server. True data ownership and portability.',
    link: '/getting-started/introduction',
  },
];

function Feature({icon, title, description, link}: {icon: string; title: string; description: string; link: string}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        <Link to={link} className={styles.featureLink}>Learn more →</Link>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">What You Can Do</Heading>
          <p>Powerful features that keep you in control</p>
        </div>
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { number: '1', title: 'Get a Pod', description: 'Sign up for a free Solid Pod at solidcommunity.net or another provider' },
    { number: '2', title: 'Log In', description: 'Use your WebID to authenticate and access your personal data space' },
    { number: '3', title: 'Create & Share', description: 'Add contacts, create chats, schedule meetings, and share with others' },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">How It Works</Heading>
          <p>Get started in three simple steps</p>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2">Ready to Own Your Data?</Heading>
        <p>Start using SolidOS today and take back control</p>
        <div className={styles.ctaButtons}>
          <Link className="button button--primary button--lg" to="/getting-started/login-logout">
            Log In to Your Pod
          </Link>
          <a className="button button--secondary button--lg" href="https://solidcommunity.net/" target="_blank" rel="noopener noreferrer">
            Get a Free Pod
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="SolidOS User Guide"
      description="Learn to use the SolidOS Databrowser - manage your data, connect with contacts, and control access to your Solid Pod.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HowItWorks />
        <CallToAction />
      </main>
    </Layout>
  );
}
