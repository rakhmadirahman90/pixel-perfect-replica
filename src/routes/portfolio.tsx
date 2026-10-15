import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { portfolioCategories, projects } from "@/lib/content";
import { PageHeader, Section, EmptyState, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/portfolio")({
  head: () => meta("Portofolio — Rakhmadi Rahman", "Proyek terverifikasi Rakhmadi Rahman di bidang desain grafis, branding, video, dan pengembangan web."),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState("Semua");
  const [q, setQ] = useState("");
  const list = projects.filter((p) => (cat === "Semua" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHeader eyebrow="Portofolio" title="Karya terpilih." intro="Proyek dan kontribusi yang tercantum dalam CV akademik. Dokumentasi visual dan rincian hasil belum dilampirkan." />
      <Section>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["Semua", ...portfolioCategories].map((c) => (
              <Button key={c} variant={cat === c ? "default" : "outline"} aria-pressed={cat === c} onClick={() => setCat(c)} className="shrink-0 rounded-full">{c}</Button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border px-4 py-2 md:w-64">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari proyek" aria-label="Cari proyek" className="w-full bg-transparent text-sm outline-none" />
          </label>
        </div>
        {list.length === 0 ? (
          <EmptyState title="Tidak ada proyek yang cocok" text="Belum ada proyek pada kategori atau kata pencarian ini." />
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {list.map((p) => (
              <article key={p.slug} className="rounded-2xl border bg-card p-6"><p className="text-xs text-primary">{p.category} · {p.year}</p><h2 className="mt-2 font-semibold">{p.title}</h2><p className="text-sm text-muted-foreground">{p.summary}</p></article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
