"use client"

import { useEffect, useState } from "react"

function formatSaoPauloTime(withSeconds: boolean): string {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    ...(withSeconds ? { second: "2-digit" } : {}),
    hour12: false,
  })
  return `${formatter.format(new Date())} BRT`
}

export function LiveClock({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile"
}) {
  const withSeconds = variant === "desktop"
  const [time, setTime] = useState<string>(
    withSeconds ? "21:07:48 BRT" : "21:07 BRT"
  )

  useEffect(() => {
    const update = () => setTime(formatSaoPauloTime(withSeconds))
    update()
    const interval = window.setInterval(update, withSeconds ? 1000 : 15000)
    return () => window.clearInterval(interval)
  }, [withSeconds])

  if (variant === "mobile") {
    return <span suppressHydrationWarning>SP — {time}</span>
  }

  return <span suppressHydrationWarning>{time}</span>
}
