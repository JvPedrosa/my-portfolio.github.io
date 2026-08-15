"use server";

import { Resend } from "resend";
import {
  validateEmail,
  validateString,
  sanitizeInput,
} from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const contactEmailFrom =
  process.env.CONTACT_EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";
const contactEmailTo = process.env.CONTACT_EMAIL_TO || siteConfig.email;
const submissionAttempts = new Map<string, number[]>();

type SendEmailResult =
  | { data: unknown; error?: undefined }
  | {
      error:
        | "CONFIG_MISSING"
        | "INVALID_NAME"
        | "INVALID_EMAIL"
        | "INVALID_MESSAGE"
        | "SPAM_DETECTED"
        | "RATE_LIMITED"
        | "SEND_FAILED";
      data?: undefined;
    };

const pruneAttempts = (attempts: number[], now: number) =>
  attempts.filter((timestamp) => now - timestamp < 10 * 60 * 1000);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character
  );

export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
  if (!resend || !contactEmailFrom || !contactEmailTo) {
    return {
      error: "CONFIG_MISSING",
    };
  }

  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const website = formData.get("website");

  if (!validateString(senderName, 120)) {
    return {
      error: "INVALID_NAME",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "INVALID_EMAIL",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "INVALID_MESSAGE",
    };
  }
  if (typeof website === "string" && website.trim().length > 0) {
    return {
      error: "SPAM_DETECTED",
    };
  }

  const cleanName = sanitizeInput(senderName);
  const cleanEmail = sanitizeInput(senderEmail).toLowerCase();
  const cleanMessage = sanitizeInput(message);

  if (cleanName.length < 2) {
    return {
      error: "INVALID_NAME",
    };
  }
  if (!validateEmail(cleanEmail)) {
    return {
      error: "INVALID_EMAIL",
    };
  }
  if (cleanMessage.length < 10) {
    return {
      error: "INVALID_MESSAGE",
    };
  }

  const now = Date.now();
  const recentAttempts = pruneAttempts(
    submissionAttempts.get(cleanEmail) ?? [],
    now
  );
  if (recentAttempts.length >= 3) {
    submissionAttempts.set(cleanEmail, recentAttempts);
    return {
      error: "RATE_LIMITED",
    };
  }
  submissionAttempts.set(cleanEmail, [...recentAttempts, now]);

  try {
    const emailHtml = `<!doctype html>
      <div style="background:#f1f5f9;color:#0f172a;font-family:Arial,sans-serif;padding:40px 16px">
        <div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;margin:0 auto;max-width:560px;padding:28px 32px">
          <h1 style="font-size:22px;line-height:1.3;margin:0">Nova mensagem do formulário de contato</h1>
          <p style="color:#334155;font-size:14px;margin:20px 0 0">Nome: ${escapeHtml(cleanName)}</p>
          <p style="color:#334155;font-size:14px;line-height:1.7;margin:20px 0 0">${escapeHtml(cleanMessage)}</p>
          <hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0" />
          <p style="color:#475569;font-size:14px;margin:0">E-mail de resposta: ${escapeHtml(cleanEmail)}</p>
        </div>
      </div>`;

    const data = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      subject: "Mensagem enviada pelo portfólio",
      replyTo: cleanEmail,
      html: emailHtml,
    });

    return { data };
  } catch {
    return {
      error: "SEND_FAILED",
    };
  }
};
