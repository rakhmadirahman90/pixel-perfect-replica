import { useState } from "react";
import { Code2, Globe2, Palette, ShieldCheck, Wrench } from "lucide-react";

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
/** Use recognizable full-colour brand marks, with a second source if a CDN icon is unavailable. */
const skillIcons: Record<string, { primary: string; secondary?: string; kind?: "design" | "security" | "web" | "tool" }> = {
  "Adobe Photoshop": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", secondary: "https://api.iconify.design/logos/adobe-photoshop.svg", kind: "design" },
  "CorelDRAW": { primary: "https://api.iconify.design/simple-icons/coreldraw.svg?color=%2300a651", secondary: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/coreldraw.svg", kind: "design" },
  "Adobe Illustrator": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg", secondary: "https://api.iconify.design/logos/adobe-illustrator.svg", kind: "design" },
  "Adobe Premiere Pro": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg", secondary: "https://api.iconify.design/logos/adobe-premiere.svg", kind: "design" },
  "Canva": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", secondary: "https://api.iconify.design/logos/canva.svg", kind: "design" },
  "CapCut": { primary: "https://api.iconify.design/simple-icons/capcut.svg?color=%23111111", secondary: "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/capcut.svg", kind: "design" },
  "HTML": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", kind: "web" },
  "CSS": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", kind: "web" },
  "JavaScript": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", kind: "web" },
  "PHP": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", kind: "web" },
  "Java": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", kind: "web" },
  "MySQL": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", kind: "web" },
  "Wireshark": { primary: "https://api.iconify.design/simple-icons/wireshark.svg?color=%231679a7", kind: "security" },
  "Snort": { primary: "https://api.iconify.design/simple-icons/snort.svg?color=%23e34f26", kind: "security" },
  "Metasploit": { primary: "https://api.iconify.design/simple-icons/metasploit.svg?color=%232596cd", kind: "security" },
  "Web Development": { primary: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", kind: "web" },
  "Responsive Web Design": { primary: "https://api.iconify.design/lucide/monitor-smartphone.svg?color=%2306b6d4", kind: "web" },
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
  const [sourceIndex, setSourceIndex] = useState(0);
  const entry = skillIcons[name];
  const urls = entry ? [entry.primary, entry.secondary].filter((url): url is string => Boolean(url)) : [];
  const fallbackKind = entry?.kind ?? (/design|photo|canva|video|capcut|adobe/i.test(name) ? "design" : /security|cyber|network|snort|wireshark/i.test(name) ? "security" : /web|code|program|responsive/i.test(name) ? "web" : "tool");
  const FallbackIcon = fallbackKind === "design" ? Palette : fallbackKind === "security" ? ShieldCheck : fallbackKind === "web" ? Code2 : Wrench;
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border/40 bg-white p-1 shadow-sm" title={name} aria-label={`Ikon ${name}`}>
      {sourceIndex < urls.length
        ? <img key={urls[sourceIndex]} src={urls[sourceIndex]} alt="" className="h-full w-full object-contain" loading="lazy" decoding="async" onError={() => setSourceIndex(index => index + 1)} />
        : <FallbackIcon className="h-5 w-5 text-slate-700" strokeWidth={1.8} aria-hidden="true" />}
    </span>
  );
}
