'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { inputAddon } from '@snaps-ui/styled-system/recipes'

import { ComponentProps } from '@snaps-ui/styled-system/types'

const StyledInputAddon = styled(ark.div, inputAddon)

export type InputAddonProps = ComponentProps<typeof StyledInputAddon>

export const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>(
  function InputAddon(props, ref) {
    return (
      <StyledInputAddon ref={ref} {...props}>
        {props.children}
      </StyledInputAddon>
    )
  }
)

InputAddon.displayName = 'InputAddon'
