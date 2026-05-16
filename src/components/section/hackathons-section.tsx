import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function HackathonsSection() {
  return (
    <section id="milestones">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-semibold">
                Milestones
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pipeline Evolution
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto leading-relaxed">
                Tracking development horizons from localized scripts to decentralized cloud deployment frameworks.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="mx-auto w-full max-w-2xl">
          <div className="ml-4 border-l border-muted space-y-8 pl-6 relative">
            {DATA.hackathons.map((item, id) => (
              <BlurFade
                key={item.title + item.dates}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <div className="relative flex flex-col justify-start gap-1">
                  {/* Timeline Dot Indicator */}
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary" />
                  
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {item.location}
                    </span>
                    <span className="text-xs tabular-nums text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-sm">
                      {item.dates}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}