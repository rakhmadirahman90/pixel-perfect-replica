import { ArrowUpRight, BookOpen, Code2, Database, GraduationCap, Layers3, MapPinned, Monitor, Palette, Presentation, ShieldCheck, Smartphone, Video, Workflow } from "lucide-react";
import type { ComponentType } from "react";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;
const visuals: Record<string, { icon: IconType; label: string; accent: string; motif: string }> = {
  "baznas-parepare": { icon: Database, label: "Transaction & Reporting", accent: "from-emerald-500/25 via-teal-500/10 to-sky-500/20", motif: "DATA / FINANCE" },
  "kedaireka-mitigasi-gempa": { icon: BookOpen, label: "Digital Storytelling", accent: "from-orange-500/25 via-rose-500/10 to-violet-500/20", motif: "EDUCATION / MEDIA" },
  "gis-kemkominfo": { icon: MapPinned, label: "Geospatial Information", accent: "from-cyan-500/25 via-blue-500/10 to-indigo-500/20", motif: "GIS / MAPPING" },
  "ar-shohwatul-isad": { icon: Smartphone, label: "Augmented Reality", accent: "from-purple-500/25 via-fuchsia-500/10 to-indigo-500/20", motif: "AR / LEARNING" },
  "google-workspace-sman3": { icon: Workflow, label: "Digital Collaboration", accent: "from-blue-500/25 via-sky-500/10 to-green-500/20", motif: "WORKSPACE" },
  "microsoft-project-lapadde": { icon: Presentation, label: "Project Planning", accent: "from-indigo-500/25 via-blue-500/10 to-cyan-500/20", motif: "PROJECT / TRAINING" },
};
const serviceIcons: IconType[] = [Palette, Layers3, BookOpen, Monitor, Video, Presentation, Code2, ShieldCheck];

export function ProjectVisual({ slug, title, className = "" }: { slug: string; title: string; className?: string }) {
  const visual = visuals[slug] ?? { icon: Monitor, label: "Digital Project", accent: "from-primary/20 via-indigo-500/10 to-cyan-500/20", motif: "PORTFOLIO" };
  const Icon = visual.icon;
  return (
    <div role="img" aria-label={`Ilustrasi konseptual untuk ${title}, bukan foto dokumentasi proyek`} className={`relative isolate flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${visual.accent} ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:36px_36px] text-primary/20" />
      <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="relative w-[72%] max-w-[20rem] rotate-[-4deg] rounded-2xl border border-white/20 bg-background/80 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.04] sm:p-4">
        <div className="mb-4 flex items-center gap-1.5 border-b pb-3"><span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="ml-auto text-[9px] font-semibold tracking-widest text-muted-foreground">{visual.motif}</span></div>
        <div className="flex items-center gap-3"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 sm:h-16 sm:w-16"><Icon className="h-7 w-7 text-primary sm:h-9 sm:w-9" strokeWidth={1.6}/></div><div className="min-w-0 flex-1 space-y-2"><div className="h-2 w-4/5 rounded-full bg-primary/35"/><div className="h-2 w-3/5 rounded-full bg-primary/15"/><div className="h-2 w-2/5 rounded-full bg-primary/15"/></div></div>
        <div className="mt-4 grid grid-cols-3 gap-2">{[1,2,3].map(n=><div key={n} className="h-7 rounded-lg border bg-primary/5 sm:h-9"/>)}</div>
      </div>
      <span className="absolute bottom-3 left-4 rounded-full border border-primary/20 bg-background/85 px-3 py-1 text-[10px] font-semibold tracking-wide text-foreground backdrop-blur">{visual.label}</span>
      <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-primary/60"/>
    </div>
  );
}
export function ServiceVisual({ index }: { index: number }) {
  const Icon = serviceIcons[index] ?? Monitor;
  return <div aria-hidden="true" className="relative mb-5 flex h-32 items-center justify-center overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-primary/15 via-background to-sky-500/10">
    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px] text-primary" />
    <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-primary/20 bg-background/75 shadow-xl shadow-primary/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3"><Icon className="h-10 w-10 text-primary" strokeWidth={1.5}/></div>
  </div>;
}
