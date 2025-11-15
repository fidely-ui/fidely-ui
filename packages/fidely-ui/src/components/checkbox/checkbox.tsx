'use client'

import type { Assign } from '@ark-ui/react'
import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'
import { HTMLStyledProps } from '@fidely-ui/styled-system/jsx'
import {
  checkbox,
  CheckboxVariantProps,
} from '@fidely-ui/styled-system/recipes'
import { FaCheck } from 'react-icons/fa6'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(checkbox)

// -------------------- Root Provider --------------------
export interface CheckboxRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkCheckbox.RootProviderBaseProps>,
    CheckboxVariantProps
  > {}

export const CheckboxRootProvider = withSlotProvider<
  HTMLDivElement,
  CheckboxRootProviderProps
>(ArkCheckbox.RootProvider, 'root')

// -------------------- Root --------------------
export interface CheckboxRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkCheckbox.RootBaseProps>,
    CheckboxVariantProps
  > {}

export const CheckboxRoot = withSlotProvider<HTMLDivElement, CheckboxRootProps>(
  ArkCheckbox.Root,
  'root'
)

// -------------------- Group --------------------
export interface CheckboxGroupProps
  extends Assign<HTMLStyledProps<'div'>, ArkCheckbox.GroupBaseProps> {}

export const CheckboxGroup = withSlotContext<
  HTMLDivElement,
  CheckboxGroupProps
>(ArkCheckbox.Group, 'group')

// -------------------- Control --------------------
export interface CheckboxControlProps
  extends Assign<HTMLStyledProps<'div'>, ArkCheckbox.ControlBaseProps> {}

export const CheckboxControl = withSlotContext<
  HTMLDivElement,
  CheckboxControlProps
>(ArkCheckbox.Control, 'control')

// -------------------- Label --------------------
export interface CheckboxLabelProps
  extends Assign<HTMLStyledProps<'span'>, ArkCheckbox.LabelBaseProps> {}

export const CheckboxLabel = withSlotContext<
  HTMLSpanElement,
  CheckboxLabelProps
>(ArkCheckbox.Label, 'label')

// -------------------- Indicator --------------------
export interface CheckboxIndicatorProps
  extends Assign<HTMLStyledProps<'div'>, ArkCheckbox.IndicatorBaseProps> {
  idleIcon?: React.ReactNode
}

export const CheckboxIndicator = withSlotContext<
  HTMLDivElement,
  CheckboxIndicatorProps
>((props) => {
  const { idleIcon = <FaCheck />, children, ...rest } = props

  return (
    <ArkCheckbox.Indicator {...rest}>
      {children ?? idleIcon}
    </ArkCheckbox.Indicator>
  )
}, 'indicator')

// -------------------- Context + Hidden Input --------------------
export const CheckboxContext = ArkCheckbox.Context
export const CheckboxHiddenInput = ArkCheckbox.HiddenInput

export interface CheckboxCheckedChangeDetails
  extends ArkCheckbox.CheckedChangeDetails {}
