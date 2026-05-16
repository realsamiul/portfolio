import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ArchitecturePage() {
  return (
    <main id="top" className="min-h-dvh flex flex-col gap-14 relative pb-28">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Badge className="mb-4">Architecture + next steps</Badge>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
            From ball-by-ball data to fan-facing cricket intelligence.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            CricSight is built as a staged pipeline: registry parsing, ingestion verification,
            delivery states, leakage-safe features, model outputs, weather tracking joins, 
            and generation logic.
          </p>
        </BlurFade>
      </section>

      <section>
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Current pipeline steps</h2>
          </BlurFade>

          <div className="grid gap-3">
            {DATA.work.map((step, index) => (
              <BlurFade
                key={step.company}
                delay={BLUR_FADE_DELAY * 5 + index * 0.05}
              >
                <div className="rounded-2xl border bg-card/70 p-5 shadow-sm backdrop-blur">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{step.company}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {step.location}
                      </span>
                    </div>
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

      <section>
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Next active milestones</h2>
          </BlurFade>

          <div className="grid gap-3 sm:grid-cols-2">
            {DATA.hackathons.map((item, index) => (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 11 + index * 0.05}
              >
                <div className="h-full rounded-2xl border bg-background/80 p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge>{item.location}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {item.dates}
                    </span>
                  </div>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}