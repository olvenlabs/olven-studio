"use client"

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"
import { WORK_FILTERS, WORKS, type WorkCategory, type WorkItem } from "@/data/studio"

function ProjectFrame({
  work,
  heightClass,
  className = "",
}: {
  work: WorkItem
  heightClass: string
  className?: string
}) {
  return (
    <article className={`group flex flex-col gap-[12px] lg:gap-4 ${className}`}>
      <div
        className={`relative flex shrink-0 items-center justify-center border border-line bg-ink-surface transition-colors duration-200 group-hover:border-stone ${heightClass}`}
      >
        <span className="font-mono text-[10px] leading-[12px] tracking-label uppercase text-stone-dim md:text-[11px] md:leading-[16px]">
          {work.ratioLabel}
        </span>

        {work.cropMarks && (
          <>
            <span
              aria-hidden="true"
              className="absolute top-[12px] left-[12px] size-[10px] border-t border-l border-stone transition-colors group-hover:border-furnace lg:top-4 lg:left-4 lg:size-[12px]"
            />
            <span
              aria-hidden="true"
              className="absolute top-[12px] right-[12px] size-[10px] border-t border-r border-stone transition-colors group-hover:border-furnace lg:top-4 lg:right-4 lg:size-[12px]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-[12px] left-[12px] size-[10px] border-b border-l border-stone transition-colors group-hover:border-furnace lg:bottom-4 lg:left-4 lg:size-[12px]"
            />
            <span
              aria-hidden="true"
              className="absolute right-[12px] bottom-[12px] size-[10px] border-r border-b border-stone transition-colors group-hover:border-furnace lg:right-4 lg:bottom-4 lg:size-[12px]"
            />
          </>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 font-mono text-[11px] leading-[16px] tracking-[0.06em] uppercase text-stone lg:text-label lg:leading-label">
        <div>
          <span className="text-bone">{work.code}</span> — {work.title} ·{" "}
          {work.tag}
        </div>
        <span className="shrink-0">{work.year}</span>
      </div>
    </article>
  )
}

function EditorialNote({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-[20px] pt-2 lg:gap-6 lg:pt-0 lg:pb-8 ${className}`}
    >
      <span
        aria-hidden="true"
        className="size-2 shrink-0 bg-bone lg:size-[10px]"
      />
      <p className="font-sans text-[15px] leading-6 text-stone">
        Cada projeto começa com um problema real — e termina em produto rodando
        em produção, rápido de usar e fácil de evoluir.
      </p>
    </div>
  )
}

export function Works() {
  const [proj1, proj2, proj3] = WORKS

  return (
    <section id="trabalhos" className="w-full border-b border-line bg-ink">
      <div className="mx-auto max-w-[1440px] px-[20px] py-[88px] md:px-8 lg:px-gutter lg:py-section">
        <Tabs defaultValue="todos" className="flex flex-col gap-[40px] lg:gap-[72px]">
          {/* Header + Filter Tabs powered by @ui-sdk/react/tabs (Paper JG-0 / R0-0) */}
          <div className="flex flex-col gap-[20px] lg:flex-row lg:items-end lg:gap-0">
            <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone lg:w-[394px] lg:shrink-0 lg:text-label lg:leading-label">
              [ 04 — Trabalhos ]
            </div>

            <h2 className="font-display text-[52px] leading-[50px] font-bold tracking-[-0.045em] text-bone lg:flex-1 lg:text-[clamp(64px,6.1vw,88px)] lg:leading-[0.955]">
              Feito aqui.
            </h2>

            <TabsList
              aria-label="Filtrar trabalhos por categoria"
              className="pt-1 lg:pt-0"
            >
              {WORK_FILTERS.map((filter) => (
                <TabsTab key={filter.value} value={filter.value}>
                  {filter.label}
                </TabsTab>
              ))}
            </TabsList>
          </div>

          {/* Panel: Todos — exact Paper asymmetric editorial composition */}
          <TabsPanel value="todos" className="flex flex-col gap-[40px] lg:gap-[72px]">
            {/* Row 1: 16:10 featured left + offset 4:3 right */}
            <div className="flex flex-col gap-[40px] lg:flex-row lg:items-start lg:justify-between lg:gap-12">
              <ProjectFrame
                work={proj1}
                heightClass="h-[240px] sm:h-[360px] lg:h-[520px]"
                className="w-full lg:w-[64%] lg:shrink-0"
              />

              <ProjectFrame
                work={proj2}
                heightClass="h-[188px] sm:h-[240px] lg:h-[320px]"
                className="w-[250px] self-end sm:w-[320px] lg:w-[32.3%] lg:shrink-0 lg:self-auto lg:pt-[200px]"
              />
            </div>

            {/* Row 2: Editorial note left + 21:11 wide right (reversed on mobile to match Paper) */}
            <div className="flex flex-col-reverse gap-[40px] lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <EditorialNote className="w-full lg:w-[32.3%] lg:shrink-0" />

              <ProjectFrame
                work={proj3}
                heightClass="h-[200px] sm:h-[320px] lg:h-[440px]"
                className="w-full lg:w-[64%] lg:shrink-0"
              />
            </div>
          </TabsPanel>

          {/* Filtered category panels */}
          {(["sistemas", "ia", "sites"] as Exclude<WorkCategory, "todos">[]).map(
            (category) => {
              const filtered = WORKS.filter((w) => w.category === category)
              return (
                <TabsPanel
                  key={category}
                  value={category}
                  className="flex flex-col gap-[40px] lg:flex-row lg:items-end lg:justify-between lg:gap-12"
                >
                  <div className="flex w-full flex-col gap-[40px] lg:w-[64%] lg:shrink-0">
                    {filtered.map((work) => (
                      <ProjectFrame
                        key={work.id}
                        work={{ ...work, cropMarks: true }}
                        heightClass="h-[240px] sm:h-[360px] lg:h-[480px]"
                      />
                    ))}
                  </div>
                  <EditorialNote className="w-full lg:w-[32.3%] lg:shrink-0" />
                </TabsPanel>
              )
            }
          )}
        </Tabs>
      </div>
    </section>
  )
}
