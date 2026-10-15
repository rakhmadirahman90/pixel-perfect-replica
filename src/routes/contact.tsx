import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Kontak — Rakhmadi Rahman", "Hubungi Rakhmadi Rahman untuk kolaborasi, proyek desain, atau konsultasi kreatif dan digital."),
  component: Contact,
});

const field = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Kolaborasi", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`[${form.type}] dari ${form.name}`)}&body=${body}`;
  };
  return (
    <>
      <PageHeader eyebrow="Kontak" title={<>Bangun <span className="font-serif font-normal italic text-primary">kolaborasi</span>.</>} intro="Hubungi saya untuk diskusi proyek, kerja sama profesional, dan peluang kolaborasi di bidang teknologi serta industri kreatif." />
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border bg-card p-6"><Mail className="h-5 w-5 text-primary" /><p className="mt-4 text-sm text-muted-foreground">Email</p><a href={`mailto:${profile.email}`} className="break-all font-medium">{profile.email}</a></div>
            <div className="rounded-2xl border bg-card p-6"><MapPin className="h-5 w-5 text-primary" /><p className="mt-4 text-sm text-muted-foreground">Lokasi</p><p className="font-medium">{profile.location}</p></div>
          </div>
          <form onSubmit={submit} className="space-y-4 rounded-2xl border bg-card p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5 text-sm"><span>Nama</span><input required className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
              <label className="space-y-1.5 text-sm"><span>Email</span><input required type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
            </div>
            <label className="block space-y-1.5 text-sm"><span>Jenis pesan</span>
              <select className={field} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option>Kolaborasi</option><option>Pertanyaan proyek</option><option>Lainnya</option>
              </select>
            </label>
            <label className="block space-y-1.5 text-sm"><span>Pesan</span><textarea required rows={5} className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Kirim pesan <Send className="h-4 w-4" /></button>
          </form>
        </div>
      </Section>
    </>
  );
}
