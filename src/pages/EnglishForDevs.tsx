import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Briefcase,
  Calendar,
  DollarSign,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Mic,
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
import { englishForDevs } from "@/data/englishForDevs";
import { cn } from "@/lib/utils";

const facts = [
  { label: "Cohort start", value: englishForDevs.cohortStartDate },
  { label: "Saturdays", value: englishForDevs.sessionTime },
  { label: "Time zone", value: englishForDevs.timeZone },
  { label: "Price", value: englishForDevs.priceLabel },
];

const weeks = [
  {
    title: "The HR screen and your technical pitch",
    body: (
      <>
        How to answer{" "}
        <span className="text-primary">"Tell me about yourself"</span> with your
        stack in focus, without sounding like a robot, and how to defend past
        experience in two minutes.
      </>
    ),
  },
  {
    title: "Day to day on a US team (Scrum/Agile)",
    body: (
      <>
        Real structures for the{" "}
        <span className="text-primary">Daily Standup</span>, how to explain a{" "}
        <span className="text-primary">blocker</span> without feeling embarrassed,
        how to ask for technical help, and how to take part in Sprint Planning.
      </>
    ),
  },
  {
    title: "The technical interview and explaining architecture",
    body: (
      <>
        <span className="text-primary">Think aloud</span> in English while you
        solve a problem, justify technical decisions, and answer behavioral
        questions with the STAR method.
      </>
    ),
  },
  {
    title: "Mock interviews and salary negotiation",
    body: (
      <>
        Live 15-minute mock interviews with direct feedback on filler words,
        confidence, and negotiating offers in dollars.
      </>
    ),
  },
];

const included = [
  "4 live Saturday sessions, 2 hours each",
  "A closed group of 8 developers",
  "Recordings of every session",
  "Personalized voice prompts for a daily 10-minute drill",
  "Live 15-minute mock interviews in week 4",
  "Feedback on filler words, confidence, and talking about an offer",
];

const formatPoints = [
  {
    icon: Users,
    title: "Small closed group",
    text: "8 developers maximum. Enough voices to practice, few enough that you actually speak.",
  },
  {
    icon: Calendar,
    title: "4 live Saturdays",
    text: "One 2-hour session each week. You show up, you talk, you get corrected in the room.",
  },
  {
    icon: Video,
    title: "Sessions are recorded",
    text: "Miss a Saturday, or want to hear a phrase again. You can replay the session.",
  },
  {
    icon: Clock,
    title: "A fixed weekly block",
    text: `Same day, same length, for four weeks. Time: ${englishForDevs.sessionTime}. Time zone: ${englishForDevs.timeZone}.`,
  },
];

function priceIsPlaceholder() {
  return englishForDevs.priceLabel.includes("XX");
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function EnrollButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "cta-gradient-button text-background font-semibold w-full sm:w-auto h-12 px-6",
        className,
      )}
    >
      <a
        href={englishForDevs.enrollmentUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Enroll
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </Button>
  );
}

function WhatsAppButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={cn(
        "w-full sm:w-auto h-12 px-6 border-border bg-background hover:bg-secondary hover:text-foreground",
        className,
      )}
    >
      <a
        href={englishForDevs.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        WhatsApp
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </Button>
  );
}

