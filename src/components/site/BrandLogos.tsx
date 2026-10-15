import { useState } from "react";

/** Show only recognizable brand marks; unknown/legacy schools use a clear typographic emblem, never a generic globe favicon. */
const institutions: Record<string, { domain?: string; mark: string; short: string }> = {
  "Institut Teknologi Bacharuddin Jusuf Habibie": { domain: "ith.ac.id", mark: "ITH", short: "ITH" },
  "BAZNAS Kota Parepare": { domain: "baznas.go.id", mark: "BAZ", short: "BAZNAS" },
  "Kedaireka — Riset Kolaboratif": { mark: "KR", short: "Kedaireka" },
  "Kementerian Komunikasi dan Informatika (Kemkominfo)": { domain: "komdigi.go.id", mark: "KOM", short: "Kominfo" },
  "PT Pos Indonesia (Persero)": { domain: "posindonesia.co.id", mark: "POS", short: "Pos Indonesia" },
  "Binus Center Bandung": { domain: "binus.ac.id", mark: "BIN", short: "BINUS" },
  "PT Astra Daihatsu Motor": { domain: "daihatsu.co.id", mark: "ADM", short: "Daihatsu" },
  "PT Elnusa Petrofin": { domain: "elnusa.co.id", mark: "EP", short: "Elnusa" },
  "Sekolah Tinggi Manajemen dan Komputer LIKMI, Bandung": { mark: "LIKMI", short: "STMIK LIKMI" },
  "Sekolah Tinggi Sains dan Teknologi Indonesia, Bandung": { mark: "STTI", short: "STT Indonesia" },
  "Sekolah Tinggi Sains dan Teknologi Indonesia": { mark: "STTI", short: "STT Indonesia" },
  "Politeknik Pos Indonesia, Bandung": { mark: "POLPOS", short: "Politeknik Pos" },
  "Politeknik Pos Indonesia": { mark: "POLPOS", short: "Politeknik Pos" },
};
const skillIcons: Record<string, string> = {
  "Adobe Photoshop": "adobephotoshop", "CorelDRAW": "coreldraw",
  "Adobe Illustrator": "adobeillustrator", "Adobe Premiere Pro": "adobepremierepro",
  "Canva": "canva", "CapCut": "capcut", "HTML": "html5", "CSS": "css",
  "JavaScript": "javascript", "PHP": "php", "Java": "openjdk", "MySQL": "mysql",
  "Wireshark": "wireshark", "Snort": "snort", "Metasploit": "metasploit",
};

export function InstitutionLogo({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const [failed, setFailed] = useState(false);
  const entry = institutions[name];
  const initials = entry?.mark ?? name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const dimensions = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-11 w-11" : "h-14 w-14";
  const canShowFavicon = Boolean(entry?.domain && !failed);
  return <span className={`inline-flex ${dimensions} shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-white p-1.5 shadow-sm ring-1 ring-black/5`} title={name} aria-label={name}>
    {canShowFavicon
      ? <img src={`https://www.google.com/s2/favicons?domain=${entry!.domain}&sz=256`} alt={`Identitas visual ${name}`} className="block h-full w-full object-contain" loading="lazy" decoding="async" onError={() => setFailed(true)} />
      : <span className="flex h-full w-full items-center justify-center rounded-lg bg-slate-100 px-0.5 text-center font-display text-[9px] font-extrabold tracking-tight text-slate-800 sm:text-[10px]" aria-hidden="true">{initials}</span>}
  </span>;
}

export function SkillLogo({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const slug = skillIcons[name];
  if (!slug || failed) return <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 font-display text-[10px] font-bold text-primary" aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
  return <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white p-1" aria-hidden="true"><img src={`https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/${slug}.svg`} alt="" className="h-full w-full object-contain" loading="lazy" onError={() => setFailed(true)} /></span>;
}
