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
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden grid-bg">
        <BatikAccent className="right-0 top-0 z-0 h-full w-[min(40vw,400px)] max-sm:w-[46vw]" />
        <div className="glow pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem]" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 md:grid-cols-[1.15fr_1fr] md:gap-14 md:pt-20">
          <div>
            <p className="eyebrow reveal">RAKHMADI RAHMAN · PORTOFOLIO PROFESIONAL</p>
            <h1 className="reveal mt-5 text-[clamp(2.3rem,8vw,4.5rem)] font-bold leading-[1.07] tracking-tight lg:text-7xl" style={{ animationDelay: "100ms" }}>
              Building digital experiences through{" "}
              <span className="font-serif font-normal italic text-primary">technology</span> &amp; creativity.
            </h1>
            <div className="reveal mt-6 flex items-center gap-3 text-sm text-muted-foreground" style={{ animationDelay: "200ms" }}>
              <span className="h-px w-8 bg-primary" />
               <span className="relative inline-block h-6 min-w-0 overflow-hidden font-display text-sm text-foreground sm:text-base">
                <span className="role-cycle flex flex-col">
                  {profile.roles.map((r) => <span key={r} className="h-6 leading-6">{r}</span>)}
                </span>
              </span>
            </div>
            <p className="reveal mt-6 max-w-xl text-muted-foreground" style={{ animationDelay: "300ms" }}>
               Dosen Sistem Informasi dan peneliti keamanan siber yang memadukan teknologi, desain, serta pengembangan SDM.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "400ms" }}>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Jelajahi Portofolio <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">Tentang Saya</Link>
              <Link to="/contact" className="inline-flex items-center px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">Hubungi Saya →</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[min(100%,25rem)] px-1 pb-6 sm:px-3">
            <div className="absolute -inset-3 rounded-[2rem] border border-dashed" />
            <div className="mask-reveal relative aspect-[4/5] overflow-hidden rounded-[1.75rem] rounded-tr-[5rem] border bg-elevated shadow-2xl shadow-primary/10" style={{ animationDelay: "250ms" }}>
              <div className="absolute inset-0 grid-bg" />
               <img src={portraitUrl} alt="Potret Rakhmadi Rahman" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <div className="reveal absolute bottom-0 left-0 rounded-2xl border bg-card px-4 py-3 shadow-xl" style={{ animationDelay: "700ms" }}>
              <p className="font-display text-2xl font-bold">3×</p>
              <p className="text-xs text-muted-foreground">Lulusan dengan Predikat Cum Laude</p>
            </div>
            <p className="absolute right-1 top-6 hidden rotate-90 origin-right sm:block font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">S.T., M.Kom.</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section eyebrow="Perkenalan">
        <p className="max-w-4xl font-display text-2xl leading-snug md:text-4xl">
          Teknologi dan desain <span className="font-serif italic text-primary">saling melengkapi</span> untuk menciptakan solusi digital yang bermanfaat.
        </p>
      </Section>

      {/* Expertise */}
      <Section eyebrow="Keahlian Utama" title="Keahlian untuk solusi digital.">
        <div className="grid gap-4 md:grid-cols-3">
          {expertise.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group rounded-2xl border bg-card p-5 sm:p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected visual work */}
      <Section eyebrow="Portofolio Unggulan" title="Proyek pilihan." action={<Link to="/portfolio" className="text-sm text-primary">Lihat semua proyek →</Link>}>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map(p => <Link key={p.slug} to="/portfolio" className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <ProjectVisual slug={p.slug} title={p.title} />
            <div className="p-5"><p className="text-xs font-semibold text-primary">{p.category} · {p.year}</p><h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p></div>
          </Link>)}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Visualisasi proyek disajikan sebagai ilustrasi representatif.</p>
      </Section>

      <Section eyebrow="Jelajahi Profil" title="Temukan informasi yang Anda butuhkan.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {to:"/education",title:"Pendidikan",desc:"Jenjang dan capaian akademik"},
            {to:"/experience",title:"Karier",desc:"Peran dan pengalaman kerja"},
            {to:"/skills",title:"Keahlian",desc:"Kompetensi dan perangkat kerja"},
            {to:"/awards",title:"Prestasi",desc:"Penghargaan dan hak cipta"}
          ].map(item=><Link key={item.to} to={item.to} className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.desc}</p><ArrowUpRight className="mt-5 h-4 w-4 text-primary"/></Link>)}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border bg-card p-10 md:p-16 grid-bg">
          <div className="glow pointer-events-none absolute -bottom-40 -right-20 h-96 w-96" />
          <p className="eyebrow">Kolaborasi</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-5xl">Wujudkan kolaborasi yang berdampak <span className="font-serif font-normal italic text-primary">bersama</span>.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Mulai percakapan <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
