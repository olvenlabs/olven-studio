"use client"

import { Button } from "@/components/ui/button"
import { MARQUEE_ITEMS } from "@/data/studio"
import { useProjectDialog } from "./project-dialog"

function BuildLogTerminal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col border border-line bg-ink-deep ${className}`}
      aria-label="Log de construção Olven"
    >
      <div className="flex items-center justify-between border-b border-line px-[14px] py-[10px]">
        <span className="font-mono text-[11px] leading-[18px] tracking-label uppercase text-bone">
          build.log
        </span>
        <span className="font-mono text-[11px] leading-[18px] tracking-label uppercase text-stone">
          sua-ideia@main
        </span>
      </div>

      <div className="flex flex-col gap-[2px] overflow-x-auto p-[14px] font-mono text-[11px] leading-[18px] tracking-tight text-stone">
        <div className="whitespace-pre">
          <span className="text-bone">$</span> olven build ./sua-ideia
        </div>
        <div className="h-[18px]" aria-hidden="true" />
        <div className="whitespace-pre">
          [01] create{"  "}discovery, escopo{"   "}
          <span className="text-bone">ok</span>
        </div>
        <div className="whitespace-pre">
          [02] refine{"  "}arquitetura, UI{"     "}
          <span className="text-bone">ok</span>
        </div>
        <div className="whitespace-pre">
          [03] build{"   "}código, IA, testes{"  "}
          <span className="text-bone">ok</span>
        </div>
        <div className="whitespace-pre">
          [04] ship{"    "}lançamento, dados{"   "}
          <span className="animate-olven-blink text-furnace">▮</span>
        </div>
        <div className="h-[18px]" aria-hidden="true" />
        <div className="whitespace-pre text-bone">
          ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
          <span className="text-tick">▮▮▮</span>
          {"  "}87%
        </div>
        <div className="whitespace-pre text-stone">
          código seu · documentado · em produção
        </div>
      </div>
    </div>
  )
}

const DESKTOP_RULER_GROUPS = ["000", "250", "500", "750", "1000"] as const

export function Hero() {
  const { openDialog } = useProjectDialog()

  return (
    <section className="w-full bg-ink">
      {/* Main Hero Container (Paper DY-0 desktop / MY-0 mobile) */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[28px] px-[20px] pt-[40px] pb-8 md:gap-8 md:px-8 md:pt-[56px] md:pb-0 lg:px-gutter">
        {/* Micro-bar (Paper DZ-0 / MZ-0) */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-furnace md:text-label md:leading-label md:text-stone">
            [ 00 — Index ]
          </span>

          {/* Desktop center bridge */}
          <div className="hidden items-center gap-4 lg:flex">
            <span className="font-mono text-label leading-label tracking-label uppercase text-bone">
              Da ideia
            </span>
            <span className="h-px w-gutter shrink-0 bg-line" aria-hidden="true" />
            <span className="font-mono text-label leading-label tracking-label uppercase text-furnace">
              →
            </span>
            <span className="h-px w-gutter shrink-0 bg-line" aria-hidden="true" />
            <span className="font-mono text-label leading-label tracking-label uppercase text-bone">
              à produção
            </span>
          </div>

          {/* Mobile right micro-label */}
          <span className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone lg:hidden">
            Da ideia → à produção
          </span>

          {/* Desktop right micro-label */}
          <span className="hidden font-mono text-label leading-label tracking-label uppercase text-stone lg:inline">
            Sistemas · IA aplicada · Sites
          </span>
        </div>

        {/* Headline Row + Terminal (Paper EA-0 desktop / N2-0 mobile) */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-6">
          {/* Desktop Headline (2 lines, fluid up to 184px at 1440px) */}
          <h1 className="hidden font-display font-bold text-bone md:block">
            <span className="block text-[clamp(80px,11.6vw,184px)] leading-[0.89] tracking-[-0.05em]">
              Software
            </span>
            <span className="flex items-end gap-[10px]">
              <span className="text-[clamp(80px,11.6vw,184px)] leading-[0.89] tracking-[-0.05em]">
                feito à mão
              </span>
              <span className="flex pb-[clamp(10px,1.4vw,20px)]">
                <span
                  aria-hidden="true"
                  className="inline-block size-[clamp(18px,2.35vw,34px)] shrink-0 bg-furnace"
                />
              </span>
            </span>
          </h1>

          {/* Mobile Headline (3 lines matching Paper N2-0) */}
          <h1
            aria-label="Software feito à mão."
            className="flex flex-col font-display text-[clamp(64px,21.5vw,84px)] leading-[0.905] font-bold tracking-[-0.055em] text-bone md:hidden"
          >
            <span>Software</span>
            <span>feito</span>
            <span className="flex items-end gap-[6px]">
              <span>à mão</span>
              <span className="flex pb-[12px]">
                <span
                  aria-hidden="true"
                  className="inline-block size-4 shrink-0 bg-furnace"
                />
              </span>
            </span>
          </h1>

          {/* Mobile sub-tags (Paper N9-0) */}
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone md:hidden">
            Sistemas · IA aplicada · Sites
          </div>

          {/* Desktop Build Log Terminal (Paper EI-0) */}
          <BuildLogTerminal className="hidden w-[336px] shrink-0 lg:flex" />
        </div>

        {/* Hero Base: Subtext + CTAs (Paper F8-0 desktop / NB-0 mobile) */}
        <div className="flex flex-col justify-between gap-6 border-t border-line pt-6 md:flex-row md:items-end md:border-t-0 md:pt-6 md:pb-12">
          <p className="font-sans text-[17px] leading-body text-bone md:max-w-[524px] md:text-[20px] md:leading-[30px] md:tracking-[-0.01em]">
            Estúdio independente de engenharia criativa. Projetamos e
            construímos sistemas, produtos com IA e sites —{" "}
            <span className="text-stone md:text-bone">
              da arquitetura ao produto no ar.
            </span>
          </p>

          {/* Desktop / Tablet CTAs */}
          <div className="hidden shrink-0 items-center gap-[12px] md:flex">
            <Button variant="furnace" size="default" onClick={() => openDialog()}>
              <span>Iniciar um projeto</span>
              <span aria-hidden="true">→</span>
            </Button>
            <Button
              variant="outline-line"
              size="default"
              render={<a href="#trabalhos" />}
            >
              Ver trabalhos
            </Button>
          </div>

          {/* Mobile Stacked Full-Width CTAs (Paper NE-0) */}
          <div className="flex flex-col gap-[10px] md:hidden">
            <Button variant="furnace" size="mobile" onClick={() => openDialog()}>
              <span>Iniciar um projeto</span>
              <span aria-hidden="true">→</span>
            </Button>
            <Button
              variant="outline-line"
              size="mobile"
              render={<a href="#trabalhos" />}
            >
              <span>Ver trabalhos</span>
              <span aria-hidden="true" className="text-stone">
                ↓
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Build Log Terminal (Paper NM-0) */}
      <div className="px-[20px] pt-2 pb-[40px] md:px-8 lg:hidden">
        <BuildLogTerminal className="w-full" />
      </div>

      {/* Desktop Architectural Ruler (Paper FH-0) */}
      <div className="hidden border-b border-line md:block">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between px-8 pb-4 lg:px-gutter">
          {DESKTOP_RULER_GROUPS.map((mark, groupIndex) => (
            <div key={mark} className="contents">
              <span className="font-mono text-[10px] leading-[12px] tracking-label text-stone">
                {mark}
              </span>
              <span className="h-[6px] w-px shrink-0 bg-tick" aria-hidden="true" />
              <span className="h-[6px] w-px shrink-0 bg-tick" aria-hidden="true" />
              <span
                className={`h-[12px] w-px shrink-0 ${
                  groupIndex === 2 ? "bg-furnace" : "bg-stone"
                }`}
                aria-hidden="true"
              />
              <span className="h-[6px] w-px shrink-0 bg-tick" aria-hidden="true" />
              <span className="h-[6px] w-px shrink-0 bg-tick" aria-hidden="true" />
            </div>
          ))}
          <a
            href="#sobre"
            className="font-mono text-[10px] leading-[12px] tracking-label text-stone transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-furnace"
          >
            SCROLL ↓
          </a>
        </div>
      </div>

      {/* Mobile Architectural Ruler (Paper O2-0) */}
      <div className="flex flex-col gap-2 px-[20px] pb-4 md:hidden">
        <div
          className="flex h-[14px] items-end justify-between"
          aria-hidden="true"
        >
          <span className="h-[14px] w-px bg-stone" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[10px] w-px bg-stone" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[14px] w-[2px] bg-furnace" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[10px] w-px bg-stone" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[6px] w-px bg-line" />
          <span className="h-[14px] w-px bg-stone" />
        </div>
        <div className="flex justify-between font-mono text-[10px] leading-[12px] tracking-label text-stone">
          <span>000</span>
          <span>500</span>
          <a href="#sobre" className="hover:text-bone">
            SCROLL ↓
          </a>
          <span>1000</span>
        </div>
      </div>

      {/* Marquee Band (Paper GP-0 desktop / OM-0 mobile) */}
      <div
        aria-label="Especialidades da Olven Studio"
        className="overflow-hidden border-y border-line py-[18px] md:border-t-0 md:py-[28px]"
      >
        <div className="animate-olven-marquee items-center">
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              aria-hidden={dupIndex === 1}
              className="flex shrink-0 items-center gap-4 pr-4 md:gap-[40px] md:pr-[40px]"
            >
              {MARQUEE_ITEMS.map((item) => (
                <div
                  key={`${dupIndex}-${item.label}`}
                  className="flex shrink-0 items-center gap-4 md:gap-[40px]"
                >
                  <span
                    className={`font-display text-[28px] leading-[32px] font-medium whitespace-pre md:text-[44px] md:leading-12 md:tracking-[-0.03em] ${
                      item.accent ? "text-stone" : "text-bone"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.accent ? (
                    <span
                      aria-hidden="true"
                      className="size-[10px] shrink-0 bg-furnace md:size-[14px]"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="size-[10px] shrink-0 border border-stone md:size-[14px] md:border-[3px] md:border-bone"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
