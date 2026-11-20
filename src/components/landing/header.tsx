"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { toast } from "@/components/ui/toast"
import {
  NAV_ITEMS,
  SOCIAL_LINKS,
  STUDIO_DOMAIN,
  STUDIO_EMAIL,
} from "@/data/studio"
import { LiveClock } from "./live-clock"
import { OlvenSymbol } from "./olven-symbol"
import { useProjectDialog } from "./project-dialog"

export function Header() {
  const { openDialog } = useProjectDialog()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("sobre")

  React.useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-25% 0px -60% 0px" }
    )

    for (const section of sections) {
      observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_EMAIL)
      toast("E-mail copiado", {
        description: `${STUDIO_EMAIL} pronto para colar.`,
      })
    } catch {
      window.location.href = `mailto:${STUDIO_EMAIL}`
    }
  }

  return (
    <header id="top" className="w-full bg-ink">
      {/* Desktop Meta Bar (Paper D8-0) */}
      <div className="hidden border-b border-line md:block">
        <div className="mx-auto grid max-w-[1440px] grid-cols-5 items-center px-8 py-[20px] lg:px-gutter">
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone">
            Olven© Studio
            <br />
            Engenharia criativa
          </div>
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone">
            Serviços
            <br />
            Sistemas · IA · Sites
          </div>
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone">
            {STUDIO_DOMAIN}
            <br />
            São Paulo, BR
          </div>
          <div className="font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone">
            Horário local
            <br />
            <LiveClock variant="desktop" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copiar e-mail"
              className="cursor-pointer text-right font-mono text-[11px] leading-[16px] tracking-label uppercase text-bone transition-colors hover:text-furnace focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-furnace"
            >
              Contato
              <br />
              {STUDIO_EMAIL}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Meta Bar (Paper ME-0) */}
      <div className="flex items-center justify-between border-b border-line px-[20px] py-[10px] md:hidden">
        <div className="flex items-center gap-[12px]">
          <span className="font-mono text-[10px] leading-[14px] tracking-label uppercase text-bone">
            Olven© Studio
          </span>
          <span className="font-mono text-[10px] leading-[14px] tracking-label uppercase text-stone">
            <LiveClock variant="mobile" />
          </span>
        </div>
        <span className="font-mono text-[10px] leading-[14px] tracking-label uppercase text-bone">
          {STUDIO_DOMAIN}
        </span>
      </div>

      {/* Main Navigation Bar (Paper DH-0 desktop / ML-0 mobile) */}
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-[1440px] items-center justify-between px-[20px] py-4 md:px-8 md:py-6 lg:px-gutter"
      >
        {/* Brand Lockup */}
        <a
          href="#top"
          className="group flex items-center gap-[10px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-furnace md:gap-[12px]"
        >
          <OlvenSymbol size={24} className="size-[22px] md:size-[24px]" />
          <span className="font-display text-[18px] leading-[22px] font-bold tracking-tight text-bone md:text-[20px] md:leading-6">
            OLVEN
          </span>
          <span className="font-mono text-[10px] leading-[12px] tracking-label text-stone md:pl-1 md:text-[11px] md:leading-[16px]">
            / STUDIO
          </span>
        </a>

        {/* Desktop Links + CTA */}
        <div className="hidden items-center gap-7 lg:flex lg:gap-[40px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group font-mono text-label leading-label tracking-label uppercase text-bone transition-colors hover:text-furnace focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-furnace"
            >
              <span className="text-stone transition-colors group-hover:text-furnace">
                {item.number}
              </span>{" "}
              {item.label}
            </a>
          ))}

          <Button
            variant="outline-bone"
            size="nav"
            onClick={() => openDialog()}
          >
            <span>Iniciar projeto</span>
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        {/* Tablet/Mobile Menu Drawer built with @ui-sdk/react/drawer (Paper TH-0) */}
        <div className="lg:hidden">
          <Drawer
            side="top"
            open={menuOpen}
            onOpenChange={setMenuOpen}
            dismissible
          >
            <DrawerTrigger
              aria-label="Abrir menu"
              className="flex cursor-pointer items-center gap-[10px] border border-line px-[12px] py-[9px] transition-colors hover:border-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace"
            >
              <span className="font-mono text-[11px] leading-[14px] tracking-label uppercase text-bone">
                Menu
              </span>
              <span className="flex flex-col gap-1" aria-hidden="true">
                <span className="h-[1.5px] w-[14px] bg-bone" />
                <span className="h-[1.5px] w-[14px] bg-bone" />
              </span>
            </DrawerTrigger>

            <DrawerBackdrop />
            <DrawerContent>
              <DrawerTitle className="sr-only">
                Menu de navegação Olven Studio
              </DrawerTitle>
              <DrawerDescription className="sr-only">
                Navegue pelas seções do Olven Studio ou inicie um novo projeto.
              </DrawerDescription>

              {/* Drawer Meta Bar (Paper TS-0) */}
              <div className="flex items-center justify-between border-b border-line px-[20px] py-[10px]">
                <div className="flex items-center gap-[12px]">
                  <span className="font-mono text-[10px] leading-[14px] tracking-label uppercase text-bone">
                    Olven© Studio
                  </span>
                  <span className="font-mono text-[10px] leading-[14px] tracking-label uppercase text-stone">
                    <LiveClock variant="mobile" />
                  </span>
                </div>
                <span className="font-mono text-[10px] leading-[14px] tracking-label uppercase text-bone">
                  {STUDIO_DOMAIN}
                </span>
              </div>

              {/* Drawer Header (Paper TZ-0) */}
              <div className="flex items-center justify-between px-[20px] py-4">
                <div className="flex items-center gap-[10px]">
                  <OlvenSymbol size={22} />
                  <span className="font-display text-[18px] leading-[22px] font-bold tracking-tight text-bone">
                    OLVEN
                  </span>
                  <span className="font-mono text-[10px] leading-[12px] tracking-label text-stone">
                    / STUDIO
                  </span>
                </div>

                <DrawerClose
                  aria-label="Fechar menu"
                  className="flex cursor-pointer items-center gap-[10px] bg-bone px-[12px] py-[9px] font-mono text-[11px] leading-[14px] tracking-label uppercase text-ink transition-colors hover:bg-bone/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace"
                >
                  <span>Fechar</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 1L11 11M11 1L1 11"
                      stroke="#171717"
                      strokeWidth="1.5"
                    />
                  </svg>
                </DrawerClose>
              </div>

              {/* Drawer Index Links (Paper UB-0) */}
              <div className="flex flex-1 flex-col px-[20px] pt-[28px]">
                <div className="pb-4 font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone">
                  [ Index ]
                </div>

                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.id
                  const isLast = idx === NAV_ITEMS.length - 1
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.id)
                        setMenuOpen(false)
                      }}
                      className={`group flex items-center border-t border-line py-4 ${
                        isLast ? "border-b" : ""
                      }`}
                    >
                      <span
                        className={`w-[44px] shrink-0 font-mono text-[11px] leading-[14px] tracking-label ${
                          isActive
                            ? "text-furnace"
                            : "text-stone group-hover:text-furnace"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="flex-1 font-display text-[48px] leading-12 font-bold tracking-[-0.045em] text-bone transition-colors group-hover:text-furnace">
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`size-[10px] shrink-0 transition-colors ${
                          isActive
                            ? "bg-furnace"
                            : "border border-line group-hover:border-furnace"
                        }`}
                      />
                    </a>
                  )
                })}
              </div>

              {/* Drawer Footer (Paper UV-0) */}
              <div className="flex flex-col gap-[20px] px-[20px] pt-6 pb-8">
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] leading-[20px] tracking-label uppercase text-stone-dim">
                      Contato
                    </span>
                    <a
                      href={`mailto:${STUDIO_EMAIL}`}
                      className="font-mono text-[11px] leading-[20px] tracking-label uppercase text-bone hover:text-furnace"
                    >
                      {STUDIO_EMAIL}
                    </a>
                    <span className="font-mono text-[11px] leading-[20px] tracking-label uppercase text-stone">
                      São Paulo, BR
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] leading-[20px] tracking-label uppercase text-stone-dim">
                      Social
                    </span>
                    {SOCIAL_LINKS.slice(0, 2).map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[11px] leading-[20px] tracking-label uppercase text-stone hover:text-bone"
                      >
                        {social.label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                <Button
                  variant="furnace"
                  size="mobile"
                  onClick={() => {
                    setMenuOpen(false)
                    openDialog()
                  }}
                >
                  <span>Iniciar um projeto</span>
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}
