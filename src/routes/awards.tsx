import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BookOpen, ExternalLink, FileBadge, GraduationCap, Medal, Trophy, UsersRound } from "lucide-react";
import { InstitutionLogo } from "@/components/site/BrandLogos";
import { awards, education, organizations, intellectualProperty, publications, research, academicActivities } from "@/lib/content";
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
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
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
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Penghargaan ditampilkan sesuai data riwayat yang tersedia; dokumen bukti penghargaan belum dilampirkan pada setiap entri.</p>
      </Section>
      <Section eyebrow="Capaian Pendidikan" title="Prestasi akademik per jenjang.">
        <div className="grid gap-4 md:grid-cols-3">{education.map(e=><article key={e.year} className="rounded-2xl border bg-card p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3"><InstitutionLogo name={e.institution} size="sm"/><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{e.year}</span></div>
          <h3 className="mt-4 font-bold">{e.degree} · {e.program}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.institution}</p>
          <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-lg border px-3 py-1.5 text-xs font-semibold">IPK {e.gpa}</span><span className="rounded-lg border px-3 py-1.5 text-xs font-semibold">{e.distinction}</span></div>
        </article>)}</div>
        <p className="mt-4 text-xs text-muted-foreground">Predikat kelulusan mengikuti riwayat pendidikan yang tercatat. Prestasi akademik tidak otomatis disamakan dengan penghargaan kompetisi.</p>
      </Section>
      <Section eyebrow="Kekayaan Intelektual" title="Karya dengan pencatatan hak cipta.">
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">Daftar pencatatan dari biodata akademik; tahun yang memerlukan penyesuaian sumber tetap ditampilkan sebagaimana tercatat.</p>
        <div className="grid gap-4 md:grid-cols-2">{intellectualProperty.map(item=><article key={item.registration} className="rounded-2xl border bg-card p-5 sm:p-6"><div className="flex items-center gap-2 text-xs font-bold text-primary"><FileBadge className="h-4 w-4"/> HAK CIPTA · {item.year}</div><h3 className="mt-3 font-semibold leading-relaxed">{item.title}</h3><p className="mt-3 break-all text-xs text-muted-foreground">No. pencatatan: {item.registration}</p></article>)}</div>
      </Section>
      <Section eyebrow="Kontribusi Ilmiah" title="Publikasi dan kegiatan riset.">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><p className="max-w-2xl text-sm leading-7 text-muted-foreground">Publikasi ilmiah merupakan capaian akademik, bukan penghargaan lomba. Daftar mengikuti sumber portofolio yang tersedia.</p><Link to="/articles" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Publikasi lainnya <ExternalLink className="h-4 w-4"/></Link></div>
        <div className="grid gap-3 md:grid-cols-2">{publications.map(item=><article key={item.title} className="rounded-xl border bg-card p-4 sm:p-5"><p className="text-xs font-semibold text-primary">{item.year} · {item.category}</p><h3 className="mt-2 text-sm font-semibold leading-relaxed">{item.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.journal}</p>{item.doi && <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline">Lihat DOI <ExternalLink className="h-3 w-3"/></a>}</article>)}</div>
        <h3 className="mt-9 mb-4 flex items-center gap-2 text-lg font-bold"><GraduationCap className="h-5 w-5 text-primary"/> Riset & Pengabdian</h3>
        <div className="grid gap-3 md:grid-cols-2">{academicActivities.map(item=><article key={item.title} className="rounded-xl border bg-card p-5"><p className="text-xs font-semibold text-primary">{item.year} · {item.role}</p><h4 className="mt-2 text-sm font-semibold leading-relaxed">{item.title}</h4><p className="mt-2 text-xs text-muted-foreground">{item.funding}</p></article>)}</div>
        <p className="mt-4 text-xs text-muted-foreground">Program Kedaireka dan pendanaan pengabdian dicatat sebagai kontribusi proyek/pendanaan, bukan kemenangan kompetisi pribadi.</p>
      </Section>
      <Section eyebrow="Organisasi" title="Keterlibatan dan pengembangan diri.">
        <div className="grid gap-3 md:grid-cols-3">{organizations.map(o=><article key={o.name} className="rounded-2xl border bg-card p-5"><UsersRound className="h-5 w-5 text-primary"/><h3 className="mt-4 font-semibold">{o.name}</h3><p className="mt-2 text-xs text-muted-foreground">{o.note}</p></article>)}</div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Sumber: CV profesional, biodata akademik, dan data portofolio yang telah tersedia. Entri yang belum memiliki bukti penghargaan khusus tidak diberi klaim juara atau sertifikasi tambahan.</p>
      </Section>
    </>
  );
}
