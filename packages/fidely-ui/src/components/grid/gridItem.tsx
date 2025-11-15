'use client'

import { forwardRef } from 'react'
import { HTMLStyledProps, styled } from '@fidely-ui/styled-system/jsx'
import {
  gridItem,
  type GridItemProperties,
} from '@fidely-ui/styled-system/patterns'

import { splitProps } from '../../utils/split-props'

export interface GridItemProps
  extends Omit<HTMLStyledProps<'div'>, keyof GridItemProperties>,
    GridItemProperties {}

/**
 * GridItem component
 *
 * Provides a flexible box layout system using Panda's gridItem pattern.
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  function GridItem(props, ref) {
    const [patternProps, restProps] = splitProps(props, [
      'colSpan',
      'rowSpan',
      'rowStart',
      'rowEnd',
      'colStart',
      'colEnd',
    ])

    const styles = gridItem.raw(patternProps)

    return <styled.div ref={ref} {...styles} {...restProps} />
  }
)

GridItem.displayName = 'GridItem'
