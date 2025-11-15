'use client'

import { forwardRef } from 'react'
import { type Assign } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { type HTMLStyledProps } from '@fidely-ui/styled-system/types'
import { text, type TextVariantProps } from '@fidely-ui/styled-system/recipes'

export interface TextProps
  extends Assign<HTMLStyledProps<'p'>, TextVariantProps> {}

const StyledText = styled(ark.p, text)

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    const { className, ...rest } = props

    return <StyledText ref={ref} {...rest} />
  }
)

Text.displayName = 'Text'
