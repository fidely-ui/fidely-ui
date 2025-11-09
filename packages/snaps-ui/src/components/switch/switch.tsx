'use client'

import type { Assign } from '@ark-ui/react'
import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import type { HTMLStyledProps } from '@snaps-ui/styled-system/types'
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from '@snaps-ui/styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(switchRecipe)

// -------------------- Root Provider --------------------
export interface SwitchRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'label'>, ArkSwitch.RootProviderBaseProps>,
    SwitchRecipeVariantProps
  > {}

export const SwitchRootProvider = withSlotProvider<
  HTMLLabelElement,
  SwitchRootProviderProps
>(ArkSwitch.RootProvider, 'root')

// -------------------- Root --------------------
export interface SwitchRootProps
  extends Assign<
    Assign<HTMLStyledProps<'label'>, ArkSwitch.RootBaseProps>,
    SwitchRecipeVariantProps
  > {}

export const SwitchRoot = withSlotProvider<HTMLLabelElement, SwitchRootProps>(
  ArkSwitch.Root,
  'root'
)

// -------------------- Control --------------------
export interface SwitchControlProps
  extends Assign<HTMLStyledProps<'span'>, ArkSwitch.ControlBaseProps> {}

export const SwitchControl = withSlotContext<
  HTMLSpanElement,
  SwitchControlProps
>(ArkSwitch.Control, 'control')

// -------------------- Thumb --------------------
export interface SwitchThumbProps
  extends Assign<HTMLStyledProps<'span'>, ArkSwitch.ThumbBaseProps> {}

export const SwitchThumb = withSlotContext<HTMLSpanElement, SwitchThumbProps>(
  ArkSwitch.Thumb,
  'thumb'
)

// -------------------- Label --------------------
export interface SwitchLabelProps
  extends Assign<HTMLStyledProps<'span'>, ArkSwitch.LabelBaseProps> {}

export const SwitchLabel = withSlotContext<HTMLSpanElement, SwitchLabelProps>(
  ArkSwitch.Label,
  'label'
)

// -------------------- Context + Hidden Input --------------------
export const SwitchContext = ArkSwitch.Context
export const SwitchHiddenInput = ArkSwitch.HiddenInput

export interface SwitchCheckedChangeDetails
  extends ArkSwitch.CheckedChangeDetails {}
