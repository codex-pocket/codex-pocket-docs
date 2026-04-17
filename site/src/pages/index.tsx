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

type FeaturedScenarioItem = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
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

function getDefaultLocaleBasePath(baseUrl: string, currentLocale: string): string {
  const normalizedBaseUrl = ensureTrailingSlash(baseUrl);

  if (currentLocale === JAPANESE_LOCALE) {
    return normalizedBaseUrl;
  }

  const localeSuffix = `${currentLocale}/`;
  return normalizedBaseUrl.endsWith(localeSuffix)
    ? normalizedBaseUrl.slice(0, -localeSuffix.length)
    : normalizedBaseUrl;
}

function getLocaleHomePath(baseUrl: string, currentLocale: string, targetLocale: string): string {
  const defaultLocaleBasePath = getDefaultLocaleBasePath(baseUrl, currentLocale);
  return targetLocale === JAPANESE_LOCALE
    ? defaultLocaleBasePath
    : `${defaultLocaleBasePath}${targetLocale}/`;
}

function detectHomepageLocale(): string {
  const primaryLanguage = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
  return primaryLanguage.startsWith(JAPANESE_LOCALE) ? JAPANESE_LOCALE : ENGLISH_LOCALE;
}

export default function Home(): ReactNode {
  const {siteConfig, i18n} = useDocusaurusContext();
  const iconUrl = useBaseUrl('/img/codex-pocket-icon.png');
  const sofaScenarioImageUrl = useBaseUrl('/img/home/sofa-codex-follow-up.webp');
  const bedtimeScenarioImageUrl = useBaseUrl('/img/home/bedtime-codex-follow-up.webp');
  const breaktimeScenarioImageUrl = useBaseUrl('/img/home/breaktime-codex-follow-up.webp');
  const stableVersion = String(siteConfig.customFields?.stableVersion ?? '0.1.3');
  const macDownloadUrl = String(
    siteConfig.customFields?.macDownloadUrl ??
      'https://github.com/codex-pocket/codex-pocket-releases/releases',
  ).trim();
  const iphoneAppStoreUrl = String(siteConfig.customFields?.iphoneAppStoreUrl ?? '').trim();
  const iphoneTestFlightUrl = String(siteConfig.customFields?.iphoneTestFlightUrl ?? '').trim();
  const iphoneInstallFallbackUrl = useBaseUrl('/docs/iphone/getting-started');
  const hasPublicIphoneDownload = iphoneAppStoreUrl.length > 0 || iphoneTestFlightUrl.length > 0;
  const iphoneInstallUrl = iphoneAppStoreUrl || iphoneTestFlightUrl || iphoneInstallFallbackUrl;
  const currentLocaleHomePath = ensureTrailingSlash(siteConfig.baseUrl);
  const canonicalUrl = new URL(currentLocaleHomePath, siteConfig.url).toString();
  const currentLanguageTag =
    i18n.currentLocale === JAPANESE_LOCALE ? 'ja-JP' : 'en-US';
  const metaTitle = translate({
    id: 'home.meta.title',
    message: 'Mac の Codex を iPhone からすぐ再開',
  });
  const metaDescription = translate({
    id: 'home.meta.description',
    message:
      'CodexPocket は、Mac で動く Codex を iPhone から軽く再開できる iPhone 向けアプリです。',
  });
  const iphonePrimaryCta = hasPublicIphoneDownload
    ? translate({
        id: 'home.hero.primaryCta.public',
        message: 'iPhone アプリを入手',
      })
    : translate({
        id: 'home.hero.primaryCta.unavailable',
        message: 'iPhone の配布状況を見る',
      });
  const heroMeta = hasPublicIphoneDownload
    ? translate({
        id: 'home.hero.meta.public',
        message:
          'Mac 版 {stableVersion} を公開中です。iPhone アプリを入れたら、同じ LAN で QR を読み取るだけで最初の連携を終えられます。',
      }, {stableVersion})
    : translate({
        id: 'home.hero.meta.unavailable',
        message:
          'Mac 版 {stableVersion} を公開中です。iPhone 側は公開 App Store / TestFlight リンクがまだないため、現在の配布状況を先に確認してください。',
      }, {stableVersion});
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CodexPocket',
    url: canonicalUrl,
    description: metaDescription,
    inLanguage: currentLanguageTag,
    publisher: {
      '@type': 'Organization',
      name: 'CodexPocket',
      url: 'https://github.com/codex-pocket',
    },
  };

  useEffect(() => {
    const currentPath = ensureTrailingSlash(window.location.pathname);
    const japaneseHomepagePath = getLocaleHomePath(
      siteConfig.baseUrl,
      i18n.currentLocale,
      JAPANESE_LOCALE,
    );

    if (currentPath !== japaneseHomepagePath) {
      return;
    }

    const preferredLocale = detectHomepageLocale();
    const targetPath = getLocaleHomePath(
      siteConfig.baseUrl,
      i18n.currentLocale,
      preferredLocale,
    );

    if (currentPath === targetPath) {
      return;
    }

    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = targetPath;
    window.location.replace(nextUrl.toString());
  }, [i18n.currentLocale, siteConfig.baseUrl]);

  const benefits: BenefitItem[] = [
    {
      tone: 'ember',
      eyebrow: translate({
        id: 'home.benefit.remote.eyebrow',
        message: 'まず見る場所',
      }),
      title: translate({
        id: 'home.benefit.remote.title',
        message: 'いまの作業へ迷わず戻れる',
      }),
      body: translate({
        id: 'home.benefit.remote.body',
        message:
          'Mac 側で進めていた作業を一覧からそのまま開けるので、どこを見ればよいかの拾い直しが早くなります。',
      }),
    },
    {
      tone: 'sand',
      eyebrow: translate({
        id: 'home.benefit.setup.eyebrow',
        message: 'すぐつながる',
      }),
      title: translate({
        id: 'home.benefit.setup.title',
        message: '同じ LAN なら QR ですぐつながる',
      }),
      body: translate({
        id: 'home.benefit.setup.body',
        message:
          'Mac 側でアプリを開いて QR を出し、iPhone で読み取れば接続先の追加まで数ステップで終わります。',
      }),
    },
    {
      tone: 'ink',
      eyebrow: translate({
        id: 'home.benefit.context.eyebrow',
        message: '迷いにくい',
      }),
      title: translate({
        id: 'home.benefit.context.title',
        message: '作業単位で迷わない',
      }),
      body: translate({
        id: 'home.benefit.context.body',
        message:
          '会話、ブランチ、スキル、コマンドを作業ごとにまとめて扱えるので、どの環境の操作かを見失いにくい構成です。',
      }),
    },
  ];

  const setupSteps: StepItem[] = [
    {
      step: '01',
      title: translate({
        id: 'home.step.bridge.title',
        message: 'Mac で接続の準備をする',
      }),
      body: translate({
        id: 'home.step.bridge.body',
        message:
          'Mac アプリで QR と作業一覧を用意します。',
      }),
    },
    {
      step: '02',
      title: translate({
        id: 'home.step.pair.title',
        message: 'iPhone で Mac を追加する',
      }),
      body: translate({
        id: 'home.step.pair.body',
        message:
          'QR かコードで取り込み、接続確認と作業一覧の読み込みが終わるのを待ちます。',
      }),
    },
    {
      step: '03',
      title: translate({
        id: 'home.step.resume.title',
        message: '作業を開いて続きを返す',
      }),
      body: translate({
        id: 'home.step.resume.body',
        message:
          '作業を開き、やり取りを追ったり入力欄からひとこと追記したり、新しい会話を始めたりできます。',
      }),
    },
  ];

  const featuredScenarios: FeaturedScenarioItem[] = [
    {
      eyebrow: translate({
        id: 'home.scenario.feature.sofa.eyebrow',
        message: 'ソファで',
      }),
      title: translate({
        id: 'home.scenario.commute.title',
        message: 'ソファから進捗だけ見たい',
      }),
      body: translate({
        id: 'home.scenario.commute.body',
        message:
          '長めの作業を Mac に任せたまま、iPhone で会話を開いて状況だけ先に確認できます。',
      }),
      imageSrc: sofaScenarioImageUrl,
      imageAlt: translate({
        id: 'home.scenario.feature.sofa.alt',
        message: 'ソファでスマートフォンから CodexPocket を使う様子のイラスト',
      }),
    },
    {
      eyebrow: translate({
        id: 'home.scenario.feature.nightcare.eyebrow',
        message: '寝かしつけのあと',
      }),
      title: translate({
        id: 'home.scenario.nightcare.title',
        message: '寝かしつけのあとに 1 件だけ返したい',
      }),
      body: translate({
        id: 'home.scenario.nightcare.body',
        message:
          '子どもが寝たあとに追記だけ先に返して、重い作業やログの確認は Mac 側へ残したままにできます。',
      }),
      imageSrc: bedtimeScenarioImageUrl,
      imageAlt: translate({
        id: 'home.scenario.feature.nightcare.alt',
        message: '子どもが寝たあとにベッドでスマートフォンから CodexPocket を使う様子のイラスト',
      }),
    },
    {
      eyebrow: translate({
        id: 'home.scenario.feature.breaktime.eyebrow',
        message: 'くつろぎ時間に',
      }),
      title: translate({
        id: 'home.scenario.breaktime.title',
        message: '休憩の合間に 1 件だけ返したい',
      }),
      body: translate({
        id: 'home.scenario.breaktime.body',
        message:
          '動画やゲームの合間でも、iPhone から follow-up を先に返して、実行やログ管理は Mac 側の flow に任せられます。',
      }),
      imageSrc: breaktimeScenarioImageUrl,
      imageAlt: translate({
        id: 'home.scenario.feature.breaktime.alt',
        message: 'くつろぎながらスマートフォンから CodexPocket を使う様子のイラスト',
      }),
    },
  ];

  const guideCards: GuideCard[] = [
    {
      path: '/docs/mac/',
      eyebrow: translate({
        id: 'home.guide.mac.eyebrow',
        message: '準備',
      }),
      title: translate({
        id: 'home.guide.mac.title',
        message: 'Mac から始める',
      }),
      body: translate({
        id: 'home.guide.mac.body',
        message:
          'Mac アプリ、接続機能、QR、ログなど管理面を先に見たい人向けの入口です。',
      }),
      cta: translate({
        id: 'home.guide.mac.cta',
        message: 'Mac ガイドへ',
      }),
    },
    {
      path: '/docs/iphone/getting-started',
      eyebrow: translate({
        id: 'home.guide.iphone.eyebrow',
        message: 'はじめる',
      }),
      title: translate({
        id: 'home.guide.iphone.title',
        message: 'iPhone から始める',
      }),
      body: translate({
        id: 'home.guide.iphone.body',
        message:
          'Mac の追加、作業一覧、やり取り、入力欄を先に把握したい人向けの入口です。',
      }),
      cta: translate({
        id: 'home.guide.iphone.cta',
        message: 'iPhone ガイドへ',
      }),
    },
    {
      path: '/docs/shared/',
      eyebrow: translate({
        id: 'home.guide.shared.eyebrow',
        message: '連携',
      }),
      title: translate({
        id: 'home.guide.shared.title',
        message: 'Mac と iPhone のつなぎ方',
      }),
      body: translate({
        id: 'home.guide.shared.body',
        message:
          'iPhone と Mac の境界をまたぐ内容だけをまとめて追えるセクションです。',
      }),
      cta: translate({
        id: 'home.guide.shared.cta',
        message: '連携ガイドへ',
      }),
    },
    {
      path: '/docs/reference/architecture',
      eyebrow: translate({
        id: 'home.guide.reference.eyebrow',
        message: '補足',
      }),
      title: translate({
        id: 'home.guide.reference.title',
        message: 'アーキテクチャと運用',
      }),
      body: translate({
        id: 'home.guide.reference.body',
        message:
          '公開方針や多言語対応を含む横断情報を参照したいときの入口です。',
      }),
      cta: translate({
        id: 'home.guide.reference.cta',
        message: '補足を見る',
      }),
    },
  ];

  return (
    <Layout
      title={metaTitle}
      description={metaDescription}
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
                <Heading as="h1" className={styles.heroTitle}>
                  <Translate id="home.hero.title">
                    Macで動くCodexを、iPhoneからすぐ再開。
                  </Translate>
                </Heading>
                <p className={styles.heroLead}>
                  <Translate id="home.hero.lead">
                    席を立っても、開発の流れを止めない。CodexPocket は、Mac 側の Codex
                    環境はそのままに、iPhone から作業を開いて状況を見たり、ひとこと追記したりできる
                    iPhone 向けアプリです。Mac に戻る前の短い確認や follow-up を、生活の合間に先に片付けられます。
                  </Translate>
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" href={macDownloadUrl}>
                    <Translate id="home.hero.downloadCta">Mac アプリをダウンロード</Translate>
                  </Link>
                  <Link className="button button--primary button--lg" href={iphoneInstallUrl}>
                    {iphonePrimaryCta}
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/shared/pairing-and-bridge">
                    <Translate id="home.hero.secondaryCta">つなぎ方を見る</Translate>
                  </Link>
                </div>
                <p className={styles.heroMeta}>
                  {heroMeta}
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
                    <div className={styles.visualIntro}>
                      <span className={styles.visualEyebrow}>
                        <Translate id="home.visual.eyebrow">Mac と iPhone の役割</Translate>
                      </span>
                      <p className={styles.visualTitle}>
                        <Translate id="home.visual.title">
                          操作は iPhone、実行は Mac。だから生活の合間に差し込みやすい。
                        </Translate>
                      </p>
                      <p className={styles.visualBodyText}>
                        <Translate id="home.visual.body">
                          Mac 側アプリと接続機能が作業の本体を持ち、iPhone は必要なときにすぐ戻るための入口になります。
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
                          <Translate id="home.visual.setup.label">準備</Translate>
                        </span>
                        <strong className={styles.visualValue}>
                          <Translate id="home.visual.setup.value">QR でつなぐ</Translate>
                        </strong>
                      </div>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.context.label">整理</Translate>
                        </span>
                        <strong className={styles.visualValue}>
                          <Translate id="home.visual.context.value">作業ごとに整理</Translate>
                        </strong>
                      </div>
                      <div className={styles.visualCard}>
                        <span className={styles.visualLabel}>
                          <Translate id="home.visual.action.label">操作</Translate>
                        </span>
                        <strong className={styles.visualValue}>
                          <Translate id="home.visual.action.value">入力欄から新しい会話</Translate>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.carryPanel}>
                  <p className={styles.carryPanelTitle}>
                    <Translate id="home.visual.panelTitle">iPhone で触れるもの</Translate>
                  </p>
                  <div className={styles.carryRow}>
                    <span className={styles.carryLabel}>
                      <Translate id="home.visual.panel.host.label">接続先</Translate>
                    </span>
                    <span className={styles.carryBody}>
                      <Translate id="home.visual.panel.host.body">どの Mac を開くか</Translate>
                    </span>
                  </div>
                  <div className={styles.carryRow}>
                    <span className={styles.carryLabel}>
                      <Translate id="home.visual.panel.project.label">作業</Translate>
                    </span>
                    <span className={styles.carryBody}>
                      <Translate id="home.visual.panel.project.body">
                        会話やブランチの起点
                      </Translate>
                    </span>
                  </div>
                  <div className={styles.carryRow}>
                    <span className={styles.carryLabel}>
                      <Translate id="home.visual.panel.composer.label">入力欄</Translate>
                    </span>
                    <span className={styles.carryBody}>
                      <Translate id="home.visual.panel.composer.body">
                        追記、スキル、単発実行の入口
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
                <Translate id="home.section.scenarios.eyebrow">向いている場面</Translate>
              </span>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="home.section.scenarios.title">こういう瞬間に刺さる</Translate>
              </Heading>
            </div>
            <div className={styles.featuredScenarioGrid}>
              {featuredScenarios.map((item) => (
                <article key={item.title} className={styles.featuredScenarioCard}>
                  <div className={styles.featuredScenarioMedia}>
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className={styles.featuredScenarioImage}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.featuredScenarioContent}>
                    <span className={styles.featuredScenarioEyebrow}>{item.eyebrow}</span>
                    <Heading as="h3" className={styles.featuredScenarioTitle}>
                      {item.title}
                    </Heading>
                    <p className={styles.featuredScenarioBody}>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                <Translate id="home.section.benefits.eyebrow">できること</Translate>
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
                <Translate id="home.section.steps.eyebrow">はじめ方</Translate>
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
                <Translate id="home.section.guides.eyebrow">ガイド</Translate>
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

      </main>
    </Layout>
  );
}
