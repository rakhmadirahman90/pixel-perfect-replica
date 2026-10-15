import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, Moon, Sun, X, ArrowUpRight, ChevronDown, Home, UserRound, BriefcaseBusiness, Mail, GraduationCap, Award, Code2, Wrench, BookOpen, Clock3 } from "lucide-react";
import { profile } from "@/lib/content";

export function Monogram() {
  return (
    <Link to="/" className="group flex items-baseline font-display text-xl font-bold tracking-tight" aria-label="Rakhmadi Rahman — beranda">
      <img src="https://id-preview--d44e39c6-b854-4b9d-b253-6f4221a6890f.lovable.app/__l5e/assets-v1/b89d55e3-b936-45cf-9fe9-a6cfae10c21f/rakhmadi-portrait-updated.png" alt="Foto Rakhmadi Rahman" className="h-10 w-10 rounded-full border-2 border-primary/40 bg-muted object-cover object-top shadow-sm transition-transform group-hover:scale-105" loading="eager" decoding="async" />
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
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  const close = () => { setOpen(false); setExpanded(null); };
  return (
    <>
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
          <button type="button" onClick={() => { setOpen(!open); setExpanded(null); }} aria-label={open ? "Tutup menu" : "Buka menu"} aria-controls="mobile-navigation" aria-expanded={open} className="hidden h-10 w-10 place-items-center rounded-xl border lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
      {/* Fixed navigation must be outside sticky/backdrop-filter header so bottom:0 is relative to viewport. */}
      {/* Native-app-inspired bottom navigation, available on mobile and tablet. */}
      <nav aria-label="Navigasi cepat seluler" className="fixed inset-x-0 bottom-0 z-[70] border-t border-primary/15 bg-background/95 px-3 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_40px_-22px_rgba(0,0,0,.45)] backdrop-blur-2xl lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
          {([
            { to: "/", label: "Beranda", icon: Home },
            { to: "/about", label: "Profil", icon: UserRound },
            { to: "/portfolio", label: "Karya", icon: BriefcaseBusiness },
            { to: "/contact", label: "Kontak", icon: Mail },
          ] as const).slice(0, 3).map(item => {
            const Icon = item.icon;
            const active = item.to === "/" ? pathname === "/" : item.to === "/about" ? ["/about","/education","/experience","/awards"].includes(pathname) : ["/portfolio","/skills","/services","/articles"].includes(pathname);
            return <Link key={item.to} to={item.to} onClick={close} aria-current={active ? "page" : undefined} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1.5 text-[10px] font-semibold transition-colors ${active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"}`}>
              <Icon className="h-[21px] w-[21px]" strokeWidth={active ? 2.3 : 1.8}/><span>{item.label}</span>
            </Link>;
          })}
          <Link to="/contact" onClick={close} aria-current={pathname === "/contact" ? "page" : undefined} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1.5 text-[10px] font-semibold ${pathname === "/contact" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"}`}><Mail className="h-[21px] w-[21px]" strokeWidth={pathname === "/contact" ? 2.3 : 1.8}/><span>Kontak</span></Link>
          <button type="button" onClick={() => { setOpen(!open); setExpanded(null); }} aria-label={open ? "Tutup semua menu" : "Lihat semua menu"} aria-controls="mobile-navigation" aria-expanded={open} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-1.5 text-[10px] font-semibold transition-colors ${open || (pathname !== "/" && pathname !== "/contact" && pathname !== "/about" && pathname !== "/portfolio" && !["/education","/experience","/awards","/skills","/services","/articles"].includes(pathname)) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5"}`}>
            {open ? <X className="h-[21px] w-[21px]"/> : <Menu className="h-[21px] w-[21px]"/>}<span>Menu</span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="presentation">
          <button type="button" aria-label="Tutup panel navigasi" onClick={close} className="absolute inset-0 bg-slate-950/65 backdrop-blur-[5px]" />
          <nav id="mobile-navigation" aria-label="Semua menu" className="absolute inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] mx-auto max-h-[calc(100dvh-6.5rem-env(safe-area-inset-bottom))] max-w-xl overflow-y-auto overscroll-contain rounded-t-[1.5rem] border border-primary/15 bg-background px-4 pb-3 pt-3 shadow-2xl sm:rounded-[2rem]">
            <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-muted-foreground/30" />
            <div className="mb-3 flex items-center justify-between gap-3">
              <div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary">Navigasi</p><h2 className="font-display text-xl font-bold leading-tight">Jelajahi Portofolio</h2></div>
              <button type="button" onClick={close} aria-label="Tutup menu" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border bg-card"><X className="h-5 w-5"/></button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {([
                { to: "/about", label: "Tentang Saya", icon: UserRound },
                { to: "/education", label: "Pendidikan", icon: GraduationCap },
                { to: "/experience", label: "Pengalaman", icon: Clock3 },
                { to: "/awards", label: "Penghargaan", icon: Award },
                { to: "/portfolio", label: "Portofolio", icon: BriefcaseBusiness },
                { to: "/skills", label: "Keahlian", icon: Code2 },
                { to: "/services", label: "Layanan", icon: Wrench },
                { to: "/articles", label: "Publikasi", icon: BookOpen },
              ] as const).map(item => {
                const Icon = item.icon;
                const active = pathname === item.to;
                return <Link key={item.to} to={item.to} onClick={close} className={`flex min-h-[72px] flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-2 transition-all active:scale-[.98] ${active ? "border-primary/45 bg-primary/10 text-primary" : "border-border bg-card hover:border-primary/30 hover:bg-primary/5"}`}>
                  <Icon className="h-7 w-7 shrink-0" strokeWidth={1.8}/><span className="text-center text-xs font-semibold leading-tight">{item.label}</span>
                </Link>;
              })}
            </div>
            <Link to="/contact" onClick={close} className="mt-3 flex items-center justify-between rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground">Diskusikan Kolaborasi <ArrowUpRight className="h-5 w-5"/></Link>
            <p className="mt-2 text-center text-[10px] text-muted-foreground">© {new Date().getFullYear()} {profile.name}</p>
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-2 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-2.5 text-center sm:px-6">
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} {profile.name}, {profile.credentials}
        </p>
      </div>
    </footer>
  );
}

