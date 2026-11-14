const APP_STORE_CADA_FASE = 'https://apps.apple.com/br/app/id6775042827'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nightbrew Studio',
  legalName: 'Nightbrew Studio LTDA',
  taxID: '70.134.063/0001-16',
  url: 'https://nightbrew.com.br',
  email: 'contato@nightbrew.com.br',
  address: { '@type': 'PostalAddress', addressLocality: 'Guarulhos', addressRegion: 'SP', addressCountry: 'BR' },
}

function Lua({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect width="64" height="64" rx="14" fill="#2C2420" />
      <path d="M38 14a16 16 0 1 0 12 26A13 13 0 1 1 38 14z" fill="#F49A44" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <header className="border-b border-label/10">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
          <Lua className="h-8 w-8" />
          <span className="font-display text-lg text-label">Nightbrew Studio</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <section className="py-20 md:py-28">
          <span className="inline-block rounded-full bg-barro/15 px-3 py-1 text-sm text-barro">
            Estúdio independente
          </span>
          <h1 className="mt-6 max-w-[14ch] font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Apps feitos com calma, para a vida que acontece.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-label/80">
            Criamos apps para iOS e Android. Poucos, bem cuidados, pensados para durar.
          </p>
        </section>

        <section className="pb-20">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-label/60">Nossos apps</h2>
          <div className="mt-5 flex flex-col gap-6 rounded-3xl border border-label/10 bg-surface/60 p-6 md:flex-row md:items-center md:p-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cada-fase.svg" alt="" width={72} height={72} className="h-[72px] w-[72px] rounded-[18px]" />
            <div className="flex-1">
              <h3 className="font-display text-2xl">Cada Fase</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-label/80">
                As fases e os saltos do bebê, explicados com calma. A Lu acompanha a família em cada uma.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={APP_STORE_CADA_FASE}
                className="rounded-full bg-barro px-5 py-2.5 text-sm font-medium text-[#FFEED0] transition hover:bg-barro/90"
              >
                App Store
              </a>
              <a
                href="https://cadafase.com"
                className="rounded-full border border-barro/60 px-5 py-2.5 text-sm font-medium text-barro transition hover:bg-barro/10"
              >
                cadafase.com
              </a>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-label/60">Contato</h2>
          <a
            href="mailto:contato@nightbrew.com.br"
            className="mt-4 inline-block font-display text-2xl text-ambar underline-offset-4 hover:underline md:text-3xl"
          >
            contato@nightbrew.com.br
          </a>
        </section>
      </main>

      <footer className="border-t border-label/10">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-label/60">
          <p>Nightbrew Studio LTDA · CNPJ 70.134.063/0001-16</p>
          <p className="mt-1">Guarulhos, SP, Brasil</p>
        </div>
      </footer>
    </div>
  )
}
