import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Download, GraduationCap, Mail, MapPin, Microscope, Phone, Sparkles, UsersRound, ExternalLink, ShieldCheck } from "lucide-react";
import { bio, profile, education, organizations, research, sourceCv, institutionalIdentitySources } from "@/lib/content";
import { InstitutionLogo } from "@/components/site/BrandLogos";
import { PageHeader, Section, meta } from "@/components/site/Layout";

const portraitUrl = "https://id-preview--d44e39c6-b854-4b9d-b253-6f4221a6890f.lovable.app/__l5e/assets-v1/b89d55e3-b936-45cf-9fe9-a6cfae10c21f/rakhmadi-portrait-updated.png";
export const Route = createFileRoute("/about")({
  head: () => meta("Tentang Saya — Rakhmadi Rahman", "Profil profesional, pendidikan, pengalaman, keahlian dan arah riset Rakhmadi Rahman, S.T., M.Kom."),
  component: About,
});
const values = [
  { title: "Berpikir analitis", desc: "Pendekatan berbasis data dan pemecahan masalah.", icon: Microscope },
  { title: "Kreativitas terapan", desc: "Menghubungkan teknologi dan komunikasi visual.", icon: Sparkles },
  { title: "Kolaborasi", desc: "Membangun solusi melalui kerja lintas disiplin.", icon: UsersRound },
  { title: "Belajar berkelanjutan", desc: "Terbuka pada metode dan teknologi baru.", icon: BookOpen },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="Profil Profesional" title={<>Teknologi, riset, dan <span className="font-serif font-normal italic text-primary">kreativitas.</span></>} intro="Profil, pendidikan, keahlian, dan arah riset." />
      <Section>
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-6">
          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-elevated shadow-xl">
              <div className="relative aspect-[4/4.6] overflow-hidden">
                <img src={portraitUrl} alt="Potret Rakhmadi Rahman" className="h-full w-full object-cover object-top" loading="eager" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-[.2em] text-cyan-200">Professional Profile</p>
                  <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{profile.name}</h2>
                  <p className="mt-1 text-sm text-slate-200">{profile.credentials} · Information Systems</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Fokus Profesional</p>
              <div className="mt-4 flex flex-wrap gap-2">{["Sistem Informasi", "Cybersecurity", "Riset Terapan", "Desain Digital", "Learning & Development"].map(tag => <span key={tag} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium">{tag}</span>)}</div>
              <div className="mt-3 grid gap-2">
                <a href={profile.academicCvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Download className="h-4 w-4" /> Lihat CV Akademik</a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/5"><Mail className="h-4 w-4" /> Hubungi Saya</Link>
              </div>
            </div>
          </aside>
          <div className="min-w-0 space-y-4">
            <section className="rounded-[1.75rem] border bg-card p-5 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-primary"><Sparkles className="h-4 w-4" /> Tentang Saya</div>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">Teknologi yang berpadu dengan kreativitas.</h2>
              <p className="mt-2 text-base leading-7 text-foreground/90">{bio[0]} {bio[1]}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{bio[3]} {bio[5]}</p>
              <p className="mt-4 border-l-2 border-primary pl-4 font-serif text-lg italic leading-relaxed text-foreground/90">{bio[6]}</p>
            </section>
            <section>
              <div className="mb-4 flex items-center gap-3"><Sparkles className="h-5 w-5 text-primary" /><h2 className="text-xl font-bold">Prinsip Kerja</h2></div>
              <div className="grid gap-3 sm:grid-cols-2">{values.map(({title,desc,icon:Icon}) => <div key={title} className="rounded-2xl border bg-card p-5 transition-colors hover:border-primary/35"><Icon className="h-6 w-6 text-primary" strokeWidth={1.7}/><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p></div>)}</div>
            </section>
            <section className="rounded-[1.75rem] border bg-card p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-2"><BriefcaseBusiness className="h-5 w-5 text-primary"/><h2 className="text-xl font-bold">Identitas Profesional</h2></div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Institusi</p>
              <h3 className="mt-1 text-lg font-semibold">{profile.institution}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{profile.academicDepartment}</p>
              <div className="mt-3 grid gap-3 border-t pt-5 text-sm">
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary"/>{profile.officeAddress}</p>
                <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary"/>{profile.officePhone}</p>
                <a className="flex items-start gap-3 break-all text-primary hover:underline" href={`mailto:${profile.academicEmail}`}><Mail className="mt-0.5 h-4 w-4 shrink-0"/>{profile.academicEmail}</a>
              </div>
            </section>
            <section>
              <div className="mb-4 flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary"/><h2 className="text-xl font-bold">Perjalanan Pendidikan</h2></div>
              <div className="space-y-3">{education.map(e => <div key={e.year} className="flex items-start gap-4 rounded-2xl border bg-card p-4 sm:p-5"><InstitutionLogo name={e.institution} size="sm"/><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{e.year}</span><span className="text-xs text-muted-foreground">{e.degree}</span></div><h3 className="mt-2 font-semibold">{e.program}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.institution}</p><p className="mt-2 text-xs text-muted-foreground">IPK {e.gpa} · {e.distinction}</p></div></div>)}</div>
              <Link to="/education" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Lihat detail pendidikan <ArrowUpRight className="h-4 w-4"/></Link>
            </section>
            <section className="rounded-[1.75rem] border bg-card p-5 sm:p-7">
              <h2 className="text-xl font-bold">Eksplorasi Lebih Lanjut</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Keahlian teknis, publikasi ilmiah, dan riwayat organisasi disajikan pada halaman khusus agar profil tetap ringkas.</p>
              <div className="mt-5 flex flex-wrap gap-3"><Link to="/skills" className="text-sm font-semibold text-primary hover:underline">Keahlian →</Link><Link to="/articles" className="text-sm font-semibold text-primary hover:underline">Publikasi →</Link><Link to="/awards" className="text-sm font-semibold text-primary hover:underline">Prestasi →</Link></div>
            </section>
            <section className="rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Sumber & Dokumen</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Data akademik merujuk pada CV tertanggal {sourceCv.date} serta sumber institusi terkait.</p>
              <div className="mt-4 flex flex-wrap gap-3">{institutionalIdentitySources.map(item => <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">{item.name} <ExternalLink className="h-3 w-3"/></a>)}</div>
              {profile.cvPublic && <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"><Download className="h-4 w-4"/> CV arsip</a>}
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
