import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type BenefitItem = {
  tone: 'ember' | 'sand' | 'ink';
  eyebrow: string;
  title: string;
  body: string;
};

type StepItem = {
  step: string;
  title: string;
  body: string;
};

type ScenarioItem = {
  title: string;
  body: string;
};

type GuideCard = {
  path: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const iconUrl = useBaseUrl('/img/codex-pocket-icon.png');
  const releaseVersion = String(siteConfig.customFields?.releaseVersion ?? '0.1.0');
  const canonicalUrl = `${siteConfig.url}${siteConfig.baseUrl}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodexPocket',
    url: canonicalUrl,
    description:
      'Use your iPhone with the Codex environment running on your Mac. Today it works on the same LAN and lets you start new threads from iPhone.',
    inLanguage: ['ja-JP', 'en-US'],
    publisher: {
      '@type': 'Organization',
      name: 'CodexPocket',
      url: 'https://github.com/codex-pocket',
    },
  };

  const benefits: BenefitItem[] = [
    {
      tone: 'ember',
      eyebrow: translate({
        id: 'home.benefit.remote.eyebrow',
        message: 'What works now',
      }),
      title: translate({
        id: 'home.benefit.remote.title',
        message: 'iPhone から新しい thread を始められる',
      }),
      body: translate({
        id: 'home.benefit.remote.body',
        message:
          '同じ LAN で接続している状態なら、iPhone 側から新しい thread を始める導線を持てます。',
      }),
    },
    {
      tone: 'sand',
      eyebrow: translate({
        id: 'home.benefit.setup.eyebrow',
        message: 'Fast setup',
      }),
      title: translate({
        id: 'home.benefit.setup.title',
        message: 'pairing が数ステップで終わる',
      }),
      body: translate({
        id: 'home.benefit.setup.body',
        message:
          'Mac 側で companion app を開き、bridge と QR を出して iPhone で取り込むだけで Host を追加できます。',
      }),
    },
    {
      tone: 'ink',
      eyebrow: translate({
        id: 'home.benefit.context.eyebrow',
        message: 'Less context switching',
      }),
      title: translate({
        id: 'home.benefit.context.title',
        message: 'Project 単位で迷わない',
      }),
      body: translate({
        id: 'home.benefit.context.body',
        message:
          'thread、branch、skills、commands を Project 起点でまとめて扱えるので、どの workspace の操作かを見失いにくい構成です。',
      }),
    },
  ];

  const limitations: ScenarioItem[] = [
    {
      title: translate({
        id: 'home.limitations.lan.title',
        message: '同一 LAN からのアクセスのみ',
      }),
      body: translate({
        id: 'home.limitations.lan.body',
        message:
          '現時点では、Mac と iPhone が同じネットワークにいる前提で使います。',
      }),
    },
    {
      title: translate({
        id: 'home.limitations.realtime.title',
        message: 'PC の thread をリアルタイムに iPhone へ持ち出すことはまだできない',
      }),
      body: translate({
        id: 'home.limitations.realtime.body',
        message:
          'PC 側で進めている thread を、そのままリアルタイム同期のように iPhone へ持ってくる機能は未対応です。',
      }),
    },
    {
      title: translate({
        id: 'home.limitations.future.title',
        message: '将来的には同期をもっと近づけていく予定',
      }),
      body: translate({
        id: 'home.limitations.future.body',
        message:
          '今は制約がありますが、将来的にはリアルタイム同期に近い体験へ寄せていく予定です。',
      }),
    },
  ];

  const setupSteps: StepItem[] = [
    {
      step: '01',
      title: translate({
        id: 'home.step.bridge.title',
        message: 'Mac で bridge を立ち上げる',
      }),
      body: translate({
        id: 'home.step.bridge.body',
        message:
          'companion app で pairing QR と Project registry を用意します。',
      }),
    },
    {
      step: '02',
      title: translate({
        id: 'home.step.pair.title',
        message: 'iPhone で Host を追加する',
      }),
      body: translate({
        id: 'home.step.pair.body',
        message:
          'QR import か手入力で取り込み、bridge の疎通と Project catalog の収集を待ちます。',
      }),
    },
    {
      step: '03',
      title: translate({
        id: 'home.step.resume.title',
        message: 'Project を開いて新しい thread を始める',
      }),
      body: translate({
        id: 'home.step.resume.body',
        message:
          'Project を開き、Composer から新しい thread、skills、exec を始められます。',
      }),
    },
  ];

  const scenarios: ScenarioItem[] = [
    {
      title: translate({
        id: 'home.scenario.commute.title',
        message: '同じネットワーク内で手元から確認したい',
      }),
      body: translate({
        id: 'home.scenario.commute.body',
        message:
          'Mac の前に座り直さなくても、同じ LAN にいる範囲で iPhone から状態を見にいけます。',
      }),
    },
    {
      title: translate({
        id: 'home.scenario.away.title',
        message: 'iPhone から新しい thread を始めたい',
      }),
      body: translate({
        id: 'home.scenario.away.body',
        message:
          'PC 側のリアルタイム持ち出しではなく、iPhone 側から新しい thread を立ち上げたいときに向いています。',
      }),
    },
    {
      title: translate({
        id: 'home.scenario.split.title',
        message: 'Mac 側の準備と iPhone 側の操作を分けたい',
      }),
      body: translate({
        id: 'home.scenario.split.body',
        message:
          'bridge、logs、Project 管理は Mac に寄せ、日常操作は iPhone に寄せる使い分けができます。',
      }),
    },
    {
      title: translate({
        id: 'home.scenario.codexApp.title',
        message: 'Codex App と一緒に使いたい',
      }),
      body: translate({
        id: 'home.scenario.codexApp.body',
        message:
          'Mac 側では Codex App の流れを使いながら、iPhone 側では確認や新しい thread 開始だけを軽く持ち出せます。',
      }),
    },
  ];

  const guideCards: GuideCard[] = [
    {
      path: '/docs/iphone/',
      eyebrow: translate({
        id: 'home.guide.iphone.eyebrow',
        message: 'Start',
      }),
      title: translate({
        id: 'home.guide.iphone.title',
        message: 'iPhone から始める',
      }),
      body: translate({
        id: 'home.guide.iphone.body',
        message:
          'Host 追加、Project、Thread、Composer を先に把握したい人向けの入口です。',
      }),
      cta: translate({
        id: 'home.guide.iphone.cta',
        message: 'iPhone ガイドへ',
      }),
    },
    {
      path: '/docs/mac/',
      eyebrow: translate({
        id: 'home.guide.mac.eyebrow',
        message: 'Setup',
      }),
      title: translate({
        id: 'home.guide.mac.title',
        message: 'Mac から始める',
      }),
      body: translate({
        id: 'home.guide.mac.body',
        message:
          'companion app、bridge、QR、logs など管理面を先に見たい人向けの入口です。',
      }),
      cta: translate({
        id: 'home.guide.mac.cta',
        message: 'Mac ガイドへ',
      }),
    },
    {
      path: '/docs/shared/',
      eyebrow: translate({
        id: 'home.guide.shared.eyebrow',
        message: 'Shared flow',
      }),
      title: translate({
        id: 'home.guide.shared.title',
        message: 'pairing と thread workflow',
      }),
      body: translate({
        id: 'home.guide.shared.body',
        message:
          'iPhone と Mac の境界をまたぐ内容だけをまとめて追えるセクションです。',
      }),
      cta: translate({
        id: 'home.guide.shared.cta',
        message: 'shared ガイドへ',
      }),
    },
    {
      path: '/docs/reference/architecture',
      eyebrow: translate({
        id: 'home.guide.reference.eyebrow',
        message: 'Reference',
      }),
      title: translate({
        id: 'home.guide.reference.title',
        message: 'アーキテクチャと運用',
      }),
      body: translate({
        id: 'home.guide.reference.body',
        message:
          'release policy や localization を含む横断情報を参照したいときの入口です。',
      }),
      cta: translate({
        id: 'home.guide.reference.cta',
        message: 'reference へ',
      }),
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: 'Control Codex on your Mac from your iPhone',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'CodexPocket is a same-LAN iPhone companion for the Codex environment running on your Mac.',
      })}
      wrapperClassName={styles.homepage}>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="keywords"
          content="CodexPocket, Codex, iPhone app, macOS companion app, bridge, pairing, thread workflow, remote coding assistant"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.badges}>
                  <span className={styles.badge}>
                    {translate({
                      id: 'home.badge.release',
                      message: 'stable',
                    })}{' '}
                    {releaseVersion}
                  </span>
                  <span className={styles.badge}>
                    {translate({
                      id: 'home.badge.sameLan',
                      message: 'Same LAN only',
                    })}
                  </span>
                  <span className={styles.badge}>
                    {translate({
                      id: 'home.badge.codexApp',
                      message: 'Best with Codex App',
                    })}
                  </span>
                  <span className={styles.badge}>
                    {translate({
                      id: 'home.badge.pairing',
                      message: 'QR pairing',
                    })}
                  </span>
                </div>
                <Heading as="h1" className={styles.heroTitle}>
                  <Translate id="home.hero.title">
                    Mac に置いた Codex を、iPhone から軽く触れる。
                  </Translate>
                </Heading>
                <p className={styles.heroLead}>
                  <Translate id="home.hero.lead">
                    CodexPocket は、Mac 側の Codex 実行環境をそのままに、Host / Project /
                    Thread / Composer の操作を iPhone に持ち出すためのプロダクトです。今は同一
                    LAN 前提で、PC の thread をリアルタイムにそのまま持ち出すことはできません。
                    その代わり、iPhone から新しい thread を始める導線と、Codex App と相性のいい使い方を先に整えています。
                  </Translate>
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to="/docs/iphone/getting-started">
                    <Translate id="home.hero.primaryCta">iPhone ですぐ試す</Translate>
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/shared/pairing-and-bridge">
                    <Translate id="home.hero.secondaryCta">pairing の流れを見る</Translate>
                  </Link>
                </div>
                <p className={styles.heroMeta}>
                  <Translate id="home.hero.meta" values={{releaseVersion}}>
                    {`現在の安定版は {releaseVersion}。今は同一 LAN 前提ですが、将来的にはリアルタイム同期に近づけていく予定です。`}
                  </Translate>
                </p>
                <div className={styles.heroNotes}>
                  <span className={styles.heroNote}>
                    <Translate id="home.hero.note.lan">同一 LAN のみ</Translate>
                  </span>
                  <span className={styles.heroNote}>
                    <Translate id="home.hero.note.newThread">iPhone で新規 thread 開始可</Translate>
                  </span>
                  <span className={styles.heroNote}>
                    <Translate id="home.hero.note.sync">リアルタイム持ち出しは未対応</Translate>
                  </span>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.visualGlow} />
                <div className={styles.visualFrame}>
                  <div className={styles.visualHeader}>
                    <span className={styles.windowDot} />
                    <span className={styles.windowDot} />
                    <span className={styles.windowDot} />
                  </div>
                  <div className={styles.visualBody}>
                    <div className={styles.visualIntro}>
                      <span className={styles.visualEyebrow}>
                        <Translate id="home.visual.eyebrow">REMOTE CODING FLOW</Translate>
                      </span>
                      <Heading as="p" className={styles.visualTitle}>
                        <Translate id="home.visual.title">
                          操作は iPhone、実行は Mac。役割を分けるから軽い。
                        </Translate>
                      </Heading>
                      <p className={styles.visualBodyText}>
                        <Translate id="home.visual.body">
                          companion app と bridge が Mac 側の source of truth を持ち、iPhone は
                          Project と Thread にすぐ入るための UI になります。
                        </Translate>
                      </p>
                    </div>
                    <div className={styles.iconWrap}>
                      <div className={styles.iconHalo} />
                      <img
                        src={iconUrl}
                        alt={translate({
                          id: 'home.hero.imageAlt',
                          message: 'CodexPocket app icon',
                        })}
                        className={styles.iconImage}
                      />
                    </div>
                    <div className={styles.visualCards}>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.setup.label">Setup</Translate>
                        </span>
                        <strong className={styles.visualValue}>
                          <Translate id="home.visual.setup.value">QR で pairing</Translate>
                        </strong>
                      </div>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.context.label">Context</Translate>
                        </span>
                        <strong className={styles.visualValue}>
                          <Translate id="home.visual.context.value">Project ごとに整理</Translate>
                        </strong>
                      </div>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.action.label">Action</Translate>
                        </span>
                        <strong className={styles.visualValue}>
                          <Translate id="home.visual.action.value">Composer から新規 thread</Translate>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.carryPanel}>
                  <p className={styles.carryPanelTitle}>
                    <Translate id="home.visual.panelTitle">What iPhone can access</Translate>
                  </p>
                  <div className={styles.carryRow}>
                    <span className={styles.carryLabel}>
                      <Translate id="home.visual.panel.host.label">Host</Translate>
                    </span>
                    <span className={styles.carryBody}>
                      <Translate id="home.visual.panel.host.body">どの Mac へつなぐか</Translate>
                    </span>
                  </div>
                  <div className={styles.carryRow}>
                    <span className={styles.carryLabel}>
                      <Translate id="home.visual.panel.project.label">Project</Translate>
                    </span>
                    <span className={styles.carryBody}>
                      <Translate id="home.visual.panel.project.body">
                        thread と branch の起点
                      </Translate>
                    </span>
                  </div>
                  <div className={styles.carryRow}>
                    <span className={styles.carryLabel}>
                      <Translate id="home.visual.panel.composer.label">Composer</Translate>
                    </span>
                    <span className={styles.carryBody}>
                      <Translate id="home.visual.panel.composer.body">
                        follow-up、skills、exec の入口
                      </Translate>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.benefits.eyebrow">What you can do now</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.benefits.title">今できること</Translate>
              </Heading>
            </div>
            <div className={styles.benefitGrid}>
              {benefits.map((item) => (
                <article key={item.title} className={styles.benefitCard} data-tone={item.tone}>
                  <span className={styles.cardEyebrow}>{item.eyebrow}</span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.cardBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.steps.eyebrow">Quick start</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.steps.title">始め方も重くない</Translate>
              </Heading>
            </div>
            <div className={styles.stepGrid}>
              {setupSteps.map((item) => (
                <article key={item.step} className={styles.stepCard}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <Heading as="h3" className={styles.stepTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.stepBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.scenarios.eyebrow">Use cases</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.scenarios.title">こういう使い方に向く</Translate>
              </Heading>
            </div>
            <div className={styles.scenarioGrid}>
              {scenarios.map((item) => (
                <article key={item.title} className={styles.scenarioCard}>
                  <Heading as="h3" className={styles.scenarioTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.scenarioBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.guides.eyebrow">Guides</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.guides.title">詳しく見る入口</Translate>
              </Heading>
            </div>
            <div className={styles.guideGrid}>
              {guideCards.map((item) => (
                <article key={item.path} className={styles.guideCard}>
                  <span className={styles.guideEyebrow}>{item.eyebrow}</span>
                  <Heading as="h3" className={styles.guideTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.guideBody}>{item.body}</p>
                  <Link className={styles.guideLink} to={item.path}>
                    {item.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.limits.eyebrow">Current limits</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.limits.title">知っておくべきこと</Translate>
              </Heading>
            </div>
            <div className={styles.scenarioGrid}>
              {limitations.map((item) => (
                <article key={item.title} className={styles.scenarioCard}>
                  <Heading as="h3" className={styles.scenarioTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.scenarioBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
