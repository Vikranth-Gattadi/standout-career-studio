import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Award } from "lucide-react";
import { experience, achievements } from "@/data/portfolio";
import { PageShell } from "@/components/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Gattadi Vikranth" },
      {
        name: "description",
        content:
          "Work experience of Gattadi Vikranth — Software Developer & Instructor at NxtWave and Data Analyst Intern at 360DigiTMG, plus certifications.",
      },
      { property: "og:title", content: "Experience — Gattadi Vikranth" },
      {
        property: "og:description",
        content:
          "Software Developer & Instructor at NxtWave and Data Analyst Intern at 360DigiTMG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Experience — Gattadi Vikranth" },
      {
        name: "twitter:description",
        content:
          "Software Developer & Instructor at NxtWave and Data Analyst Intern at 360DigiTMG.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Career"
      title="Where I've worked"
      intro="From data analytics to teaching full-stack development — roles that sharpened both my engineering and my ability to explain it."
    >
      <div className="space-y-6">
        {experience.map((job) => (
          <article
            key={job.company}
            className="surface-card relative p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <span className="mt-1 hidden size-11 items-center justify-center rounded-xl bg-secondary text-ember sm:flex">
                  <Briefcase className="size-5" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {job.role}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {job.company}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {job.current ? <span className="ember-dot" /> : null}
                {job.period}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{job.summary}</p>
            <ul className="mt-5 space-y-3">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ember" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-ember">
          Achievements
        </p>
        <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Certifications
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40"
            >
              <Award className="size-6 text-ember" />
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {a.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ember-soft">
                {a.issuer}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
