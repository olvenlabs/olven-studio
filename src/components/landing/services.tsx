"use client"

import * as React from "react"
import { SERVICES } from "@/data/studio"
import { useProjectDialog } from "./project-dialog"

export function Services() {
  const { openDialog } = useProjectDialog()
  const [activeId, setActiveId] = React.useState<string>(SERVICES[0].id)

  return (
    <section id="servicos" className="w-full border-b border-line bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] py-[88px] lg:gap-[72px] lg:px-gutter lg:py-section">
        {/* Header (Paper HD-0 desktop / P3-0 mobile) */}
        <div className="flex flex-col gap-[20px] px-[20px] md:px-8 lg:flex-row lg:items-end lg:gap-0 lg:px-0">
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone lg:w-[394px] lg:shrink-0 lg:text-label lg:leading-label">
            [ 02 — Serviços ]
          </div>

          <h2 className="font-display text-[52px] leading-[50px] font-bold tracking-[-0.045em] text-bone lg:flex-1 lg:text-[clamp(64px,6.1vw,88px)] lg:leading-[0.955]">
            O que
            <br className="hidden lg:inline" />
            <span className="lg:hidden"> </span>construímos.
          </h2>

          <p className="font-sans text-[15px] leading-6 text-stone lg:w-[300px] lg:shrink-0">
            Quatro frentes, um mesmo método. Do sistema que roda a operação ao
            site que vende.
          </p>
        </div>

        {/* Service Rows (Paper HH-0 desktop / P7-0 mobile) */}
        <div className="flex flex-col border-t border-line">
          {SERVICES.map((service) => {
            const isActive = activeId === service.id
            return (
              <button
                key={service.id}
                type="button"
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                onClick={() => openDialog(service.id)}
                className={`group flex w-full cursor-pointer flex-col gap-[12px] border-b border-line px-[20px] py-[28px] text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-furnace md:px-8 lg:flex-row lg:items-start lg:gap-0 lg:px-0 lg:py-[36px] ${
                  isActive ? "bg-ink-hover" : "bg-transparent hover:bg-ink-hover"
                }`}
              >
                {/* Mobile top row: code + arrow */}
                <div className="flex items-center justify-between lg:hidden">
                  <span
                    className={`font-mono text-[11px] leading-[16px] tracking-label transition-colors ${
                      isActive ? "text-furnace" : "text-stone"
                    }`}
                  >
                    {service.code}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[15px] leading-[16px] tracking-label text-bone transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </div>

                {/* Desktop code column */}
                <span
                  className={`hidden font-mono text-label leading-[40px] tracking-label transition-colors lg:block lg:w-[394px] lg:shrink-0 lg:pl-4 ${
                    isActive
                      ? "text-furnace"
                      : "text-stone group-hover:text-furnace"
                  }`}
                >
                  {service.code}
                </span>

                {/* Title */}
                <span className="font-display text-[30px] leading-[32px] font-medium tracking-[-0.03em] text-bone lg:w-[400px] lg:shrink-0 lg:text-[40px] lg:leading-[40px] xl:w-[440px]">
                  {service.title}
                </span>

                {/* Description */}
                <span className="font-sans text-[15px] leading-6 text-stone lg:w-[320px] lg:shrink-0 lg:pt-2 xl:w-[342px]">
                  {service.description}
                </span>

                {/* Desktop Arrow */}
                <span
                  aria-hidden="true"
                  className="hidden flex-1 justify-end pt-2 pr-4 font-mono text-body leading-6 text-bone transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:flex"
                >
                  ↗
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
