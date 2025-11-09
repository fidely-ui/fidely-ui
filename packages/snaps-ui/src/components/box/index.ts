'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { type HTMLStyledProps } from '@snaps-ui/styled-system/types'

export interface BoxProps extends HTMLStyledProps<'div'> {}

export const Box = styled(ark.div)
