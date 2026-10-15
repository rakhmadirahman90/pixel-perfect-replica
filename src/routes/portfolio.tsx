import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { portfolioCategories, projects, academicActivities } from "@/lib/content";
import { PageHeader, Section, EmptyState, meta } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/site/VisualCards";

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
      <PageHeader eyebrow="Portofolio" title="Karya terpilih." intro="Proyek dan kontribusi yang tercantum dalam CV akademik. Visual pada kartu merupakan ilustrasi konsep, bukan dokumentasi atau tangkapan layar proyek asli." />
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
              <article key={p.slug} className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"><ProjectVisual slug={p.slug} title={p.title} /><div className="p-5 sm:p-6"><p className="text-xs font-semibold text-primary">{p.category} · {p.year}</p><h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p></div></article>
            ))}
          </div>
        )}
      </Section>
      <Section eyebrow="Penelitian & Pengabdian" title="Kontribusi akademik.">
        <p className="mb-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">Kegiatan dari CV akademik dan biodata penelitian. Proyek Kedaireka yang juga tercantum di portofolio tidak dihitung sebagai kegiatan berbeda.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {academicActivities.map((item) => <article key={item.title} className="group rounded-2xl border bg-card p-5 transition-all hover:border-primary/30 sm:p-6">
            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-sky-400" /><p className="text-xs font-semibold text-primary">{item.year} · {item.role}</p>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">Sumber pendanaan / program: {item.funding}</p>
          </article>)}
        </div>
      </Section>
    </>
  );
}
