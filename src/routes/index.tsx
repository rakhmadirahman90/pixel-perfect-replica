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
      {/* Hero */}
      <section className="relative isolate overflow-hidden grid-bg">
        <BatikAccent className="right-0 top-0 z-0 h-full w-[min(40vw,400px)] max-sm:w-[46vw]" />
        <div className="glow pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem]" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-4 px-5 pb-4 pt-5 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:py-7">
          <div>
            <p className="eyebrow reveal">PORTOFOLIO PROFESIONAL</p>
            <h1 className="reveal mt-3 text-[clamp(1.9rem,6vw,3.2rem)] font-bold leading-[1.07] tracking-tight lg:text-7xl" style={{ animationDelay: "100ms" }}>
              Rakhmadi <span className="font-serif font-normal italic text-primary">Rahman.</span>
            </h1>
            <div className="reveal mt-4 flex items-center gap-3 text-sm text-muted-foreground" style={{ animationDelay: "200ms" }}>
              <span className="h-px w-8 bg-primary" />
               <span className="relative inline-block h-6 min-w-0 overflow-hidden font-display text-sm text-foreground sm:text-base">
                <span className="role-cycle flex flex-col">
                  {profile.roles.map((r) => <span key={r} className="h-6 leading-6">{r}</span>)}
                </span>
              </span>
            </div>
            <p className="reveal mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base" style={{ animationDelay: "300ms" }}>
               Dosen Sistem Informasi, peneliti keamanan siber, dan praktisi pengembangan aplikasi serta desain digital.
            </p>
            <div className="reveal mt-3 flex flex-wrap items-center gap-2.5" style={{ animationDelay: "400ms" }}>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Jelajahi Portofolio <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">Tentang Saya</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[min(100%,10rem)] px-1 pb-3 sm:px-3 md:max-w-[15rem]">
            <div className="absolute -inset-3 rounded-[2rem] border border-dashed" />
            <div className="mask-reveal relative aspect-square overflow-hidden rounded-[1.75rem] rounded-tr-[5rem] border bg-elevated shadow-2xl shadow-primary/10" style={{ animationDelay: "250ms" }}>
              <div className="absolute inset-0 grid-bg" />
               <img src={portraitUrl} alt="Potret Rakhmadi Rahman" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <p className="absolute right-1 top-6 hidden rotate-90 origin-right sm:block font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">S.T., M.Kom.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 pt-3 lg:pb-8">
        <div className="grid grid-cols-4 gap-2 rounded-3xl border bg-card/80 p-3 shadow-lg backdrop-blur-xl sm:gap-3 sm:p-5 lg:grid-cols-8">
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
            <Link key={to} to={to} className="group flex flex-col items-center gap-2 rounded-2xl border bg-background/70 px-1 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 active:scale-95">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"><Icon className="h-5 w-5" /></span>
              <span className="text-[11px] font-medium sm:text-xs">{title}</span>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
