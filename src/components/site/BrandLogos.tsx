import { useState } from "react";
import { Code2, Globe2, Palette, ShieldCheck, Wrench, GraduationCap, BrainCircuit, MessagesSquare, Lightbulb, FlaskConical, Crown, UsersRound, Presentation, Clapperboard, Network, ScrollText, ServerCog, ShieldAlert, LockKeyhole, ShieldCheck as ShieldAccess, Wifi, ScanSearch, Terminal, MonitorSmartphone, Laptop } from "lucide-react";

/** Show only recognizable brand marks; unknown/legacy schools use a clear typographic emblem, never a generic globe favicon. */
const institutions: Record<string, { domain?: string; logo?: string; mark: string; short: string }> = {
  "Institut Teknologi Bacharuddin Jusuf Habibie": { logo: "/logos/ith.svg", domain: "ith.ac.id", mark: "ITH", short: "ITH" },
  "BAZNAS Kota Parepare": { domain: "baznas.go.id", mark: "BAZ", short: "BAZNAS" },
  "Kedaireka — Riset Kolaboratif": { mark: "KR", short: "Kedaireka" },
  "Kementerian Komunikasi dan Informatika (Kemkominfo)": { domain: "komdigi.go.id", mark: "KOM", short: "Kominfo" },
  "PT Pos Indonesia (Persero)": { logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/POSIND_2023.svg", domain: "posindonesia.co.id", mark: "POS", short: "Pos Indonesia" },
  "Binus Center Bandung": { logo: "/logos/binus-center.svg", domain: "binus.ac.id", mark: "BINUS CENTER", short: "BINUS Center" },
  "PT Astra Daihatsu Motor": { logo: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daihatsu_symbol.svg", domain: "daihatsu.co.id", mark: "ADM", short: "Daihatsu" },
  "PT Elnusa Petrofin": { logo: "/logos/elnusa-petrofin.svg", domain: "elnusapetrofin.co.id", mark: "ELNUSA PETROFIN", short: "Elnusa Petrofin" },
  "Sekolah Tinggi Manajemen dan Komputer LIKMI, Bandung": { logo: "/logos/likmi-high-resolution.png", mark: "LIKMI", short: "STMIK LIKMI" },
  "Sekolah Tinggi Sains dan Teknologi Indonesia, Bandung": { logo: "/logos/file_00000000412881f791ab1e4049f3e66a.png", mark: "ST-INTEN", short: "ST-INTEN" },
  "Sekolah Tinggi Sains dan Teknologi Indonesia": { logo: "/logos/file_00000000412881f791ab1e4049f3e66a.png", mark: "ST-INTEN", short: "ST-INTEN" },
  "Politeknik Pos Indonesia, Bandung": { logo: "https://ulbi.ac.id/wp-content/uploads/2025/05/ULBI-Logo-01-scaled.png", mark: "ULBI", short: "ULBI" },
  "Politeknik Pos Indonesia": { logo: "https://ulbi.ac.id/wp-content/uploads/2025/05/ULBI-Logo-01-scaled.png", domain: "ulbi.ac.id", mark: "ULBI", short: "ULBI" },
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
  // Consistent outer frames, with optical sizing adjusted to each logo's silhouette.
  const dimensions = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-14 w-14" : "h-[60px] w-[60px]";
  const logoScale: Record<string, string> = {
    "Institut Teknologi Bacharuddin Jusuf Habibie": "h-[82%] w-[82%]",
    "PT Pos Indonesia (Persero)": "h-[78%] w-[78%]",
    "Binus Center Bandung": "h-[70%] w-[94%]",
    "PT Astra Daihatsu Motor": "h-[72%] w-[86%]",
    "PT Elnusa Petrofin": "h-[75%] w-[94%]",
    "Politeknik Pos Indonesia": "h-[82%] w-[82%]",
    "Politeknik Pos Indonesia, Bandung": "h-[82%] w-[82%]",
  };
  const imageSize = logoScale[name] ?? "h-[85%] w-[85%]";
  // Website favicons often return a generic globe even with HTTP 200.
  // Only render an explicitly identified institution logo; otherwise use a
  // clear, legible institution wordmark until its authentic emblem is supplied.
  const canShowLogo = Boolean(entry?.logo && !failed);
  // Vite BASE_URL includes the GitHub Pages repository prefix in production.
  const logoUrl = entry?.logo?.startsWith("/") ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${entry.logo}` : entry?.logo;
  return <span className={`inline-flex ${dimensions} shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-white p-0 shadow-sm ring-1 ring-black/5`} title={name} aria-label={name}>
    {canShowLogo
      ? <img src={logoUrl} alt={`Logo ${entry!.short}`} className={`block ${imageSize} object-contain`} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      : <span className={`flex h-full w-full items-center justify-center rounded-lg bg-slate-50 px-0.5 text-center font-display font-extrabold leading-tight tracking-tight text-slate-800 ${initials.length > 8 ? "text-[7px] sm:text-[8px]" : initials.length > 5 ? "text-[8px] sm:text-[9px]" : "text-[11px]"}`} aria-hidden="true">{initials}</span>}
  </span>;
}

const competencyIcons = {
  "Learning & Development": GraduationCap,
  "Knowledge Management": BrainCircuit,
  "Visual Communication": MessagesSquare,
  "Creative Problem Solving": Lightbulb,
  "Research": FlaskConical,
  "Leadership": Crown,
  "Team Collaboration": UsersRound,
  "Presentation Design": Presentation,
  "Digital Content Creation": Clapperboard,
  "Network Attack Detection": Network,
  "Security Log Analysis": ScrollText,
  "Linux / Server Hardening": ServerCog,
  "Brute-force Mitigation": ShieldAlert,
  "Access Control": LockKeyhole,
  "Web Security": ShieldAccess,
  "Public Wi-Fi / Evil Twin Analysis": Wifi,
  "Penetration Testing": ScanSearch,
  "Open-source Security Tools": Terminal,
  "Web Development": Laptop,
  "Responsive Web Design": MonitorSmartphone,
} as const;

export function SkillLogo({ name }: { name: string }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const entry = skillIcons[name];
  const urls = entry ? [entry.primary, entry.secondary].filter((url): url is string => Boolean(url)) : [];
  const fallbackKind = entry?.kind ?? (/design|photo|canva|video|capcut|adobe/i.test(name) ? "design" : /security|cyber|network|snort|wireshark/i.test(name) ? "security" : /web|code|program|responsive/i.test(name) ? "web" : "tool");
  const MatchedIcon = competencyIcons[name as keyof typeof competencyIcons];
  const FallbackIcon = MatchedIcon ?? (fallbackKind === "design" ? Palette : fallbackKind === "security" ? ShieldCheck : fallbackKind === "web" ? Code2 : Wrench);
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border/40 bg-white p-1 shadow-sm" title={name} aria-label={`Ikon ${name}`}>
      {MatchedIcon ? <MatchedIcon className="h-5 w-5 text-slate-700" strokeWidth={1.8} aria-hidden="true" /> : sourceIndex < urls.length
        ? <img key={urls[sourceIndex]} src={urls[sourceIndex]} alt="" className="h-full w-full object-contain" loading="lazy" decoding="async" onError={() => setSourceIndex(index => index + 1)} />
        : <FallbackIcon className="h-5 w-5 text-slate-700" strokeWidth={1.8} aria-hidden="true" />}
    </span>
  );
}
