import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Ban,
  Brain,
  Briefcase,
  Calendar,
  Check,
  Clock,
  DollarSign,
  MapPin,
  MessageCircle,
  Mic,
  Shield,
  Smartphone,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { englishForDevs, type CohortPhase } from "@/data/englishForDevs";
import {
  activePrice,
  cohortStartLabel,
  countdownTargetFor,
  describeInstant,
  formatUsd,
  getCohortPhase,
  levelCheckLabel,
  paymentUrlFor,
  refundSentence,
  seatsLabel,
  sessionClocks,
  sessionDateLabel,
} from "@/lib/cohortSchedule";
import { cn } from "@/lib/utils";

const highlightPhrases = [
  "Tell me about yourself",
  "Daily Standup",
  "Sprint Planning",
  "Think aloud",
  "blocker",
  "STAR",
];

function RichText({ text }: { text: string }) {
  const pattern = new RegExp(
    `\\b(${highlightPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
    "g",
  );
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, index) =>
        highlightPhrases.includes(part) ? (
          <span key={`${part}-${index}`} className="text-primary">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

function ExternalText({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

function useCountdown(targetIso: string | null) {
  const now = useNow();
  if (!targetIso) return null;
  const diff = Math.max(0, new Date(targetIso).getTime() - now.getTime());
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

function Countdown({ target, label }: { target: string; label: string }) {
  const parts = useCountdown(target);
  if (!parts) return null;
  const cells = [
    ["Days", parts.days],
    ["Hours", parts.hours],
    ["Minutes", parts.minutes],
    ["Seconds", parts.seconds],
  ] as const;
  const deadline = describeInstant(target);

  return (
    <div>
      <p className="text-sm text-foreground/80 mb-3">{label}</p>
      <div className="grid grid-cols-4 gap-2" aria-hidden="true">
        {cells.map(([name, value]) => (
          <div key={name} className="rounded-lg border border-border bg-background px-1 py-2 text-center">
            <div className="text-xl sm:text-2xl font-semibold tabular-nums text-foreground">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-foreground/60">{name}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {deadline.elSalvador} · {deadline.eastern}
      </p>
    </div>
  );
}

function PriceBlock({ phase, align = "start" }: { phase: CohortPhase; align?: "start" | "center" }) {
  const centered = align === "center";
  if (phase === "closed") {
    return (
      <div className={cn(centered && "text-center")}>
        <p className="text-lg font-semibold text-foreground">Enrollment for this cohort is closed</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Next cohort starts {englishForDevs.nextCohortStart}.
        </p>
      </div>
    );
  }

  if (phase === "early-bird") {
    return (
      <div className={cn(centered && "text-center")}>
        <p className="text-sm font-medium text-primary">Early-bird price</p>
        <p className="mt-1 text-4xl font-semibold text-foreground">{formatUsd(englishForDevs.earlyBirdPrice)}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          <s>{formatUsd(englishForDevs.regularPrice)}</s>
          <span> regular price</span>
        </p>
      </div>
    );
  }

  return (
    <div className={cn(centered && "text-center")}>
      <p className="text-sm font-medium text-primary">Price</p>
      <p className="mt-1 text-4xl font-semibold text-foreground">{formatUsd(englishForDevs.regularPrice)}</p>
    </div>
  );
}

function LevelCheckButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={cn(
        "w-full sm:w-auto h-auto min-h-12 whitespace-normal px-6 py-3 text-center border-border bg-background hover:bg-secondary hover:text-foreground",
        className,
      )}
    >
      <a href={englishForDevs.levelCheckUrl} target="_blank" rel="noopener noreferrer">
        <Video className="w-4 h-4 shrink-0" aria-hidden="true" />
        {levelCheckLabel()}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </Button>
  );
}

function PrimaryAction({ phase, className }: { phase: CohortPhase; className?: string }) {
  if (phase === "closed") {
    return (
      <Button
        asChild
        size="lg"
        className={cn("cta-gradient-button text-background font-semibold w-full sm:w-auto h-12 px-6", className)}
      >
        <a href={englishForDevs.waitlistUrl} target="_blank" rel="noopener noreferrer">
          Join the waitlist
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </Button>
    );
  }

  const href = paymentUrlFor(phase);
  if (!href) return null;

  return (
    <Button
      asChild
      size="lg"
      className={cn("cta-gradient-button text-background font-semibold w-full sm:w-auto h-12 px-6", className)}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        Enroll · {formatUsd(activePrice(phase))}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </Button>
  );
}

function ActionStack({
  phase,
  align = "start",
}: {
  phase: CohortPhase;
  align?: "start" | "center";
}) {
  return (
    <div className={cn("flex flex-col gap-3 w-full", align === "center" && "items-center")}>
      <div className={cn("flex flex-col sm:flex-row gap-3 w-full", align === "center" && "sm:justify-center")}>
        <PrimaryAction phase={phase} />
        <LevelCheckButton />
      </div>
    </div>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl mb-8 sm:mb-10">
      {eyebrow && (
        <p className="text-xs sm:text-sm uppercase tracking-wider text-foreground/60 mb-3">{eyebrow}</p>
      )}
      <h2 id={id} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
        {title}
      </h2>
      {children && (
        <div className="mt-4 space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">{children}</div>
      )}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const EnglishForDevs = () => {
  const now = useNow();
  const phase = getCohortPhase(now);
  const clocks = sessionClocks();
  const countdownTarget = countdownTargetFor(phase);
  const heroActionsRef = useRef<HTMLDivElement>(null);
  const [showStickyEnroll, setShowStickyEnroll] = useState(false);

  useEffect(() => {
    const node = heroActionsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyEnroll(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content ?? "";
    document.title = "English for Devs | Jaime Arriola";
    if (meta) {
      meta.content =
        "A 4-week live group for developers in El Salvador and Latin America. Free 15-minute level check. Intermediate (B1) speaking or higher. No job guarantee.";
    }
    return () => {
      document.title = previousTitle;
      if (meta) meta.content = previousDescription;
    };
  }, []);

  const faqs: { id: string; question: string; answer: ReactNode }[] = [
    {
      id: "level",
      question: "What English level do I need, and how does the level check work?",
      answer: (
        <p>
          You need an intermediate speaking level, {englishForDevs.minimumLevel} or higher. The
          free {englishForDevs.levelCheckMinutes}-minute level check is a 1:1 video call before you
          pay. It is there to hear you speak and see if this cohort fits. If you cannot yet hold a
          simple conversation in English, this is not the starting point.{" "}
          <ExternalText
            href={englishForDevs.levelCheckUrl}
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {levelCheckLabel()}
          </ExternalText>
          .
        </p>
      ),
    },
    {
      id: "miss",
      question: "What if I miss a session?",
      answer: (
        <p>
          Every session is recorded. Watch the recording and keep that week’s{" "}
          {englishForDevs.dailyDrillMinutes}-minute drills. Send a note if you cannot attend. The
          week 4 mock interviews happen live, so plan to be there that Saturday.
        </p>
      ),
    },
    {
      id: "recordings",
      question: "How long do recordings stay available?",
      answer: (
        <p>
          Sessions are recorded and included with your seat. How long they stay available:{" "}
          {englishForDevs.recordingsAvailableFor}.
        </p>
      ),
    },
    {
      id: "speaking",
      question: "How much speaking time does each person get?",
      answer: (
        <p>
          Each live session is {englishForDevs.sessionHours} hours with at most {englishForDevs.maxSeats}{" "}
          developers. Part of that time is breakout drills in pairs and trios, so you are speaking
          with one or two people instead of waiting through a long round of monologues. Week 4
          includes a live 15-minute mock interview. Between Saturdays, the voice drills are about{" "}
          {englishForDevs.dailyDrillMinutes} minutes a day on your phone.
        </p>
      ),
    },
    {
      id: "pay",
      question: "How do I pay from El Salvador, or from another country?",
      answer: (
        <p>
          From El Salvador you can pay with Wompi or Transfer365. From outside El Salvador, card
          payments are available. While enrollment is open, the Enroll button uses the payment link
          for the current price. {englishForDevs.internationalPaymentNote}
        </p>
      ),
    },
    {
      id: "employer",
      question: "Can my employer pay? Do you provide invoices?",
      answer: <p>{englishForDevs.employerPaymentNote}</p>,
    },
    {
      id: "zones",
      question: "What time zone are the sessions in?",
      answer: (
        <p>
          Sessions are on Saturdays, {clocks.elSalvador}, which is also {clocks.eastern}. El Salvador
          does not observe daylight saving time. US Eastern does, so the Eastern clock on this page
          is calculated for this cohort’s dates. The level check and the webinar show both clocks too.
        </p>
      ),
    },
    {
      id: "different",
      question: "How is this different from a self-paced course, a tutor, or an AI app?",
      answer: (
        <p>
          A self-paced course leaves the speaking to you. A tutor is a private lesson. An AI app can
          drill a sentence, and this program does use voice prompts between sessions, but those
          prompts do not replace the room. English for Devs is {englishForDevs.weekCount} live
          Saturdays with {englishForDevs.maxSeats} developers, breakout drills, and feedback from an
          instructor. {englishForDevs.noGuaranteeNote}
        </p>
      ),
    },
    {
      id: "refund",
      question: "What is the refund policy?",
      answer: <p>{refundSentence()}</p>,
    },
  ];

  const countdownLabel =
    phase === "early-bird" ? "Early-bird price ends in" : "Enrollment closes in";

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <section aria-labelledby="hero-heading" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 min-w-0"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/30 rounded-full max-w-full">
              <span className="text-xs sm:text-sm text-foreground">
                Live group · {seatsLabel()} · El Salvador & Latin America
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">{englishForDevs.programName}</p>
              <p className="text-sm text-muted-foreground">{englishForDevs.tagline}</p>
            </div>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
              {englishForDevs.headline.includes("4 Weeks") ? (
                <>
                  {englishForDevs.headline.replace("4 Weeks", "")}
                  <span className="text-primary">4 Weeks</span>
                </>
              ) : (
                englishForDevs.headline
              )}
            </h1>

            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">{englishForDevs.subheadline}</p>

            <PriceBlock phase={phase} />
            {phase !== "closed" && englishForDevs.installmentsNote ? (
              <p className="text-sm text-muted-foreground -mt-3">{englishForDevs.installmentsNote}</p>
            ) : null}
            {countdownTarget ? <Countdown target={countdownTarget} label={countdownLabel} /> : null}

            <div ref={heroActionsRef}>
              <ActionStack phase={phase} />
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Cohort start", cohortStartLabel()],
                ["Seats", seatsLabel()],
                ["El Salvador", clocks.elSalvador.replace(" El Salvador (CST, UTC−6)", "")],
                ["US Eastern", clocks.eastern.replace(" US Eastern", "")],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-border bg-card px-3 py-3 min-w-0">
                  <dt className="text-[11px] sm:text-xs uppercase tracking-wider text-foreground/60">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground break-words">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="text-sm text-muted-foreground">
              Speaking level {englishForDevs.minimumLevel} or higher. The level check is a free 1:1
              video call before you pay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative min-w-0"
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-1.5 sm:gap-2" aria-hidden="true">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] sm:text-xs text-foreground/60">standup.ts</span>
              </div>
              <pre className="px-4 sm:px-6 py-4 sm:py-5 text-[12.5px] sm:text-sm leading-6 overflow-x-auto font-mono">
                <code>
                  <span className="text-foreground/50">{"// a clear Daily Standup, said in one breath"}</span>
                  {"\n"}
                  <span className="text-purple-400">const</span>
                  <span className="text-foreground"> </span>
                  <span className="text-cyan-400">standup</span>
                  <span className="text-foreground"> = {"{"}</span>
                  {"\n"}
                  <span className="text-foreground">{"  yesterday: "}</span>
                  <span className="text-green-400">"I shipped the auth middleware."</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground">{"  today: "}</span>
                  <span className="text-green-400">"I'll wire the refresh-token flow."</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground">{"  blocker: "}</span>
                  <span className="text-green-400">"None. I'll ask if the API contract changes."</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground">{"}"}</span>
                </code>
              </pre>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border pt-4 sm:pt-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl" aria-hidden="true">💬</div>
                  <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">
                    A practice line, not a script to memorize. Yesterday, today, and the blocker, without stalling.
                  </p>
                </div>
              </div>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-[10px] sm:text-xs font-semibold text-primary">Daily Standup</span>
                  <span className="text-[10px] sm:text-xs text-foreground/60">Said out loud, on purpose</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section {...fadeUp} id="level-check" aria-labelledby="level-check-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl bg-card border border-primary/40 rounded-lg p-6 sm:p-8 card-glow">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-foreground/60 mb-3">Before you pay</p>
            <h2 id="level-check-heading" className="text-2xl sm:text-3xl font-semibold text-foreground">
              {levelCheckLabel()}
            </h2>
            <div className="mt-4 space-y-4 text-base text-foreground/80 leading-relaxed">
              <p>
                A short 1:1 video call. {englishForDevs.levelCheckMinutes} minutes. You speak, and we
                check your level and whether this group is the right fit before any payment.
              </p>
              <p>
                Requirement: intermediate ({englishForDevs.minimumLevel}) or higher speaking level.
                If you are earlier than that, this cohort is not the starting point.
              </p>
            </div>
            <div className="mt-6">
              <LevelCheckButton />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="problem-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="problem-heading" eyebrow="The problem" title="Knowing how to code is not enough">
            <p>
              You can ship the ticket, read the docs, and open the PR. The freeze shows up when you
              have to say it out loud. A recruiter in the US asks "Tell me about yourself" and the
              answer stalls. In the Daily Standup you skip the blocker. In the technical interview
              you think in Spanish and translate too late.
            </p>
            <p>
              A remote role with a US team is paid in dollars, far from what the local market usually
              offers. Offers often fall through in that conversation, not in the tech screen. The
              team never quite sees the work you already know how to do.
            </p>
            <p>
              This is for developers in El Salvador and across Latin America who already speak at{" "}
              {englishForDevs.minimumLevel} or higher and still go quiet when the meeting is in English.
            </p>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Mic,
                title: "The interview is not the ticket",
                text: 'On the keyboard you know what to do. On the call, "Tell me about yourself" falls apart. The experience is there. It does not come out in two minutes, in English, without sounding like you are reading a script.',
              },
              {
                icon: MessageCircle,
                title: "Offers slip on communication",
                text: "Plenty of developers in the region get through the technical filter and stall in the conversation. The blocker, the architecture choice, or the past project never lands, so the team cannot tell what you can actually do.",
              },
              {
                icon: DollarSign,
                title: "Remote US pay is a different market",
                text: "A salary with a US team is in dollars. Local offers usually are not. Another framework will not close that gap. Speaking clearly in the interview, and in the Monday meeting, will.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth">
                <item.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="format-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="format-heading" eyebrow="Format" title="Four Saturdays. A small group. Practice every day.">
            <p>
              A live group of {englishForDevs.maxSeats}. {englishForDevs.weekCount} weeks, one{" "}
              {englishForDevs.sessionHours}-hour session each Saturday. Breakout drills in pairs and
              trios so everyone speaks a lot, not just the person who is already comfortable.
            </p>
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: Users,
                title: "Small closed group",
                text: `${englishForDevs.maxSeats} developers maximum. Breakout drills in pairs and trios, so the hour is not one person talking while five listen.`,
              },
              {
                icon: Calendar,
                title: `${englishForDevs.weekCount} live Saturdays`,
                text: `One ${englishForDevs.sessionHours}-hour session each week. You show up, you talk, you get another try in the room.`,
              },
              {
                icon: Video,
                title: "Sessions are recorded",
                text: `Miss a Saturday, or want to hear a phrase again. You can replay the session. How long recordings stay available: ${englishForDevs.recordingsAvailableFor}.`,
              },
              {
                icon: Clock,
                title: "Both clocks",
                text: `${clocks.elSalvador}. ${clocks.eastern}.`,
              },
            ].map((point) => (
              <article key={point.title} className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-primary/50 transition-smooth">
                <point.icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                <h3 className="text-base font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.text}</p>
              </article>
            ))}
          </div>
          <div className="grid lg:grid-cols-5 gap-4">
            <article className="lg:col-span-3 bg-card border border-primary/40 rounded-lg p-6 sm:p-8 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-7 h-7 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-foreground">Daily voice drills, from your phone</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Between Saturdays you get personalized voice-practice prompts: a{" "}
                {englishForDevs.dailyDrillMinutes}-minute interview drill on your phone. One answer,
                out loud, every day. The prompt library is yours to keep practicing with.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-xs sm:text-sm text-foreground">
                  <Smartphone className="w-3.5 h-3.5 text-foreground/70" aria-hidden="true" />
                  {englishForDevs.dailyDrillMinutes} minutes a day
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-xs sm:text-sm text-foreground">
                  <Mic className="w-3.5 h-3.5 text-foreground/70" aria-hidden="true" />
                  Speak, listen, repeat
                </span>
              </div>
            </article>
            <article className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-4">The four Saturdays</h3>
              <ol className="space-y-3">
                {englishForDevs.sessionDates.map((date, index) => (
                  <li key={date} className="flex gap-3 text-sm">
                    <span className="text-primary font-semibold tabular-nums">0{index + 1}</span>
                    <span className="text-foreground/80">{sessionDateLabel(date)}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                {clocks.elSalvador}. {clocks.eastern}.
              </p>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="syllabus-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="syllabus-heading" eyebrow="Syllabus" title="What we work on each week">
            <p>Four sessions. Each one is a situation you will actually face with a US team, practiced out loud.</p>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {englishForDevs.syllabus.map((week, index) => (
              <article key={week.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth flex flex-col">
                <p className="text-sm font-semibold text-primary">Week {index + 1}</p>
                <p className="mt-1 text-xs text-muted-foreground">{sessionDateLabel(englishForDevs.sessionDates[index])}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{week.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <RichText text={week.body} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="deliverables-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="deliverables-heading" eyebrow="Deliverables" title="What you'll walk away with">
            <p>Concrete pieces from the four weeks. Not a promise about what a hiring team will decide.</p>
          </SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {englishForDevs.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-5">
                <Check className="w-5 h-5 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm sm:text-base text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="fit-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="fit-heading" eyebrow="Fit" title="Who this is for, and who it is not for" />
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">For</h3>
              <ul className="space-y-3">
                {englishForDevs.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Not for</h3>
              <ul className="space-y-3">
                {englishForDevs.notFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Ban className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-foreground/80">{englishForDevs.noGuaranteeNote}</p>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="webinar" aria-labelledby="webinar-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="webinar-heading" eyebrow="Free webinar" title="Next free live webinar">
            <p>
              {englishForDevs.webinarDuration}. A live look at the work before you book the level
              check or pay for a seat.
            </p>
          </SectionHeading>
          <article className="max-w-xl bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-foreground/80">{describeInstant(englishForDevs.webinarStartsAt).elSalvador}</p>
            <p className="mt-1 text-sm text-muted-foreground">{describeInstant(englishForDevs.webinarStartsAt).eastern}</p>
            <p className="mt-3 text-sm text-muted-foreground">{englishForDevs.webinarDuration}</p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
                <a href={englishForDevs.webinarUrl} target="_blank" rel="noopener noreferrer">
                  Register for the free webinar
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Button>
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="instructor-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="instructor-heading" eyebrow="Instructor" title="About Jaime" />
          <div className="grid lg:grid-cols-5 gap-6 max-w-6xl">
            <div className="lg:col-span-2 h-full bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="w-5 h-5 bg-muted-foreground/40 rounded-sm" />
                  <div className="w-5 h-5 bg-muted-foreground/40 rounded-sm" />
                  <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                    <span className="text-background text-xs font-bold leading-none">JA</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-foreground">Jaime Arriola</p>
                  <p className="text-sm text-muted-foreground">Senior full-stack engineer and instructor</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <span>San Salvador, El Salvador</span>
                </li>
                <li className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <span>6+ years building production products</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <span>5+ years with US tech teams</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-foreground/60 mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Python"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-full text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 h-full bg-card border border-border rounded-lg p-6 sm:p-8 space-y-4">
              <p className="text-base text-foreground/80 leading-relaxed">
                Jaime Arriola is a senior full-stack engineer. He builds with React, Next.js,
                TypeScript, and Python, from San Salvador. His site describes 6+ years shipping
                production products and 5+ years working with US tech teams, the same rooms this
                cohort is preparing you to enter.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                He teaches as well. At DEV.F he was a Frontend Instructor. He taught modern frontend
                development with React and JavaScript, worked with students on real applications, and
                wrote teaching material they could build from. He has also taught software development,
                AI, and professional and corporate English: the language of a recruiter screen, a Daily
                Standup, and a salary conversation.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                English for Devs puts those two things in one room: the vocabulary of a working
                engineer, practiced live, in a group of {englishForDevs.maxSeats}.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-2 pt-2 text-sm">
                <Link to="/about" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Full experience
                </Link>
                <Link to="/resume" className="text-primary underline underline-offset-4 hover:text-primary/80">
                  Resume
                </Link>
                <ExternalText
                  href={englishForDevs.linkedinUrl}
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  LinkedIn
                </ExternalText>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="pricing-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="pricing-heading" eyebrow="Pricing" title={`One plan. ${englishForDevs.maxSeats} seats.`}>
            <p>{seatsLabel()}. Recordings are included. There is no second tier.</p>
          </SectionHeading>
          <article className="max-w-xl bg-card border border-primary/40 rounded-lg p-6 sm:p-8 card-glow">
            <p className="text-sm font-medium text-primary">{englishForDevs.programName}</p>
            <div className="mt-3">
              <PriceBlock phase={phase} />
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">{seatsLabel()}</p>
            {phase !== "closed" && englishForDevs.installmentsNote ? (
              <p className="mt-2 text-sm text-muted-foreground">{englishForDevs.installmentsNote}</p>
            ) : null}
            {countdownTarget ? (
              <div className="mt-6">
                <Countdown target={countdownTarget} label={countdownLabel} />
              </div>
            ) : null}
            <p className="mt-4 text-sm text-foreground/70">
              Cohort start: {cohortStartLabel()}. {clocks.elSalvador}. {clocks.eastern}.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                `${englishForDevs.weekCount} live Saturday sessions, ${englishForDevs.sessionHours} hours each`,
                `A closed group of ${englishForDevs.maxSeats}, with breakout drills in pairs and trios`,
                "Recordings of every session",
                `Daily ${englishForDevs.dailyDrillMinutes}-minute voice drills and the prompt library`,
                "The pitch, the STAR stories, the standup script, and a recorded mock with written feedback",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 rounded-lg border border-border bg-background p-4">
              <p className="flex items-start gap-2 text-sm text-foreground/80">
                <Shield className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <span>{refundSentence()}</span>
              </p>
              <p className="text-sm text-foreground/80">{englishForDevs.noGuaranteeNote}</p>
            </div>
            {phase !== "closed" ? (
              <p className="mt-4 text-sm text-muted-foreground">{englishForDevs.internationalPaymentNote}</p>
            ) : null}
            <div className="mt-8">
              <ActionStack phase={phase} />
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="faq-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Before you enroll" />
          <div className="max-w-3xl bg-card border border-border rounded-lg px-4 sm:px-6">
            <Accordion type="single" collapsible defaultValue="level">
              {faqs.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-border">
                  <AccordionTrigger className="text-left text-base text-foreground hover:no-underline hover:text-primary py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {englishForDevs.whatsappUrl ? (
            <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
              Questions first?{" "}
              <ExternalText
                href={englishForDevs.whatsappUrl}
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                WhatsApp
              </ExternalText>
            </p>
          ) : null}
        </div>
      </motion.section>

      <motion.section {...fadeUp} aria-labelledby="final-cta-heading" className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-card px-6 py-12 sm:px-12 text-center card-glow">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative max-w-2xl mx-auto">
              <p className="text-sm font-medium text-primary mb-3">{englishForDevs.programName}</p>
              <h2 id="final-cta-heading" className="text-3xl sm:text-4xl font-semibold text-foreground">
                {englishForDevs.headline}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-foreground/80">{englishForDevs.subheadline}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {cohortStartLabel()} · {seatsLabel()}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {clocks.elSalvador} · {clocks.eastern}
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-xl">
                  <PriceBlock phase={phase} align="center" />
                </div>
              </div>
              <div className="mt-8">
                <ActionStack phase={phase} align="center" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {showStickyEnroll && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden px-4 pt-3"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex items-center gap-3 max-w-lg mx-auto">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-wider text-foreground/60">{seatsLabel()}</p>
              <p className="text-sm font-semibold text-foreground truncate">
                {phase === "closed" ? "Enrollment closed" : formatUsd(activePrice(phase))}
              </p>
            </div>
            <PrimaryAction phase={phase} className="flex-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EnglishForDevs;
