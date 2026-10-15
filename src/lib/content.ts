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
  academicEmail: "Rakhmadi.rahman@ith.ac.id",
  academicDepartment: "Jurusan Sains, Program Studi Sistem Informasi",
  officeAddress: "Jl. Balai Kota No. 1, Parepare",
  officePhone: "0421 2924000",
  academicExpertise: ["Sistem Informasi", "Knowledge Management System", "Cyber Security"],
  sourceCvDate: "06 Desember 2024",
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
  "Saya Rakhmadi Rahman, S.T., M.Kom., dosen Sistem Informasi dengan latar belakang Teknik Informatika dan Sistem Informasi Bisnis.",
  "Saya mengajar di Institut Teknologi Bacharuddin Jusuf Habibie dan meneliti keamanan siber terapan.",
  "Fokus riset saya meliputi deteksi serangan jaringan, keamanan server dan web, kontrol akses, serta pengujian keamanan.",
  "Pengalaman saya mencakup teknologi informasi, pengajaran, pengembangan SDM, dan industri kreatif.",
  "Keahlian akademik: Sistem Informasi, Knowledge Management, Keamanan Siber, dan Enterprise Architecture.",
  "Saya menggabungkan pengembangan aplikasi dan desain visual untuk menciptakan solusi digital yang praktis.",
  "Teknologi dan desain saling melengkapi untuk menghasilkan pengalaman digital yang bermanfaat.",
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
    internship: true,
  },
];

// Penugasan berbasis proyek: jangan dihitung sebagai pekerjaan tetap tanpa bukti kontrak kerja.
export const projectAssignments = [
  { company: "BAZNAS Kota Parepare", role: "Application Developer", period: "2023", projectSlug: "baznas-parepare", note: "Aplikasi Pencatatan dan Pelaporan Transaksi Zakat, Infaq dan Sedekah BAZNAS Kota Parepare; peran Pengembang Aplikasi (CV, 2024). Bentuk hubungan kerja tidak dinyatakan." },
  { company: "Kementerian Komunikasi dan Informatika (Kemkominfo)", role: "Tenaga Ahli Informatika", period: "2021", projectSlug: "gis-kemkominfo", note: "Kajian Penyusunan Sistem Informasi Geografis Potensi Wilayah di Kawasan Prioritas, Kemkominfo Jakarta (CV, 2024). Bentuk dan durasi kontrak tidak tercantum." },
  { company: "Kedaireka — Riset Kolaboratif", role: "Anggota tim riset", period: "2023", projectSlug: "kedaireka-mitigasi-gempa", note: "Proyek kolaboratif, bukan posisi kerja tetap." },
];

