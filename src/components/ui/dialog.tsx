"use client"

import * as React from "react"
import {
  Dialog as UiDialog,
  DialogBackdrop as UiDialogBackdrop,
  DialogClose as UiDialogClose,
  DialogContent as UiDialogContent,
  DialogDescription as UiDialogDescription,
  DialogTitle as UiDialogTitle,
  DialogTrigger as UiDialogTrigger,
  createDialogController,
} from "@ui-sdk/react/dialog"
import { cn } from "@/lib/utils"

const Dialog = UiDialog
const DialogTrigger = UiDialogTrigger
const DialogClose = UiDialogClose

function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogBackdrop>) {
  return (
    <UiDialogBackdrop
      className={cn(
        "fixed inset-0 bg-ink/80 backdrop-blur-[2px] transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogContent>) {
  return (
    <UiDialogContent
      className={cn(
        "fixed inset-0 m-auto h-fit max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-[580px] overflow-y-auto rounded-none border border-line bg-ink text-bone shadow-2xl transition-[opacity,transform] duration-200 data-starting-style:translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogTitle>) {
  return (
    <UiDialogTitle
      className={cn(
        "font-display text-[32px] leading-[34px] font-bold tracking-[-0.04em] text-bone",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiDialogDescription>) {
  return (
    <UiDialogDescription
      className={cn("font-sans text-[15px] leading-6 text-stone", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  createDialogController,
}
