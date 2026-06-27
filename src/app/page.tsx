import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "AI活用支援",
    desc: "生成AI活用、業務効率化、AI導入企画、AI活用研修",
    color: "border-teal",
  },
  {
    title: "DX推進支援",
    desc: "DX戦略策定、業務改革、デジタル化推進、DXロードマップ作成",
    color: "border-blue",
  },
  {
    title: "IT導入支援",
    desc: "システム選定、Fit＆Gap分析、ベンダー選定支援、導入プロジェクト支援",
    color: "border-blue",
  },
  {
    title: "経営改善支援",
    desc: "経営診断、経営計画策定、財務分析、業務改善",
    color: "border-navy",
  },
  {
    title: "補助金活用支援",
    desc: "事業再構築、ものづくり補助金、IT導入補助金、各種補助金申請支援",
    color: "border-orange",
  },
];

const brandStory = [
  {
    title: "Why Blue",
    lead: "中小企業には、まだ見えていない「ブルーオーシャン」がある。",
    desc: "長年事業を続けてきた企業には、必ず積み重ねてきた技術・経験・信頼・地域とのつながりがあります。その強みをともに見つけ、磨き、競争ではなく「独自の価値」で選ばれる企業づくりを支援します。",
  },
  {
    title: "Why Bridge",
    lead: "人・経営・IT・地域をつなぐ架け橋でありたい。",
    desc: "金融機関向けシステム開発と中小企業診断士としての支援、双方の経験を活かし、経営者・地域・金融機関・ITをつなぐ架け橋となることを目指します。",
  },
  {
    title: "Why AI/DX",
    lead: "AIやDXは目的ではなく、最初の一歩を踏み出すための手段。",
    desc: "スマートフォン活用やFAXのメール化など、小さな改善が大きな変革につながります。難しい専門用語ではなく、分かりやすい言葉でAI/DXを伝えていきます。",
  },
];

const strengths = [
  {
    title: "金融システム開発28年以上",
    desc: "大手SIerにて金融機関向けシステム開発に28年以上従事し、社内最高レベル資格を保有。",
  },
  {
    title: "大手SIer上級管理職",
    desc: "現在も信用金庫業界向け融資関連システム開発に従事し、実務感覚を維持。",
  },
  {
    title: "中小企業診断士",
    desc: "30社以上の経営診断実績を持ち、製造業からITスタートアップまで幅広く支援。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-light overflow-hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="font-heading text-sm sm:text-base font-semibold tracking-wide text-blue uppercase">
            Blue With Consulting
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-bold text-navy leading-tight">
            AI/DXと経営をつなぐ
            <br />
            伴走支援
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-dark max-w-2xl mx-auto">
            経営とITの両面から、中小企業の成長と変革を支援します。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-blue px-8 py-3 text-white font-semibold hover:bg-navy transition-colors"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-navy px-8 py-3 text-navy font-semibold hover:bg-navy hover:text-white transition-colors"
            >
              サービスを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
          提供サービス
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-lg border-t-4 ${s.color} bg-white p-6 shadow-sm`}
            >
              <h3 className="font-heading font-semibold text-lg text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-dark">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center">
            経営 × 金融 × IT × AI
          </h2>
          <p className="mt-4 text-center text-gray-medium max-w-2xl mx-auto">
            戦略策定だけではなく、IT導入・DX推進・AI活用・運用定着まで伴走支援できることが特徴です。
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {strengths.map((s) => (
              <div key={s.title}>
                <h3 className="font-heading font-semibold text-support-blue">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-heading text-sm font-semibold tracking-wide text-blue uppercase text-center">
          Brand Story
        </p>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-navy text-center">
          企業には、まだ気付いていない強みがあります。
        </h2>
        <p className="mt-4 text-center text-gray-dark max-w-2xl mx-auto">
          その強みを見つけ、磨き、未来へつなぐ。Blue With Consulting は、お客様とともに歩み、日本を元気にする架け橋であり続けます。
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {brandStory.map((b) => (
            <div key={b.title} className="rounded-lg border-t-4 border-blue bg-white p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-blue">{b.title}</h3>
              <p className="mt-3 font-heading font-semibold text-navy text-sm leading-snug">
                {b.lead}
              </p>
              <p className="mt-3 text-sm text-gray-dark leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy">
          まずはお気軽にご相談ください
        </h2>
        <p className="mt-4 text-gray-dark">
          AI活用、DX化、システム導入、補助金活用、経営改善についてのご相談を承っております。
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-md bg-blue px-8 py-3 text-white font-semibold hover:bg-navy transition-colors"
        >
          お問い合わせフォームへ
        </Link>
      </section>
    </>
  );
}
