import { createFileRoute } from "@tanstack/react-router";
import { experience, profile, projectAssignments, training } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { InstitutionLogo } from "@/components/site/BrandLogos";

export const Route = createFileRoute("/experience")({
  head: () => meta("Pengalaman & Resume — Rakhmadi Rahman", "Riwayat pekerjaan dan magang, dipisahkan dari penugasan proyek dan pelatihan."),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Karier" title="Pengalaman profesional." intro="Riwayat karier, penugasan akademik, dan pengalaman industri, disertai portofolio penugasan proyek yang dikelompokkan secara terpisah." />
      <Section>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <article key={e.company} className="reveal grid gap-6 rounded-2xl border bg-card p-6 md:grid-cols-[14rem_1fr] md:p-8" style={{ animationDelay: `${i * 100}ms` }}>
              <div>
                <p className="font-display text-sm text-primary">{e.period}</p>
                {e.historical && <span className="mt-2 inline-block rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">Data riwayat</span>}
              </div>
              <div>
                <div className="flex items-center gap-4"><InstitutionLogo name={e.company} size="lg" /><div className="min-w-0"><h2 className="text-xl font-semibold sm:text-2xl">{e.company}</h2><p className="text-muted-foreground">{e.role}</p></div></div>
                {e.note && <p className="mt-2 text-xs text-muted-foreground">{e.note}</p>}
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">—</span>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild><a href={profile.academicCvUrl} target="_blank" rel="noreferrer">CV akademik →</a></Button>
          <Button asChild variant="outline"><a href={profile.cvUrl} target="_blank" rel="noreferrer">Riwayat CV profesional →</a></Button>
        </div>
      </Section>
      <Section eyebrow="Penugasan Proyek" title="Penugasan dan kolaborasi proyek.">
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">Kontribusi profesional pada proyek pengembangan sistem, riset kolaboratif, dan transformasi digital.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {projectAssignments.map(item => <article key={item.projectSlug} className="rounded-2xl border bg-card p-5 sm:p-6">
            <div className="flex items-start gap-3"><InstitutionLogo name={item.company} /><div className="min-w-0"><p className="text-xs font-semibold text-primary">{item.period} · {item.role}</p><h3 className="mt-1 text-lg font-semibold">{item.company}</h3></div></div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
          </article>)}
        </div>
      </Section>
      <Section eyebrow="Pelatihan" title="Pelatihan dan pengembangan kompetensi.">
        {training.map(item => <article key={item.title} className="rounded-2xl border bg-card p-6"><p className="text-xs font-semibold text-primary">{item.year} · Pelatihan</p><h3 className="mt-2 font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.note}</p></article>)}
      </Section>
    </>
  );
}
