import Email from "@/app/components/Email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESND_API_KEY);

export async function GET() {
  resend.sendEmail({
    from: "E&D-Wine<customer@jazzafricaadventures.com>",
    to: "kisakyemoses50@gmail.com",
    subject: "New Order",
    react: <Email />,
  });

  return NextResponse.json({
    message: "Your Order Has Been Sent Sucessfully",
  });
}
