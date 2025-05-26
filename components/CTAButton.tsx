// components/CTAButton.tsx

import React from 'react'
import Link from 'next/link'

type CTAButtonProps = {
  label: string
  href: string
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'lg' | 'full'
  external?: boolean
}

const sizeClasses = {
  sm: 'px-4 py-1 text-sm',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const roundedClasses = {
  sm: 'rounded',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export default function CTAButton({
  label,
  href,
  variant = 'solid',
  size = 'md',
  rounded = 'lg',
  external = false
}: CTAButtonProps) {
  const baseClasses =
    'font-medium transition duration-200 inline-block'
  const styleClasses =
    variant === 'solid'
      ? 'bg-white text-black hover:bg-gray-100'
      : 'border border-white text-white hover:bg-white hover:text-black'
  const finalClassName = [
    baseClasses,
    styleClasses,
    sizeClasses[size],
    roundedClasses[rounded]
  ].join(' ')

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={finalClassName}>
      {label}
    </a>
  ) : (
    <Link href={href} className={finalClassName}>
      {label}
    </Link>
  )
}
