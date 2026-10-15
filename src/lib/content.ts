import academicCv from "@/assets/academic-cv.pdf.asset.json";
// Content supplied in the academic CV, complemented by the historical website/CV.
// Historical data is labeled as such; unverified items are intentionally excluded.

export const profile = {
  name: "Rakhmadi Rahman",
  credentials: "S.T., M.Kom.",
  tagline: "Where Technology Meets Creativity.",
  taglineId: "Menghubungkan Teknologi, Kreativitas, dan Inovasi.",
  roles: ["Lecturer · Information Systems", "Cybersecurity Researcher", "IT Professional", "Creative Designer", "L&D Practitioner"],
  institution: "Institut Teknologi Bacharuddin Jusuf Habibie",
  sintaId: "6824469",
  academicCvUrl: academicCv.url,
  location: "Indonesia",
  // Historical address from the original site — verify before relying on it.
  email: "rakhmadi.rahman90@gmail.com",
  emailVerified: false,
  cvUrl: "https://rakhmadirahman90.github.io/CV%20Rakhmadi%20Rahman.pdf",
  cvPublic: true,
};

export const bio = [
  "Saya Rakhmadi Rahman, S.T., M.Kom., seorang profesional dengan latar belakang pendidikan Teknik Informatika dan Sistem Informasi Bisnis.",
  "Saya merupakan dosen Program Studi Sistem Informasi di Institut Teknologi Bacharuddin Jusuf Habibie, Indonesia, dengan fokus riset terapan pada keamanan siber.",
  "Riset saya mencakup deteksi dan monitoring serangan jaringan, hardening Linux/server, mitigasi brute force, kontrol akses, keamanan web, analisis Wi-Fi publik dan Evil Twin, penetration testing, serta penggunaan defensif perangkat keamanan open source.",
  "Perjalanan profesional saya mencakup bidang teknologi informasi, pembelajaran dan pengembangan sumber daya manusia, pengajaran teknologi, serta industri kreatif.",
  "Saya memiliki ketertarikan pada pengembangan aplikasi, teknologi digital, desain grafis, dan komunikasi visual. Pengalaman menggunakan berbagai perangkat desain dan teknologi membantu saya menggabungkan pendekatan analitis dengan kreativitas untuk menghasilkan solusi yang aplikatif.",
  "Bagi saya, teknologi dan desain bukanlah dua bidang yang terpisah, melainkan dua pendekatan yang saling melengkapi dalam menyelesaikan permasalahan dan menciptakan pengalaman digital yang bermakna.",
];

export const education = [
  { year: "2021", degree: "Magister (S2)", program: "Sistem Informasi Bisnis", institution: "Sekolah Tinggi Manajemen dan Komputer LIKMI, Bandung", gpa: "3.84 / 4.00", distinction: "Cumlaude", detail: "Gelar M.Kom. (Master of Computer Science), Information Systems. Tesis: Interactive Android Mobile Learning Application Using Personal Extreme Programming." },
  { year: "2013", degree: "Sarjana (S1)", program: "Teknik Informatika", institution: "Sekolah Tinggi Sains dan Teknologi Indonesia, Bandung", gpa: "3.77 / 4.00", distinction: "Cumlaude", detail: "Gelar S.T. (Bachelor of Engineering), 145 SKS. Studi relevan: Computer Networks & Security, Network Administration, dan Information Systems Security." },
  { year: "2011", degree: "Diploma III (D3)", program: "Teknik Informatika", institution: "Politeknik Pos Indonesia, Bandung", gpa: "3.96 / 4.00", distinction: "Cumlaude", detail: "Riwayat pendidikan dari situs dan CV terdahulu." },
];

export const experience = [
  {
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    role: "Dosen — Program Studi Sistem Informasi",
    period: "Penugasan akademik — CV Oktober 2026",
    historical: false,
    note: "Tanggal mulai penugasan tidak dicantumkan dalam CV akademik.",
    points: ["Sistem Informasi", "Riset keamanan siber terapan", "Deteksi dan monitoring serangan jaringan", "Publikasi keamanan siber dan sistem informasi"],
  },
  {
    company: "BAZNAS Kota Parepare",
    role: "Application Developer",
    period: "2023",
    points: ["Pengembangan sistem pencatatan transaksi dan pelaporan"],
  },
  {
    company: "Kedaireka — Riset Kolaboratif",
    role: "Anggota Tim",
    period: "2023",
    points: ["Media digital untuk literasi mitigasi bencana gempa bumi di Sulawesi Barat"],
  },
  {
    company: "Kementerian Komunikasi dan Informatika (Kemkominfo)",
    role: "Tenaga Ahli Informatika",
    period: "2021",
    points: ["Pengembangan GIS untuk pemetaan potensi kawasan prioritas"],
  },
  {
    company: "PT Pos Indonesia (Persero)",
    role: "Learning and Development / Junior Analyst",
    period: "Okt 2011 – (tercatat: sekarang)",
    historical: true,
    note: "Data riwayat dari sumber lama — status terkini menunggu verifikasi.",
    points: ["Pelatihan dan pengembangan karyawan", "Pengembangan kompetensi", "Knowledge management", "Pembelajaran organisasi", "Implementasi budaya perusahaan", "Koordinasi program pembelajaran"],
  },
  {
    company: "Binus Center Bandung",
    role: "Instruktur Pemrograman & Web Design",
    period: "Mar 2018 – Mar 2020",
    points: ["Mengajar web design", "Dasar-dasar pemrograman", "Pemrograman PHP", "Java dan teknologi terkait"],
  },
  {
    company: "PT Astra Daihatsu Motor",
    role: "Production Engineering",
    period: "Mar 2011 – Agu 2011",
    points: ["Administrasi engineering", "Dukungan pengembangan komponen", "Spesifikasi material", "Dokumentasi produksi"],
  },
  {
    company: "PT Elnusa Petrofin",
    role: "Internship",
    period: "Agu 2009 – Sep 2009",
    points: ["Administrasi operasional", "Dukungan operasi penyimpanan BBM"],
  },
];

