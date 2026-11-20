"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastRegion,
  ToastTitle,
  toast,
} from "@ui-sdk/react/toast"

function OlvenToaster() {
  return (
    <ToastRegion
      className="fixed right-5 bottom-5 z-50 flex max-w-[360px] flex-col gap-2 outline-none"
    >
      {() => (
        <Toast className="flex items-start justify-between gap-4 rounded-none border border-line bg-ink-deep px-4 py-3.5 text-bone shadow-xl transition-[opacity,transform] duration-200 data-starting-style:translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1 size-2 shrink-0 bg-furnace"
            />
            <div className="flex flex-col gap-0.5">
              <ToastTitle className="font-mono text-[11px] leading-4 tracking-label uppercase text-bone" />
              <ToastDescription className="font-sans text-[13px] leading-5 text-stone" />
            </div>
          </div>
          <ToastClose
            aria-label="Fechar notificação"
            className="cursor-pointer font-mono text-[11px] leading-4 text-stone transition-colors hover:text-bone"
          >
            ×
          </ToastClose>
        </Toast>
      )}
    </ToastRegion>
  )
}

export { OlvenToaster, toast }
