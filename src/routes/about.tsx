import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
// Lovable-hosted portrait: use absolute URL because /__l5e assets are not served by Vercel.
const portraitUrl = "https://id-preview--d44e39c6-b854-4b9d-b253-6f4221a6890f.lovable.app/__l5e/assets-v1/b89d55e3-b936-45cf-9fe9-a6cfae10c21f/rakhmadi-portrait-updated.png";
import { bio, profile, education, organizations, research, sourceCv, institutionalIdentitySources } from "@/lib/content";
import { Button } from "@/components/ui/button";
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
             <img src={portraitUrl} alt="Potret Rakhmadi Rahman" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
          </div>
          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {bio.map((p, i) => <p key={i} className={i === 0 ? "font-display text-2xl leading-snug text-foreground" : ""}>{p}</p>)}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {values.map((v) => <div key={v} className="rounded-xl border bg-card p-4 text-sm font-medium">{v}</div>)}
            </div>
            <h2 className="mt-12 text-xl font-semibold">Identitas profesional</h2>
            <div className="mt-4 grid gap-3 rounded-2xl border bg-card p-5 text-sm sm:p-6">
              <p><span className="text-muted-foreground">Unit kerja:</span> {profile.academicDepartment}</p>
              <p><span className="text-muted-foreground">Instansi:</span> {profile.institution}</p>
              <p><span className="text-muted-foreground">Alamat kantor:</span> {profile.officeAddress}</p>
              <p><span className="text-muted-foreground">Telepon kantor:</span> {profile.officePhone}</p>
              <p><span className="text-muted-foreground">Email akademik:</span> <a className="break-all text-primary hover:underline" href={`mailto:${profile.academicEmail}`}>{profile.academicEmail}</a></p>
              <p><span className="text-muted-foreground">Bidang kepakaran:</span> {profile.academicExpertise.join(" · ")}</p>
            </div>
            <h2 className="mt-12 text-xl font-semibold">Kualifikasi akademik</h2>
            <ul className="mt-4 divide-y border-y">
              {education.map((e) => <li key={e.year} className="flex justify-between gap-4 py-3 text-sm"><span>{e.degree} — {e.program}</span><span className="text-muted-foreground">{e.year}</span></li>)}
            </ul>
            <h2 className="mt-12 text-xl font-semibold">Organisasi & aktivitas kemahasiswaan</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {organizations.map((o) => <li key={o.name}>• {o.name} <span className="text-xs">({o.note})</span></li>)}
            </ul>
             <h2 className="mt-12 text-xl font-semibold">Arah riset doktoral</h2>
             <p className="mt-4 text-muted-foreground">Rencana fokus studi doktoral, bukan kualifikasi doktor yang telah diperoleh.</p>
             <p className="mt-3 leading-relaxed">{research.direction}</p>
             <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{research.interests.map((interest) => <li key={interest}>— {interest}</li>)}</ul>
             <h2 className="mt-12 text-xl font-semibold">Sumber CV & identitas institusi</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sourceCv.notes} Sumber biodata bertanggal {sourceCv.date}.</p>
            <div className="mt-4 grid gap-2">
              {institutionalIdentitySources.map(item => <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-xl border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"><span><strong className="block">{item.name}</strong><span className="text-xs text-muted-foreground">{item.note}</span></span><span aria-hidden="true" className="text-primary">↗</span></a>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
               <Button asChild><a href={profile.academicCvUrl} target="_blank" rel="noreferrer"><Download /> CV akademik</a></Button>
              {profile.cvPublic && <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><Download className="h-4 w-4" /> Unduh CV (arsip)</a>}
              <Link to="/contact" className="rounded-full border px-5 py-3 text-sm font-medium">Hubungi Saya</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
