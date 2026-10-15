import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2, Code2, GraduationCap, Layers3, Search, Sparkles, X } from "lucide-react";
import { portfolioCategories, projects } from "@/lib/content";
import { PageHeader, Section, EmptyState, meta } from "@/components/site/Layout";
import { ProjectVisual } from "@/components/site/VisualCards";

export const Route = createFileRoute("/portfolio")({
  head: () => meta("Karya & Portofolio — Rakhmadi Rahman", "Proyek pengembangan aplikasi, media digital, kolaborasi riset, dan pengabdian kepada masyarakat."),
  component: Portfolio,
});

const categoryNames: Record<string, string> = {
  "Semua": "Semua Karya",
  "Application Development": "Pengembangan Aplikasi",
  "Digital Media": "Media Digital",
  "Community Service": "Pengabdian Masyarakat",
};
const categoryIcons: Record<string, typeof Layers3> = {
  "Application Development": Code2,
  "Digital Media": Sparkles,
  "Community Service": GraduationCap,
};
function Portfolio() {
  const [category, setCategory] = useState("Semua");
  const [query, setQuery] = useState("");
  const list = useMemo(() => projects.filter(p => (category === "Semua" || p.category === category) && [p.title,p.summary,p.category,p.year].some(value => value.toLowerCase().includes(query.trim().toLowerCase()))), [category,query]);
  const featured = projects[0];
  return (
    <>
      <PageHeader eyebrow="Selected Works / Portfolio" title={<>Karya yang memadukan <span className="font-serif font-normal italic text-primary">ide dan dampak.</span></>} intro="Proyek aplikasi, media digital, riset, dan pengabdian masyarakat." />
      <Section>
        <div className="mb-4 grid gap-2 sm:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5"><Layers3 className="h-5 w-5 text-primary"/><p className="mt-4 text-3xl font-bold tabular-nums">{projects.length}</p><p className="mt-1 text-xs text-muted-foreground">Proyek terdokumentasi</p></div>
          <div className="rounded-2xl border bg-card p-5"><BriefcaseBusiness className="h-5 w-5 text-primary"/><p className="mt-4 text-3xl font-bold tabular-nums">{portfolioCategories.length}</p><p className="mt-1 text-xs text-muted-foreground">Bidang kontribusi</p></div>
          <div className="rounded-2xl border bg-card p-5"><BookOpen className="h-5 w-5 text-primary"/><p className="mt-4 text-lg font-bold">Riset & Digital</p><p className="mt-1 text-xs text-muted-foreground">Fokus karya terapan</p></div>
        </div>
        {featured && <div className="group mb-4 overflow-hidden rounded-[1.75rem] border border-primary/20 bg-card shadow-sm lg:grid lg:grid-cols-[1.05fr_1fr]">
          <ProjectVisual slug={featured.slug} title={featured.title} className="!aspect-[16/10] lg:!aspect-auto lg:min-h-[300px]" />
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"><Sparkles className="h-3.5 w-3.5"/> Sorotan Proyek</span>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{categoryNames[featured.category] ?? featured.category} · {featured.year}</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">{featured.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{featured.summary}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-primary"><CheckCircle2 className="h-4 w-4"/> Kontribusi sesuai riwayat portofolio</p>
          </div>
        </div>}
        <div className="mb-6">
          <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Eksplorasi</p><h2 className="mt-2 text-2xl font-bold">Jelajahi Proyek</h2></div><p className="text-sm text-muted-foreground">{list.length} dari {projects.length} proyek</p></div>
          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_260px]">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori proyek">
              {["Semua",...portfolioCategories].map(c => <button key={c} type="button" onClick={() => setCategory(c)} aria-pressed={category===c} className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${category===c ? "border-primary bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}>{categoryNames[c] ?? c}</button>)}
            </div>
            <label className="flex h-11 items-center gap-2 rounded-xl border bg-card px-3 focus-within:border-primary/60"><Search className="h-4 w-4 shrink-0 text-muted-foreground"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari judul, tahun, bidang..." aria-label="Cari proyek" className="min-w-0 flex-1 bg-transparent text-sm outline-none"/>{query && <button type="button" onClick={()=>setQuery("")} aria-label="Hapus pencarian"><X className="h-4 w-4 text-muted-foreground"/></button>}</label>
          </div>
        </div>
        {list.length === 0 ? <div className="rounded-2xl border bg-card p-8 text-center"><EmptyState title="Belum ada proyek yang cocok" text="Coba kata kunci lain atau tampilkan seluruh kategori."/><button type="button" onClick={()=>{setCategory("Semua");setQuery("");}} className="mt-4 text-sm font-semibold text-primary hover:underline">Atur ulang filter</button></div> :
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {list.map((p,i)=>{const Icon=categoryIcons[p.category]??Layers3;return <article key={p.slug} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
              <div className="relative"><ProjectVisual slug={p.slug} title={p.title}/><span className="absolute right-3 top-3 rounded-full border border-white/20 bg-background/90 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur">{p.year}</span></div>
              <div className="flex flex-1 flex-col p-5 sm:p-6"><div className="flex items-center gap-2 text-xs font-semibold text-primary"><Icon className="h-4 w-4"/>{categoryNames[p.category]??p.category}</div><h3 className="mt-3 text-lg font-bold leading-snug">{p.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{p.summary}</p><div className="mt-3 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground"><span>Proyek {String(i+1).padStart(2,"0")}</span><span className="inline-flex items-center gap-1 font-medium text-primary">Portofolio <ArrowUpRight className="h-4 w-4"/></span></div></div>
            </article>})}
          </div>}
      </Section>
      <Section><div className="flex flex-col items-start justify-between gap-5 rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-xs font-bold uppercase tracking-wider text-primary">Kolaborasi</p><h2 className="mt-2 text-xl font-bold sm:text-2xl">Punya ide untuk dikerjakan bersama?</h2><p className="mt-2 text-sm text-muted-foreground">Diskusikan proyek digital, desain, atau riset Anda.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Hubungi Saya <ArrowRight className="h-4 w-4"/></Link></div></Section>
    </>
  );
}
