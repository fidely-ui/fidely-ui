'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@snaps-ui/styled-system/jsx'
import { grid, type GridProperties } from '@snaps-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface GridProps
  extends Omit<HTMLStyledProps<'div'>, keyof GridProperties>,
    GridProperties {}

/**
 * Grid component
 *
 * Provides a flexible box layout system using Panda's grid pattern.
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  function Grid(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'minChildWidth',
      'rowGap',
      'columnGap',
      'columns',
      'gap',
    ])

    const styles = grid.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

Grid.displayName = 'Grid'
