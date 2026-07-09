"use server";

import React from "react";
import { Resend } from "resend";
import {
  validateEmail,
  validateString,
  sanitizeInput,
} from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
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
    const data = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      subject: "Mensagem enviada pelo portfólio",
      reply_to: cleanEmail,
      react: React.createElement(ContactFormEmail, {
        senderName: cleanName,
        message: cleanMessage,
        senderEmail: cleanEmail,
      }),
    });

    return { data };
  } catch {
    return {
      error: "SEND_FAILED",
    };
  }
};
