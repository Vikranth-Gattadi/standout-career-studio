import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile, highlights, projects, resumeUrl, photoUrl } from "@/data/portfolio";
import { Tag } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Gattadi Vikranth — Full-Stack Developer & Data Scientist",
      },
      {
        name: "description",
        content:
          "Portfolio of Gattadi Vikranth — full-stack developer, instructor and data scientist building web platforms, Node.js APIs and machine-learning systems.",
      },
      {
        property: "og:title",
        content: "Gattadi Vikranth — Full-Stack Developer & Data Scientist",
      },
      {
        property: "og:description",
        content:
          "Full-stack developer, instructor and data scientist building web platforms, Node.js APIs and machine-learning systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Gattadi Vikranth — Full-Stack Developer & Data Scientist",
      },
      {
        name: "twitter:description",
        content:
          "Full-stack developer, instructor and data scientist building web platforms, Node.js APIs and machine-learning systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      {/* Hero */}
      <section className="flex flex-col-reverse items-start gap-10 pb-20 pt-28 sm:pt-36 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-ember" />
            Open to new opportunities
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            Gattadi
            <br />
            <span className="text-gradient-ember">Vikranth</span>
          </h1>
          <p className="mt-4 font-display text-lg font-medium text-foreground sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ember-soft"
            >
              View my work
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={resumeUrl}
              download="Vikranth_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-ember hover:text-ember"
            >
              <FileDown className="size-4" />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ember"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-ember"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-ember"
            >
              <Github className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in md:shrink-0">
          <div className="absolute -inset-6 rounded-full bg-ember/15 blur-3xl" />
          <img
            src={photoUrl}
            alt="Portrait of Gattadi Vikranth"
            className="relative w-48 rounded-3xl border border-border object-cover shadow-glow sm:w-64 md:w-72"
          />
        </div>
      </section>

      {/* Highlight stats */}
      <section className="grid grid-cols-2 gap-4 border-y border-border py-10 sm:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-bold text-ember sm:text-4xl">
              {h.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {h.label}
            </p>
          </div>
        ))}
      </section>

      {/* About */}
      <section className="grid gap-10 py-20 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-ember">
            About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building software that teaches and ships
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>{profile.objective}</p>
          <p>
            Today I teach full-stack development at NxtWave — HTML, CSS,
            JavaScript, Python, SQL and data structures — while continuing to
            build my own platforms, APIs and machine-learning systems.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Full-Stack", "Data Science", "Machine Learning", "Teaching"].map(
              (q) => (
                <Tag key={q}>{q}</Tag>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-ember">
              Featured work
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Selected projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-2 text-sm font-medium text-ember transition-colors hover:text-ember-soft sm:inline-flex"
          >
            All projects
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.title}
              className="surface-card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40 hover:shadow-glow"
            >
              <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-ember">
                {p.domain ?? p.kind}
              </p>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
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
      </section>
    </div>
  );
}
