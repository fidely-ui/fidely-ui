'use client'

import type { Assign } from '@ark-ui/react'
import { PasswordInput as ArkPasswordInput } from '@ark-ui/react/password-input'
import {
  passwordInput,
  PasswordInputVariantProps,
} from '@fidely-ui/styled-system/recipes'
import { HTMLStyledProps } from '@fidely-ui/styled-system/jsx'

import { makeStyleContext } from '../../system/make-style-context'
import { FiEyeIcon } from '../icons/FiEyeIcon'
import { FiEyeSlashIcon } from '../icons/FiEyeSlashIcon'

const { withSlotProvider, withSlotContext } = makeStyleContext(passwordInput)

// -------------------- RootProvider --------------------
export interface PasswordInputRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkPasswordInput.RootProviderBaseProps>,
    PasswordInputVariantProps
  > {}

export const PasswordInputRootProvider = withSlotProvider<
  HTMLDivElement,
  PasswordInputRootProviderProps
>(ArkPasswordInput.RootProvider, 'root')

// -------------------- Root --------------------
export interface PasswordInputRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkPasswordInput.RootBaseProps>,
    PasswordInputVariantProps
  > {}

export const PasswordInputRoot = withSlotProvider<
  HTMLDivElement,
  PasswordInputRootProps
>(ArkPasswordInput.Root, 'root')

// -------------------- Input --------------------
export interface PasswordInputInputProps
  extends Assign<HTMLStyledProps<'input'>, ArkPasswordInput.InputBaseProps> {}

export const PasswordInputInput = withSlotContext<
  HTMLInputElement,
  PasswordInputInputProps
>(ArkPasswordInput.Input, 'input')

// -------------------- Label --------------------
export interface PasswordInputLabelProps
  extends Assign<HTMLStyledProps<'label'>, ArkPasswordInput.LabelBaseProps> {}

export const PasswordInputLabel = withSlotContext<
  HTMLLabelElement,
  PasswordInputLabelProps
>(ArkPasswordInput.Label, 'label')

// -------------------- Control --------------------
export interface PasswordInputControlProps
  extends Assign<HTMLStyledProps<'div'>, ArkPasswordInput.ControlBaseProps> {}

export const PasswordInputControl = withSlotContext<
  HTMLDivElement,
  PasswordInputControlProps
>(ArkPasswordInput.Control, 'control')

// -------------------- Indicator --------------------
export interface PasswordInputIndicatorProps
  extends Assign<HTMLStyledProps<'span'>, ArkPasswordInput.IndicatorBaseProps> {
  fallbackIcon?: React.ReactNode
  idleIcon?: React.ReactNode
}

export const PasswordInputIndicator = withSlotContext<
  HTMLSpanElement,
  PasswordInputIndicatorProps
>((props) => {
  const {
    fallbackIcon = <FiEyeSlashIcon />,
    idleIcon = <FiEyeIcon />,
    children,
    ...rest
  } = props

  return (
    <ArkPasswordInput.Indicator
      {...rest}
      fallback={props.fallback ?? fallbackIcon}
    >
      {children ?? idleIcon}
    </ArkPasswordInput.Indicator>
  )
}, 'indicator')

// -------------------- VisibilityTrigger --------------------
export interface PasswordInputVisibilityTriggerProps
  extends Assign<
    HTMLStyledProps<'button'>,
    ArkPasswordInput.VisibilityTriggerBaseProps
  > {}

export const PasswordInputVisibilityTrigger = withSlotContext<
  HTMLButtonElement,
  PasswordInputVisibilityTriggerProps
>(ArkPasswordInput.VisibilityTrigger, 'visibilityTrigger')

export const PasswordInputContext = ArkPasswordInput.Context
