'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { inputGroup } from '@fidely-ui/styled-system/recipes'

import { type BoxProps } from '../box/index'
import { InputAddon, type InputAddonProps } from '../input-addon/index'

const StyledInputGroup = styled(ark.div, inputGroup)

export interface InputGroupProps extends Omit<BoxProps, 'direction'> {
  startAddon?: React.ReactNode | undefined
  /**
   * The props to pass to the start addon
   */
  startAddonProps?: InputAddonProps | undefined
  /**
   * The end addon to render the right of the group
   */
  endAddon?: React.ReactNode | undefined
  /**
   * The props to pass to the end addon
   */
  endAddonProps?: InputAddonProps | undefined
  /**
   * The children to render inside the group
   */
  children: React.ReactNode
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const {
      startAddon,
      startAddonProps,
      endAddon,
      endAddonProps,
      children,
      ...rest
    } = props

    return (
      <StyledInputGroup ref={ref} {...rest}>
        {startAddon && (
          <InputAddon {...startAddonProps} placement="left">
            {startAddon}
          </InputAddon>
        )}

        {children}

        {endAddon && (
          <InputAddon {...endAddonProps} placement="right">
            {endAddon}
          </InputAddon>
        )}
      </StyledInputGroup>
    )
  }
)

InputGroup.displayName = 'InputGroup'
