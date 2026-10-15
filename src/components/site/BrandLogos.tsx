import { useState } from "react";

const institutionDomains: Record<string, string> = {
  "Institut Teknologi Bacharuddin Jusuf Habibie": "ith.ac.id",
  "BAZNAS Kota Parepare": "baznas.go.id",
  "Kementerian Komunikasi dan Informatika (Kemkominfo)": "komdigi.go.id",
  "PT Pos Indonesia (Persero)": "posindonesia.co.id",
  "Binus Center Bandung": "binuscenter.com",
  "PT Astra Daihatsu Motor": "daihatsu.co.id",
  "PT Elnusa Petrofin": "elnusa.co.id",
  "Sekolah Tinggi Manajemen dan Komputer LIKMI, Bandung": "likmi.ac.id",
  "Politeknik Pos Indonesia, Bandung": "poltekpos.ac.id",
};
const skillIcons: Record<string, string> = {
  "Adobe Photoshop": "adobephotoshop", "Adobe Illustrator": "adobeillustrator",
  "Canva": "canva", "CapCut": "capcut", "HTML": "html5", "CSS": "css",
  "JavaScript": "javascript", "PHP": "php", "Java": "openjdk", "MySQL": "mysql",
  "Wireshark": "wireshark",
};

export function InstitutionLogo({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const [failed, setFailed] = useState(false);
  const domain = institutionDomains[name];
  const letters = name.replace(/\\([^)]*\\)/g, "").split(/\\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  const dimensions = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return <span className={`inline-flex ${dimensions} shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-primary/15 bg-white p-2 shadow-sm dark:bg-white`} title={name} aria-label={name}>
    {domain && !failed
      ? <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} alt={`Logo ${name}`} className="h-full w-full object-contain" loading="lazy" onError={() => setFailed(true)} />
      : <span className="font-display text-xs font-bold text-slate-700" aria-hidden="true">{letters}</span>}
  </span>;
}

export function SkillLogo({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const slug = skillIcons[name];
  if (!slug || failed) return <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary/10 font-display text-[10px] font-bold text-primary" aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
  return <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white p-1" aria-hidden="true"><img src={`https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/${slug}.svg`} alt="" className="h-full w-full object-contain" loading="lazy" onError={() => setFailed(true)} /></span>;
}
