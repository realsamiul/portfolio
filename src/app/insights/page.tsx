import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function InsightsPage() {
  return (
    <main id="top" className="min-h-dvh flex flex-col gap-12 relative pb-28">
      <section>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Badge className="mb-4">CricSight insights</Badge>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
            Ranked cricket observations, not stat tables.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            These are mock presentation cards for the site, shaped around the
            verified CricSight pipeline. Replace the copy, images, and numbers
            with final model outputs when the insight export is ready.
          </p>
        </BlurFade>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
        {DATA.projects.map((insight, id) => (
          <BlurFade
            key={insight.title}
            delay={BLUR_FADE_DELAY * 4 + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={insight.href}
              title={insight.title}
              description={insight.description}
              dates={insight.dates}
              tags={insight.technologies}
              image={insight.image}
              video={insight.video}
              links={insight.links}
            />
          </BlurFade>
        ))}
      </section>
    </main>
  );
}