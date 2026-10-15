import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/lib/content";
import { PageHeader, Section, EmptyState, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/articles")({
  head: () => meta("Artikel & Insight — Rakhmadi Rahman", "Tulisan Rakhmadi Rahman tentang teknologi informasi, pengembangan web, desain grafis, dan learning & development."),
  component: Articles,
});

function Articles() {
  return (
    <>
      <PageHeader eyebrow="Artikel & Insight" title="Catatan & gagasan." intro="Teknologi informasi, web development, desain grafis, inovasi digital, dan learning & development." />
      <Section>
        {articles.length === 0 ? (
          <EmptyState title="Artikel pertama segera hadir" text="Artikel contoh dari situs lama tidak dipublikasikan. Tulisan asli akan tampil di sini setelah disetujui." />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {articles.map((a) => <article key={a.slug} className="rounded-2xl border bg-card p-6"><p className="text-xs text-primary">{a.category} · {a.date}</p><h2 className="mt-2 text-xl font-semibold">{a.title}</h2><p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p></article>)}
          </div>
        )}
      </Section>
    </>
  );
}
