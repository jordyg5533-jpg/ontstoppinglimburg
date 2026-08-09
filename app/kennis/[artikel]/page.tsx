import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { site } from "@/lib/site";
import { Breadcrumbs, CallButton, FaqList, Jsonld, PriceTable, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { RooilijnDiagram } from "@/components/Diagram";

export function generateStaticParams() {
  return articles.map((a) => ({ artikel: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ artikel: string }> }): Promise<Metadata> {
  const { artikel } = await params;
  const a = getArticle(artikel);
  if (!a) return {};
  return {
    title: a.titel,
    description: a.beschrijving,
    alternates: { canonical: `/kennis/${a.slug}` },
  };
}

export default async function ArtikelPagina({ params }: { params: Promise<{ artikel: string }> }) {
  const { artikel } = await params;
  const a = getArticle(artikel);
  if (!a) notFound();

  const andere = articles.filter((x) => x.slug !== a.slug).slice(0, 4);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.h1,
      description: a.beschrijving,
      inLanguage: "nl-BE",
      author: { "@id": `${site.url}/#organisatie` },
      publisher: { "@id": `${site.url}/#organisatie` },
      mainEntityOfPage: `${site.url}/kennis/${a.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({
        "@type": "Question",
        name: f.v,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Kennisbank", item: `${site.url}/kennis` },
        { "@type": "ListItem", position: 3, name: a.h1, item: `${site.url}/kennis/${a.slug}` },
      ],
    },
  ];

  return (
    <>
      <Jsonld data={schema} />
      <Section>
        <Breadcrumbs
          items={[
            { naam: "Home", href: "/" },
            { naam: "Kennisbank", href: "/kennis" },
            { naam: a.h1, href: `/kennis/${a.slug}` },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <article className="prose-nl max-w-none">
            <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">{a.h1}</h1>
            <p className="mb-6 text-xs uppercase tracking-wider text-ink-700">Bijgewerkt {a.bijgewerkt}</p>
            <p className="text-lg leading-relaxed text-ink-800">
              Deze gids is geschreven door{" "}
              <Link href="/" className="font-semibold text-water-600 underline underline-offset-2">
                Limburg Ontstoppingsdienst 24/7
              </Link>
              , die in heel de provincie Limburg riolering en afvoeren ontstopt.
            </p>
            {a.intro.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-800">
                {p}
              </p>
            ))}

            {/* Inhoudsopgave */}
            <nav className="my-8 rounded-xl border border-water-100 bg-water-50/60 p-5">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-water-600">In dit artikel</p>
              <ol className="space-y-1 text-[15px]">
                {a.secties.map((s, i) => (
                  <li key={s.h2}>
                    <a href={`#s${i}`} className="text-water-600 underline underline-offset-2">
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {a.slug === "wie-betaalt-verstopte-riolering" ? <RooilijnDiagram /> : null}

            {a.secties.map((s, i) => (
              <section key={s.h2}>
                <h2 id={`s${i}`}>{s.h2}</h2>
                {s.tekst?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.lijst ? (
                  <ul>
                    {s.lijst.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                ) : null}
                {s.tabel ? <PriceTable kop={s.tabel.kop} rijen={s.tabel.rijen} bijschrift={s.tabel.bijschrift} /> : null}
              </section>
            ))}

            <FaqList items={a.faq} />

            {a.bronnen?.length ? (
              <>
                <h2>Bronnen</h2>
                <ul>
                  {a.bronnen.map((b) => (
                    <li key={b.url}>
                      <a href={b.url} rel="nofollow noopener" target="_blank">
                        {b.naam}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <h2>Verder lezen</h2>
            <ul>
              {andere.map((x) => (
                <li key={x.slug}>
                  <Link href={`/kennis/${x.slug}`}>{x.h1}</Link>
                </li>
              ))}
            </ul>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm compact />
            <div className="mt-4 rounded-2xl border border-water-100 bg-water-50/60 p-5">
              <p className="mb-2 font-bold text-ink-900">Concreet probleem?</p>
              <p className="mb-4 text-sm leading-relaxed text-ink-800">
                Bel gerust voor een richtprijs. U hoort meteen of het dringend is of tot morgen kan wachten.
              </p>
              <CallButton klein />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
