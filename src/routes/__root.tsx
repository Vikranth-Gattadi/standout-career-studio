import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { profile } from "@/data/portfolio";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Gattadi <span className="text-ember">Vikranth</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-ember"
              activeProps={{ className: "active" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            download="Vikranth_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ember-soft"
          >
            <FileDown className="size-4" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&.active]:bg-muted [&.active]:text-ember"
                activeProps={{ className: "active" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              download="Vikranth_Resume.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <FileDown className="size-4" />
              Download Resume
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            Gattadi Vikranth
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-ember"
          >
            <Mail className="size-5" />
          </a>
          <a
            href={`tel:${profile.phoneHref}`}
            aria-label="Phone"
            className="text-muted-foreground transition-colors hover:text-ember"
          >
            <Phone className="size-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-ember"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-ember"
          >
            <Github className="size-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gattadi Vikranth
        </p>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,400&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

export { MapPin };
