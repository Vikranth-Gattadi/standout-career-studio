import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileDown,
  MessageCircle,
} from "lucide-react";
import { profile, resumeUrl } from "@/data/portfolio";
import { PageShell } from "@/components/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gattadi Vikranth" },
      {
        name: "description",
        content:
          "Get in touch with Gattadi Vikranth — email, phone, LinkedIn and GitHub. Resume available for download.",
      },
      { property: "og:title", content: "Contact — Gattadi Vikranth" },
      {
        property: "og:description",
        content:
          "Get in touch with Gattadi Vikranth — email, phone, LinkedIn and GitHub.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — Gattadi Vikranth" },
      {
        name: "twitter:description",
        content:
          "Get in touch with Gattadi Vikranth — email, phone, LinkedIn and GitHub.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "See my code",
    href: profile.github,
  },
];

function ContactPage() {
  return (
    <PageShell
      eyebrow="Say hello"
      title="Let's work together"
      intro="Open to full-stack, data science and developer-education roles — or anything where building things matters."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="surface-card group flex items-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-ember transition-colors group-hover:bg-ember group-hover:text-primary-foreground">
              <c.icon className="size-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                {c.label}
              </span>
              <span className="mt-0.5 block font-medium text-foreground">
                {c.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="surface-card mt-10 flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <MessageCircle className="mt-1 size-6 shrink-0 text-ember" />
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Prefer a quick look first?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Grab my resume — one PDF with everything above.
            </p>
          </div>
        </div>
        <a
          href={resumeUrl}
          download="Vikranth_Resume.pdf"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ember-soft"
        >
          <FileDown className="size-4" />
          Download resume
        </a>
      </div>

      <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4 text-ember" />
        Based in {profile.location} · Speaks English, Hindi & Telugu
      </p>
    </PageShell>
  );
}
