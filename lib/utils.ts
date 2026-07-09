export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const sanitizeInput = (value: string) =>
  value.replace(/[\r\n]+/g, " ").trim();

export const validateEmail = (value: string) => {
  const normalizedValue = sanitizeInput(value);

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedValue);
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

const durationWords = {
  pt: {
    year: "ano",
    years: "anos",
    month: "mês",
    months: "meses",
    and: "e",
    lessThanMonth: "menos de um mês",
  },
  en: {
    year: "year",
    years: "years",
    month: "month",
    months: "months",
    and: "and",
    lessThanMonth: "less than a month",
  },
};

export const calculateDuration = (
  start: string,
  language: "pt" | "en" = "pt"
): string => {
  const startDate = new Date(start);
  const currentDate = new Date();

  let totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  if (currentDate.getDate() < startDate.getDate()) {
    totalMonths -= 1;
  }
  totalMonths = Math.max(totalMonths, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const words = durationWords[language];

  const result: string[] = [];
  if (years > 0) {
    result.push(`${years} ${years > 1 ? words.years : words.year}`);
  }
  if (months > 0) {
    result.push(`${months} ${months > 1 ? words.months : words.month}`);
  }
  if (years === 0 && months === 0) {
    result.push(words.lessThanMonth);
  }
  return result.join(` ${words.and} `);
};
