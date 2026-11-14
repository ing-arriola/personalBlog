/**
 * English for Devs — edit this file only.
 *
 * TODO: Jaime still needs to confirm dates, hours, and links before this
 * cohort is announced. Every offer value the page renders comes from this
 * object. Components do not hardcode prices, seats, deadlines, or URLs.
 *
 * Dates are ISO datetimes with the El Salvador offset (-06:00). The page
 * compares them to the visitor's clock. Placeholder dates below are in the
 * future relative to November 2026 so the early-bird state is what you see
 * until you replace them.
 *
 * Set `seatsLeft` to 0 when the cohort is full. Set `installmentsNote` to
 * "" to hide it. Set `plusEarlyBirdPrice` to a number to discount Plus
 * during the early-bird window; leave it null and Plus stays at plusPrice.
 * Set `recordingsAvailableFor` when you know how long recordings stay up.
 * Leave `testimonials` empty until you have real quotes. Do not invent any.
 *
 * GoatCounter (free, no cookies): https://www.goatcounter.com
 * 1. Create a site. The code is the subdomain before .goatcounter.com.
 * 2. Set `goatcounterCode` here, or set VITE_GOATCOUNTER_CODE in Netlify.
 *    The env value wins. Leave both empty and no script is added.
 * 3. The script is https://gc.zgo.at/count.js. CTA clicks send events named
 *    level-check, enroll, enroll-plus, webinar, lead-magnet, and waitlist.
 */

const whatsappMessage = "Hi Jaime, I want a seat in English for Devs.";

export const englishForDevs = {
  programName: "English for Devs",
  tagline: "Career acceleration and confidence in remote interviews",
  headline: "Unlock Your Technical English in 4 Weeks",
  subheadline:
    "Pass remote interviews and speak with confidence in your Daily Standup",

  levelCheckUrl: "https://cal.com/PLACEHOLDER/english-for-devs-level-check",
  levelCheckMinutes: 15,
  minimumLevel: "B1",

  maxSeats: 6,
  seatsLeft: 6,

  currency: "USD",
  regularPrice: 147,
  earlyBirdPrice: 117,
  installmentsNote: "2 payments available",
  companyInvoiceNote: "Company paying? Invoices available",

  earlyBirdEndsAt: "2026-12-04T23:59:00-06:00",
  enrollmentClosesAt: "2026-12-18T18:00:00-06:00",
  earlyBirdPaymentUrl: "https://example.com/english-for-devs-early-bird-PLACEHOLDER",
  regularPaymentUrl: "https://example.com/english-for-devs-regular-PLACEHOLDER",
  plusPrice: 247,
  plusEarlyBirdPrice: null as number | null,
  plusPaymentUrl: "https://example.com/english-for-devs-plus-PLACEHOLDER",
  plusEarlyBirdPaymentUrl: "https://example.com/english-for-devs-plus-early-bird-PLACEHOLDER",
  waitlistUrl: "https://tally.so/r/PLACEHOLDER",
  nextCohortStart: "To be confirmed",

  cohortStartAt: "2027-01-09T09:00:00-06:00",
  sessionDates: ["2027-01-09", "2027-01-16", "2027-01-23", "2027-01-30"],
  sessionStart: "09:00",
  sessionEnd: "11:00",
  sessionTimeZone: "America/El_Salvador",
  compareTimeZone: "America/New_York",
  weekCount: 4,
  sessionHours: 2,
  dailyDrillMinutes: 10,

  webinarDuration: "30–45 min",
  webinars: [
    {
      label: "Weeknight",
      date: "2026-11-18T19:00:00-06:00",
      url: "https://lu.ma/english-for-devs-weeknight-PLACEHOLDER",
    },
    {
      label: "Saturday",
      date: "2026-11-21T10:00:00-06:00",
      url: "https://lu.ma/english-for-devs-saturday-PLACEHOLDER",
    },
  ],
  standupClubMinutes: 30,
  standupClubSchedule: "Tuesdays, 7:00–7:30 p.m. El Salvador (8:00–8:30 p.m. US Eastern)",
  standupClubUrl: "https://lu.ma/english-for-devs-standup-club-PLACEHOLDER",
  leadMagnetTitle:
    "Free download: 25 phrases for your daily standup + Tell me about yourself template",
  leadMagnetUrl: "https://tally.so/r/PLACEHOLDER-lead-magnet",
  /**
   * GoatCounter site code only (not the full URL). Empty skips analytics.
   * VITE_GOATCOUNTER_CODE overrides this. See the file comment for setup.
   */
  goatcounterCode: "",

  refundHours: 48,
  recordingsAvailableFor: "To be confirmed",
  internationalPaymentNote: "Paying from outside El Salvador? Card payments available",
  employerPaymentNote:
    "Company paying? Invoices available. Email arriola.dev@outlook.com and say you need an invoice.",
  noGuaranteeNote:
    "There is no job guarantee. This program does not promise a job, an interview, or an offer.",

  contactEmail: "arriola.dev@outlook.com",
  whatsappUrl: `https://wa.me/00000000000?text=${encodeURIComponent(whatsappMessage)}`,
  linkedinUrl: "https://www.linkedin.com/in/jarriola-dev/",

  deliverables: [
    'A recorded 2-minute "Tell me about yourself" pitch',
    "3 polished STAR stories",
    "A daily standup and blocker script",
    "A recorded mock interview with written feedback",
    "The AI voice-practice prompt library",
  ],

  forWhom: [
    "Developers at an intermediate speaking level (B1) or higher who freeze when they have to speak English in an interview or a meeting.",
  ],
  notFor: [
    "Beginners who cannot yet hold a simple conversation in English.",
    "Anyone looking for a job guarantee.",
  ],

  testimonials: [] as {
    name: string;
    role: string;
    linkedinUrl: string;
    quote: string;
    videoUrl?: string;
  }[],

  syllabus: [
    {
      title: "The HR screen and your technical pitch",
      body: 'How to answer "Tell me about yourself" with your stack in focus, without sounding like a robot, and how to defend past experience in two minutes.',
    },
    {
      title: "Day to day on a US team (Scrum/Agile)",
      body: "Real structures for the Daily Standup, how to explain a blocker without feeling embarrassed, how to ask for technical help, and how to take part in Sprint Planning.",
    },
    {
      title: "The technical interview and explaining architecture",
      body: "Think aloud in English while you solve a problem, justify technical decisions, and answer behavioral questions with the STAR method.",
    },
    {
      title: "Mock interviews and salary negotiation",
      body: "Live 15-minute mock interviews with direct feedback on filler words, confidence, and negotiating offers in dollars.",
    },
  ],
};

export type EnglishForDevsConfig = typeof englishForDevs;
export type CohortPhase = "early-bird" | "regular" | "closed";
