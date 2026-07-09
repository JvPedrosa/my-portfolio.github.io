"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const sendEmail = async (formData: FormData) => {
  if (!resend) {
    return {
      error: "Serviço de e-mail não configurado.",
    };
  }

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jotavpedrosa@gmail.com",
      subject: "Mensagem enviada pelo portfólio",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
