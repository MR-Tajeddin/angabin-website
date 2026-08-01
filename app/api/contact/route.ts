import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: unknown;
  companyName?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiryType?: unknown;
  message?: unknown;
};

const requiredFields: Array<keyof ContactPayload> = [
  "fullName",
  "companyName",
  "email",
  "phone",
  "inquiryType",
  "message"
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const data = {
    fullName: normalize(payload.fullName),
    companyName: normalize(payload.companyName),
    email: normalize(payload.email),
    phone: normalize(payload.phone),
    inquiryType: normalize(payload.inquiryType),
    message: normalize(payload.message)
  };

  const missingField = requiredFields.find((field) => !data[field]);

  if (missingField) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(data.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@angabincanada.com";
  const publicEmail =
    process.env.CONTACT_PUBLIC_EMAIL || "info@angabincanada.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const subject = "New Partnership Inquiry - ANGABIN CANADA INC.";
  const text = `New website inquiry received.

Full Name: ${data.fullName}
Company Name: ${data.companyName}
Email: ${data.email}
Phone: ${data.phone}
Inquiry Type: ${data.inquiryType}
Message:
${data.message}

Source:
ANGABIN CANADA INC. Website

Public Contact Email:
${publicEmail}`;

  const html = `
    <p>New website inquiry received.</p>
    <p><strong>Full Name:</strong><br>${escapeHtml(data.fullName)}</p>
    <p><strong>Company Name:</strong><br>${escapeHtml(data.companyName)}</p>
    <p><strong>Email:</strong><br>${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong><br>${escapeHtml(data.phone)}</p>
    <p><strong>Inquiry Type:</strong><br>${escapeHtml(data.inquiryType)}</p>
    <p><strong>Message:</strong><br>${escapeHtml(data.message).replaceAll("\n", "<br>")}</p>
    <p><strong>Source:</strong><br>ANGABIN CANADA INC. Website</p>
    <p><strong>Public Contact Email:</strong><br>${escapeHtml(publicEmail)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"ANGABIN CANADA INC. Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: data.email,
      subject,
      text,
      html,
      headers: {
        "X-Public-Contact-Email": publicEmail
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}
