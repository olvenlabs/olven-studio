"use client"

import * as React from "react"
import {
  Field as UiField,
  FieldDescription as UiFieldDescription,
  FieldError as UiFieldError,
  FieldLabel as UiFieldLabel,
} from "@ui-sdk/react/field"
import { Input as UiInput } from "@ui-sdk/react/input"
import { Textarea as UiTextarea } from "@ui-sdk/react/textarea"
import { cn } from "@/lib/utils"

function Field({
  className,
  ...props
}: React.ComponentProps<typeof UiField>) {
  return (
    <UiField className={cn("flex flex-col gap-2", className)} {...props} />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldLabel>) {
  return (
    <UiFieldLabel
      className={cn(
        "font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldDescription>) {
  return (
    <UiFieldDescription
      className={cn("font-sans text-[13px] leading-5 text-stone-dim", className)}
      {...props}
    />
  )
}

function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof UiFieldError>) {
  return (
    <UiFieldError
      className={cn("font-mono text-[11px] leading-4 text-furnace", className)}
      {...props}
    />
  )
}

function Input({
  className,
  ...props
}: React.ComponentProps<typeof UiInput>) {
  return (
    <UiInput
      className={cn(
        "w-full rounded-none border border-line bg-ink-deep px-3.5 py-3 font-sans text-[15px] leading-6 text-bone placeholder:text-stone-dim transition-colors focus-visible:border-bone focus-visible:outline-none data-invalid:border-furnace",
        className
      )}
      {...props}
    />
  )
}

function Textarea({
  className,
  ...props
}: React.ComponentProps<typeof UiTextarea>) {
  return (
    <UiTextarea
      className={cn(
        "min-h-[112px] w-full resize-none rounded-none border border-line bg-ink-deep px-3.5 py-3 font-sans text-[15px] leading-6 text-bone placeholder:text-stone-dim transition-colors focus-visible:border-bone focus-visible:outline-none data-invalid:border-furnace",
        className
      )}
      {...props}
    />
  )
}

export { Field, FieldDescription, FieldError, FieldLabel, Input, Textarea }
