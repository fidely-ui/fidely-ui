'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { badge } from '@fidely-ui/styled-system/recipes'
import { ComponentProps } from '@fidely-ui/styled-system/types'

const StyledBagde = styled(ark.span, badge)

type BadgeBaseProps = ComponentProps<typeof StyledBagde>

export interface BadgeProps extends BadgeBaseProps {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  function Bagde(props, ref) {
    const { children, ...rest } = props

    return (
      <StyledBagde ref={ref} {...rest}>
        {children}
      </StyledBagde>
    )
  }
)

Badge.displayName = 'Badge'
