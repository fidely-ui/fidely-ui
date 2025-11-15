'use client'

import type { Assign } from '@ark-ui/react'
import { PinInput as ArkPinInput } from '@ark-ui/react/pin-input'
import {
  pinInput,
  type PinInputVariantProps,
} from '@fidely-ui/styled-system/recipes'
import { HTMLStyledProps } from '@fidely-ui/styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(pinInput)

export interface PinInputRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkPinInput.RootProviderBaseProps>,
    PinInputVariantProps
  > {}

export const PinInputRootProvider = withSlotProvider<
  HTMLDivElement,
  PinInputRootProviderProps
>(ArkPinInput.RootProvider, 'root')

export interface PinInputRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkPinInput.RootBaseProps>,
    PinInputVariantProps
  > {}

export const PinInputRoot = withSlotProvider<HTMLDivElement, PinInputRootProps>(
  ArkPinInput.Root,
  'root',
  { forwardProps: ['mask'] }
)

export interface PinInputLabelProps
  extends Assign<HTMLStyledProps<'label'>, ArkPinInput.LabelBaseProps> {}

export const PinInputLabel = withSlotContext<
  HTMLLabelElement,
  PinInputLabelProps
>(ArkPinInput.Label, 'label')

export interface PinInputControlProps
  extends Assign<HTMLStyledProps<'div'>, ArkPinInput.ControlBaseProps> {}

export const PinInputControl = withSlotContext<
  HTMLDivElement,
  PinInputControlProps
>(ArkPinInput.Control, 'control')

export interface PinInputInputProps
  extends Assign<HTMLStyledProps<'input'>, ArkPinInput.InputBaseProps> {}

export const PinInputInput = withSlotContext<
  HTMLInputElement,
  PinInputInputProps
>(ArkPinInput.Input, 'input')

export const PinInputHiddenInput = ArkPinInput.HiddenInput
export const PinInputContext = ArkPinInput.Context

export interface PinInputValueChangeDetails
  extends ArkPinInput.ValueChangeDetails {}
