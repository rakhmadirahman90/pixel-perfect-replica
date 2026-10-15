import { createFileRoute } from "@tanstack/react-router";
import { Palette, Code2, Users } from "lucide-react";
import { skillGroups } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/skills")({
  head: () => meta("Keahlian — Rakhmadi Rahman", "Keahlian desain grafis, pemrograman web, dan kompetensi profesional Rakhmadi Rahman."),
  component: Skills,
});

const icons = [Palette, Code2, Users];

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Keahlian" title="Skills & expertise." intro="Gabungan perangkat kreatif, teknologi, dan kompetensi profesional." />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[i];
            return (
              <div key={g.title} className="rounded-2xl border bg-card p-7">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="mt-6 text-xl font-semibold">{g.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s) => <span key={s} className="rounded-full border bg-background px-3 py-1.5 text-sm transition-colors hover:border-primary/50">{s}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
