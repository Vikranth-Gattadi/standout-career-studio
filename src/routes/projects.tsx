import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { PageShell, Tag } from "@/components/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Gattadi Vikranth" },
      {
        name: "description",
        content:
          "Projects by Gattadi Vikranth — backend platforms in Node.js, a Django thesis portal, machine-learning malware detection and real-time sign-language translation.",
      },
      { property: "og:title", content: "Projects — Gattadi Vikranth" },
      {
        property: "og:description",
        content:
          "Backend platforms, a Django portal, ML malware detection and real-time sign-language translation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Projects — Gattadi Vikranth" },
      {
        name: "twitter:description",
        content:
          "Backend platforms, a Django portal, ML malware detection and real-time sign-language translation.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Things I've built"
      intro="Production-style backends, academic deep-learning systems and client work — each one built end to end."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="surface-card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40 hover:shadow-glow sm:p-8"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-ember">
                {p.domain ?? p.kind}
              </p>
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {p.kind}
              </span>
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              {p.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
