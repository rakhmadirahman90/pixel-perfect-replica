import { createFileRoute } from "@tanstack/react-router";
import { articles, publications, profile, research } from "@/lib/content";
import { PageHeader, Section, EmptyState, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/articles")({
  head: () => meta("Publikasi & Artikel — Rakhmadi Rahman", "Publikasi ilmiah Rakhmadi Rahman tentang keamanan siber dan sistem informasi, profil SINTA, serta metrik riset Oktober 2026."),
  component: Articles,
});

function Articles() {
  return (
    <>
      <PageHeader eyebrow="Publikasi & Artikel" title="Publikasi ilmiah dan artikel." intro="Kumpulan publikasi di bidang keamanan siber, sistem informasi, dan arsitektur enterprise." />
      <Section eyebrow="Profil Riset" title="Profil dan kinerja penelitian.">
        <Button asChild variant="outline"><a href={`https://sinta.kemdiktisaintek.go.id/authors/profile/${profile.sintaId}`} target="_blank" rel="noreferrer">SINTA Author ID: {profile.sintaId} ↗</a></Button>
        <div className="mt-8 grid grid-cols-2 gap-6 border-y py-8 md:grid-cols-4">{research.metrics.map((m) => <div key={m.label}><p className="font-display text-4xl font-bold text-primary">{m.value}</p><p className="mt-2 text-sm text-muted-foreground">{m.label}</p></div>)}</div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{research.metricsNote}</p>
      </Section>
      {['Keamanan Siber', 'Sistem Informasi'].map((category) => <Section key={category} eyebrow="Publikasi Ilmiah" title={category}>
        <div className="divide-y border-y">{publications.filter((p) => p.category === category).map((p) => <article key={p.title} className="py-6">
          <p className="text-sm text-primary">{p.year}</p><h3 className="mt-2 text-xl font-semibold leading-snug">{p.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{p.authors}</p><p className="mt-1 text-sm text-muted-foreground">{p.journal}</p>
          {p.doi && <Button asChild variant="link" className="mt-2 h-auto max-w-full whitespace-normal p-0 text-left"><a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">DOI: {p.doi} ↗</a></Button>}
        </article>)}</div>
      </Section>)}
      <Section eyebrow="Wawasan Profesional" title="Artikel dan wawasan.">
        {articles.length === 0 ? (
          <EmptyState title="Artikel dalam persiapan" text="Publikasi artikel profesional akan ditambahkan secara berkala." />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((a) => <article key={a.slug} className="rounded-2xl border bg-card p-6"><p className="text-xs text-primary">{a.category} · {a.date}</p><h2 className="mt-2 text-xl font-semibold">{a.title}</h2><p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p></article>)}
          </div>
        )}
      </Section>
    </>
  );
}
