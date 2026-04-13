import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type HighlightItem = {
  tone: 'ember' | 'sand' | 'ink';
  eyebrow: string;
  title: string;
  body: string;
};

type WorkflowStep = {
  step: string;
  title: string;
  body: string;
};

type ContentCard = {
  path: string;
  title: string;
  body: string;
};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const iconUrl = useBaseUrl('/img/codex-pocket-icon.png');
  const releaseVersion = String(siteConfig.customFields?.releaseVersion ?? '0.1.0');
  const canonicalUrl = `${siteConfig.url}${siteConfig.baseUrl}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodexPocket Docs',
    url: canonicalUrl,
    description:
      'Official documentation for CodexPocket, the iPhone app and macOS companion bridge for Codex pairing, threads, and remote workflows.',
    inLanguage: ['ja-JP', 'en-US'],
    publisher: {
      '@type': 'Organization',
      name: 'CodexPocket',
      url: 'https://github.com/codex-pocket',
    },
  };

  const highlights: HighlightItem[] = [
    {
      tone: 'ember',
      eyebrow: translate({
        id: 'home.highlight.version.eyebrow',
        message: 'Version-aware',
      }),
      title: translate({
        id: 'home.highlight.version.title',
        message: '安定版と next を分けて運用',
      }),
      body: translate({
        id: 'home.highlight.version.body',
        message:
          '0.1.0 を最新安定版として固定しつつ、docs/ はそのまま next として育てられます。',
      }),
    },
    {
      tone: 'sand',
      eyebrow: translate({
        id: 'home.highlight.locale.eyebrow',
        message: 'Bilingual',
      }),
      title: translate({
        id: 'home.highlight.locale.title',
        message: '日本語と English を同じ構造で維持',
      }),
      body: translate({
        id: 'home.highlight.locale.body',
        message:
          '本文は docs と i18n/en に分け、ホームや UI 文言は translation catalog で管理できます。',
      }),
    },
    {
      tone: 'ink',
      eyebrow: translate({
        id: 'home.highlight.structure.eyebrow',
        message: 'Structured',
      }),
      title: translate({
        id: 'home.highlight.structure.title',
        message: '内容をまだ書かなくても見た目と導線は成立',
      }),
      body: translate({
        id: 'home.highlight.structure.body',
        message:
          'Guide / Reference / Release policy の箱を先に作っているので、あとから内容を流し込みやすい状態です。',
      }),
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      step: '01',
      title: translate({
        id: 'home.workflow.author.title',
        message: 'docs/ で次版を書く',
      }),
      body: translate({
        id: 'home.workflow.author.body',
        message:
          '作業中の本文は docs/ 側に集約し、未リリースの変更は /docs/next/ で確認します。',
      }),
    },
    {
      step: '02',
      title: translate({
        id: 'home.workflow.version.title',
        message: 'docs:version で版を確定',
      }),
      body: translate({
        id: 'home.workflow.version.body',
        message:
          '公開タイミングで docs snapshot と sidebar を versioned_docs / versioned_sidebars へ固定します。',
      }),
    },
    {
      step: '03',
      title: translate({
        id: 'home.workflow.translate.title',
        message: 'i18n/en を揃えて並行公開',
      }),
      body: translate({
        id: 'home.workflow.translate.body',
        message:
          '本文、sidebar、ホーム、theme 文言を英語へ差し替え、locale dropdown から切り替えられます。',
      }),
    },
  ];

  const contentCards: ContentCard[] = [
    {
      path: 'docs/',
      title: translate({
        id: 'home.content.docs.title',
        message: '次の未リリース版',
      }),
      body: translate({
        id: 'home.content.docs.body',
        message:
          '最新の作業内容はここで編集します。versioning 後は自動で next 側の導線になります。',
      }),
    },
    {
      path: 'versioned_docs/',
      title: translate({
        id: 'home.content.versioned.title',
        message: '公開済みスナップショット',
      }),
      body: translate({
        id: 'home.content.versioned.body',
        message:
          'リリースごとの固定ページ群です。過去版への導線を壊さずに履歴を持てます。',
      }),
    },
    {
      path: 'i18n/en/',
      title: translate({
        id: 'home.content.i18n.title',
        message: '英語ローカライズ',
      }),
      body: translate({
        id: 'home.content.i18n.body',
        message:
          'docs 本文と code/theme 翻訳を分けて管理できるようにしてあります。',
      }),
    },
    {
      path: 'static/img/',
      title: translate({
        id: 'home.content.brand.title',
        message: 'ブランドアセット',
      }),
      body: translate({
        id: 'home.content.brand.body',
        message:
          'favicon、ロゴ、social card を app icon の雰囲気に揃えて配置しています。',
      }),
    },
  ];

  return (
    <Layout
      title={translate({
        id: 'home.meta.title',
        message: 'Official docs for the iPhone app and macOS companion bridge',
      })}
      description={translate({
        id: 'home.meta.description',
        message:
          'Official documentation for CodexPocket, covering the iPhone client, macOS companion app, pairing, bridge, and thread workflows.',
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
                      id: 'home.badge.locale',
                      message: 'ja / en',
                    })}
                  </span>
                  <span className={styles.badge}>
                    {translate({
                      id: 'home.badge.stack',
                      message: 'Docusaurus 3',
                    })}
                  </span>
                </div>
                <Heading as="h1" className={styles.heroTitle}>
                  <Translate id="home.hero.title">
                    CodexPocket の iPhone app と macOS companion bridge の公式ドキュメント。
                  </Translate>
                </Heading>
                <p className={styles.heroLead}>
                  <Translate id="home.hero.lead">
                    CodexPocket は、Codex を iPhone から扱うためのクライアントと、
                    macOS 上で動く companion app / bridge で構成されています。このサイトでは、
                    pairing、bridge、thread workflow、release 運用を安定版と next の両方で追えるようにしています。
                  </Translate>
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to="/docs/">
                    <Translate id="home.hero.primaryCta">最新リリースを見る</Translate>
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/next/">
                    <Translate id="home.hero.secondaryCta">next を開く</Translate>
                  </Link>
                </div>
                <p className={styles.heroMeta}>
                  <Translate
                    id="home.hero.meta"
                    values={{releaseVersion}}>
                    {`現在の安定版は {releaseVersion}。新規コンテンツは docs/ に置き、公開タイミングで versioned_docs/ へ固定します。`}
                  </Translate>
                </p>
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
                    <div className={styles.iconWrap}>
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
                          <Translate id="home.visual.releaseLabel">Latest release</Translate>
                        </span>
                        <strong>{releaseVersion}</strong>
                      </div>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.channelLabel">Working branch</Translate>
                        </span>
                        <strong>next</strong>
                      </div>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.localeLabel">Locales</Translate>
                        </span>
                        <strong>ja / en</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pathPanel}>
                  <p className={styles.pathPanelTitle}>
                    <Translate id="home.visual.panelTitle">Content flow</Translate>
                  </p>
                  <div className={styles.pathRow}>
                    <code>docs/</code>
                    <span>→</span>
                    <code>docs:version</code>
                    <span>→</span>
                    <code>versioned_docs/</code>
                  </div>
                  <div className={styles.pathRow}>
                    <code>docs/</code>
                    <span>→</span>
                    <code>i18n/en/</code>
                    <span>→</span>
                    <code>locale dropdown</code>
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
                <Translate id="home.section.highlights.eyebrow">
                  Already wired
                </Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.highlights.title">
                  今の段階で通してあるポイント
                </Translate>
              </Heading>
            </div>
            <div className={styles.highlightGrid}>
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className={styles.highlightCard}
                  data-tone={item.tone}>
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
                <Translate id="home.section.workflow.eyebrow">
                  Workflow
                </Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.workflow.title">
                  版管理と翻訳の流れを 3 段階に整理
                </Translate>
              </Heading>
            </div>
            <div className={styles.workflowGrid}>
              {workflowSteps.map((item) => (
                <article key={item.step} className={styles.workflowCard}>
                  <span className={styles.workflowStep}>{item.step}</span>
                  <Heading as="h3" className={styles.workflowTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.workflowBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.structure.eyebrow">
                  Authoring map
                </Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.structure.title">
                  本文を入れ始める場所も先に揃えてあります
                </Translate>
              </Heading>
            </div>
            <div className={styles.contentGrid}>
              {contentCards.map((item) => (
                <article key={item.path} className={styles.contentCard}>
                  <code className={styles.contentPath}>{item.path}</code>
                  <Heading as="h3" className={styles.contentTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.contentBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
