import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | Blue With Consulting",
  description: "Blue With Consultingの会社概要です。",
};

const rows: [string, string][] = [
  ["事業者名", "Blue With Consulting"],
  ["代表者", "岡田 一郎（中小企業診断士）"],
  ["設立", "2022年"],
  ["事業内容", "AI活用支援、DX推進支援、IT導入支援、経営改善支援、補助金活用支援"],
  ["所在地", "〒141-0021　東京都品川区上大崎3-14-34　プラスワン402"],
];

export default function CompanyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="font-heading text-sm font-semibold tracking-wide text-blue uppercase">
          Company
        </p>
        <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-navy">
          会社概要
        </h1>
      </div>

      <dl className="mt-16 divide-y divide-gray-medium/30 border-t border-b border-gray-medium/30">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-5"
          >
            <dt className="font-heading font-semibold text-navy">{label}</dt>
            <dd className="sm:col-span-2 text-sm text-gray-dark">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
