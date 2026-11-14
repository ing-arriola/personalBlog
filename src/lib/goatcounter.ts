import { englishForDevs } from "@/data/englishForDevs";

type CountVars = {
  path: string;
  title?: string;
  event?: boolean;
};

type GoatCounterApi = {
  count?: (vars: CountVars) => void;
  q?: CountVars[];
};

declare global {
  interface Window {
    goatcounter?: GoatCounterApi;
  }
}

export type CtaEvent = "level-check" | "enroll" | "enroll-plus" | "webinar" | "lead-magnet" | "waitlist";

/** Env wins over the config field. Empty means analytics stays off. */
export function goatcounterCode(): string {
  const fromEnv = import.meta.env.VITE_GOATCOUNTER_CODE?.trim() ?? "";
  if (fromEnv) return fromEnv;
  return englishForDevs.goatcounterCode.trim();
}

function countEndpoint(code: string): string {
  if (code.startsWith("http://") || code.startsWith("https://")) {
    return code.endsWith("/count") ? code : `${code.replace(/\/$/, "")}/count`;
  }
  return `https://${code}.goatcounter.com/count`;
}

export function installGoatCounter(): void {
  const code = goatcounterCode();
  if (!code || typeof document === "undefined") return;

  window.goatcounter = window.goatcounter ?? {};
  if (typeof window.goatcounter.count !== "function") {
    window.goatcounter.count = (vars) => {
      window.goatcounter!.q = window.goatcounter!.q ?? [];
      window.goatcounter!.q.push(vars);
    };
  }

  if (document.querySelector("script[data-goatcounter]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = countEndpoint(code);
  document.head.appendChild(script);
}

export function trackCta(name: CtaEvent): void {
  if (!goatcounterCode()) return;
  window.goatcounter?.count?.({
    path: name,
    title: name,
    event: true,
  });
}
