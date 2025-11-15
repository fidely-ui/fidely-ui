'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import { flex, type FlexProperties } from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface FlexProps
  extends Omit<HTMLStyledProps<'div'>, keyof FlexProperties>,
    FlexProperties {}

/**
 * Flex component
 *
 * Provides a flexible box layout system using Panda's flex pattern.
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  function Flex(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'align',
      'justify',
      'direction',
      'wrap',
      'basis',
      'grow',
      'shrink',
      'gap',
    ])

    const styles = flex.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

Flex.displayName = 'Flex'
