import { PROCESS_PHASES } from "@/data/studio"

export function Process() {
  return (
    <section id="processo" className="w-full bg-bone text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-[20px] pt-[88px] pb-[40px] md:px-8 lg:gap-[96px] lg:px-gutter lg:pt-section lg:pb-0">
        {/* Header (Paper ID-0 desktop / PY-0 mobile) */}
        <div className="flex flex-col gap-[20px] lg:flex-row lg:items-start lg:gap-0">
          <div className="flex items-center gap-[12px] lg:w-[394px] lg:shrink-0 lg:flex-col lg:items-start lg:gap-[20px]">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 bg-ink lg:size-[10px]"
            />
            <span className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-ink lg:text-label lg:leading-label">
              [ 03 — Processo ]
            </span>
          </div>

          <h2 className="font-display text-[30px] leading-[36px] font-medium tracking-[-0.03em] text-ink md:text-[40px] md:leading-[48px] lg:flex-1 lg:text-[48px] lg:leading-[56px]">
            Um método simples, executado com rigor.{" "}
            <span className="text-stone">
              Você acompanha cada etapa — sem caixa-preta.
            </span>
          </h2>
        </div>

        {/* 3-Phase Architectural Grid (Paper II-0 desktop / Q3-0 mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:border-t lg:border-ink">
          {PROCESS_PHASES.map((item, idx) => {
            const desktopBorderAndPadding =
              idx === 0
                ? "lg:pr-8 lg:border-r lg:border-ink"
                : idx === 1
                  ? "lg:px-8 lg:border-r lg:border-ink"
                  : "lg:pl-8"

            return (
              <article
                key={item.phase}
                className={`flex flex-col gap-[20px] border-t border-ink pt-6 pb-[40px] lg:gap-[40px] lg:border-t-0 lg:pt-8 lg:pb-[96px] ${desktopBorderAndPadding}`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] leading-[16px] tracking-label uppercase lg:text-label lg:leading-label">
                  <span className="text-ink">{item.phase}</span>
                  <span className="text-stone">{item.tag}</span>
                </div>

                <h3 className="font-display text-[72px] leading-[68px] font-bold tracking-[-0.05em] text-ink lg:text-[clamp(64px,6.6vw,96px)] lg:leading-[0.916]">
                  {item.title}
                  <span className={item.accentPeriod ? "text-furnace" : ""}>
                    .
                  </span>
                </h3>

                <p className="font-sans text-[15px] leading-6 text-stone-dark lg:min-h-[72px]">
                  {item.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {item.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="font-mono text-label leading-label tracking-tight text-ink"
                    >
                      → {deliverable}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
