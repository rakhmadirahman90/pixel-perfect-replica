import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Copy, ExternalLink, Mail, MapPin, MessageSquareText, Send, ShieldCheck, Sparkles } from "lucide-react";
import { profile } from "@/lib/content";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Kontak & Kolaborasi — Rakhmadi Rahman", "Hubungi Rakhmadi Rahman untuk kerja sama profesional, pengembangan aplikasi, riset teknologi, dan desain digital."),
  component: Contact,
});

const inputClass = "mt-2 block w-full min-w-0 rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15";
const topics = ["Kolaborasi profesional", "Pengembangan aplikasi / web", "Riset & akademik", "Desain grafis & digital", "Pelatihan & konsultasi", "Lainnya"];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: topics[0], message: "" });
  const [copied, setCopied] = useState(false);
  const [opened, setOpened] = useState(false);
  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`[${form.type}] Pesan dari ${form.name.trim()}`);
    const body = encodeURIComponent(`Halo,\n\n${form.message.trim()}\n\nSalam,\n${form.name.trim()}\nEmail: ${form.email.trim()}`);
    window.location.href = `mailto:${profile.academicEmail}?subject=${subject}&body=${body}`;
    setOpened(true);
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.academicEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <>
      <PageHeader eyebrow="Let's Connect / Kontak" title={<>Mari wujudkan ide menjadi <span className="font-serif font-normal italic text-primary">kolaborasi nyata.</span></>} intro="Terbuka untuk diskusi profesional, riset terapan, pengembangan teknologi, dan proyek kreatif. Sampaikan kebutuhan Anda melalui kontak atau formulir di bawah." />
      <Section>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl"/>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"><Sparkles className="h-3.5 w-3.5"/> Terhubung & Berkolaborasi</span>
                <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">Percakapan yang baik adalah awal dari karya yang berarti.</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">Saya terbuka untuk peluang kerja sama yang relevan dengan sistem informasi, keamanan siber, riset, pengembangan aplikasi, serta desain dan komunikasi visual.</p>
                <div className="mt-6 flex flex-wrap gap-2">{["Teknologi", "Riset", "Desain Digital", "Kolaborasi"].map(item=><span key={item} className="rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium">{item}</span>)}</div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5"/></div>
                <div className="min-w-0 flex-1"><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email Akademik</p><a href={`mailto:${profile.academicEmail}`} className="mt-1 block break-all text-sm font-semibold hover:text-primary sm:text-base">{profile.academicEmail}</a><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Saluran kontak untuk diskusi dan kerja sama profesional.</p></div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t pt-4">
                <a href={`mailto:${profile.academicEmail}`} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">Tulis Email <ArrowUpRight className="h-4 w-4"/></a>
                <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-primary/5">{copied?<CheckCircle2 className="h-4 w-4 text-primary"/>:<Copy className="h-4 w-4"/>}{copied?"Tersalin":"Salin Email"}</button>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 sm:p-6"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5"/></div><div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Lokasi</p><p className="mt-1 font-semibold">{profile.location}</p><p className="mt-1 text-xs text-muted-foreground">Kolaborasi daring maupun lintas lokasi.</p></div></div>
            <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 p-4 text-xs leading-6 text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary"/><p>Formulir ini membuka aplikasi email pada perangkat Anda. Pesan tidak disimpan atau dikirim langsung melalui server website.</p></div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border bg-card shadow-sm">
            <div className="border-b bg-gradient-to-r from-primary/10 to-transparent px-6 py-6 sm:px-8 sm:py-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-primary"><MessageSquareText className="h-4 w-4"/> Formulir Kontak</span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Ceritakan ide Anda.</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Isi informasi singkat di bawah untuk menyiapkan pesan melalui aplikasi email.</p>
            </div>
            <form onSubmit={send} className="space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">Nama lengkap <span className="text-primary">*</span><input autoComplete="name" required minLength={2} maxLength={100} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama Anda" className={inputClass}/></label>
                <label className="block text-sm font-semibold">Alamat email <span className="text-primary">*</span><input type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="nama@email.com" className={inputClass}/></label>
              </div>
              <label className="block text-sm font-semibold">Topik pembicaraan <span className="text-primary">*</span><select required value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className={inputClass}>{topics.map(t=><option key={t} value={t}>{t}</option>)}</select></label>
              <label className="block text-sm font-semibold">Pesan Anda <span className="text-primary">*</span><textarea required minLength={10} maxLength={4000} rows={7} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Ceritakan tujuan, kebutuhan, atau ide kolaborasi Anda secara singkat..." className={`${inputClass} resize-y leading-7`}/><span className="mt-2 block text-right text-xs font-normal text-muted-foreground">{form.message.length} / 4000 karakter</span></label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Siapkan Email <Send className="h-4 w-4"/></button>
              {opened && <p role="status" className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs leading-relaxed text-foreground">Aplikasi email telah diminta untuk dibuka. Periksa draf dan tekan Kirim di aplikasi email Anda.</p>}
              <p className="text-center text-xs leading-relaxed text-muted-foreground">Dengan melanjutkan, Anda akan diarahkan ke aplikasi email. Tidak ada pengiriman otomatis.</p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
