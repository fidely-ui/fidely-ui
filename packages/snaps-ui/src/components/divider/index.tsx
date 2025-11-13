'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@snaps-ui/styled-system/jsx'
import {
  divider,
  type DividerProperties,
} from '@snaps-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface DividerProps
  extends Omit<HTMLStyledProps<'div'>, keyof DividerProperties>,
    DividerProperties {}

/**
 * Center component
 *
 * Provides a flexible box layout system using Panda's center pattern.
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  function Divider(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'orientation',
      'thickness',
      'color',
    ])

    const styles = divider.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

Divider.displayName = 'Divider'
