'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from '@snaps-ui/styled-system/types'
import { paper } from '@snaps-ui/styled-system/recipes'
import { styled } from '@snaps-ui/styled-system/jsx'

const StyledPaper = styled(ark.div, paper)

type PaperBaseProps = ComponentProps<typeof StyledPaper>

export interface PaperProps extends PaperBaseProps {}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  function Paper(props, ref) {
    const { children, ...rest } = props

    return (
      <StyledPaper ref={ref} {...rest}>
        {children}
      </StyledPaper>
    )
  }
)

Paper.displayName = 'Paper'
