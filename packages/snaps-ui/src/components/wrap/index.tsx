'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@snaps-ui/styled-system/jsx'
import { wrap, type WrapProperties } from '@snaps-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface WrapProps
  extends Omit<HTMLStyledProps<'div'>, keyof WrapProperties>,
    WrapProperties {}

/**
 * Wrap component
 *
 * Provides a flexible box layout system using Panda's wrap pattern.
 */
export const Wrap = forwardRef<HTMLDivElement, WrapProps>(
  function Wrap(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'align',
      'justify',
      'gap',
      'columnGap',
      'rowGap',
    ])

    const styles = wrap.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

Wrap.displayName = 'Wrap'
