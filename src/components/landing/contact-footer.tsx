"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { NAV_ITEMS, SOCIAL_LINKS, STUDIO_EMAIL } from "@/data/studio"
import { OlvenSymbol } from "./olven-symbol"
import { useProjectDialog } from "./project-dialog"

export function ContactAndFooter() {
  const { openDialog } = useProjectDialog()

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_EMAIL)
      toast("E-mail copiado", {
        description: `${STUDIO_EMAIL} copiado para a área de transferência.`,
      })
    } catch {
      // Fallback handled by mailto href
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* [ 05 — Contato ] Full-bleed Furnace Band (Paper L5-0 desktop / SK-0 mobile) */}
      <section id="contato" className="w-full bg-furnace text-ink">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[56px] px-[20px] pt-[56px] pb-8 md:px-8 lg:gap-[120px] lg:px-gutter lg:pt-[96px] lg:pb-gutter">
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-ink lg:text-label lg:leading-label">
            [ 05 — Contato ]
          </div>

          <h2 className="font-display text-h2 leading-[58px] font-bold tracking-[-0.05em] text-ink md:text-[clamp(76px,11.6vw,168px)] md:leading-[0.893]">
            Tem uma ideia?
            <br />
            Vamos construir.
          </h2>

          <div className="flex flex-col gap-[20px] border-t border-ink pt-6 md:flex-row md:items-end md:justify-between lg:pt-8">
            <a
              href={`mailto:${STUDIO_EMAIL}`}
              onClick={handleEmailClick}
              className="group inline-flex items-baseline gap-2 font-display text-[26px] leading-[30px] font-medium tracking-[-0.03em] text-ink transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:text-[40px] lg:leading-[40px]"
            >
              <span>{STUDIO_EMAIL}</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="ink"
                size="contact"
                onClick={() => openDialog()}
              >
                <span>Agendar conversa</span>
                <span aria-hidden="true" className="text-furnace">
                  →
                </span>
              </Button>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <Button
                variant="ink"
                size="mobile"
                onClick={() => openDialog()}
              >
                <span>Agendar conversa</span>
                <span aria-hidden="true" className="text-furnace">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer + Monumental Wordmark (Paper LH-0 desktop / SW-0 mobile) */}
      <footer className="w-full overflow-hidden bg-ink text-bone">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-[20px] pt-12 md:px-8 lg:gap-gutter lg:px-gutter lg:pt-gutter">
          {/* Desktop 4-Column Row (Paper LI-0) */}
          <div className="hidden md:flex">
            <div className="flex items-start gap-[12px] md:w-[32%] lg:w-[394px] lg:shrink-0">
              <OlvenSymbol size={20} />
              <span className="font-mono text-label leading-[20px] tracking-label uppercase text-bone">
                Create. Refine. Build.
              </span>
            </div>

            <nav
              aria-label="Links do rodapé"
              className="flex flex-col md:w-[20%] lg:w-[262px] lg:shrink-0"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="font-mono text-label leading-[20px] tracking-label uppercase text-stone transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col md:w-[20%] lg:w-[262px] lg:shrink-0">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-label leading-[20px] tracking-label uppercase text-stone transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="flex flex-1 flex-col items-end">
              <span className="font-mono text-label leading-[20px] tracking-label uppercase text-stone">
                © 2026 Olven
              </span>
              <span className="font-mono text-label leading-[20px] tracking-label uppercase text-stone">
                São Paulo, BR
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="cursor-pointer font-mono text-label leading-[20px] tracking-label uppercase text-bone transition-colors hover:text-furnace focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace"
              >
                Voltar ao topo ↑
              </button>
            </div>
          </div>

          {/* Mobile Stacked Footer (Paper SW-0) */}
          <div className="flex flex-col gap-[40px] md:hidden">
            <div className="flex items-start gap-[12px]">
              <OlvenSymbol size={20} />
              <span className="font-mono text-[11px] leading-[20px] tracking-label uppercase text-bone">
                Create. Refine. Build.
              </span>
            </div>

            <div className="grid grid-cols-2">
              <nav aria-label="Links do rodapé" className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="font-mono text-[11px] leading-[22px] tracking-label uppercase text-stone hover:text-bone"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] leading-[22px] tracking-label uppercase text-stone hover:text-bone"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-line pt-4">
              <span className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone">
                © 2026 Olven — SP, BR
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="cursor-pointer font-mono text-[11px] leading-[16px] tracking-label uppercase text-bone hover:text-furnace"
              >
                Topo ↑
              </button>
            </div>
          </div>

          {/* Monumental Edge-to-Edge Clipped Wordmark (Paper M1-0 / TF-0) */}
          <div
            aria-hidden="true"
            className="h-[clamp(86px,22.2vw,320px)] overflow-hidden select-none"
          >
            <div className="font-display text-[clamp(112px,33.6vw,484px)] leading-[0.826] font-bold tracking-[-0.06em] whitespace-nowrap text-bone">
              OLVEN
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
