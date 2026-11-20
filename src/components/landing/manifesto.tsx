export function Manifesto() {
  return (
    <section id="sobre" className="w-full border-b border-line bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-[20px] py-[88px] md:px-8 lg:flex-row lg:gap-0 lg:px-gutter lg:py-section">
        {/* Left column (Paper H3-0 / OU-0) */}
        <div className="flex items-center gap-[12px] lg:w-[394px] lg:shrink-0 lg:flex-col lg:items-start lg:gap-[20px]">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 bg-bone lg:size-[10px]"
          />
          <span className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone lg:text-label lg:leading-label">
            [ 01 — Sobre ]
          </span>
        </div>

        {/* Right column (Paper H6-0 / OX-0 + OY-0) */}
        <div className="flex flex-1 flex-col gap-8 lg:gap-[56px]">
          <h2 className="font-display text-[30px] leading-[36px] font-medium tracking-[-0.03em] text-bone md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            Construímos tecnologia com intenção. O design tem o mesmo peso do
            código
            <span className="text-stone">
              {" "}
              — cada projeto é peça única: arquitetura pensada, código limpo,
              interface precisa.{" "}
            </span>
            <span className="text-stone-dim">
              Nada de template. Nada de atalho.
            </span>
          </h2>

          <div className="flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:gap-12 lg:border-t-0 lg:pt-0">
            <p className="font-sans text-[15px] leading-6 text-stone md:max-w-[300px]">
              A Olven existe para construir software que dura. Sem excesso na
              interface, sem remendo na arquitetura.
            </p>
            <p className="font-sans text-[15px] leading-6 text-stone md:max-w-[300px]">
              Trabalhamos lado a lado com quem lidera o projeto — do primeiro
              rascunho ao lançamento, e depois dele.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