export const training = [
  { title: "Instructor Methodology Training Program", year: "2020", provider: "Program pelatihan instruktur", note: "Tercatat dalam riwayat; nomor sertifikat belum tersedia." },
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

export const portfolioCategories = ["Application Development", "Digital Media", "Community Service"];

// Only verified & approved projects belong here. The old site's entries were demo content.
export type Project = { slug: string; title: string; category: string; year: string; summary: string; cover?: string };
export const projects: Project[] = [
  { slug: "baznas-parepare", title: "Sistem Transaksi & Pelaporan BAZNAS Kota Parepare", category: "Application Development", year: "2023", summary: "Pengembang aplikasi pencatatan transaksi dan pelaporan BAZNAS Kota Parepare." },
  { slug: "kedaireka-mitigasi-gempa", title: "Media Digital Literasi Mitigasi Gempa", category: "Digital Media", year: "2023", summary: "Anggota tim Kedaireka yang mengembangkan media literasi mitigasi gempa di Sulawesi Barat." },
  { slug: "gis-kemkominfo", title: "GIS Pemetaan Potensi Kawasan Prioritas", category: "Application Development", year: "2021", summary: "Tenaga Ahli Informatika dalam pengembangan GIS pemetaan kawasan prioritas Kemkominfo." },
  { slug: "ar-shohwatul-isad", title: "Media Pembelajaran Interaktif Augmented Reality — Shohwatul Is’Ad", category: "Community Service", year: "2023", summary: "Pendampingan media pembelajaran Augmented Reality di Pesantren Shohwatul Is’Ad, Pangkep." },
  { slug: "google-workspace-sman3", title: "Pelatihan Google Workspace — SMAN 3 Parepare", category: "Community Service", year: "2023", summary: "Pelatihan Google Workspace untuk produktivitas dan pembelajaran di SMAN 3 Parepare." },
  { slug: "microsoft-project-lapadde", title: "Pelatihan Microsoft Project — Kelurahan Lapadde", category: "Community Service", year: "2023", summary: "Pelatihan Microsoft Project untuk perencanaan kegiatan di Kelurahan Lapadde." },
];

export const research = {
  direction: "Adaptive and explainable AI-driven cyber threat detection and response for resilient public digital infrastructure.",
  interests: ["Concept drift & temporal robustness", "Attacker-behaviour modelling", "Multi-source security telemetry", "Uncertainty calibration", "Explainable security decisions", "Cyber-range evaluation", "Risk-aware response"],
  metrics: [{ label: "Artikel", value: 119 }, { label: "Sitasi", value: 484 }, { label: "H-index", value: 8 }, { label: "i10-index", value: 8 }],
  metricsNote: "Snapshot Google Scholar yang terhubung SINTA, diaudit Oktober 2026 dalam CV akademik. Angka dapat berubah; periksa ulang sebelum penggunaan formal.",
};

export const publications = [
  { title: "Analisis Keamanan Jaringan Wi-Fi Publik terhadap Serangan Evil Twin", authors: "Rahman, R., Ramli, N., & Rahmadani, A. P.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 35–38", doi: "" },
  { title: "Implementasi Sistem Monitoring Keamanan Jaringan Menggunakan Log Analysis", authors: "Rahman, R., Sairah, A. N., & Heryanti, A. P.", year: "2026", category: "Keamanan Siber", journal: "Jurnal Riset Sistem Informasi, 3(2), 30–34", doi: "10.69714/fqg13p25" },
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

// Hak cipta/HKI dari biodata penelitian; ditampilkan sebagai daftar unik berdasarkan nomor pencatatan.
export const intellectualProperty = [
  { title: "Desain Pembuatan Media Pembelajaran Interaktif dengan Class Point AI di UPTD SD 62 Parepare", registration: "EC002023123359", year: "2023" },
  { title: "Buku Ajar Pengantar Sistem Informasi", registration: "EC00202357909", year: "2023" },
  { title: "Pengantar Sistem Informasi: Panduan Praktis Pengenalan Sistem Informasi & Penerapannya", registration: "EC00202346198", year: "2023" },
  { title: "Penerapan Sistem Informasi di Berbagai Bidang", registration: "EC00202316797", year: "2023" },
  { title: "Penerapan & Implementasi Big Data di Berbagai Sektor: Pembangunan Berkelanjutan Era Industri 4.0 dan Society 5.0", registration: "EC002022316797", year: "2023 (tertulis pada CV; nomor registrasi memuat 2022)" },
  { title: "Jaringan Komputer: Teori dan Penerapan Berbagai Bidang", registration: "EC00202420768", year: "2024 (berdasarkan nomor pencatatan)" },
  { title: "Buku Ajar Keamanan Jaringan Komputer", registration: "EC00202433544", year: "2024 (berdasarkan nomor pencatatan)" },
];

// Jenis kegiatan dipertahankan agar kegiatan pengabdian tidak dianggap proyek komersial.
export const academicActivities = [
  { title: "Aplikasi Komik Digital (Webtoon) untuk Meningkatkan Literasi Mitigasi Bencana Gempa Bumi bagi Generasi Muda di Sulawesi Barat Indonesia", year: "2023", role: "Anggota tim", funding: "Kedaireka" },
  { title: "Pendampingan Pembuatan Media Pembelajaran Interaktif Menggunakan Augmented Reality di Pondok Pesantren Modern Islam Shohwatul Is’Ad Kabupaten Pangkep", year: "2023", role: "Anggota tim", funding: "Institut Teknologi Bacharuddin Jusuf Habibie" },
  { title: "Pemanfaatan Google Workspace sebagai Alat Produktivitas dan Kolaborasi dalam Mendukung Pembelajaran Aktif, Inovatif, dan Kreatif di SMAN 3 Parepare", year: "2023", role: "Anggota tim", funding: "Institut Teknologi Bacharuddin Jusuf Habibie" },
  { title: "Pelatihan Aplikasi Microsoft Project untuk Mendukung Penyusunan Program Kegiatan di Kelurahan Lapadde, Kecamatan Ujung, Kota Parepare", year: "2023", role: "Anggota tim", funding: "Institut Teknologi Bacharuddin Jusuf Habibie" },
];

// Dokumen sumber historis bertanggal 06 Desember 2024. Hanya rincian profesional dipublikasikan.
export const sourceCv = {
  title: "Biodata Pengusul — Rakhmadi Rahman, S.T., M.Kom.",
  date: "06 Desember 2024",
  documentUrl: profile.cvUrl,
  sections: ["Biodata akademik", "Pendidikan formal", "Pengalaman kepakaran", "Penelitian dan kerja sama", "Publikasi ilmiah", "Hak cipta/HKI"],
  notes: "CV tahun 2024 merupakan sumber historis; riwayat tambahan dari dokumen lain diberi konteks tersendiri. Nomor identitas dosen dan tanggal lahir tidak ditampilkan di halaman publik.",
};
export const institutionalIdentitySources = [
  { name: "Institut Teknologi Bacharuddin Jusuf Habibie", url: "https://www.ith.ac.id/", note: "Website resmi institusi" },
  { name: "BAZNAS", url: "https://baznas.go.id/brand", note: "Panduan logo dan identitas resmi; penggunaan mengikuti ketentuan BAZNAS" },
  { name: "Kementerian Komunikasi dan Informatika", url: "https://jdih.komdigi.go.id/produk_hukum/kategori?page=11", note: "Arsip kebijakan logo kementerian pada periode historis" },
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
