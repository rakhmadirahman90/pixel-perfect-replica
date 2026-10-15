import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import portrait from "@/assets/portrait.png.asset.json";
import { bio, profile, education, organizations } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => meta("Tentang Saya — Rakhmadi Rahman", "Biografi Rakhmadi Rahman, S.T., M.Kom.: latar belakang Informatika dan Sistem Informasi Bisnis, teknologi, dan desain kreatif."),
  component: About,
});

const values = ["Analitis & kreatif", "Belajar berkelanjutan", "Solusi yang aplikatif", "Kolaborasi"];

function About() {
  return (
    <>
      <PageHeader eyebrow="Tentang Saya" title={<>Teknologi bertemu <span className="font-serif font-normal italic text-primary">kreativitas</span>.</>} />
      <Section>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border bg-elevated grid-bg md:sticky md:top-24 md:self-start">
            <img src={portrait.url} alt="Potret Rakhmadi Rahman" loading="lazy" className="absolute bottom-0 left-1/2 h-[95%] w-auto max-w-none -translate-x-1/2" />
          </div>
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {bio.map((p, i) => <p key={i} className={i === 0 ? "font-display text-2xl leading-snug text-foreground" : ""}>{p}</p>)}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {values.map((v) => <div key={v} className="rounded-xl border bg-card p-4 text-sm font-medium">{v}</div>)}
            </div>
            <h2 className="mt-12 text-xl font-semibold">Kualifikasi akademik</h2>
            <ul className="mt-4 divide-y border-y">
              {education.map((e) => <li key={e.year} className="flex justify-between gap-4 py-3 text-sm"><span>{e.degree} — {e.program}</span><span className="text-muted-foreground">{e.year}</span></li>)}
            </ul>
            <h2 className="mt-12 text-xl font-semibold">Pengalaman organisasi</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {organizations.map((o) => <li key={o.name}>• {o.name} <span className="text-xs">({o.note})</span></li>)}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.cvPublic && <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><Download className="h-4 w-4" /> Unduh CV (arsip)</a>}
              <Link to="/contact" className="rounded-full border px-5 py-3 text-sm font-medium">Hubungi Saya</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
