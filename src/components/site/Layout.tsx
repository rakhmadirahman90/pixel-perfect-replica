import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, Moon, Sun, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { profile } from "@/lib/content";

export function Monogram() {
  return (
    <Link to="/" className="group flex items-baseline font-display text-xl font-bold tracking-tight" aria-label="Rakhmadi Rahman — beranda">
      RR<span className="text-primary transition-transform group-hover:translate-x-0.5">.</span>
    </Link>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Ganti tema" className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:text-foreground">
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

const menuGroups = [
  { label: "Profil", items: [{ to: "/about", label: "Tentang Saya" }, { to: "/education", label: "Pendidikan" }, { to: "/experience", label: "Pengalaman" }, { to: "/awards", label: "Penghargaan" }] },
  { label: "Karya & Keahlian", items: [{ to: "/portfolio", label: "Portofolio" }, { to: "/skills", label: "Keahlian" }, { to: "/services", label: "Layanan" }, { to: "/articles", label: "Artikel" }] },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { setOpen(false); setExpanded(null); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const close = () => { setOpen(false); setExpanded(null); };
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Monogram />
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-primary" }} activeOptions={{ exact: true }}>Beranda</Link>
          {menuGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button type="button" className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground" aria-haspopup="true">
                {group.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-2 rounded-2xl border bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {group.items.map(item => <Link key={item.to} to={item.to} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground" activeProps={{ className: "bg-primary/10 font-semibold text-primary" }}>{item.label}</Link>)}
              </div>
            </div>
          ))}
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground" activeProps={{ className: "text-sm font-semibold text-primary" }}>Kontak</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex">Hubungi</Link>
          <button type="button" onClick={() => { setOpen(!open); setExpanded(null); }} aria-label={open ? "Tutup menu" : "Buka menu"} aria-controls="mobile-navigation" aria-expanded={open} className="grid h-9 w-9 place-items-center rounded-full border lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Navigasi seluler" className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t bg-background/95 px-5 pb-5 pt-3 shadow-xl sm:px-6 lg:hidden">
          <div className="mx-auto max-w-6xl space-y-1">
            <Link to="/" onClick={close} className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-lg font-semibold hover:bg-primary/10" activeProps={{ className: "bg-primary/10 text-primary" }}>Beranda <ArrowUpRight className="h-4 w-4" /></Link>
            {menuGroups.map(group => {
              const active = group.items.some(item => item.to === pathname);
              const isExpanded = expanded === group.label;
              return <div key={group.label} className="rounded-2xl border border-border/70">
                <button type="button" aria-expanded={isExpanded} aria-controls={`mobile-group-${group.label === "Profil" ? "profile" : "work"}`} onClick={() => setExpanded(isExpanded ? null : group.label)} className="flex w-full items-center justify-between rounded-2xl px-3 py-3.5 text-left font-display text-lg font-semibold hover:bg-primary/10">
                  <span>{group.label}{active && <span className="ml-2 text-xs font-medium text-primary">• Aktif</span>}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                {isExpanded && <div id={`mobile-group-${group.label === "Profil" ? "profile" : "work"}`} className="grid gap-1 border-t px-2 pb-2 pt-2">
                  {group.items.map(item => <Link key={item.to} to={item.to} onClick={close} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground" activeProps={{ className: "bg-primary/10 font-semibold text-primary" }}>{item.label}<ArrowUpRight className="h-3.5 w-3.5" /></Link>)}
                </div>}
              </div>;
            })}
            <Link to="/contact" onClick={close} className="flex items-center justify-between rounded-xl bg-primary px-4 py-3.5 font-display text-base font-semibold text-primary-foreground">Hubungi Saya <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Monogram />
          <p className="mt-3 font-serif text-xl italic text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {([["/about", "Tentang"], ["/education", "Pendidikan"], ["/experience", "Pengalaman"], ["/skills", "Keahlian"], ["/portfolio", "Portofolio"], ["/awards", "Penghargaan"], ["/services", "Layanan"], ["/contact", "Kontak"]] as const).map(([to, l]) => (
            <Link key={to} to={to} className="hover:text-foreground">{l}</Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground md:text-right">© {new Date().getFullYear()} {profile.name}, {profile.credentials}<br />{profile.location}</p>
      </div>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b grid-bg">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-24">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-4 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl" style={{ animationDelay: "80ms" }}>{title}</h1>
        {intro && <p className="reveal mt-5 max-w-2xl text-muted-foreground md:text-lg" style={{ animationDelay: "160ms" }}>{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, action }: { eyebrow?: string; title?: ReactNode; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-24">
      {(eyebrow || title) && (
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-dashed p-10 text-center grid-bg">
      <p className="font-display text-xl font-semibold">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
