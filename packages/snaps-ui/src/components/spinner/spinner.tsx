'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { spinner } from '@snaps-ui/styled-system/recipes'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

const StyledSpinner = styled(ark.div, spinner)

export type SpinnerPropsProps = ComponentProps<typeof StyledSpinner>

export interface SpinnerProps extends SpinnerPropsProps {}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  function Spinner(props, ref) {
    return <StyledSpinner ref={ref} {...props} />
  }
)

Spinner.displayName = 'Spinner'
