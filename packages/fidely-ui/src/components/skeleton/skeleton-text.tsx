'use client'

import { forwardRef } from 'react'
import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { styled } from '@fidely-ui/styled-system/jsx'
import type {
  HTMLStyledProps,
  JsxStyleProps,
} from '@fidely-ui/styled-system/types'

import { Skeleton } from './skeleton'

export interface SkeletonTextProps extends HTMLStyledProps<'div'> {
  noOfLines?: number
  spacing?: string | number
  skeletonHeight?: string | number
}

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const {
      noOfLines = 3,
      spacing = '0.5rem',
      skeletonHeight = '50px',
      ...rest
    } = props

    const lines = Array.from({ length: noOfLines }).map((_, i) => (
      <Skeleton
        key={i}
        height={skeletonHeight}
        mb={i === noOfLines - 1 ? 0 : spacing}
        {...rest}
      />
    ))

    return (
      <styled.div ref={ref} display="flex" flexDirection="column" {...rest}>
        {lines}
      </styled.div>
    )
  }
)

SkeletonText.displayName = 'SkeletonText'
