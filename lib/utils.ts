export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
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

export const calculateDuration = (start: string): string => {
  const startDate = new Date(start);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  let result = [];
  if (years > 0) {
    result.push(`${years} ano${years > 1 ? "s" : ""}`);
  }
  if (months > 0) {
    if (months === 1) {
      result.push(`${months} mês`);
    } else {
      result.push(`${months} meses`);
    }
  }
  if (years === 0 && months === 0) {
    result.push("menos de um mês");
  }
  return result.join(" e ");
};
