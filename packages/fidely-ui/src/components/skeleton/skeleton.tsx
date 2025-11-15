'use client'

import { ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { styled } from '@fidely-ui/styled-system/jsx'
import { skeleton } from '@fidely-ui/styled-system/recipes'
import type { HTMLStyledProps } from '@fidely-ui/styled-system/types'

const StyledSkeleton = styled(ark.div, skeleton)

export interface SkeletonProps extends HTMLStyledProps<'div'> {}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    return <StyledSkeleton ref={ref} {...props} />
  }
)

Skeleton.displayName = 'Skeleton'
