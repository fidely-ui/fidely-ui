import * as React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

export function createIcon(path: React.ReactNode) {
  return React.forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
    const { size = 20, ...rest } = props
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {path}
      </svg>
    )
  })
}
