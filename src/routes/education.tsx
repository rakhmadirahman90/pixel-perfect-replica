import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { InstitutionLogo } from "@/components/site/BrandLogos";
import { education } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/education")({
  head: () => meta("Pendidikan — Rakhmadi Rahman", "Riwayat akademik Rakhmadi Rahman: S2 Sistem Informasi Bisnis, S1 dan D3 Teknik Informatika — seluruhnya Cumlaude."),
  component: Education,
});

function Education() {
  return (
    <>
      <PageHeader eyebrow="Pendidikan" title="Tiga jenjang, tiga kali Cumlaude." intro="Fondasi akademik di bidang Informatika dan Sistem Informasi Bisnis." />
      <Section>
        <ol className="relative space-y-8 border-l pl-8 md:pl-12">
          {education.map((e, i) => (
            <li key={e.year} className="reveal relative" style={{ animationDelay: `${i * 120}ms` }}>
              <span className="absolute -left-[2.6rem] top-6 grid h-8 w-8 place-items-center rounded-full border bg-background md:-left-[3.6rem]"><GraduationCap className="h-4 w-4 text-primary" /></span>
              <div className="rounded-2xl border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-4xl font-bold text-primary">{e.year}</p>
                  <span className="rounded-full border px-3 py-1 text-xs">{e.distinction}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{e.degree} — {e.program}</h2>
                <div className="mt-4 flex items-center gap-3"><InstitutionLogo name={e.institution} /><p className="text-muted-foreground">{e.institution}</p></div>
                <p className="mt-4 text-sm">IPK <span className="font-display font-semibold">{e.gpa}</span></p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
