'use client'

import { type Assign } from '@ark-ui/react'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import {
  dialog,
  type DialogVariantProps,
} from '@snaps-ui/styled-system/recipes'
import { type HTMLStyledProps } from '@snaps-ui/styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotRootProvider, withSlotContext } = makeStyleContext(dialog)

// -------------------- RootProvider --------------------
export interface DialogRootProviderProps
  extends Assign<ArkDialog.RootProviderProps, DialogVariantProps> {}

export const DialogRootProvider = withSlotRootProvider<DialogRootProviderProps>(
  ArkDialog.RootProvider
)

// -------------------- Root --------------------
export interface DialogRootProps
  extends Assign<ArkDialog.RootProps, DialogVariantProps> {}

export const DialogRoot = withSlotRootProvider<DialogRootProps>(ArkDialog.Root)

// -------------------- Content --------------------
export interface DialogContentProps
  extends Assign<HTMLStyledProps<'div'>, ArkDialog.ContentBaseProps> {}

export const DialogContent = withSlotContext<
  HTMLDivElement,
  DialogContentProps
>(ArkDialog.Content, 'content')

// -------------------- Description --------------------
export interface DialogDescriptionProps
  extends Assign<HTMLStyledProps<'div'>, ArkDialog.DescriptionBaseProps> {}

export const DialogDescription = withSlotContext<
  HTMLDivElement,
  DialogDescriptionProps
>(ArkDialog.Description, 'description')

// -------------------- Title --------------------
export interface DialogTitleProps
  extends Assign<HTMLStyledProps<'h2'>, ArkDialog.TitleBaseProps> {}

export const DialogTitle = withSlotContext<
  HTMLHeadingElement,
  DialogTitleProps
>(ArkDialog.Title, 'title')

// -------------------- CloseTrigger --------------------
export interface DialogCloseTriggerProps
  extends Assign<HTMLStyledProps<'button'>, ArkDialog.CloseTriggerBaseProps> {}

export const DialogCloseTrigger = withSlotContext<
  HTMLButtonElement,
  DialogCloseTriggerProps
>(ArkDialog.CloseTrigger, 'closeTrigger')

// -------------------- Trigger --------------------
export interface DialogTriggerProps
  extends Assign<HTMLStyledProps<'button'>, ArkDialog.TriggerBaseProps> {}

export const DialogTrigger = withSlotContext<
  HTMLButtonElement,
  DialogTriggerProps
>(ArkDialog.Trigger, 'trigger')

// -------------------- Positioner --------------------
export interface DialogPositionerProps
  extends Assign<HTMLStyledProps<'div'>, ArkDialog.PositionerBaseProps> {}

export const DialogPositioner = withSlotContext<
  HTMLDivElement,
  DialogPositionerProps
>(ArkDialog.Positioner, 'positioner')

// -------------------- Backdrop --------------------
export interface DialogBackdropProps
  extends Assign<HTMLStyledProps<'div'>, ArkDialog.BackdropBaseProps> {}

export const DialogBackdrop = withSlotContext<
  HTMLDivElement,
  DialogBackdropProps
>(ArkDialog.Backdrop, 'backdrop')

// -------------------- Body --------------------
export interface DialogBodyProps extends HTMLStyledProps<'div'> {}

export const DialogBody = withSlotContext<HTMLDivElement, DialogBodyProps>(
  'div',
  'body'
)

// -------------------- Header --------------------
export interface DialogHeaderProps extends HTMLStyledProps<'div'> {}

export const DialogHeader = withSlotContext<HTMLDivElement, DialogHeaderProps>(
  'div',
  'header'
)

// -------------------- Footer --------------------
export interface DialogFooterProps extends HTMLStyledProps<'div'> {}

export const DialogFooter = withSlotContext<HTMLDivElement, DialogFooterProps>(
  'div',
  'footer'
)

// -------------------- Context --------------------
export const DialogContext = ArkDialog.Context

export interface DialogOpenChangeDetails extends ArkDialog.OpenChangeDetails {}
