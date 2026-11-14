import {
  englishForDevs,
  type CohortPhase,
} from "@/data/englishForDevs";

function parseInstant(value: string): Date | null {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** Clock time `hh:mm` on a calendar date, interpreted in `timeZone`. */
export function zonedDateTime(date: string, time: string, timeZone: string): Date {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const desiredUtc = Date.UTC(year, month - 1, day, hour, minute);
  let utc = desiredUtc;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  for (let attempt = 0; attempt < 4; attempt += 1) {
    const parts = Object.fromEntries(
      formatter.formatToParts(new Date(utc)).map((part) => [part.type, part.value]),
    );
    const asUtc = Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day),
      Number(parts.hour),
      Number(parts.minute),
    );
    const delta = desiredUtc - asUtc;
    if (delta === 0) break;
    utc += delta;
  }

  return new Date(utc);
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: englishForDevs.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatClock(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function formatLongDate(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDateTime(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function getCohortPhase(now: Date): CohortPhase {
  if (englishForDevs.seatsLeft <= 0) return "closed";

  const closes = parseInstant(englishForDevs.enrollmentClosesAt);
  if (!closes || now.getTime() >= closes.getTime()) return "closed";

  const earlyEnds = parseInstant(englishForDevs.earlyBirdEndsAt);
  if (earlyEnds && now.getTime() < earlyEnds.getTime()) return "early-bird";

  return "regular";
}

export function paymentUrlFor(phase: CohortPhase): string | null {
  if (phase === "early-bird") return englishForDevs.earlyBirdPaymentUrl;
  if (phase === "regular") return englishForDevs.regularPaymentUrl;
  return null;
}

export function plusOffer(phase: CohortPhase): { amount: number; compareAt: number | null; url: string | null } {
  if (phase === "closed") {
    return { amount: englishForDevs.plusPrice, compareAt: null, url: null };
  }
  const earlyPrice = englishForDevs.plusEarlyBirdPrice;
  if (phase === "early-bird" && typeof earlyPrice === "number") {
    return {
      amount: earlyPrice,
      compareAt: englishForDevs.plusPrice,
      url: englishForDevs.plusEarlyBirdPaymentUrl || englishForDevs.plusPaymentUrl,
    };
  }
  return { amount: englishForDevs.plusPrice, compareAt: null, url: englishForDevs.plusPaymentUrl };
}

export function upcomingWebinars(now: Date) {
  return englishForDevs.webinars.filter((item) => {
    const when = parseInstant(item.date);
    return when !== null && when.getTime() >= now.getTime();
  });
}

export function countdownTargetFor(phase: CohortPhase): string | null {
  if (phase === "early-bird") return englishForDevs.earlyBirdEndsAt;
  if (phase === "regular") return englishForDevs.enrollmentClosesAt;
  return null;
}

export function activePrice(phase: CohortPhase): number {
  return phase === "early-bird" ? englishForDevs.earlyBirdPrice : englishForDevs.regularPrice;
}

export type DualClock = {
  elSalvador: string;
  eastern: string;
};

export function sessionClocks(): DualClock {
  const date = englishForDevs.cohortStartAt.slice(0, 10);
  const start = zonedDateTime(date, englishForDevs.sessionStart, englishForDevs.sessionTimeZone);
  const end = zonedDateTime(date, englishForDevs.sessionEnd, englishForDevs.sessionTimeZone);
  const range = (timeZone: string) =>
    `${formatClock(start, timeZone)}–${formatClock(end, timeZone)}`;

  return {
    elSalvador: `${range(englishForDevs.sessionTimeZone)} El Salvador (CST, UTC−6)`,
    eastern: `${range(englishForDevs.compareTimeZone)} US Eastern`,
  };
}

export function describeInstant(iso: string): DualClock {
  const date = parseInstant(iso) ?? new Date(iso);
  return {
    elSalvador: `${formatDateTime(date, englishForDevs.sessionTimeZone)} El Salvador`,
    eastern: `${formatDateTime(date, englishForDevs.compareTimeZone)} US Eastern`,
  };
}

export function cohortStartLabel(): string {
  const date = parseInstant(englishForDevs.cohortStartAt);
  if (!date) return englishForDevs.cohortStartAt;
  return formatLongDate(date, englishForDevs.sessionTimeZone);
}

export function sessionDateLabel(isoDate: string): string {
  const date = zonedDateTime(isoDate, "12:00", englishForDevs.sessionTimeZone);
  return formatLongDate(date, englishForDevs.sessionTimeZone);
}

export function seatsLabel(): string {
  return `${englishForDevs.seatsLeft} of ${englishForDevs.maxSeats} seats left`;
}

export function refundSentence(): string {
  return `Attend session 1. If it's not for you, get a full refund within ${englishForDevs.refundHours} hours.`;
}

export function levelCheckLabel(): string {
  return `Book your free ${englishForDevs.levelCheckMinutes}-minute level check`;
}
