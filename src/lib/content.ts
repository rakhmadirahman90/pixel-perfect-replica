// Verified content migrated from rakhmadirahman90.github.io and the historical CV.
// Historical data is labeled as such; unverified items are intentionally excluded.

export const profile = {
  name: "Rakhmadi Rahman",
  credentials: "S.T., M.Kom.",
  tagline: "Where Technology Meets Creativity.",
  taglineId: "Menghubungkan Teknologi, Kreativitas, dan Inovasi.",
  roles: ["IT Professional", "Creative Designer", "Digital Innovator", "L&D Practitioner"],
  location: "Indonesia",
  // Historical address from the original site — verify before relying on it.
  email: "rakhmadi.rahman90@gmail.com",
  emailVerified: false,
  cvUrl: "https://rakhmadirahman90.github.io/CV%20Rakhmadi%20Rahman.pdf",
  cvPublic: true,
};

export const bio = [
  "Saya Rakhmadi Rahman, S.T., M.Kom., seorang profesional dengan latar belakang pendidikan Teknik Informatika dan Sistem Informasi Bisnis.",
  "Perjalanan profesional saya mencakup bidang teknologi informasi, pembelajaran dan pengembangan sumber daya manusia, pengajaran teknologi, serta industri kreatif.",
  "Saya memiliki ketertarikan pada pengembangan aplikasi, teknologi digital, desain grafis, dan komunikasi visual. Pengalaman menggunakan berbagai perangkat desain dan teknologi membantu saya menggabungkan pendekatan analitis dengan kreativitas untuk menghasilkan solusi yang aplikatif.",
  "Bagi saya, teknologi dan desain bukanlah dua bidang yang terpisah, melainkan dua pendekatan yang saling melengkapi dalam menyelesaikan permasalahan dan menciptakan pengalaman digital yang bermakna.",
];

export const education = [
  { year: "2021", degree: "Magister (S2)", program: "Sistem Informasi Bisnis", institution: "Sekolah Tinggi Manajemen dan Komputer LIKMI, Bandung", gpa: "3.84 / 4.00", distinction: "Cumlaude" },
  { year: "2013", degree: "Sarjana (S1)", program: "Teknik Informatika", institution: "Sekolah Tinggi Sains dan Teknologi Indonesia, Bandung", gpa: "3.77 / 4.00", distinction: "Cumlaude" },
  { year: "2011", degree: "Diploma III (D3)", program: "Teknik Informatika", institution: "Politeknik Pos Indonesia, Bandung", gpa: "3.96 / 4.00", distinction: "Cumlaude" },
];

export const experience = [
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
export const projects: Project[] = [];

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
