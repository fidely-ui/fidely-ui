'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import {
  type ComponentProps,
  SystemStyleObject,
} from '@snaps-ui/styled-system/types'

const StyledImg = styled(ark.img)

interface ImageOptions {
  /**
   * How the image should fit within its bounds.
   * Maps to CSS `object-fit`.
   */
  fit?: SystemStyleObject['objectFit'] | undefined

  /**
   * How to align the image within its bounds.
   * Maps to CSS `object-position`.
   */
  align?: SystemStyleObject['objectPosition'] | undefined
}

export interface ImageProps
  extends ComponentProps<typeof StyledImg>,
    ImageOptions {}

/**
 * Snaps UI Image component
 * Supports `fit` and `align`
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    const { fit = 'cover', align, ...rest } = props

    return (
      <StyledImg ref={ref} objectFit={fit} objectPosition={align} {...rest} />
    )
  }
)

Image.displayName = 'Image'
