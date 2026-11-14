/**
 * English for Devs — cohort details.
 *
 * TODO: Jaime has not confirmed the final details yet. Edit only this object
 * before announcing a cohort:
 * - cohortStartDate
 * - sessionDates (the four Saturday dates, in order)
 * - sessionTime
 * - timeZone
 * - priceLabel (keep "$XX USD" until the price is set; target range is $85–100 USD)
 * - enrollmentUrl (Wompi payment link or Tally form)
 * - whatsappUrl
 * - lumaUrl (free webinar)
 *
 * While priceLabel still contains "XX", the page adds the note
 * "Final price to be confirmed."
 */

const whatsappMessage = "Hi Jaime, I want a seat in English for Devs.";

export const englishForDevs = {
  cohortStartDate: "To be confirmed",
  sessionDates: [
    "Saturday 1 — to be confirmed",
    "Saturday 2 — to be confirmed",
    "Saturday 3 — to be confirmed",
    "Saturday 4 — to be confirmed",
  ],
  sessionTime: "To be confirmed",
  timeZone: "To be confirmed",
  priceLabel: "$XX USD",
  enrollmentUrl: "https://example.com/english-for-devs-enrollment-PLACEHOLDER",
  whatsappUrl: `https://wa.me/00000000000?text=${encodeURIComponent(whatsappMessage)}`,
  lumaUrl: "https://lu.ma/english-for-devs-PLACEHOLDER",
} as const;
