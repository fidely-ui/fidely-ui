'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@snaps-ui/styled-system/jsx'
import { vstack, type VstackProperties } from '@snaps-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface VStackProps
  extends Omit<HTMLStyledProps<'div'>, keyof VstackProperties>,
    VstackProperties {}

/**
 * VStackProps component
 *
 * Provides a flexible box layout system using Panda's vstack pattern.
 */
export const VStack = forwardRef<HTMLDivElement, VStackProps>(
  function Stack(props, ref) {
    const [patternProps, restProps] = splitProps(props, ['direction'])

    const styles = vstack.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

VStack.displayName = 'VStack'