export const skillGroups = [
  {
    title: "Graphic Design & Creative Tools",
    desc: "Perangkat untuk komunikasi visual, branding, dan produksi konten.",
    items: ["Adobe Photoshop", "CorelDRAW", "Adobe Illustrator", "Adobe Premiere Pro", "Canva", "CapCut"],
  },
  {
    title: "Programming & Technology",
    desc: "Fondasi pengembangan web dan aplikasi.",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Java", "MySQL", "Web Development", "Responsive Web Design"],
  },
  {
    title: "Cybersecurity & Applied Research",
    desc: "Bidang riset terapan yang tercantum dalam CV akademik.",
    items: ["Network Attack Detection", "Security Log Analysis", "Linux / Server Hardening", "Brute-force Mitigation", "Access Control", "Web Security", "Public Wi-Fi / Evil Twin Analysis", "Penetration Testing", "Open-source Security Tools", "Wireshark", "Snort", "Metasploit"],
  },
  {
    title: "Professional Competencies",
    desc: "Kompetensi pengembangan SDM, riset, dan kolaborasi.",
    items: ["Learning & Development", "Knowledge Management", "Visual Communication", "Creative Problem Solving", "Research", "Leadership", "Team Collaboration", "Presentation Design", "Digital Content Creation"],
  },
];

export const awards = [
  { year: "2013", title: "Lulusan Terbaik", institution: "Sekolah Tinggi Sains dan Teknologi Indonesia" },
  { year: "2011", title: "Lulusan Terbaik", institution: "Politeknik Pos Indonesia" },
  { year: "2011", title: "Mahasiswa Terbaik, Jurusan Teknik Informatika", institution: "Politeknik Pos Indonesia" },
  { year: "2020", title: "Instructor Methodology Training Program", institution: "Program pelatihan instruktur" },
];

export const organizations = [
  { name: "Organisasi Perwakilan Mahasiswa Kampus", note: "Riwayat — masa kampus" },
  { name: "Organisasi Mahasiswa Kewirausahaan Kampus", note: "Riwayat — masa kampus" },
  { name: "Organisasi Duta Kampus", note: "Riwayat — masa kampus" },
];

export const services = [
  { title: "Graphic Design", desc: "Desain visual untuk kebutuhan komunikasi, promosi, dan publikasi." },
  { title: "Brand Identity", desc: "Logo, palet warna, dan panduan visual yang konsisten." },
  { title: "Print & Publication", desc: "Brosur, poster, laporan, dan materi cetak lainnya." },
  { title: "Social Media Design", desc: "Konten visual yang rapi dan siap tayang di media sosial." },
  { title: "Video Editing", desc: "Penyuntingan video untuk konten digital dan presentasi." },
  { title: "Presentation Design", desc: "Slide presentasi yang jelas, terstruktur, dan meyakinkan." },
  { title: "Web & UI Design", desc: "Antarmuka web responsif yang modern dan mudah digunakan." },
  { title: "Creative Consultation", desc: "Diskusi strategi visual dan digital untuk ide Anda." },
];

export const portfolioCategories = ["Graphic Design", "Branding & Identity", "Digital Illustration", "Video Editing", "Web Development", "Application Development", "UI/UX Design", "Digital Media"];

