import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | Blue With Consulting",
  description:
    "AI活用、DX化、システム導入、補助金活用、経営改善についてのご相談はこちらから。",
};

export default function ContactPage() {
  return (
    <div>
      <div className="relative bg-gray-light overflow-hidden">
        <Image
          src="/images/contact-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="font-heading text-sm font-semibold tracking-wide text-blue uppercase">
            Contact
          </p>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-navy">
            お問い合わせ
          </h1>
          <p className="mt-6 text-sm text-gray-dark">
            AI活用を進めたい／DX化を進めたい／システム導入を検討している／
            補助金を活用したい／経営改善について相談したい、など
            お気軽にお問い合わせください。
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
