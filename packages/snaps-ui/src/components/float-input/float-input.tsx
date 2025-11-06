'use client'

import * as React from 'react'
import { cx } from '@snaps-ui/styled-system/css'
import { floatLabelRecipe } from '@snaps-ui/styled-system/recipes'

import { Box } from '../box/index'
import { Field } from '../field/index'
import { Input, type InputProps } from '../input/index'

export interface FloatInputProps
  extends Omit<InputProps, 'label' | 'placeholder'> {
  label: React.ReactNode
  value?: string | undefined
}

export const FloatInput = React.forwardRef<HTMLInputElement, FloatInputProps>(
  function FloatInput(props, ref) {
    const { label, value, onBlur, onFocus, className, ...rest } = props
    const [focused, setFocused] = React.useState(false)

    const isFloating = focused || Boolean(value && value.length > 0)
    const inputSize = rest.size ?? 'md'

    return (
      <Box position="relative" width="100%">
        <Input
          ref={ref}
          value={value}
          onFocus={(e) => {
            setFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            onBlur?.(e)
          }}
          {...rest}
        />
        <Field.Label
          className={cx(
            floatLabelRecipe({ float: isFloating, size: inputSize }),
            className
          )}
        >
          {label}
        </Field.Label>
      </Box>
    )
  }
)

FloatInput.displayName = 'FloatInput'
