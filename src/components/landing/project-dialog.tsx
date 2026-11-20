"use client"

import * as React from "react"
import { Toggle } from "@ui-sdk/react/toggle"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldLabel,
  Input,
  Textarea,
} from "@/components/ui/field"
import { toast } from "@/components/ui/toast"
import { SERVICES, STUDIO_EMAIL } from "@/data/studio"

interface ProjectDialogContextValue {
  openDialog: (preselectedServiceId?: string) => void
}

const ProjectDialogContext =
  React.createContext<ProjectDialogContextValue | null>(null)

export function useProjectDialog() {
  const ctx = React.useContext(ProjectDialogContext)
  if (!ctx) {
    throw new Error(
      "useProjectDialog must be used inside ProjectDialogProvider"
    )
  }
  return ctx
}

export function ProjectDialogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const [selectedServices, setSelectedServices] = React.useState<string[]>([
    "sistemas",
  ])
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [brief, setBrief] = React.useState("")
  const [submitting, setSubmitting] = React.useState(false)

  const openDialog = React.useCallback((preselectedServiceId?: string) => {
    if (preselectedServiceId) {
      setSelectedServices([preselectedServiceId])
    }
    setOpen(true)
  }, [])

  const toggleService = (id: string, pressed: boolean) => {
    setSelectedServices((prev) =>
      pressed ? Array.from(new Set([...prev, id])) : prev.filter((s) => s !== id)
    )
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_EMAIL)
      toast("E-mail copiado", {
        description: `${STUDIO_EMAIL} copiado para a área de transferência.`,
      })
    } catch {
      window.location.href = `mailto:${STUDIO_EMAIL}`
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !brief.trim()) return

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitting(false)

    const chosenLabels = SERVICES.filter((s) =>
      selectedServices.includes(s.id)
    ).map((s) => s.title)

    const subject = encodeURIComponent(
      `[Olven Studio] Novo projeto — ${name.trim()}`
    )
    const body = encodeURIComponent(
      [
        `Nome: ${name.trim()}`,
        `E-mail: ${email.trim()}`,
        `Frentes: ${chosenLabels.length > 0 ? chosenLabels.join(", ") : "A definir"}`,
        "",
        "Sobre o projeto:",
        brief.trim(),
      ].join("\n")
    )

    setOpen(false)
    setName("")
    setEmail("")
    setBrief("")

    toast("Briefing pronto para envio", {
      description: `Abrindo seu cliente de e-mail para ${STUDIO_EMAIL}.`,
    })

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <ProjectDialogContext.Provider value={{ openDialog }}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogBackdrop />
        <DialogContent aria-label="Iniciar um projeto com a Olven Studio">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="size-2 bg-furnace" />
              <span className="font-mono text-[11px] leading-4 tracking-label uppercase text-stone">
                [ Iniciar projeto ]
              </span>
            </div>
            <DialogClose
              aria-label="Fechar"
              className="flex cursor-pointer items-center gap-2.5 bg-bone px-3 py-1.5 font-mono text-[11px] leading-[14px] tracking-label uppercase text-ink transition-colors hover:bg-bone/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace"
            >
              <span>Fechar</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                aria-hidden="true"
              >
                <path
                  d="M1 1L11 11M11 1L1 11"
                  stroke="#171717"
                  strokeWidth="1.5"
                />
              </svg>
            </DialogClose>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-2">
              <DialogTitle>Vamos construir.</DialogTitle>
              <DialogDescription>
                Conte o contexto em poucas linhas. Trabalhamos direto com quem
                lidera o projeto — sem camada comercial.
              </DialogDescription>
            </div>

            {/* Service scope toggles built with @ui-sdk/react/toggle */}
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] leading-4 tracking-label uppercase text-stone">
                Frente do projeto
              </span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SERVICES.map((service) => (
                  <Toggle
                    key={service.id}
                    pressed={selectedServices.includes(service.id)}
                    onPressedChange={(pressed) =>
                      toggleService(service.id, pressed)
                    }
                    className="flex cursor-pointer items-center justify-between border border-line bg-ink-deep px-3.5 py-2.5 text-left font-mono text-[11px] leading-4 tracking-label uppercase text-stone transition-colors hover:border-stone hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace data-pressed:border-furnace data-pressed:bg-ink-hover data-pressed:text-bone"
                  >
                    <span>{service.title}</span>
                    <span
                      aria-hidden="true"
                      className="size-2 shrink-0 border border-line in-data-pressed:border-furnace in-data-pressed:bg-furnace"
                    />
                  </Toggle>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field name="name">
                <FieldLabel>Nome</FieldLabel>
                <Input
                  required
                  placeholder="Seu nome"
                  value={name}
                  onValueChange={setName}
                />
                <FieldError />
              </Field>

              <Field name="email">
                <FieldLabel>E-mail</FieldLabel>
                <Input
                  type="email"
                  required
                  placeholder="voce@empresa.com"
                  value={email}
                  onValueChange={setEmail}
                />
                <FieldError />
              </Field>
            </div>

            <Field name="brief">
              <FieldLabel>O que vamos construir</FieldLabel>
              <Textarea
                required
                placeholder="Contexto, objetivo principal e prazo desejado..."
                value={brief}
                onValueChange={setBrief}
              />
              <FieldError />
            </Field>

            <div className="flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="cursor-pointer text-left font-mono text-[11px] leading-4 tracking-label uppercase text-stone transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-furnace"
              >
                Ou envie direto: <span className="text-bone">{STUDIO_EMAIL}</span>
              </button>

              <Button
                type="submit"
                variant="furnace"
                size="default"
                disabled={submitting}
              >
                <span>{submitting ? "Preparando..." : "Enviar briefing"}</span>
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </ProjectDialogContext.Provider>
  )
}
