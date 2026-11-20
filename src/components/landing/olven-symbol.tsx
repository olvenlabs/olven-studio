import { cn } from "@/lib/utils"

interface OlvenSymbolProps {
  size?: number
  className?: string
}

export function OlvenSymbol({ size = 24, className }: OlvenSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("inline-block shrink-0", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H48V48H0V0ZM10 10V38H38V10H10Z"
        fill="#F4F1EB"
      />
      <rect x="17" y="17" width="14" height="14" fill="#FE5B0D" />
    </svg>
  )
}
