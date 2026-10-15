import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Palette, Code2, Users } from "lucide-react";
// Lovable-hosted portrait: use absolute URL because /__l5e assets are not served by Vercel.
const portraitUrl = "https://id-preview--d44e39c6-b854-4b9d-b253-6f4221a6890f.lovable.app/__l5e/assets-v1/b89d55e3-b936-45cf-9fe9-a6cfae10c21f/rakhmadi-portrait-updated.png";
import { profile } from "@/lib/content";
import { BatikAccent, Section, meta } from "@/components/site/Layout";
import { ProjectVisual } from "@/components/site/VisualCards";
import { projects } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => meta("Rakhmadi Rahman, S.T., M.Kom. — Dosen & Peneliti Keamanan Siber", "Profil Rakhmadi Rahman: dosen Sistem Informasi di ITH, riset keamanan siber, pengembangan aplikasi, dan desain kreatif."),
  component: Home,
});

const expertise = [
  { icon: Code2, title: "Teknologi & Web", text: "Pengembangan aplikasi dan website." },
  { icon: Palette, title: "Desain Kreatif", text: "Desain visual dan konten digital." },
  { icon: Users, title: "Learning & Development", text: "Pelatihan, kompetensi, dan manajemen pengetahuan." },
];

function Home() {
  return (
    <>
      <div className="relative mx-auto flex h-[calc(100svh-9rem)] min-h-[380px] max-w-5xl flex-col justify-between gap-3 overflow-hidden px-4 py-3 sm:px-6 lg:h-[calc(100svh-5rem)] lg:gap-5">
        <section className="grid min-h-0 flex-[0.9] grid-cols-[minmax(0,1fr)_100px] items-center gap-3 rounded-2xl border border-primary/15 bg-card/40 p-3 sm:grid-cols-[minmax(0,1fr)_140px] sm:gap-6 sm:p-6 lg:grid-cols-[minmax(0,1fr)_180px]">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">Portofolio Profesional</p>
            <h1 className="mt-1 text-[clamp(1.45rem,5vw,3rem)] font-bold leading-tight tracking-tight">Rakhmadi <span className="text-primary">Rahman</span></h1>
            <p className="mt-1 text-[11px] font-medium sm:text-sm">S.T., M.Kom. · Dosen &amp; Praktisi Digital</p>
            <p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-muted-foreground sm:text-sm sm:leading-6">Sistem Informasi, keamanan siber, aplikasi, dan desain kreatif.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[180px]">
            <div className="absolute -inset-1 rounded-2xl border border-primary/30 motion-safe:animate-pulse" />
            <img src={portraitUrl} alt="Foto Rakhmadi Rahman" className="relative aspect-square w-full rounded-2xl border bg-card object-cover object-top shadow-lg" />
          </div>
        </section>
        <section aria-label="Navigasi portofolio" className="flex min-h-0 flex-[1.3] flex-col justify-center rounded-2xl border bg-card/80 p-3 shadow-lg backdrop-blur-lg sm:p-5">
          <h2 className="mb-2 px-1 text-xs font-semibold sm:text-sm">Jelajahi portofolio</h2>
          <div className="grid flex-1 grid-cols-4 grid-rows-2 gap-2 lg:grid-cols-8 lg:grid-rows-1">
            {[
              {to:"/about",title:"Profil",icon:Users},
              {to:"/education",title:"Pendidikan",icon:Code2},
              {to:"/experience",title:"Karier",icon:Users},
              {to:"/portfolio",title:"Karya",icon:Palette},
              {to:"/skills",title:"Keahlian",icon:Code2},
              {to:"/awards",title:"Prestasi",icon:ArrowUpRight},
              {to:"/articles",title:"Artikel",icon:Code2},
              {to:"/contact",title:"Kontak",icon:ArrowRight},
            ].map(({to,title,icon:Icon}) => (
              <Link key={to} to={to} className="group flex min-h-0 min-w-0 flex-col items-center justify-center gap-1 rounded-xl border bg-background/70 px-0.5 py-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 active:scale-95 sm:gap-2 sm:py-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:h-12 sm:w-12"><Icon className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                <span className="w-full truncate text-[10px] font-medium sm:text-xs">{title}</span>
              </Link>
            ))}
          </div>
        </section>
        <footer className="shrink-0 py-1 text-center text-[10px] text-muted-foreground sm:text-xs">© {new Date().getFullYear()} Rakhmadi Rahman, S.T., M.Kom. · Portofolio Profesional</footer>
      </div>

    </>
  );
}
