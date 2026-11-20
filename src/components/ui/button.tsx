"use client"

import * as React from "react"
import { Button as UiButton } from "@ui-sdk/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-3 rounded-none font-mono text-label leading-label tracking-label uppercase transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-furnace disabled:pointer-events-none disabled:opacity-50 data-pending:opacity-80",
  {
    variants: {
      variant: {
        furnace:
          "bg-furnace text-ink font-medium hover:bg-[#ff6d26] active:bg-[#e54f07]",
        ink: "bg-ink text-bone hover:bg-[#242422] active:bg-[#0d0d0d]",
        "outline-bone":
          "border border-bone bg-transparent text-bone hover:bg-bone hover:text-ink",
        "outline-line":
          "border border-line bg-transparent text-bone hover:border-bone hover:bg-ink-hover",
        bone: "bg-bone text-ink hover:bg-bone/90",
        ghost:
          "bg-transparent text-stone hover:text-bone",
      },
      size: {
        default: "px-6 py-[18px]",
        nav: "gap-[10px] px-4 py-[10px]",
        contact: "px-[28px] py-[20px]",
        mobile: "w-full justify-between px-[20px] py-[18px] text-[13px]",
        compact: "gap-[10px] px-[12px] py-[9px] text-[11px] leading-[14px]",
      },
    },
    defaultVariants: {
      variant: "furnace",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<typeof UiButton> &
  VariantProps<typeof buttonVariants>

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <UiButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
