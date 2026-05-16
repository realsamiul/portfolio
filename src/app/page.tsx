/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main id="top" className="min-h-dvh flex flex-col gap-16 relative pb-28">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-6 flex flex-col md:flex-row justify-between">
            <div className="gap-4 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl"
                yOffset={8}
                text="KALOPATHOR"
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-xl text-muted-foreground md:text-2xl"
                text="CricSight turns cricket data into fan-readable intelligence."
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="max-w-[650px] text-muted-foreground leading-relaxed">
                  A Bangladesh-first cricket insight engine: not dashboards, not raw
                  stat tables — just specific, surprising, evidence-backed sentences.
                </p>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">906 matches</Badge>
                  <Badge variant="secondary">578,466 deliveries</Badge>
                  <Badge variant="secondary">257 ranked insights</Badge>
                  <Badge variant="secondary">WP Brier 0.1389</Badge>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    View insights
                    <ArrowRightIcon className="size-4" />
                  </Link>
                  <Link
                    href="/architecture"
                    className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-muted"
                  >
                    See architecture
                  </Link>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">What CricSight is</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="process">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">How the engine works</h2>
          </BlurFade>

          <div className="grid gap-3 sm:grid-cols-2">
            {DATA.work.slice(0, 4).map((step, index) => (
              <BlurFade
                key={step.company}
                delay={BLUR_FADE_DELAY * 9 + index * 0.05}
              >
                <div className="h-full rounded-2xl border bg-card/70 p-5 shadow-sm backdrop-blur">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge variant="outline">{step.location}</Badge>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {step.start}–{step.end}
                    </span>
                  </div>
                  <h3 className="font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="featured">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="rounded-3xl border bg-linear-to-br from-card via-card/80 to-muted/30 p-6 shadow-sm">
            <Badge className="mb-4">Featured product promise</Badge>
            <h2 className="text-2xl font-semibold tracking-tight">
              Build things that would make a Bangladesh cricket fan say:
              “I didn’t know that.”
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              CricSight’s job is not to impress data scientists with methodology.
              It is to compress rigorous cricket modeling into clear fan-facing
              observations that feel useful before, during, and after a match.
            </p>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}