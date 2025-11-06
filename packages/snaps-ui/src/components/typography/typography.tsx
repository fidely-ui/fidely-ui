'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from '@snaps-ui/styled-system/types'
import { styled } from '@snaps-ui/styled-system/jsx'
import { typographyRecipe } from '@snaps-ui/styled-system/recipes'

const defaultElement = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  overline: 'span',
} as const

type VariantName = keyof typeof defaultElement

export interface TypographyOwnProps {
  as?: React.ElementType
  children: React.ReactNode
}

const StyledTypography = styled(ark.div, typographyRecipe)

export type TypographyProps = ComponentProps<typeof StyledTypography> &
  TypographyOwnProps

export const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  function Typography(props, ref) {
    const { variant = 'body1', as, children, ...rest } = props

    const Component = as || defaultElement[variant as VariantName] || 'p'

    return (
      <StyledTypography ref={ref} as={Component} variant={variant} {...rest}>
        {children}
      </StyledTypography>
    )
  }
)

Typography.displayName = 'Typography'
