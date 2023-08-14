import Email from "@/app/components/Email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESND_API_KEY);

export async function POST(request) {
  const requestData = await request.json();

  const {
    prodTitle,
    productImage,
    productPrice,
    client_name,
    vistor_name,
    client_phone,
    client_quantity,
    client_pickupdate,
  } = requestData;

  const emailContent = (
    <Email
      data={{
        prodTitle,
        productImage,
        productPrice,
        client_name,
        vistor_name,
        client_phone,
        client_quantity,
        client_pickupdate,
      }}
    />
  );

  resend.sendEmail({
    from: "E&D-Wine<customer@jazzafricaadventures.com>",
    to: "kisakyemoses50@gmail.com",
    subject: "New Order",
    react: emailContent,
  });

  return NextResponse.json({
    message: "Your Order Has Been Sent Successfully",
  });
}
