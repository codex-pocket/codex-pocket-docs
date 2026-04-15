import {useEffect, type ReactNode} from 'react';
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

const JAPANESE_LOCALE = 'ja';
const ENGLISH_LOCALE = 'en';

function ensureTrailingSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

function getLocaleHomePath(baseUrl: string, locale: string): string {
  const normalizedBaseUrl = ensureTrailingSlash(baseUrl);
  return locale === JAPANESE_LOCALE ? normalizedBaseUrl : `${normalizedBaseUrl}${ENGLISH_LOCALE}/`;
}

function detectHomepageLocale(): string {
  const primaryLanguage = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
  return primaryLanguage.startsWith(JAPANESE_LOCALE) ? JAPANESE_LOCALE : ENGLISH_LOCALE;
}

export default function Home(): ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const iconUrl = useBaseUrl('/img/codex-pocket-icon.png');
  const macSetupUrl = useBaseUrl('/docs/mac/');
  const canonicalUrl = `${siteConfig.url}${getLocaleHomePath(siteConfig.baseUrl, i18n.currentLocale)}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodexPocket',
    url: canonicalUrl,
    description:
      'Resume the Codex running on your Mac from your iPhone with same-LAN QR pairing, Project access, and lightweight follow-ups away from your desk.',
    inLanguage: ['ja-JP', 'en-US'],
    publisher: {
      '@type': 'Organization',
      name: 'CodexPocket',
      url: 'https://github.com/codex-pocket',
    },
  };

  useEffect(() => {
    const currentPath = ensureTrailingSlash(window.location.pathname);
    const japaneseHomepagePath = getLocaleHomePath(siteConfig.baseUrl, JAPANESE_LOCALE);

    if (currentPath !== japaneseHomepagePath) {
      return;
    }

    const preferredLocale = detectHomepageLocale();
    const targetPath = getLocaleHomePath(siteConfig.baseUrl, preferredLocale);

    if (currentPath === targetPath) {
      return;
    }

    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = targetPath;
    window.location.replace(nextUrl.toString());
  }, [siteConfig.baseUrl]);

  const benefits: BenefitItem[] = [
    {
      tone: 'ember',
      eyebrow: translate({
        id: 'home.benefit.remote.eyebrow',
        message: 'Without going back',
      }),
      title: translate({
        id: 'home.benefit.remote.title',
        message: 'Mac に戻る前のひとことを返しやすい',
      }),
      body: translate({
        id: 'home.benefit.remote.body',
        message:
          'Project を開いて Thread や Composer に入れるので、ちょっとした確認や追記のために席へ戻る回数を減らせます。',
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
        message: '同じ LAN で QR pairing できる',
      }),
      body: translate({
        id: 'home.benefit.setup.body',
        message:
          'Mac 側で companion app を開いて QR を出し、iPhone で読み取れば Host 追加まで数ステップで終わります。',
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
        message: '同じネットワーク内で使う companion',
      }),
      body: translate({
        id: 'home.limitations.lan.body',
        message:
          'Mac と iPhone が同じ LAN にいるときの軽い再開を主目的にしています。',
      }),
    },
    {
      title: translate({
        id: 'home.limitations.realtime.title',
        message: '実行と管理の中心は Mac 側',
      }),
      body: translate({
        id: 'home.limitations.realtime.body',
        message:
          'Bridge、ログ、Project 管理は Mac に置いたまま、iPhone は確認と入力に集中する構成です。',
      }),
    },
    {
      title: translate({
        id: 'home.limitations.future.title',
        message: '外出先からの常時リモート向けではない',
      }),
      body: translate({
        id: 'home.limitations.future.body',
        message:
          'どこからでも常時つなぐ用途より、席を立ったあとの短いやり取りを楽にする使い方に向いています。',
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
        message: 'Project を開いて続きを返す',
      }),
      body: translate({
        id: 'home.step.resume.body',
        message:
          'Project を開き、Thread を追ったり Composer からひとこと追記したり、新しい thread を始めたりできます。',
      }),
    },
  ];

  const scenarios: ScenarioItem[] = [
    {
      title: translate({
        id: 'home.scenario.commute.title',
        message: 'ソファから進捗だけ見たい',
      }),
      body: translate({
        id: 'home.scenario.commute.body',
        message:
          '長めの作業を Mac に任せたまま、iPhone で Thread を開いて状況だけ先に確認できます。',
      }),
    },
    {
      title: translate({
        id: 'home.scenario.away.title',
        message: '寝る前に 1 件だけ追記したい',
      }),
      body: translate({
        id: 'home.scenario.away.body',
        message:
          '新しい指示や追記を先に送っておき、戻れるタイミングで Mac 側の結果をまとめて確認できます。',
      }),
    },
    {
      title: translate({
        id: 'home.scenario.split.title',
        message: '子どもを見ながら確認したい',
      }),
      body: translate({
        id: 'home.scenario.split.body',
        message:
          '両手が空きにくい場面でも、Mac 側のセットアップを崩さず iPhone から Project と Thread を開けます。',
      }),
    },
    {
      title: translate({
        id: 'home.scenario.codexApp.title',
        message: 'Mac の Codex フローはそのままにしたい',
      }),
      body: translate({
        id: 'home.scenario.codexApp.body',
        message:
          '実行環境やログ管理は Mac に残し、iPhone は確認と軽い追記に寄せる使い方に向いています。',
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
        message: 'Mac の Codex を iPhone からすぐ再開',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'CodexPocket は、Mac で動く Codex を iPhone から軽く再開できる companion app です。',
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
                      id: 'home.badge.surface',
                      message: 'iPhone companion',
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
                    Macで動くCodexを、iPhoneからすぐ再開。
                  </Translate>
                </Heading>
                <p className={styles.heroLead}>
                  <Translate id="home.hero.lead">
                    席を立っても、開発の流れを止めない。CodexPocket は、Mac 側の Codex
                    環境はそのままに、iPhone から Project / Thread / Composer
                    を軽く扱える companion app です。ソファでも、外出前でも、寝る前でも、Mac
                    に戻る前のひとことを先に送れます。
                  </Translate>
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to={macSetupUrl}>
                    <Translate id="home.hero.downloadCta">Mac 側の準備を始める</Translate>
                  </Link>
                  <Link className="button button--primary button--lg" to="/docs/iphone/getting-started">
                    <Translate id="home.hero.primaryCta">iPhone の流れを見る</Translate>
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/shared/pairing-and-bridge">
                    <Translate id="home.hero.secondaryCta">ペアリングを見る</Translate>
                  </Link>
                </div>
                <p className={styles.heroMeta}>
                  <Translate id="home.hero.meta">
                    最初のセットアップは同じ LAN での QR pairing です。実行とログ管理は Mac
                    側に置いたまま使います。
                  </Translate>
                </p>
                <div className={styles.heroNotes}>
                  <span className={styles.heroNote}>
                    <Translate id="home.hero.note.lan">ソファから返せる</Translate>
                  </span>
                  <span className={styles.heroNote}>
                    <Translate id="home.hero.note.newThread">寝る前に 1 件だけ追記</Translate>
                  </span>
                  <span className={styles.heroNote}>
                    <Translate id="home.hero.note.sync">QR ですぐ pairing</Translate>
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
                      <p className={styles.visualTitle}>
                        <Translate id="home.visual.title">
                          操作は iPhone、実行は Mac。だから生活の合間に差し込みやすい。
                        </Translate>
                      </p>
                      <p className={styles.visualBodyText}>
                        <Translate id="home.visual.body">
                          companion app と bridge が Mac 側の source of truth を持ち、iPhone
                          は Project と Thread にすぐ戻るための入口になります。
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
                <Translate id="home.section.benefits.eyebrow">Why it helps</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.benefits.title">席を立った後の中断コストを減らす</Translate>
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
                <Translate id="home.section.steps.title">最初の成功体験までが短い</Translate>
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
                <Translate id="home.section.scenarios.eyebrow">Moments</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.scenarios.title">こういう瞬間に刺さる</Translate>
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
                <Translate id="home.section.limits.eyebrow">Best fit</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.limits.title">この前提に合うと刺さりやすい</Translate>
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
