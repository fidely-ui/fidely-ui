'use client'

import * as React from 'react'
import type { Assign } from '@ark-ui/react'
import { Clipboard as ArkClipboard } from '@ark-ui/react/clipboard'
import type { HTMLStyledProps } from '@fidely-ui/styled-system/types'
import {
  clipboard,
  type ClipboardVariantProps,
} from '@fidely-ui/styled-system/recipes'

import { FiCheck } from '../icons/FiCheck'
import { FiCopy } from '../icons/FiCopy'
import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(clipboard)

// -------------------- RootProvider --------------------
export interface ClipboardRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkClipboard.RootProviderBaseProps>,
    ClipboardVariantProps
  > {}

export const ClipboardRootProvider = withSlotProvider<
  HTMLDivElement,
  ClipboardRootProviderProps
>(ArkClipboard.RootProvider, 'root')

// -------------------- Root --------------------
export interface ClipboardRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkClipboard.RootBaseProps>,
    ClipboardVariantProps
  > {}

export const ClipboardRoot = withSlotProvider<
  HTMLDivElement,
  ClipboardRootProps
>(ArkClipboard.Root, 'root')

// -------------------- Control --------------------
export interface ClipboardControlProps
  extends Assign<HTMLStyledProps<'div'>, ArkClipboard.ControlBaseProps> {}

export const ClipboardControl = withSlotContext<
  HTMLDivElement,
  ClipboardControlProps
>(ArkClipboard.Control, 'control')

// -------------------- Trigger --------------------
export interface ClipboardTriggerProps
  extends Assign<HTMLStyledProps<'button'>, ArkClipboard.TriggerBaseProps> {}

export const ClipboardTrigger = withSlotContext<
  HTMLDivElement,
  ClipboardTriggerProps
>(ArkClipboard.Trigger, 'trigger')

// -------------------- Indicator --------------------
export interface ClipboardIndicatorProps
  extends Assign<HTMLStyledProps<'div'>, ArkClipboard.IndicatorBaseProps> {
  copiedIcon?: React.ReactNode
  idleIcon?: React.ReactNode
}

export const ClipboardIndicator = withSlotContext<
  HTMLDivElement,
  ClipboardIndicatorProps
>((props) => {
  const {
    copiedIcon = <FiCheck />,
    idleIcon = <FiCopy />,
    children,
    ...rest
  } = props

  return (
    <ArkClipboard.Indicator {...rest} copied={props.copied ?? copiedIcon}>
      {children ?? idleIcon}
    </ArkClipboard.Indicator>
  )
}, 'indicator')

// -------------------- Input --------------------
export interface ClipboardInputProps
  extends Assign<HTMLStyledProps<'input'>, ArkClipboard.InputBaseProps> {}

export const ClipboardInput = withSlotContext<
  HTMLDivElement,
  ClipboardInputProps
>(ArkClipboard.Input, 'input')

// -------------------- Label --------------------
export interface ClipboardLabelProps
  extends Assign<HTMLStyledProps<'label'>, ArkClipboard.LabelBaseProps> {}

export const ClipboardLabel = withSlotContext<
  HTMLDivElement,
  ClipboardLabelProps
>(ArkClipboard.Label, 'label')

export const ClipboardContext = ArkClipboard.Context

export interface ClipboardCopyStatusDetails
  extends ArkClipboard.CopyStatusDetails {}

// -------------------- CopyText --------------------
export const ClipboardStatus = React.forwardRef<
  HTMLDivElement,
  ClipboardIndicatorProps
>(function ClipboardStatus(props, ref) {
  return (
    <ClipboardIndicator copied="Copied" ref={ref} {...props}>
      Copy
    </ClipboardIndicator>
  )
})
