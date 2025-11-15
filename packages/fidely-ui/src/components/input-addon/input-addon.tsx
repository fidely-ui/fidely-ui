'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { inputAddon } from '@fidely-ui/styled-system/recipes'

import { ComponentProps } from '@fidely-ui/styled-system/types'

const StyledInputAddon = styled(ark.div, inputAddon)

type InputAddonPropsBaseProps = ComponentProps<typeof StyledInputAddon>

export interface InputAddonProps extends InputAddonPropsBaseProps {}

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