function EnrollActions({
  align = "start",
  showWebinar = false,
}: {
  align?: "start" | "center";
  showWebinar?: boolean;
}) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      <div
        className={cn(
          "flex flex-col sm:flex-row gap-3 w-full",
          align === "center" && "sm:justify-center",
        )}
      >
        <EnrollButton />
        <WhatsAppButton />
      </div>
      {showWebinar && (
        <p className="text-sm text-muted-foreground">
          Want to see it first?{" "}
          <ExternalText
            href={englishForDevs.lumaUrl}
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Join the free webinar
          </ExternalText>
        </p>
      )}
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
        <p className="text-xs sm:text-sm uppercase tracking-wider text-foreground/60 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground"
      >
        {title}
      </h2>
      {children && (
        <div className="mt-4 space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
          {children}
        </div>
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
        "A 4-week live group program for developers in El Salvador and Latin America who can code but freeze when speaking English in remote interviews and meetings with US teams.";
    }

    return () => {
      document.title = previousTitle;
      if (meta) meta.content = previousDescription;
    };
  }, []);

  const faqs: { id: string; question: string; answer: ReactNode }[] = [
    {
      id: "level",
      question: "What English level do I need?",
      answer: (
        <p>
          If you can read documentation, follow a ticket, and understand a
          meeting even when answering is hard, this cohort is for you. We do
          not start from the alphabet. We work on the part that freezes:
          talking about your stack, your day, and an interview, out loud. If
          you cannot yet follow a simple sentence in English, this is not the
          starting point.
        </p>
      ),
    },
    {
      id: "miss",
      question: "What if I miss a session?",
      answer: (
        <p>
          Every session is recorded. Watch the recording and keep that week’s
          10-minute drills. Send a note on WhatsApp if you cannot attend. The
          week 4 mock interviews happen live, so plan to be in that Saturday
          session.
        </p>
      ),
    },
    {
      id: "pay",
      question: "How do I pay from El Salvador, or from another country?",
      answer: (
        <p>
          The Enroll button opens the payment link for this cohort, a Wompi
          checkout or a Tally form. The same link works from El Salvador and
          from anywhere else. If the payment does not go through, message on{" "}
          <ExternalText
            href={englishForDevs.whatsappUrl}
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            WhatsApp
          </ExternalText>{" "}
          or email{" "}
          <a
            href="mailto:arriola.dev@outlook.com"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            arriola.dev@outlook.com
          </a>
          .
        </p>
      ),
    },
    {
      id: "tools",
      question: "What tools do I need?",
      answer: (
        <p>
          A laptop or a phone, a stable connection, a quiet-enough place to
          speak, and a microphone. Laptop audio or earbuds are enough. The
          weekday drills are built for your phone, about 10 minutes. The link
          to the live session is sent when your seat is confirmed.
        </p>
      ),
    },
    {
      id: "webinar",
      question: "Is there a free webinar first?",
      answer: (
        <p>
          Yes. There is a free webinar before you enroll, so you can see how a
          session feels and decide with a clear head. Date and room are on
          Luma:{" "}
          <ExternalText
            href={englishForDevs.lumaUrl}
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            join the free webinar
          </ExternalText>
          .
        </p>
      ),
    },
  ];

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
                Live group · 8 seats · El Salvador & Latin America
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">English for Devs</p>
              <p className="text-sm text-muted-foreground">
                Career acceleration and confidence in remote interviews
              </p>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground"
            >
              Unlock Your Technical English in{" "}
              <span className="text-primary">4 Weeks</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Pass remote interviews and speak with confidence in your Daily Standup.
            </p>

            <dl className="grid grid-cols-2 gap-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-border bg-card px-3 py-3 min-w-0"
                >
                  <dt className="text-[11px] sm:text-xs uppercase tracking-wider text-foreground/60">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground break-words">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            {priceIsPlaceholder() && (
              <p className="text-sm text-muted-foreground -mt-2">
                Final price to be confirmed.
              </p>
            )}

            <div ref={heroActionsRef}>
              <EnrollActions showWebinar />
            </div>
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

      <motion.section
        {...fadeUp}
        aria-labelledby="problem-heading"
        className="border-t border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            id="problem-heading"
            eyebrow="The problem"
            title="Knowing how to code is not enough"
          >
            <p>
              You can ship the ticket, read the docs, and open the PR. The freeze
              shows up when you have to say it out loud. A recruiter in the US
              asks "Tell me about yourself" and the answer stalls. In the Daily
              Standup you skip the blocker. In the technical interview you think
              in Spanish and translate too late.
            </p>
            <p>
              A remote role with a US team is paid in dollars, far from what the
              local market usually offers. Offers often fall through in that
              conversation, not in the tech screen. The team never quite sees
              the work you already know how to do.
            </p>
            <p>
              This is for developers in El Salvador and across Latin America who
              write code every day and go quiet when the meeting is in English.
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
              <article
                key={item.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        aria-labelledby="format-heading"
        className="border-t border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            id="format-heading"
            eyebrow="Format"
            title="Four Saturdays. A small group. Practice every day."
          >
            <p>
              A live group program. Four weeks, a closed room of at most 8
              developers, and a 2-hour session every Saturday. You practice
              out loud, with someone who can stop you and try the line again.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {formatPoints.map((point) => (
              <article
                key={point.title}
                className="bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-primary/50 transition-smooth"
              >
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
                <h3 className="text-xl font-semibold text-foreground">
                  Daily voice drills, from your phone
                </h3>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Between Saturdays you get personalized voice-practice prompts: a
                10-minute interview drill on your phone. One answer, out loud,
                every day. You walk into the next session having already said
                the hard sentence.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-xs sm:text-sm text-foreground">
                  <Smartphone className="w-3.5 h-3.5 text-foreground/70" aria-hidden="true" />
                  10 minutes a day
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-xs sm:text-sm text-foreground">
                  <Mic className="w-3.5 h-3.5 text-foreground/70" aria-hidden="true" />
                  Speak, listen, repeat
                </span>
              </div>
            </article>

            <article className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm uppercase tracking-wider text-foreground/60 mb-4">
                The four Saturdays
              </h3>
              <ol className="space-y-3">
                {englishForDevs.sessionDates.map((date, index) => (
                  <li key={date} className="flex gap-3 text-sm">
                    <span className="text-primary font-semibold tabular-nums">
                      0{index + 1}
                    </span>
                    <span className="text-foreground/80">{date}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Session length is 2 hours. Time: {englishForDevs.sessionTime}. Time
                zone: {englishForDevs.timeZone}.
              </p>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        aria-labelledby="syllabus-heading"
        className="border-t border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            id="syllabus-heading"
            eyebrow="Syllabus"
            title="What we work on each week"
          >
            <p>
              Four sessions. Each one is a situation you will actually face with
              a US team, practiced out loud.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((week, index) => (
              <article
                key={week.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-smooth flex flex-col"
              >
                <p className="text-sm font-semibold text-primary">Week {index + 1}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {englishForDevs.sessionDates[index]}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{week.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {week.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        aria-labelledby="instructor-heading"
        className="border-t border-border"
      >
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
                  <p className="text-sm text-muted-foreground">
                    Senior full-stack engineer and instructor
                  </p>
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
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-sm rounded-full text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 h-full bg-card border border-border rounded-lg p-6 sm:p-8 space-y-4">
              <p className="text-base text-foreground/80 leading-relaxed">
                Jaime Arriola is a senior full-stack engineer. He builds with
                React, Next.js, TypeScript, and Python, from San Salvador. His
                site describes 6+ years shipping production products and 5+ years
                working with US tech teams, the same rooms this cohort is
                preparing you to enter.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                He teaches as well. At DEV.F he was a Frontend Instructor. He taught
                modern frontend development with React and JavaScript, worked with
                students on real applications, and wrote teaching material they
                could build from. He has also taught software development, AI, and
                professional and corporate English: the language of a recruiter
                screen, a Daily Standup, and a salary conversation.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                English for Devs puts those two things in one room: the vocabulary
                of a working engineer, practiced live, in a group small enough
                that you have to speak.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-2 pt-2 text-sm">
                <Link
                  to="/about"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Full experience
                </Link>
                <Link
                  to="/resume"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Resume
                </Link>
                <ExternalText
                  href="https://www.linkedin.com/in/jarriola-dev/"
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  LinkedIn
                </ExternalText>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        aria-labelledby="pricing-heading"
        className="border-t border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            id="pricing-heading"
            eyebrow="Pricing"
            title="One plan. Eight seats."
          >
            <p>
              Recordings are included. There is no second tier and no seat held
              without enrolling.
            </p>
          </SectionHeading>

          <article className="max-w-xl bg-card border border-primary/40 rounded-lg p-6 sm:p-8 card-glow">
            <p className="text-sm font-medium text-primary">English for Devs</p>
            <h3 className="mt-2 text-4xl font-semibold text-foreground">
              {englishForDevs.priceLabel}
            </h3>
            {priceIsPlaceholder() && (
              <p className="mt-2 text-sm text-muted-foreground">Final price to be confirmed.</p>
            )}
            <p className="mt-3 text-sm text-foreground/70">
              Cohort start: {englishForDevs.cohortStartDate}. Session time:{" "}
              {englishForDevs.sessionTime}. Time zone: {englishForDevs.timeZone}.
            </p>

            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <EnrollActions />
            </div>
          </article>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        aria-labelledby="faq-heading"
        className="border-t border-border"
      >
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
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        aria-labelledby="final-cta-heading"
        className="border-t border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-card px-6 py-12 sm:px-12 text-center card-glow">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl mx-auto">
              <p className="text-sm font-medium text-primary mb-3">English for Devs</p>
              <h2
                id="final-cta-heading"
                className="text-3xl sm:text-4xl font-semibold text-foreground"
              >
                Unlock Your Technical English in 4 Weeks
              </h2>
              <p className="mt-4 text-base sm:text-lg text-foreground/80">
                Pass remote interviews and speak with confidence in your Daily Standup.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Start: {englishForDevs.cohortStartDate} · Time: {englishForDevs.sessionTime} ·
                Time zone: {englishForDevs.timeZone} · 8 seats · {englishForDevs.priceLabel}
              </p>
              <div className="mt-8 flex justify-center">
                <EnrollActions align="center" showWebinar />
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
            <p className="text-[11px] uppercase tracking-wider text-foreground/60">8 seats</p>
            <p className="text-sm font-semibold text-foreground truncate">
              {englishForDevs.priceLabel}
            </p>
          </div>
          <Button
            asChild
            className="cta-gradient-button text-background font-semibold flex-1 h-11"
          >
            <a
              href={englishForDevs.enrollmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>
      </div>
      )}
    </div>
  );
};

export default EnglishForDevs;
