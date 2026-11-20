"use client"

import * as React from "react"
import {
  Drawer as UiDrawer,
  DrawerBackdrop as UiDrawerBackdrop,
  DrawerClose as UiDrawerClose,
  DrawerContent as UiDrawerContent,
  DrawerDescription as UiDrawerDescription,
  DrawerTitle as UiDrawerTitle,
  DrawerTrigger as UiDrawerTrigger,
} from "@ui-sdk/react/drawer"
import { cn } from "@/lib/utils"

const Drawer = UiDrawer
const DrawerTrigger = UiDrawerTrigger
const DrawerClose = UiDrawerClose
const DrawerTitle = UiDrawerTitle
const DrawerDescription = UiDrawerDescription

function DrawerBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawerBackdrop>) {
  return (
    <UiDrawerBackdrop
      className={cn("bg-ink/85 backdrop-blur-[2px]", className)}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawerContent>) {
  return (
    <UiDrawerContent
      className={cn(
        "flex h-dvh w-full flex-col overflow-y-auto rounded-none bg-ink text-bone outline-none",
        className
      )}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
}
