import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, GraduationCap, Palette, Code2, Users, Trophy } from "lucide-react";
import portrait from "@/assets/portrait-updated.png.asset.json";
import { profile, education, experience, skillGroups, awards } from "@/lib/content";
import { Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => meta("Rakhmadi Rahman, S.T., M.Kom. — Dosen & Peneliti Keamanan Siber", "Profil Rakhmadi Rahman: dosen Sistem Informasi di ITH, riset keamanan siber, pengembangan aplikasi, dan desain kreatif."),
  component: Home,
});

const expertise = [
  { icon: Code2, title: "Teknologi & Web", text: "Pengembangan web dan aplikasi dengan fondasi Informatika." },
  { icon: Palette, title: "Desain Kreatif", text: "Desain grafis, komunikasi visual, dan konten digital." },
  { icon: Users, title: "Learning & Development", text: "Pelatihan, pengembangan kompetensi, dan knowledge management." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden grid-bg">
        <div className="glow pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.25fr_1fr] md:pt-20">
          <div>
            <p className="eyebrow reveal">Hello, I'm Rakhmadi Rahman</p>
            <h1 className="reveal mt-5 text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-7xl" style={{ animationDelay: "100ms" }}>
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
               Saya adalah dosen Sistem Informasi di Institut Teknologi Bacharuddin Jusuf Habibie dan peneliti keamanan siber, dengan pengalaman di bidang teknologi informasi, desain kreatif, serta pembelajaran dan pengembangan SDM.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Jelajahi Portofolio <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/about" className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">Tentang Saya</Link>
              <Link to="/contact" className="inline-flex items-center px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">Hubungi Saya →</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-dashed" />
            <div className="mask-reveal relative aspect-[4/5] overflow-hidden rounded-[1.75rem] rounded-tr-[6rem] border bg-elevated" style={{ animationDelay: "250ms" }}>
              <div className="absolute inset-0 grid-bg" />
               <img src={portrait.url} alt="Potret Rakhmadi Rahman" className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <div className="reveal absolute -bottom-5 -left-4 rounded-2xl border bg-card px-4 py-3 shadow-xl" style={{ animationDelay: "700ms" }}>
              <p className="font-display text-2xl font-bold">3×</p>
              <p className="text-xs text-muted-foreground">Lulusan Cumlaude</p>
            </div>
            <p className="absolute -right-2 top-6 rotate-90 origin-right font-display text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">S.T., M.Kom.</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section eyebrow="Perkenalan">
        <p className="max-w-4xl font-display text-2xl leading-snug md:text-4xl">
          Teknologi dan desain bukanlah dua bidang yang terpisah — <span className="font-serif italic text-primary">melainkan dua pendekatan</span> yang saling melengkapi untuk menciptakan pengalaman digital yang bermakna.
        </p>
      </Section>

      {/* Expertise */}
      <Section eyebrow="Keahlian Utama" title="Tiga disiplin, satu pendekatan.">
        <div className="grid gap-4 md:grid-cols-3">
          {expertise.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="group rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
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

      {/* Education + Career */}
      <Section eyebrow="Perjalanan" title="Pendidikan & karier." action={<Link to="/experience" className="text-sm text-primary">Lihat resume lengkap →</Link>}>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-7">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><GraduationCap className="h-4 w-4 text-primary" /> Pendidikan</div>
            <ul className="mt-6 space-y-6">
              {education.map((e) => (
                <li key={e.year} className="grid grid-cols-[3.5rem_1fr] gap-3">
                  <span className="font-display text-primary">{e.year}</span>
                  <div><p className="font-semibold">{e.degree} · {e.program}</p><p className="text-sm text-muted-foreground">{e.institution} — IPK {e.gpa}, {e.distinction}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-7">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="h-4 w-4 text-primary" /> Karier</div>
            <ul className="mt-6 space-y-6">
              {experience.map((e) => (
                <li key={e.company} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-semibold">{e.company}</p>
                  <p className="text-sm text-muted-foreground">{e.role} · {e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tools */}
      <Section eyebrow="Tools" title="Perangkat yang saya gunakan." action={<Link to="/skills" className="text-sm text-primary">Semua keahlian →</Link>}>
        <div className="flex flex-wrap gap-2">
          {skillGroups.slice(0, 2).flatMap((g) => g.items).map((s) => (
            <span key={s} className="rounded-full border bg-card px-4 py-2 text-sm">{s}</span>
          ))}
        </div>
      </Section>

      {/* Awards */}
      <Section eyebrow="Pencapaian" title="Penghargaan." action={<Link to="/awards" className="text-sm text-primary">Selengkapnya →</Link>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a) => (
            <div key={a.title + a.year} className="rounded-2xl border bg-card p-6">
              <Trophy className="h-5 w-5 text-primary" />
              <p className="mt-6 font-display text-3xl font-bold">{a.year}</p>
              <p className="mt-2 font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.institution}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border bg-card p-10 md:p-16 grid-bg">
          <div className="glow pointer-events-none absolute -bottom-40 -right-20 h-96 w-96" />
          <p className="eyebrow">Kolaborasi</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-5xl">Punya ide? Mari wujudkan <span className="font-serif font-normal italic text-primary">bersama</span>.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Mulai percakapan <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
