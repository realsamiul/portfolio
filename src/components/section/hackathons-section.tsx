import BlurFade from "@/components/magicui/blur-fade";
import { TimelineItem } from "@/components/timeline";
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
          <ul className="ml-4 border-l border-muted space-y-8">
            {DATA.hackathons.map((item, id) => (
              <BlurFade
                key={item.title + item.dates}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <TimelineItem
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  dates={item.dates}
                  image={item.image || undefined}
                  links={[]}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}