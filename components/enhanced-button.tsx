import Link from "next/link"
import type { ReactNode } from "react"

interface EnhancedButtonProps {
  href: string
  variant?: "primary" | "secondary" | "outline" | "text"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  className?: string
}

export function EnhancedButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: EnhancedButtonProps) {
  const baseStyles =
    "inline-block font-medium transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 hover:shadow-lg"

  const variantStyles = {
    primary: "bg-black text-white hover:bg-opacity-80 hover:shadow-lg",
    secondary: "bg-[#205375] text-white hover:bg-opacity-90 hover:shadow-lg",
    outline: "border border-black text-black hover:bg-black hover:text-white hover:shadow-lg",
    text: "text-[#205375] hover:text-[#3d6e70] underline-offset-4 hover:underline",
  }

  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm rounded-sm",
    md: "px-5 py-2 text-base rounded-sm",
    lg: "px-6 py-3 text-lg rounded-sm",
  }

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </Link>
  )
}
