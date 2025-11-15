'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import { stack, type StackProperties } from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface StackProps
  extends Omit<HTMLStyledProps<'div'>, keyof StackProperties>,
    StackProperties {}

/**
 * Stack component
 *
 * Provides a flexible box layout system using Panda's stack pattern.
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  function Stack(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'align',
      'justify',
      'direction',
      'gap',
    ])

    const styles = stack.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

Stack.displayName = 'Stack'
