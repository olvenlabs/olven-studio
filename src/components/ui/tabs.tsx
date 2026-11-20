"use client"

import * as React from "react"
import {
  Tabs as UiTabs,
  TabsIndicator as UiTabsIndicator,
  TabsList as UiTabsList,
  TabsPanel as UiTabsPanel,
  TabsTab as UiTabsTab,
} from "@ui-sdk/react/tabs"
import { cn } from "@/lib/utils"

const Tabs = UiTabs
const TabsIndicator = UiTabsIndicator

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof UiTabsList>) {
  return (
    <UiTabsList
      className={cn("relative flex items-center gap-5 md:gap-6", className)}
      {...props}
    />
  )
}

function TabsTab({
  className,
  ...props
}: React.ComponentProps<typeof UiTabsTab>) {
  return (
    <UiTabsTab
      className={cn(
        "cursor-pointer font-mono text-[11px] leading-[16px] tracking-label uppercase text-stone transition-colors duration-150 hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-furnace data-selected:text-bone data-selected:underline data-selected:decoration-1 data-selected:underline-offset-4 md:text-label md:leading-label md:data-selected:no-underline",
        className
      )}
      {...props}
    />
  )
}

function TabsPanel({
  className,
  ...props
}: React.ComponentProps<typeof UiTabsPanel>) {
  return (
    <UiTabsPanel
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab }
