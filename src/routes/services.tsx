import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceVisual } from "@/components/site/VisualCards";
import { PageHeader, Section, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => meta("Layanan — Rakhmadi Rahman", "Layanan desain grafis, brand identity, video editing, presentasi, dan web design oleh Rakhmadi Rahman."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader eyebrow="Layanan" title="Apa yang bisa saya bantu." intro="Layanan kreatif dan digital untuk kebutuhan personal, komunitas, maupun organisasi." />
      <Section>
        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link key={s.title} to="/contact" className="group bg-card p-5 transition-all duration-300 hover:bg-elevated sm:p-6">
              <div className="flex justify-between text-sm text-muted-foreground"><span className="font-display">{String(i + 1).padStart(2, "0")}</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" /></div>
              <ServiceVisual index={i} /><h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
