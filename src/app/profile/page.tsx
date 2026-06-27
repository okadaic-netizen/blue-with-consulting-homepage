import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "代表者プロフィール | Blue With Consulting",
  description:
    "Blue With Consulting 代表 岡田一郎のプロフィール。中小企業診断士として30社以上の経営診断実績を持ち、大手SIerにて金融機関向けシステム開発に28年以上従事。",
};

const qualifications = [
  "中小企業診断士",
  "CFP®",
  "日商簿記2級",
  "ISO9001内部監査員",
  "SAFeアジリスト",
  "G検定",
];

const affiliations = [
  "一般社団法人東京都中小企業診断士協会 中央支部 能力開発推進部",
  "NPO法人品川中小企業診断士会 理事",
  "AI・人工知能研究会",
  "HKS補助金活用支援会 コンサルタント",
];

const industries = [
  "ゴム製造業",
  "印刷・製本業",
  "活水器製造販売業",
  "製粉業",
  "ガス保安サービス業",
  "警備保障サービス業",
  "ソフトウェア開発業",
  "ITスタートアップ",
  "人材派遣業",
  "プログラミング教室",
  "カフェ",
  "飲食業",
];

const writings = [
  {
    title: "業種別融資取引推進ガイドNET",
    publisher: "銀行研修社",
    note: "改訂協力多数",
  },
  {
    title: "中小企業DX課題 ～従業員のITリテラシーを高めるには～",
    publisher: "経営力向上アドバンス 専門家コラム",
  },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full ring-4 ring-gray-light shadow-sm">
          <Image
            src="/images/profile-photo.jpg"
            alt="岡田 一郎"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mt-6 font-heading text-sm font-semibold tracking-wide text-blue uppercase">
          Profile
        </p>
        <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-navy">
          岡田 一郎
        </h1>
        <p className="mt-2 text-gray-dark">
          Blue With Consulting 代表 / 中小企業診断士
        </p>
        <p className="mt-6 max-w-xl text-sm text-gray-dark leading-relaxed border-l-4 border-blue pl-4 text-left">
          経営者・地域・金融機関・ITをつなぐ架け橋になりたい。長年の金融システム開発と中小企業診断士としての支援経験を通じて、その想いを強くしてきました。
        </p>
      </div>

      <section className="mt-16">
        <h2 className="font-heading text-xl font-bold text-navy border-b-2 border-blue pb-2">
          経歴
        </h2>
        <ul className="mt-6 space-y-3 text-sm text-gray-dark">
          <li>2007年 中小企業診断士登録</li>
          <li>2022年 Blue With Consulting 開業</li>
          <li>大手SIer勤務、金融機関向けシステム開発に28年以上従事</li>
          <li>社内最高レベル資格 エグゼクティブ・アプリケーション・スペシャリスト保有</li>
          <li>現在は信用金庫業界向け融資関連システム開発に従事</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-xl font-bold text-navy border-b-2 border-blue pb-2">
          強み
        </h2>
        <p className="mt-6 font-heading font-semibold text-blue">
          経営 × 金融 × IT × AI
        </p>
        <p className="mt-3 text-sm text-gray-dark leading-relaxed">
          中小企業診断士としての経営支援経験と、金融機関向けシステム開発28年以上の実務経験を併せ持つ。
          戦略策定だけではなく、IT導入・DX推進・AI活用・運用定着まで伴走支援できることが特徴です。
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "AI活用支援",
            "DX推進支援",
            "IT導入支援",
            "Fit＆Gap分析",
            "システム導入支援",
            "財務分析",
            "管理会計",
            "金融業務",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-light px-3 py-1 text-xs text-navy border border-blue/20"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-xl font-bold text-navy border-b-2 border-blue pb-2">
          実績
        </h2>
        <p className="mt-6 text-sm text-gray-dark">
          30社以上の経営診断実績があります。主な業種は以下の通りです。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {industries.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-light px-3 py-1 text-xs text-gray-dark"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-xl font-bold text-navy border-b-2 border-blue pb-2">
            保有資格
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-gray-dark">
            {qualifications.map((q) => (
              <li key={q}>・{q}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-navy border-b-2 border-blue pb-2">
            所属
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-gray-dark">
            {affiliations.map((a) => (
              <li key={a}>・{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-xl font-bold text-navy border-b-2 border-blue pb-2">
          執筆実績
        </h2>
        <ul className="mt-6 space-y-4 text-sm text-gray-dark">
          {writings.map((w) => (
            <li key={w.title}>
              <p className="font-medium text-navy">「{w.title}」</p>
              <p className="text-gray-dark">
                {w.publisher}
                {w.note ? ` ／ ${w.note}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