// Only verified & approved projects belong here. The old site's entries were demo content.
export type Project = { slug: string; title: string; category: string; year: string; summary: string; cover?: string };
export const projects: Project[] = [
  { slug: "baznas-parepare", title: "Sistem Transaksi & Pelaporan BAZNAS Kota Parepare", category: "Application Development", year: "2023", summary: "Peran: Application Developer. Pengembangan sistem pencatatan transaksi dan pelaporan untuk BAZNAS Kota Parepare, sebagaimana tercantum dalam CV akademik." },
  { slug: "kedaireka-mitigasi-gempa", title: "Media Digital Literasi Mitigasi Gempa", category: "Digital Media", year: "2023", summary: "Peran: anggota tim riset kolaboratif Kedaireka. Media digital untuk literasi mitigasi bencana gempa bumi di Sulawesi Barat." },
  { slug: "gis-kemkominfo", title: "GIS Pemetaan Potensi Kawasan Prioritas", category: "Application Development", year: "2021", summary: "Peran: Tenaga Ahli Informatika. Pengembangan GIS untuk pemetaan potensi kawasan prioritas di Kemkominfo, Indonesia." },
];

export const research = {
  direction: "Adaptive and explainable AI-driven cyber threat detection and response for resilient public digital infrastructure.",
  interests: ["Concept drift & temporal robustness", "Attacker-behaviour modelling", "Multi-source security telemetry", "Uncertainty calibration", "Explainable security decisions", "Cyber-range evaluation", "Risk-aware response"],
  metrics: [{ label: "Artikel", value: 119 }, { label: "Sitasi", value: 484 }, { label: "H-index", value: 8 }, { label: "i10-index", value: 8 }],
  metricsNote: "Snapshot Google Scholar yang terhubung SINTA, diaudit Oktober 2026 dalam CV akademik. Angka dapat berubah; periksa ulang sebelum penggunaan formal.",
};

export const publications = [
  { title: "Analisis Keamanan Jaringan Wi-Fi Publik terhadap Serangan Evil Twin", authors: "Rahman, R., Ramli, N., & Rahmadani, A. P.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 35–38", doi: "" },
  { title: "Implementasi Sistem Monitoring Keamanan Jaringan Menggunakan Log Analysis", authors: "Rahman, R., Sairah, A. N., & Heryanti, A. P.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 30–34", doi: "10.69714/fgg13p25" },
  { title: "Implementasi Hardening Server Linux untuk Mengurangi Risiko Serangan Siber", authors: "Rahman, R., Farel, M., & Sopan, M. D.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 39–44", doi: "10.69714/c4atnn70" },
  { title: "Analisis Keamanan File Server Berbasis Linux terhadap Akses Tidak Sah", authors: "Rahman, R., Nurfaida, N., & Rusmin, M. H.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 58–62", doi: "10.69714/38pr8578" },
  { title: "Penerapan Access Control List (ACL) dalam Pengamanan Jaringan Komputer", authors: "Rahman, R., R., M., & Anwar, W.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 1–3", doi: "10.69714/tjzsbn24" },
  { title: "Analisis dan Mitigasi Serangan Brute Force pada Server Menggunakan Tools Keamanan Open Source", authors: "Rahman, R., Yunus, M. A., & Yasin, Z.", year: "2026", category: "Keamanan Siber", journal: "INOMATEC, 1(03)", doi: "" },
  { title: "Serangan dan Deteksi Port Scanning Menggunakan Wireshark dan Snort", authors: "Rahman, R., Hartono, A. K., & Tanduklangi, E.", year: "2025", category: "Keamanan Siber", journal: "Jejak Digital, 1(4), 2138–2144", doi: "10.63822/2q8zwz85" },
  { title: "Pengujian Penetrasi Jaringan Lokal dengan Metasploit Framework", authors: "Aditya, F., Mahrani, A., & Rahman, R.", year: "2025", category: "Keamanan Siber", journal: "Jejak Digital, 1(4), 2127–2137", doi: "10.63822/sht2dr90" },
  { title: "Enterprise Architecture POS (EAPOS)", authors: "Rahman, R.", year: "2023", category: "Sistem Informasi", journal: "Jurnal JITEK, 3(1), 82–88", doi: "" },
  { title: "Enterprise Resource Planning Using TOGAF Architecture Development Method as a Corporate Development Strategy at Institut Teknologi Bacharuddin Jusuf Habibie", authors: "Rahman, R.", year: "2023", category: "Sistem Informasi", journal: "Jurnal Ilmiah Sains Teknologi dan Informasi, 1(2), 33–49", doi: "" },
  { title: "SMART Integrated Leadership (SMILE) for Smart City", authors: "Rahman, R., & Widianto, S. R.", year: "2020", category: "Sistem Informasi", journal: "Jurnal Mantik, 4(3), 1818–1824", doi: "" },
  { title: "Enterprise Architecture Blending Cycle", authors: "Rahman, R., Kulsum, L. K., M. Yahtadi, & Widianto, S. R.", year: "2020", category: "Sistem Informasi", journal: "Jurnal Mantik, 4(3), 1825–1830", doi: "" },
];

export type Article = { slug: string; title: string; category: string; date: string; excerpt: string };
export const articles: Article[] = [];

export const nav = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang" },
  { to: "/experience", label: "Pengalaman" },
  { to: "/portfolio", label: "Portofolio" },
  { to: "/services", label: "Layanan" },
  { to: "/articles", label: "Artikel" },
] as const;
