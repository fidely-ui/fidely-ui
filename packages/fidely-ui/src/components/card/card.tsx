'use client'

import type { Assign, HTMLArkProps, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import type { HTMLStyledProps } from '@fidely-ui/styled-system/types'
import { card, type CardVariantProps } from '@fidely-ui/styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'

// ─────────────────────────────────────────────
// Build context utilities for the `cardRecipe`
// ─────────────────────────────────────────────
const { withSlotProvider, withSlotContext } = makeStyleContext(card)

// -------------------- Root --------------------
export interface CardRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, PolymorphicProps>,
    CardVariantProps
  > {}

export const CardRoot = withSlotProvider<HTMLDivElement, CardRootProps>(
  ark.div,
  'root'
)

// -------------------- Body --------------------
export interface CardBodyProps
  extends Assign<HTMLStyledProps<'div'>, PolymorphicProps> {}

export const CardBody = withSlotContext<HTMLDivElement, CardBodyProps>(
  ark.div,
  'body'
)

// -------------------- Header --------------------
export interface CardHeaderProps
  extends Assign<HTMLStyledProps<'div'>, PolymorphicProps> {}

export const CardHeader = withSlotContext<HTMLDivElement, CardHeaderProps>(
  ark.div,
  'header'
)

// -------------------- Title --------------------
export interface CardTitleProps
  extends Assign<HTMLStyledProps<'h4'>, HTMLArkProps<'h4'>> {}

export const CardTitle = withSlotContext<HTMLHeadingElement, CardTitleProps>(
  ark.h4,
  'title'
)

// -------------------- Description --------------------
export interface CardDescriptionProps
  extends Assign<HTMLStyledProps<'div'>, PolymorphicProps> {}

export const CardDescription = withSlotContext<
  HTMLDivElement,
  CardDescriptionProps
>(ark.div, 'description')

// -------------------- Footer --------------------
export interface CardFooterProps
  extends Assign<HTMLStyledProps<'div'>, PolymorphicProps> {}

export const CardFooter = withSlotContext<HTMLDivElement, CardFooterProps>(
  ark.div,
  'footer'
)
