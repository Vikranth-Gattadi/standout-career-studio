import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-ember">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
      <header className="mb-14 animate-fade-up">
        <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.3em] text-ember">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        ) : null}
      </header>
      {children}
    </div>
  );
}
