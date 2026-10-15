import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { awards, organizations } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/awards")({
  head: () => meta("Penghargaan — Rakhmadi Rahman", "Penghargaan dan pencapaian akademik Rakhmadi Rahman, termasuk Lulusan Terbaik STT Indonesia dan Politeknik Pos Indonesia."),
  component: Awards,
});

function Awards() {
  return (
    <>
      <PageHeader eyebrow="Penghargaan" title="Awards & achievements." />
      <Section>
        <div className="divide-y border-y">
          {awards.map((a) => (
            <div key={a.title + a.year} className="grid items-center gap-2 py-7 md:grid-cols-[8rem_1fr_auto]">
              <p className="font-display text-4xl font-bold text-primary">{a.year}</p>
              <div><h2 className="text-xl font-semibold">{a.title}</h2><p className="text-muted-foreground">{a.institution}</p></div>
              <Trophy className="hidden h-5 w-5 text-muted-foreground md:block" />
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Organisasi" title="Pengalaman organisasi.">
        <div className="grid gap-4 md:grid-cols-3">
          {organizations.map((o) => <div key={o.name} className="rounded-2xl border bg-card p-6"><p className="font-semibold">{o.name}</p><p className="mt-1 text-sm text-muted-foreground">{o.note}</p></div>)}
        </div>
      </Section>
    </>
  );
}
