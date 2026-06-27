import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/services", label: "サービス" },
  { href: "/profile", label: "代表者プロフィール" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-medium/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/main-logo.png"
            alt="Blue With Consulting"
            width={220}
            height={64}
            className="h-9 sm:h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-dark hover:text-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-blue px-4 py-2 text-sm font-semibold text-white hover:bg-navy transition-colors"
        >
          お問い合わせ
        </Link>
      </div>
      <nav className="md:hidden flex items-center gap-4 overflow-x-auto px-4 pb-3 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-gray-dark hover:text-blue transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
