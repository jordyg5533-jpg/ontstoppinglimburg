import Link from "next/link";
import { site } from "@/lib/site";

export function CallButton({ klein = false }: { klein?: boolean }) {
  return (
    <a
      href={site.telefoonHref}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-flame-500 font-semibold text-white shadow-sm transition hover:bg-flame-600 ${
        klein ? "px-4 py-2 text-sm" : "px-6 py-3.5 text-base"
      }`}
    >
      <span aria-hidden>&#9742;</span> {site.telefoonLabel}
    </a>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 ${className}`}>
      {children}
    </section>
  );
}

export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-4 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
      {children}
    </h2>
  );
}

export function PriceTable({
  rijen,
  kop = ["Ingreep", "Richtprijs"],
  bijschrift,
}: {
  rijen: string[][];
  kop?: string[];
  bijschrift?: string;
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-water-100">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-water-50">
          <tr>
            {kop.map((k) => (
              <th key={k} className="px-4 py-3 font-semibold text-ink-800">
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rijen.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-white" : "bg-water-50/40"}>
              {r.map((cel, j) => (
                <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "text-ink-800" : "font-semibold text-ink-900"}`}>
                  {cel}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {bijschrift ? <p className="border-t border-water-100 bg-white px-4 py-2 text-xs text-ink-700">{bijschrift}</p> : null}
    </div>
  );
}

export function FaqList({ items, titel = "Veelgestelde vragen" }: { items: { v: string; a: string }[]; titel?: string }) {
  if (!items.length) return null;
  return (
    <div>
      <H2>{titel}</H2>
      <div className="divide-y divide-water-100 rounded-xl border border-water-100">
        {items.map((f) => (
          <div key={f.v} className="p-5">
            <h3 className="mb-2 text-base font-bold text-ink-900">{f.v}</h3>
            <p className="text-[15px] leading-relaxed text-ink-800">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Jsonld({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Statische, door onszelf opgebouwde data: geen gebruikersinvoer.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Breadcrumbs({ items }: { items: { naam: string; href: string }[] }) {
  return (
    <nav aria-label="Kruimelpad" className="mb-6 text-sm text-ink-700">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden>/</span> : null}
            {i === items.length - 1 ? (
              <span className="text-ink-800">{it.naam}</span>
            ) : (
              <Link href={it.href} className="underline underline-offset-2 hover:text-water-600">
                {it.naam}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
