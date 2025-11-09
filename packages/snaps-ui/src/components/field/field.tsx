'use client'

import * as React from 'react'
import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { Field as ArkField, useFieldContext } from '@ark-ui/react/field'
import { field, type FieldVariantProps } from '@snaps-ui/styled-system/recipes'
import type { HTMLStyledProps } from '@snaps-ui/styled-system/types'
import { cx } from '@snaps-ui/styled-system/css'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(field)

// -------------------- RootProvider --------------------
export interface FieldRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkField.RootProviderBaseProps>,
    FieldVariantProps
  > {}

export const FieldRootProvider = withSlotProvider<
  HTMLDivElement,
  FieldRootProviderProps
>(ArkField.RootProvider, 'root')

// -------------------- Root --------------------
export interface FieldRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkField.RootBaseProps>,
    FieldVariantProps
  > {}

export const FieldRoot = withSlotProvider<HTMLDivElement, FieldRootProps>(
  ArkField.Root,
  'root'
)

// -------------------- Error --------------------
export interface FieldErrorProps
  extends Assign<HTMLStyledProps<'span'>, ArkField.ErrorTextBaseProps> {}

export const FieldError = withSlotContext<HTMLSpanElement, FieldErrorProps>(
  ArkField.ErrorText,
  'errorText'
)

// -------------------- HelperText --------------------
export interface FieldHelperTextProps
  extends Assign<HTMLStyledProps<'span'>, ArkField.HelperTextBaseProps> {}

export const FieldHelperText = withSlotContext<
  HTMLSpanElement,
  FieldHelperTextProps
>(ArkField.HelperText, 'helperText')

// -------------------- Label --------------------
export interface FieldLabelProps
  extends Assign<HTMLStyledProps<'label'>, ArkField.LabelBaseProps> {}

export const FieldLabel = withSlotContext<HTMLLabelElement, FieldLabelProps>(
  ArkField.Label,
  'label'
)

// -------------------- Indicator --------------------
export interface FieldRequiredIndicatorProps extends HTMLArkProps<'span'> {
  fallback?: React.ReactNode | undefined
}

export const FieldRequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  FieldRequiredIndicatorProps
>(function FieldIndicator(props, ref) {
  const { fallback, className, children = '*', ...rest } = props

  const slotStyles = field().requiredIndicator

  const context = useFieldContext()
  if (!context.required) {
    return fallback
  }

  return (
    <ark.span
      ref={ref}
      aria-hidden="true"
      {...rest}
      className={cx('snaps-field__indicator', slotStyles, className)}
    >
      {children}
    </ark.span>
  )
})

export const FieldContext = ArkField.Context
