import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "gleek.rj@gmail.com",
    to: "fabio.henrique.ss.matos@gmail.com",
    subject: "Email test",
    react: <WelcomeTemplate name="Fábio" />,
  });

  return NextResponse.json({});
}
