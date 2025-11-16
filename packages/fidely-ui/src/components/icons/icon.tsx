'use client'

import * as React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

export const createIcon = (name: string, path: React.ReactNode) => {
  const Component = ({ size = 20, ...props }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label={name}
      {...props}
    >
      {path}
    </svg>
  )
  Component.displayName = name
  return Component
}
