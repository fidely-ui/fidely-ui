'use client'

import type { Assign } from '@ark-ui/react'
import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'
import {
  accordion,
  type AccordionVariantProps,
} from '@snaps-ui/styled-system/recipes'
import type { HTMLStyledProps } from '@snaps-ui/styled-system/types'

import { makeStyleContext } from '../../system/make-style-context'

const { withSlotProvider, withSlotContext } = makeStyleContext(accordion)

// -------------------- RootProvider --------------------
export interface AccordionRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkAccordion.RootProviderBaseProps>,
    AccordionVariantProps
  > {}

export const AccordionRootProvider = withSlotProvider<
  HTMLDivElement,
  AccordionRootProviderProps
>(ArkAccordion.RootProvider, 'root')

// -------------------- Root --------------------
export interface AccordionRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkAccordion.RootBaseProps>,
    AccordionVariantProps
  > {}

export const AccordionRoot = withSlotProvider<
  HTMLDivElement,
  AccordionRootProps
>(ArkAccordion.Root, 'root')

// -------------------- Item --------------------
export interface AccordionItemProps
  extends Assign<HTMLStyledProps<'div'>, ArkAccordion.ItemBaseProps> {}

export const AccordionItem = withSlotContext<
  HTMLDivElement,
  AccordionItemProps
>(ArkAccordion.Item, 'item')

// -------------------- Content --------------------
export interface AccordionItemContentProps
  extends Assign<HTMLStyledProps<'div'>, ArkAccordion.ItemContentBaseProps> {}

export const AccordionItemContent = withSlotContext<
  HTMLDivElement,
  AccordionItemContentProps
>(ArkAccordion.ItemContent, 'itemContent')

// -------------------- Trigger --------------------
export interface AccordionItemTriggerProps
  extends Assign<
    HTMLStyledProps<'button'>,
    ArkAccordion.ItemTriggerBaseProps
  > {}

export const AccordionItemTrigger = withSlotContext<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(ArkAccordion.ItemTrigger, 'itemTrigger')

// -------------------- Indicator --------------------
export interface AccordionItemIndicatorProps
  extends Assign<
    HTMLStyledProps<'button'>,
    ArkAccordion.ItemIndicatorBaseProps
  > {}

export const AccordionItemIndicator = withSlotContext<
  HTMLDivElement,
  AccordionItemIndicatorProps
>(ArkAccordion.ItemIndicator, 'itemIndicator')

// -------------------- Context --------------------
export const AccordionContext = ArkAccordion.Context
