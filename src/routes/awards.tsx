import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, FileBadge, Medal, Trophy } from "lucide-react";
import { InstitutionLogo } from "@/components/site/BrandLogos";
import { awards, intellectualProperty, publications } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/awards")({
  head: () => meta("Prestasi & Penghargaan — Rakhmadi Rahman", "Penghargaan akademik, capaian pendidikan, hak cipta, publikasi, riset, dan kontribusi organisasi berdasarkan dokumen portofolio."),
  component: Awards,
});
function Awards() {
  return (
    <>
      <PageHeader eyebrow="Achievements / Prestasi" title={<>Prestasi dan <span className="font-serif font-normal italic text-primary">rekam kontribusi.</span></>} intro="Penghargaan, capaian akademik, karya terdaftar, dan kontribusi ilmiah—dikelompokkan menurut jenisnya agar informatif dan akurat." />
      <Section>
        <div className="mb-4 grid gap-2 sm:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5"><Trophy className="h-5 w-5 text-primary"/><p className="mt-3 text-3xl font-bold">{awards.length}</p><p className="mt-1 text-xs text-muted-foreground">Penghargaan tercatat</p></div>
          <div className="rounded-2xl border bg-card p-5"><FileBadge className="h-5 w-5 text-primary"/><p className="mt-3 text-3xl font-bold">{intellectualProperty.length}</p><p className="mt-1 text-xs text-muted-foreground">Pencatatan hak cipta</p></div>
          <div className="rounded-2xl border bg-card p-5"><BookOpen className="h-5 w-5 text-primary"/><p className="mt-3 text-3xl font-bold">{publications.length}</p><p className="mt-1 text-xs text-muted-foreground">Publikasi dalam portofolio</p></div>
        </div>
        <div className="mb-5 flex items-center gap-2"><Medal className="h-5 w-5 text-primary"/><h2 className="text-xl font-bold">Penghargaan Akademik</h2></div>
        <div className="grid gap-4">
          {awards.map((a,i)=><article key={a.title+a.year} className="flex items-start gap-4 rounded-2xl border bg-card p-5 sm:items-center sm:p-6">
            <InstitutionLogo name={a.institution} size="lg"/>
            <div className="min-w-0 flex-1"><p className="text-xs font-bold text-primary">{a.year} · Penghargaan {String(i+1).padStart(2,"0")}</p><h3 className="mt-1 text-lg font-bold">{a.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.institution}</p></div>
            <Trophy className="hidden h-5 w-5 shrink-0 text-primary/70 sm:block"/>
          </article>)}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Penghargaan ditampilkan sesuai data riwayat yang tersedia; dokumen bukti penghargaan belum dilampirkan pada setiap entri.</p>
      </Section>
      <Section eyebrow="Kekayaan Intelektual" title="Karya dengan pencatatan hak cipta.">
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">Daftar pencatatan dari biodata akademik; tahun yang memerlukan penyesuaian sumber tetap ditampilkan sebagaimana tercatat.</p>
        <div className="grid gap-4 md:grid-cols-2">{intellectualProperty.map(item=><article key={item.registration} className="rounded-2xl border bg-card p-5 sm:p-6"><div className="flex items-center gap-2 text-xs font-bold text-primary"><FileBadge className="h-4 w-4"/> HAK CIPTA · {item.year}</div><h3 className="mt-3 font-semibold leading-relaxed">{item.title}</h3><p className="mt-3 break-all text-xs text-muted-foreground">No. pencatatan: {item.registration}</p></article>)}</div>
      </Section>
      <Section eyebrow="Jelajahi Selengkapnya" title="Informasi terkait.">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/education" className="rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40"><h3 className="font-semibold">Pendidikan & Predikat</h3><p className="mt-2 text-sm text-muted-foreground">Riwayat jenjang, IPK, dan predikat kelulusan →</p></Link>
          <Link to="/articles" className="rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40"><h3 className="font-semibold">Publikasi Ilmiah</h3><p className="mt-2 text-sm text-muted-foreground">Artikel, jurnal, dan rekam penelitian →</p></Link>
        </div>
      </Section>
    </>
  );
}
