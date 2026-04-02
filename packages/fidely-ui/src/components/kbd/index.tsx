'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'
import { ComponentProps } from 'styled-system/types'
import { kbd } from 'styled-system/recipes'

export const Kbd = styled(ark.kbd, kbd)

export type KbdProps = ComponentProps<typeof Kbd>
