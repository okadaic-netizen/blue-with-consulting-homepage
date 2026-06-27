"use client";

import { useState, type FormEvent } from "react";

const topics = [
  "AI活用を進めたい",
  "DX化を進めたい",
  "システム導入を検討している",
  "補助金を活用したい",
  "経営改善について相談したい",
  "その他",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-md bg-green/10 border border-green text-green px-6 py-8 text-center font-medium">
        お問い合わせありがとうございます。内容を確認のうえご連絡いたします。
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy">
          お名前 <span className="text-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-md border border-gray-medium px-4 py-2 text-sm focus:border-blue focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-navy"
        >
          会社名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 w-full rounded-md border border-gray-medium px-4 py-2 text-sm focus:border-blue focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy"
        >
          メールアドレス <span className="text-red">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-gray-medium px-4 py-2 text-sm focus:border-blue focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block text-sm font-medium text-navy"
        >
          相談内容
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-md border border-gray-medium px-4 py-2 text-sm focus:border-blue focus:outline-none"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy"
        >
          お問い合わせ内容 <span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full rounded-md border border-gray-medium px-4 py-2 text-sm focus:border-blue focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-blue px-8 py-3 text-white font-semibold hover:bg-navy transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
