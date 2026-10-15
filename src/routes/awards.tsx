import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { InstitutionLogo } from "@/components/site/BrandLogos";
import { awards, organizations, intellectualProperty } from "@/lib/content";
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
              <div className="flex items-center gap-3"><InstitutionLogo name={a.institution} /><div className="min-w-0"><h2 className="text-xl font-semibold">{a.title}</h2><p className="text-muted-foreground">{a.institution}</p></div></div>
              <Trophy className="hidden h-5 w-5 text-muted-foreground md:block" />
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Hak Cipta" title="Karya tercatat & HKI.">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">Daftar pencatatan hak cipta dari biodata akademik. Nomor dicantumkan sesuai dokumen sumber; status registrasi terkini belum diperiksa secara independen.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {intellectualProperty.map((item) => <article key={item.registration} className="rounded-2xl border bg-card p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-wide text-primary">HAK CIPTA · {item.year}</p>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
            <p className="mt-3 break-all text-sm text-muted-foreground">Nomor: {item.registration}</p>
          </article>)}
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
