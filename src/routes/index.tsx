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
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-7 px-5 pb-9 pt-8 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-14">
          <div>
            <p className="eyebrow reveal">PORTOFOLIO PROFESIONAL</p>
            <h1 className="reveal mt-3 text-[clamp(2.2rem,7vw,4.2rem)] font-bold leading-[1.07] tracking-tight lg:text-7xl" style={{ animationDelay: "100ms" }}>
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
            <div className="reveal mt-5 flex flex-wrap items-center gap-2.5" style={{ animationDelay: "400ms" }}>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Jelajahi Portofolio <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">Tentang Saya</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[min(100%,19rem)] px-1 pb-3 sm:px-3 md:max-w-[22rem]">
            <div className="absolute -inset-3 rounded-[2rem] border border-dashed" />
            <div className="mask-reveal relative aspect-[4/4.4] overflow-hidden rounded-[1.75rem] rounded-tr-[5rem] border bg-elevated shadow-2xl shadow-primary/10" style={{ animationDelay: "250ms" }}>
              <div className="absolute inset-0 grid-bg" />
               <img src={portraitUrl} alt="Potret Rakhmadi Rahman" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <p className="absolute right-1 top-6 hidden rotate-90 origin-right sm:block font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">S.T., M.Kom.</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <Section eyebrow="Keahlian Utama" title="Fokus keahlian.">
        <div className="grid gap-3 md:grid-cols-3">
          {expertise.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group rounded-2xl border bg-card p-5 sm:p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected visual work */}
      <Section eyebrow="Portofolio Unggulan" title="Karya terpilih." action={<Link to="/portfolio" className="text-sm text-primary">Lihat semua proyek →</Link>}>
        <div className="grid gap-3 md:grid-cols-3">
          {projects.slice(0, 3).map(p => <Link key={p.slug} to="/portfolio" className="group overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <ProjectVisual slug={p.slug} title={p.title} />
            <div className="p-4"><p className="text-xs font-semibold text-primary">{p.category} · {p.year}</p><h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{p.summary}</p></div>
          </Link>)}
        </div>
      </Section>

      <Section eyebrow="Selengkapnya" title="Riwayat dan pencapaian.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {to:"/education",title:"Pendidikan",desc:"Jenjang dan capaian akademik"},
            {to:"/experience",title:"Karier",desc:"Peran dan pengalaman kerja"},
            {to:"/skills",title:"Keahlian",desc:"Kompetensi dan perangkat kerja"},
            {to:"/awards",title:"Prestasi",desc:"Penghargaan dan hak cipta"}
          ].map(item=><Link key={item.to} to={item.to} className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.desc}</p><ArrowUpRight className="mt-3 h-4 w-4 text-primary"/></Link>)}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border bg-card p-6 md:p-10 grid-bg">
          <div className="glow pointer-events-none absolute -bottom-40 -right-20 h-96 w-96" />
          <p className="eyebrow">Kolaborasi</p>
          <h2 className="mt-2 max-w-2xl text-2xl font-bold md:text-3xl">Wujudkan kolaborasi yang berdampak <span className="font-serif font-normal italic text-primary">bersama</span>.</h2>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Mulai percakapan <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
