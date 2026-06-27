import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Image
              src="/logo/reverse-logo.png"
              alt="Blue With Consulting"
              width={180}
              height={138}
              className="h-12 w-auto"
            />
            <p className="mt-3 text-sm text-gray-medium">
              AI/DXと経営をつなぐ伴走支援
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/services" className="hover:text-support-blue">サービス</Link>
            <Link href="/profile" className="hover:text-support-blue">代表者プロフィール</Link>
            <Link href="/company" className="hover:text-support-blue">会社概要</Link>
            <Link href="/contact" className="hover:text-support-blue">お問い合わせ</Link>
          </nav>
        </div>
        <p className="mt-10 text-xs text-gray-medium">
          &copy; {new Date().getFullYear()} Blue With Consulting
        </p>
      </div>
    </footer>
  );
}
