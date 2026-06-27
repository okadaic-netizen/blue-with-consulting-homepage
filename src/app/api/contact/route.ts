import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // TODO: メール送信サービス（例: Resend）と連携してここで通知メールを送信する
  console.log("New contact submission:", data);

  return NextResponse.json({ ok: true });
}
