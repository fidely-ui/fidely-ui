'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import {
  center,
  type CenterProperties,
} from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface CenterProps
  extends Omit<HTMLStyledProps<'div'>, keyof CenterProperties>,
    CenterProperties {}

/**
 * Center component
 *
 * Provides a flexible box layout system using Panda's center pattern.
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(
  function Center(props, ref) {
    const [patternProps, restProps] = splitProps(props, ['inline'])

    const styles = center.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

Center.displayName = 'Center'
