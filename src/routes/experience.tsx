import { createFileRoute } from "@tanstack/react-router";
import { experience, profile } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/experience")({
  head: () => meta("Pengalaman & Resume — Rakhmadi Rahman", "Perjalanan profesional Rakhmadi Rahman di PT Pos Indonesia, Binus Center Bandung, PT Astra Daihatsu Motor, dan PT Elnusa Petrofin."),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Pengalaman & Resume" title="Perjalanan profesional." intro="Dari engineering dan pengajaran teknologi hingga pembelajaran & pengembangan SDM." />
      <Section>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <article key={e.company} className="reveal grid gap-6 rounded-2xl border bg-card p-6 md:grid-cols-[14rem_1fr] md:p-8" style={{ animationDelay: `${i * 100}ms` }}>
              <div>
                <p className="font-display text-sm text-primary">{e.period}</p>
                {e.historical && <span className="mt-2 inline-block rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">Data riwayat</span>}
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{e.company}</h2>
                <p className="text-muted-foreground">{e.role}</p>
                {e.note && <p className="mt-2 text-xs text-muted-foreground">{e.note}</p>}
                <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                  {e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">—</span>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex rounded-full border px-5 py-3 text-sm font-medium">Lihat CV asli (arsip) →</a>
      </Section>
    </>
  );
}
