import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Blue With Consulting <onboarding@resend.dev>",
    to: process.env.CONTACT_NOTIFY_EMAIL!,
    replyTo: data.email,
    subject: `【お問い合わせ】${data.name}様より`,
    text: [
      `お名前: ${data.name}`,
      `会社名: ${data.company || "（未記入）"}`,
      `メールアドレス: ${data.email}`,
      `相談内容: ${data.topic || "（未選択）"}`,
      "",
      "お問い合わせ内容:",
      data.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
