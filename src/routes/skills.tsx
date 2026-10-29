import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Globe,
  Brain,
  Database,
  Wrench,
  GraduationCap,
} from "lucide-react";
import { skillGroups, education, type SkillGroup } from "@/data/portfolio";
import { PageShell } from "@/components/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Education — Gattadi Vikranth" },
      {
        name: "description",
        content:
          "Technical skills of Gattadi Vikranth — Python, C++, JavaScript, Node.js, SQL, machine learning, GenAI and Power BI — plus M.Tech in Data Science education.",
      },
      { property: "og:title", content: "Skills & Education — Gattadi Vikranth" },
      {
        property: "og:description",
        content:
          "Python, C++, JavaScript, Node.js, SQL, machine learning, GenAI and Power BI — with an M.Tech in Data Science.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Skills & Education — Gattadi Vikranth" },
      {
        name: "twitter:description",
        content:
          "Python, C++, JavaScript, Node.js, SQL, machine learning, GenAI and Power BI — with an M.Tech in Data Science.",
      },
    ],
  }),
  component: SkillsPage,
});

const icons: Record<SkillGroup["icon"], typeof Code2> = {
  code: Code2,
  globe: Globe,
  brain: Brain,
  database: Database,
  wrench: Wrench,
};

function SkillsPage() {
  return (
    <PageShell
      eyebrow="Toolkit"
      title="Skills & education"
      intro="The languages, frameworks and tools I work with every day — and the degrees behind them."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.title}
              className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-ember">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-4 font-display text-base font-semibold text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <section className="mt-16">
        <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-ember">
          Education
        </p>
        <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Academic journey
        </h2>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {education.map((e) => (
            <li key={e.degree} className="relative">
              <span className="absolute -left-[31px] top-1.5 flex size-3 items-center justify-center">
                <span className="ember-dot" />
              </span>
              <div className="surface-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.institution} · {e.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{e.period}</p>
                    <p className="mt-1 text-sm font-semibold text-ember">
                      {e.score}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <div className="surface-card flex items-start gap-4 p-6 sm:p-8">
          <GraduationCap className="mt-1 size-6 shrink-0 text-ember" />
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Languages & working style
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fluent in English, Hindi and Telugu. Self-motivated, calm under
              pressure, and always ready to learn a new skill.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
