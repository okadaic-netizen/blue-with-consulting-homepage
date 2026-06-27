import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "サービス | Blue With Consulting",
  description:
    "AI活用支援、DX推進支援、IT導入支援、経営改善支援、補助金活用支援をご提供しています。",
};

const services = [
  {
    title: "AI活用支援",
    color: "text-teal",
    border: "border-teal",
    items: ["生成AI活用", "業務効率化", "AI導入企画", "AI活用研修"],
  },
  {
    title: "DX推進支援",
    color: "text-blue",
    border: "border-blue",
    items: ["DX戦略策定", "業務改革", "デジタル化推進", "DXロードマップ作成"],
  },
  {
    title: "IT導入支援",
    color: "text-blue",
    border: "border-blue",
    items: [
      "システム選定",
      "Fit＆Gap分析",
      "ベンダー選定支援",
      "導入プロジェクト支援",
    ],
  },
  {
    title: "経営改善支援",
    color: "text-navy",
    border: "border-navy",
    items: ["経営診断", "経営計画策定", "財務分析", "業務改善"],
  },
  {
    title: "補助金活用支援",
    color: "text-orange",
    border: "border-orange",
    items: [
      "事業再構築",
      "ものづくり補助金",
      "IT導入補助金",
      "各種補助金申請支援",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <div className="relative bg-gray-light overflow-hidden">
        <Image
          src="/images/services-header.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="font-heading text-sm font-semibold tracking-wide text-blue uppercase">
            Services
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-navy">
            提供サービス
          </h1>
          <p className="mt-6 text-gray-dark max-w-2xl mx-auto">
            経営とITの両面から、AI活用・DX推進・IT導入・経営改善・補助金活用を伴走支援します。
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mt-0 space-y-10">
        {services.map((s) => (
          <div
            key={s.title}
            className={`rounded-lg border-l-4 ${s.border} bg-white p-8 shadow-sm`}
          >
            <h2 className={`font-heading text-xl sm:text-2xl font-bold ${s.color}`}>
              {s.title}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-dark"
                >
                  <span className={`inline-block h-1.5 w-1.5 rounded-full bg-current ${s.color}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-blue px-8 py-3 text-white font-semibold hover:bg-navy transition-colors"
        >
          サービスについて相談する
        </Link>
      </div>
      </div>
    </div>
  );
}