/** Visible vector Kawung-inspired ornament; decorative only, never covers content. */
export function BatikAccent({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`batik-ornament pointer-events-none absolute overflow-hidden ${className}`}>
      <svg className="h-full w-full" viewBox="0 0 240 320" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batik-kawung-tile" width="80" height="80" patternUnits="userSpaceOnUse">
            <g stroke="currentColor" strokeWidth="1.65" opacity=".88">
              <ellipse cx="40" cy="20" rx="13" ry="19"/>
              <ellipse cx="40" cy="60" rx="13" ry="19"/>
              <ellipse cx="20" cy="40" rx="19" ry="13"/>
              <ellipse cx="60" cy="40" rx="19" ry="13"/>
              <path d="M40 32 L48 40 L40 48 L32 40 Z"/>
              <circle cx="40" cy="40" r="3.5"/>
            </g>
            <circle cx="0" cy="0" r="2" fill="currentColor" opacity=".65"/>
            <circle cx="80" cy="80" r="2" fill="currentColor" opacity=".65"/>
          </pattern>
          <linearGradient id="batik-kawung-fade" x1="0" x2="1">
            <stop offset="0" stopColor="white" stopOpacity="0"/>
            <stop offset=".32" stopColor="white" stopOpacity=".8"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <mask id="batik-kawung-mask"><rect width="240" height="320" fill="url(#batik-kawung-fade)"/></mask>
        </defs>
        <rect width="240" height="320" fill="url(#batik-kawung-tile)" mask="url(#batik-kawung-mask)"/>
      </svg>
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="relative isolate overflow-hidden border-b grid-bg">
      <BatikAccent className="right-0 top-0 z-0 h-full w-[min(36vw,320px)] max-sm:w-[42vw]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-5 pt-5 sm:px-6 md:pb-7 md:pt-8">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-5xl" style={{ animationDelay: "80ms" }}>{title}</h1>
        {intro && <p className="reveal mt-2 max-w-2xl text-muted-foreground md:text-lg" style={{ animationDelay: "160ms" }}>{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, action }: { eyebrow?: string; title?: ReactNode; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-5 sm:px-6 md:py-7">
      {(eyebrow || title) && (
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-1 text-xl font-bold md:text-2xl">{title}</h2>}
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
