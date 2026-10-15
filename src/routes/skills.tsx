import { createFileRoute } from "@tanstack/react-router";
import { Palette, Code2, Users, ShieldCheck } from "lucide-react";
import { skillGroups } from "@/lib/content";
import { SkillLogo } from "@/components/site/BrandLogos";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/skills")({
  head: () => meta("Keahlian — Rakhmadi Rahman", "Keahlian desain grafis, pemrograman web, dan kompetensi profesional Rakhmadi Rahman."),
  component: Skills,
});

const icons = [Palette, Code2, ShieldCheck, Users];

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Keahlian" title="Keahlian dan kompetensi." intro="Keahlian teknologi, keamanan siber, desain, dan kolaborasi." />
      <Section>
        <div className="grid gap-3 md:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = icons[i] ?? Palette;
            return (
              <div key={g.title} className="rounded-2xl border bg-card p-5">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="mt-3 text-lg font-semibold">{g.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => <span key={s} className="inline-flex items-center gap-2 rounded-xl border bg-background px-2.5 py-1.5 text-sm transition-all hover:border-primary/50 hover:-translate-y-0.5"><SkillLogo name={s} />{s}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
